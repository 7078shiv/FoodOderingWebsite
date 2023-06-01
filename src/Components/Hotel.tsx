import { Card, CardContent, CardMedia, Typography, makeStyles } from "@material-ui/core"
import { Ihotel } from "./HotelSlice";
import "../App.css"
const useStyle=makeStyles({
    image:{
        height:"300px",
        width:"374px"
    }

})
export default function Hotel(props:Ihotel){
    const style=useStyle();
    return(
        <Card>
            <CardMedia className={style.image} image={props.featured_image} 
            ></CardMedia>
            <CardContent>
                <Typography className="cuisines">{props.name}</Typography>
                <Typography className="cuisines">{props.cuisines}</Typography>
            </CardContent>
        </Card>
    )
}