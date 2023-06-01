import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Ihotel{
    name:string;
    cuisines:string;
    featured_image:string;
    id:string;
}

const HotelSlice=createSlice({
    // it contains first one is the name
    name:"HotelSlice",
    // sec argument is initial state
    initialState:Array<Ihotel>(),
    reducers:{
        setHotels(_state:Ihotel[],payload:PayloadAction<Ihotel[]>){
            return payload.payload;
        }
    }
});

export  const {setHotels}=HotelSlice.actions;
export default HotelSlice.reducer;
