import React from 'react'
// import bootstrap from "bootstrap"
import { usercontext } from './Mycontext'
import { useContext } from 'react'
import { Navigate, Link } from 'react-router-dom'

export default function Mainmenu() {
    const context = useContext (usercontext)
function logout(){
    context.setuser({"name": " ", "email": " ", "accesstoken" : " "});
    <Navigate to = "/home" replace= {true}/>
}
  return (
    <>
{
    // ( a.userstate.accesstoken !== " ")?(<><h2 style={{height:"40px", width: "400px", fontSize: "25px", verticalAlign: "center"}}>Welcome new user!!!!</h2> <button onClick={logout}>Log out</button></>) : (<><button style={{height:"40px", width: "200px", fontSize: "25px", verticalAlign: "center"}}> <Link to = {`/signup`}> Sign Up</Link></button>
    //     <button style={{height:"40px", width: "200px", fontSize: "25px", verticalAlign: "center"}}> <Link to = {`/login`}> Log In</Link></button></>)
(context.user.accesstoken == " ") ? (<>
            <header style={{height : "30px", backgroundColor : "red", display : "flex" , justifyContent : "center"}}>
            <Link to= "/signup" style={{width: "300px", backgroundColor : "gray", fontSize : "25px"}} >Sign Up</Link>
            <Link to = "/login" style={{width: "300px", backgroundColor : "gray", fontSize : "25px"}} >Log In</Link>
        </header></>) : (<>             <header style={{height : "30px", backgroundColor : "red", display : "flex" , justifyContent : "center"}}>
            <h2>Welcome!!!! new user.....</h2>
            <Link style={{width: "300px", backgroundColor : "gray", fontSize : "25px"}} onClick={logout} to= "/home">Log Out</Link></header></>)



}
</>
  )
}
