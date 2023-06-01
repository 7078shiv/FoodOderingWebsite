import { AppBar, Button, InputBase, makeStyles } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContextProvider";

const useStyles=makeStyles({
   container: {
        display:"flex",
        color:"white",
        gap:"10px",
        margin:"10px"
    },
    searchTextBox:{
        color:"white"
    },
    button:{
        color:"white"
    },
    search:{
        display:"flex",
        alignItems:"center",
        backgroundColor:"#ffffff26",
        flex:1,
        gap:"5px",
        color:"while",
        padding:"0 10px"
    }
}
)
export default function TopBar(){
    const style=useStyles();
    const navigate=useNavigate();
    const user=useContext(UserContext);
    return(
        
        <AppBar >
            <div className={style.container}>
            <div className={style.search}>
            <SearchIcon/>
            <InputBase className={style.searchTextBox}/>
            </div>
           {!user && < Button onClick={()=>navigate("/login")} className={style.button}>Login</Button>}
           {  !user && <Button onClick={()=>navigate("/signup")}className={style.button}>SignUP </Button>}
          {user &&  <Button  className={style.button} onClick={()=>navigate("/profile")}>Profile</Button>}
            </div>
        </AppBar>
        
    )
}