
import Authentication, { IUser } from "./Authentication";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../FirebaseSetUp"
import { useNavigate } from "react-router-dom";
//import 'firebase/auth'

export default function SignUp(){
    const navigate=useNavigate();
    async function onSubmitClick(data:IUser):Promise<string>{
        try {
            const cred = await createUserWithEmailAndPassword(
              auth,
              data.email,
                data.password
               
            );
            // cred.user.photoURL
            updateProfile(cred.user,{displayName:data.name})
            navigate('/');
            console.log(cred);
            return "";
          } catch (error:any) {
            console.log(error.message);
            return "Email is already register with us ,Please login "
          }
    }
    return(
        <>
        <Authentication title="Welcome to SignUp Page"
        isUserNameVisible={true} isSignUpVisible={false}
        isLogInVisible={true}
        onSubmitClick1={onSubmitClick}
        />
        </>
    )
}