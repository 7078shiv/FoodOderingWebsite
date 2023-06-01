import { useContext, useState } from "react";
import { UserContext } from "./UserContextProvider";
import { Fab, Typography, makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import {auth} from "../FirebaseSetUp"
import LoadingSpinner from "./LoadingSpinner";


const useStyles=makeStyles({
bigContainer:{
    width:"100%",
    height:"100%",
    display:"flex"
    ,
    alignItems:"center",
    justifyContent:"center"
},
container:
{
    display:"flex",
    flexDirection:"column",
    gap:"10px"
}
,
button:{
    display:"flex",
    gap:"10px"
}

})

export default function Profile(){
    const navigate=useNavigate();
    const styles=useStyles();
    const user=useContext(UserContext);
    const [showloading,setshowloading]=useState(false);
    async function signOut(){
    try{
        setshowloading(true);
        await auth.signOut();
        navigate("/")
    }
    catch(error:any){
        console.log(error);
    }
    finally{
        setshowloading(false);
    }
}

    if(user){
        return(
            <>
            <div className={styles.bigContainer}>
                <div className={styles.container}>
            <Typography variant="h5">Welcome to the ProfilePage</Typography>
            <Typography variant="h5">{user.displayName}</Typography>
            <Typography variant="h5">{user.email}</Typography>
            <Typography variant="h5">{user.uid}</Typography>
            <div className={styles.button}>
            <Fab color="primary" variant="extended" onClick={()=>signOut()}>SignOut</Fab>

           <Fab color="secondary" variant="extended" onClick={()=>navigate("/")}>Home</Fab>
           </div>
                </div>
            </div>
            {showloading && <LoadingSpinner/>}
            </>
        )
    }
    return <></>
}