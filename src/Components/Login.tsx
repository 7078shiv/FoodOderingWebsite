import { useNavigate } from "react-router-dom";
import Authentication, { IUser } from "./Authentication";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseSetUp";

export default function Login(){
    const navigate=useNavigate();
    async function onSubmitClick(data:IUser){
        try {
            const cred = await signInWithEmailAndPassword(
            auth,
            data.email,
            data.password
            );
            navigate('/')
            console.log(cred);
            return "";
          } catch (error:any) {
            console.log(error.message);
            return "Invalid Email or password"
          }
    }
    return(
        
        <Authentication
        isUserNameVisible={false}
        isSignUpVisible={true}
        isLogInVisible={false}
        onSubmitClick1={onSubmitClick}
        title="Welcome to the Login Page"/>
        
    )
}



