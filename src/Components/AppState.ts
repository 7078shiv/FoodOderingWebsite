import { combineReducers,createStore } from "@reduxjs/toolkit";
import NameSlice from "./NameSlice"
import { devToolsEnhancer } from "redux-devtools-extension";
import HotelSlice from "./HotelSlice";

// create the database
export const rootReducer=combineReducers({
    nameSlice:NameSlice,
    hotelsSlice:HotelSlice
});
// configure it
// alis of the schema of the root reducer

// AppState.nameSlice.name // to access the coloumn
export type AppState=ReturnType<typeof rootReducer>;

// it will create the database
export const configureStore =()=> createStore(rootReducer,{},devToolsEnhancer({}));