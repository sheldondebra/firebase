import { createUserWithEmailAndPassword } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebaseapp"
const signIn = async (email, password) => {
  try {

    const userCredentials = await signInWithEmailAndPassword(auth,email,password);
    console.log(userCredentials)
    
    

    userCredentials ? console.log("User Logged In Successful") : console.log("User Logged In Failed")

  

    
  } catch (e) {
    console.log(e)
  }
} 


const signUp = async (email  ,password) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth,email,password);
    console.log(userCredentials)

  } catch (e) {
    console.log(e)

  }
}



export {signIn, signUp} ;