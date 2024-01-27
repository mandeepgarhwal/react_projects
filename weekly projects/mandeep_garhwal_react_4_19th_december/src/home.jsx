import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreaters } from './state/actioncreaters'

export default function Home() {
    const dispatch = useDispatch()
    console.log("element is called")
    const posts = useSelector(state => state.posts)
    console.log(typeof(posts))
    console.log(posts.id)
    
    useEffect(() => {
        dispatch(actionCreaters.fetchdata());
    }, [dispatch])
    const data = useSelector(state => state.posts.data)
    const counter = useSelector(state => state.counter.counter)
    data &&
    console.log(typeof(data))
  return (
    <>
    <h1>Posts</h1>
    <h1>{counter}</h1>
    <button className='btn btn-primary' onClick={() => {dispatch(actionCreaters.inccounter(5))}}>Incease</button>
    <button className='btn btn-success' onClick={() => {dispatch(actionCreaters.deccounter(5))}}>Decrease</button>
    <div display = {{display : "flex"}}>
    <div className="card" style={{width : "24vw", display : "inline-block"}}>
    <img src={`https://picsum.photos/200?random=${posts.id}`} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{posts.title}</h5>
    <p className="card-text">{posts.body}</p>
    <a href={`/about/${posts.id}`} className="btn btn-primary">See details</a>
  </div>
</div>
    {/* <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">userId</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
      <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{posts.id}</th>
      <td>{posts.userId}</td>
      <td>{posts.title}</td>
      <td>{posts.body}</td>
      <td><img src={`https://picsum.photos/200?random=${posts.id}`} alt= " "/></td>
    </tr> */}
    {
        data && 
        data.map((element) => (
          <div className="card" style={{width : "24vw", display : "inline-block", alignItems :"flex-start"}}>
          <img src={`https://picsum.photos/200?random=${element.id}`} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{element.title}</h5>
          <p className="card-text">{element.body}</p>
          <a href={`/about/${element.id}`} className="btn btn-primary">See details</a>
        </div>
      </div>
          //   <tr>
          //   <th scope="row">{element.id}</th>
          //   <td>{element.userId}</td>
          //   <td>{element.title}</td>
          //   <td>{element.body}</td>
          //   <td><img src={`https://picsum.photos/200?random=${element.id}`} alt= " "/></td>
          // </tr>
        ) )
    }
  {/* </tbody>
</table> */}
</div>
   </>  
  )
}
