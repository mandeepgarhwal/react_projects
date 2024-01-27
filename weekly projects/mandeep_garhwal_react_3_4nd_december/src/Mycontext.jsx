import { createContext, useState } from "react";
import React from 'react'






const usercontext = createContext()
function UserState1  (props)  {
    const [user, setuser] = useState({"name": " ", "email": " ", "accesstoken" : " "})
    return (
    <usercontext.Provider value={{user,setuser}}> 
    {props.children}
    </usercontext.Provider>)
}

export {UserState1, usercontext}
