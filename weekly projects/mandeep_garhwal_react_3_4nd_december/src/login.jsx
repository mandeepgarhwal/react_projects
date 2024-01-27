import React from 'react'
import { usercontext } from './Mycontext'
import { useContext, useState} from 'react'
import {Navigate} from "react-router-dom"


export default function Login() {
    const context = useContext (usercontext)
    const [newname, setnewname] = useState()
    const [newemail, setnewemail] = useState()
    function login(){
        if (context.user.accesstoken != " ") {
            context.setuser({...context.user, "name" : newname, "email": newemail})
            alert("You are logged in");
            <Navigate to = "/profile"/>}else{
                alert("Please signup");
                <Navigate to = "/signup" replace= {true}/> 
            }
    }
  return (
    <>
    <form action="" style={{display : "flex", justifyContent : "center", marginTop : "300px", flexDirection : "column"}}>
    <h2>Please enter your details to log in</h2>
    <h2>Name</h2>
    <input type="text" style={{width : "400px", height : "35px" }} placeholder='Enter your name.' onChange={(e) => setnewname(e.target.value)}/>
    <h2>Email</h2>
    <input type="text" style={{width : "400px", height : "35px" }} placeholder='Enter your Email' onChange={(e) => setnewemail(e.target.value)}/>
    <button type='sumbit'  style={{width: "300px", backgroundColor : "gray", fontSize : "25px"}} onClick={login}>Log In</button>
    </form>
    </>
  )
}
