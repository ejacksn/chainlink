import { doc, setDoc, getDoc, getDocs, collection, query, where } from "firebase/firestore"
import { auth, database } from "./Firebase"
import { useStateContext } from "@/context/StateContext"



export const createBoard = async (boardId, boardName, boardDescription, userId) => {
    if (!auth.currentUser) { //no user = no creation >:(
        console.error("User is not authenticated");
        return;
    }

}
