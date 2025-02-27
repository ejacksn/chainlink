import { auth } from "./Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail, updateProfile , reload} from "firebase/auth";
 


export const registerUser = async (email, password, username, setUser) => {
    
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password); //create user using the email and password
        const user = userCredential.user;
        
        await updateProfile(user, { //update the user profile with the username
            displayName: username 
        }); 
        await user.reload(); //refreshes the user object with the new dispalyname so when i set user it will have the actual display name in the object

        setUser(user); //set the user in stateContext
        return user; //return user object
    }
    catch(err){
        console.log('Signup Error:', err)
        throw err; //throw error to be caught by calling sign up button function so that i can display the error to the user
    }
}

