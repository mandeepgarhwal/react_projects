import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

export default function Details() {
    const {ID} = useParams()
    console.log(ID)
    const[post, setpost] = useState()
    const [todos, setTodos] = useState([])
    useEffect( ()=> {
      fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`)
      .then(serverPromise => {serverPromise.json().then((data)=> setpost(data))
      .catch(err => console.log(err))})
    .catch(err => console.log(err))
    }, [ ])

  console.log(typeof(post))
  return (
    <div>
    {post &&
      <><h1>Post details</h1>
    <img src={`https://picsum.photos/200?random=${post.id}`} className="card-img-top" alt="..." style ={{width :"40vw", height :"40vh"}}/>
    <div className="card-body">
    <h3 >  User ID : {post.userId}</h3>
    <h5 className="card-title">Title: {post.title}</h5>
    <p className="card-text">Body: {post.body}</p>
    </div></>}
    </div>
    
  )
}
