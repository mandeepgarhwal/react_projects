import React from 'react'
import { usercontext } from './Mycontext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
export default function Profile() {
    console.log("profile comoponenet gets called")
    const context = useContext (usercontext)
    console.log(context.user.name)
    console.log(context.user.email)
  return (
    <>
    {(context.user.accesstoken == " ") ?(<Navigate to = "/signup" replace= {true}/>) : (<>
    <h1>Your user name is {context.user.name}</h1>
    <h1>Your email is {context.user.email}</h1></>)
}
    </>
  )
}
