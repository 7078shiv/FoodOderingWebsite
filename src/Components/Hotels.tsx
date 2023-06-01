import { useEffect } from "react"
import { Ihotel, setHotels } from "./HotelSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import Hotel from "./Hotel";
import { Grid, makeStyles } from "@material-ui/core";
import TopBar from "./TopBar";

const UseStyles=makeStyles({
    grid:{
        margin:"10px",
        paddingTop:"40px"
    }
})

export default  function Hotels(){
    const style=UseStyles();
    const dispatch=useDispatch();
    const data=useSelector((x:AppState)=>x.hotelsSlice);
    useEffect(()=>{
        async function Api(){
        const response= await fetch("/Hotel.json");
        const json:{restaurant:Ihotel}[]=await response.json();
        dispatch(setHotels(json.map(x=>x.restaurant)));
        }
        Api();
    },[dispatch])
    function renderHotel(hotel:Ihotel,index:number){
        return(
            <Grid item key={index}>
                <Hotel {...hotel}></Hotel>
            </Grid>
        )
    }
    return(
        <>
        <TopBar/>
        <Grid className={style.grid} container spacing={8}>
        {data.map(renderHotel)}
        </Grid>
        </>
    )
}