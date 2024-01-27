import React from 'react'
import { usercontext } from './Mycontext'
import { useContext, useState} from 'react'
import {Navigate, Link} from "react-router-dom"
// import { Button } from 'bootstrap'

export default function Signup() {
    console.log("sign up comoponenet gets called")
    const context = useContext (usercontext)
    // console.log(context.user.name)
    // console.log(context.user.email)

    const [signupallowed, setsignupallowed] = useState();


  

    function upname (value){
        // context.setuser({...context.user, "name" : value})
        // context.setuser({...context.user, "name" : document.getElementById("name").value})
        // console.log(context.user.name)
        console.log(document.getElementById("name").value)
        console.log(document.getElementById("name").value.trim().length)
        
        context.user.name = document.getElementById("name").value
        console.log(context.user.name)
        if (document.getElementById("name").value.trim().length == 0){ setsignupallowed(false)}
        else{if(document.getElementById("email").value.trim().length == 0){setsignupallowed(false)}
    else{setsignupallowed(true)}}
    }
    function upemail (value){
        // context.setuser({...context.user, "email" : value})
        console.log(document.getElementById("email").value)
        console.log(document.getElementById("email").value.trim().length)
      
        context.user.email = document.getElementById("email").value
        console.log(context.user.email)
        if (document.getElementById("name").value.trim().length == 0){ setsignupallowed(false)}
        else{if(document.getElementById("email").value.trim().length == 0){setsignupallowed(false)}
    else{setsignupallowed(true)}}

    } 
    function signup (e){
      
        context.setuser({...context.user, "accesstoken" : "edrftgyh"});

        // context.setuser({"name": document.getElementById("name").value,"email": document.getElementById("email").value, "accesstoken" : "edrftgyh"});
       
        console.log(context.user.name);
        console.log(context.user.email);
        // window.location.assign("/profile")
        // <Navigate to = {"/profile"} replace= {true}/>;

    }
    // function alert(){
    //     alert("All fields are mandatory")
    // }
  return ( 
  <>
  {(context.user.accesstoken == " ")?(
  <form action="" style={{display : "flex", justifyContent : "center", marginTop : "300px", flexDirection : "column"}}>
  <h2>Please enter your details to sign up</h2>
  <h2>Name</h2>
  <input type="text" id="name" style={{width : "400px", height : "35px" }} placeholder='Enter your name.' onKeyUp={(e) => upname(e.target.value)}/>
  <h2>Email</h2>
  <input type="text" id="email" style={{width : "400px", height : "35px" }} placeholder='Enter your Email' onKeyUp={(e) => upemail(e.target.value)}/>
  
  {/* <Link     to = "/profile" style={{width: "300px", backgroundColor : "gray", fontSize : "25px", pointerEvents : (namelength == 0 && emaillength == 0)? ("none"):(" ")}} onClick = {(e) => signup(e)}  >Sign Up</Link> */}
  
  { (signupallowed)?(<Link   to = "/profile" style={{width: "300px", backgroundColor : "gray", fontSize : "25px"}} onClick = {(e) => signup(e)}  >Sign Up</Link>) : 
  (<button style={{width: "300px", backgroundColor : "gray", fontSize : "25px"}} onClick = {() => alert("All fields are mandatory")}> Sign Up </button>)
}
  </form>) :( <Navigate to ="/profile" replace = {true}/>)
}
  </>
  )
}
