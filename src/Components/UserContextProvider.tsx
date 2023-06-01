import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged,User } from 'firebase/auth';

import {auth} from "../FirebaseSetUp"


export const UserContext=createContext<User | null>(null);

interface IProps{
    children:React.ReactNode;
}


/*
app.tsx
<UserContextProvider>
--- routes
--- routes
*/

export default function UserContextProvider(props:IProps){
    const[user,setUser]=useState<User|null>(null);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
    })
    return () => unsubscribe();
},[])
return(
    <UserContext.Provider value={user}>
        {props.children}
    </UserContext.Provider>
)
}


