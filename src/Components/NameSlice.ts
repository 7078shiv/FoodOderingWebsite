// schema is only storing the name

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Iname{
    name:string
}
// we need to create some setters 

const NameSlice=createSlice({
    name:"NameSlice",
    initialState:{name:""},
    reducers:{
        setName(state:Iname,newName:PayloadAction<string>){
            state.name=newName.payload;
        }
    }
});

export const {setName}=NameSlice.actions;
export default NameSlice.reducer;