import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate=useNavigate();
    return(
        <>
        This is home page
        <button onClick={()=>navigate("./Hotels")}>Hotels</button>
        <button onClick={()=>navigate("./MaterialUIExample")}>MaterialUIExample</button>
        </>
    )
}