import { makeStyles } from "@material-ui/core";
import { CircularProgress } from "@mui/material";


const usestyles=makeStyles({
    container:{
        width:"100%",
        height:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        top:"0",

    }
});
export default function LoadingSpinner(){
    const styles=usestyles();
    return (
        <div className={styles.container}>
            <CircularProgress/>
        </div>
    )
}