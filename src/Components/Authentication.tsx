 import { makeStyles } from "@material-ui/core/styles";
import {Fab,TextField,Typography} from "@mui/material";
import "../App.css"
  import {useForm}  from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
interface IAuthenticationProps{
    
    title:string;
    isLogInVisible:boolean;
    isSignUpVisible:boolean;
    isUserNameVisible:boolean;
     onSubmitClick1:(user:IUser)=>Promise<string>;
}
const useStyle=makeStyles({
    bigContainer:{
        width:"100%",
        height:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
    ,
    smallContainer:{
        display:"flex",
        flexDirection:"column",
        gap:"10px",
        width:"70%"
    }
    ,
    button:{
        display:"flex",
        justifyContent:"flex-end",
        gap:"10px"
    },
    message:{
        color:"red",

    }
});

export interface IUser{
    name:string;
    email:string;
    password:string
}

export default function Authentication(props:IAuthenticationProps){
 const style=useStyle();
 const navigate=useNavigate();
 const[message,setmessage]=useState<string>('');

  async function onSubmitClick1(data:IUser){
   const message= await props.onSubmitClick1(data);
   if(message){
    setmessage(message);
   }
   else{
    navigate("/");
   }
}


 const {register,handleSubmit,reset,formState:{errors
 }}=useForm<IUser>();

 
return(
<form onSubmit={handleSubmit(onSubmitClick1)} className={style.bigContainer}>

<div className={style.smallContainer}>

<Typography variant="h5">{props.title}</Typography>
 {/* Username */}
 {props.isUserNameVisible &&
<TextField  placeholder="Username" 
 required 
 
error={errors?.name?.message !== undefined}
helperText={errors?.name?.message}
{...register("name",{
    required:true,
    minLength: {value:4,message:"username should be of 4 length"}
})}></TextField>
}
 {/* Email */}
 
<TextField type="email" placeholder="Email" required 

error={errors?.email?.message !== undefined}
helperText={errors?.email?.message}

{...register("email",{
    required:true,
    
    pattern:{value:/\w+@\w+\.\w+/,message:"email is incorrect"}
})}></TextField>

 {/* password */}
<TextField type="password" placeholder="Password" required

error={errors?.password?.message !== undefined}
helperText={errors?.password?.message}

{...register("password",
{
required:true,
minLength:{value:6,message:"password should be of length 6"}
}
)}></TextField>

 {/* submit */}
 <div className={style.button}>
<Fab color="primary" variant="extended" type="submit">Submit</Fab>
 {/* reset */}
<Fab color="secondary" variant="extended" onClick={()=>reset()}>Reset</Fab>
 {/* go to login */}
 {props.isLogInVisible &&
<Fab variant="extended" onClick={()=>navigate
("/login")}>Login</Fab>
}
 {/* go to signup */}
{ props.isSignUpVisible &&
 <Fab variant="extended" onClick={()=>navigate("/signup")}>SignUp</Fab>
}
 {/* go to homepage */}
<Fab variant="extended" onClick={()=>navigate("/")}>Home</Fab>
</div> 
{message && <Typography className={style.message} variant="h5">{message}</Typography>}
</div>

</form>
    );
}


