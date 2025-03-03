import { doc, setDoc, getDoc, getDocs,addDoc, collection, query, where } from "firebase/firestore"
import { auth, database } from "./Firebase"

import { Timestamp } from "firebase/firestore"



export const createBoard = async (title, links, user) => {
    if (!auth.currentUser) { //no user = no creation >:(
        console.error("User is not authenticated");
        return;
    }

    try{
        const boardData={
            title: title,
            links: links,
            ownerId: user.uid,
            ownerName: user.displayName,
            creationTime: Timestamp.now(), //creation time using firebase timestamp
            views: 0


        }
        const boardRef = await addDoc(collection(database, "boards"), boardData); //create new board document in boards collection
        console.log("Board created successfully");
        return boardRef.id; //return id of created board so i can use it for sharable link
        
    }
    catch(error){
        console.error("Error creating board", error);
        throw error; //throw to be caught by calling function
    }

}

export const getBoard = async (boardId) => {
    if (!boardId) {
        console.error("No board id provided");
        return;
    }

    try{
        const boardRef = doc(database, "boards", boardId); //get reference to board document
        const boardSnap = await getDoc(boardRef); //get board document
        if (boardSnap.exists()) {
            return boardSnap.data(); //return data of board document
        } else {
            console.error("No such document");
        }

        if (boardSnap.exists()){
            return boardSnap.data();
        }
        else{
            console.error("No such document");
        }
    }
    catch(error){
        console.error("Error getting board", error);
        return null;
    }



}
