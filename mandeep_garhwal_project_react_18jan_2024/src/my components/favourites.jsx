import React from 'react'
import { useSelector } from 'react-redux'

export default function Favourite() {
    var favlist = useSelector((state) => state.favlist)
  return (
   <>
   <h1 style={{display: "flex", justifyContent: "center"}}>List of favourite books</h1>
   <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Categories</th>
      <th scope="col">Publisher</th>
      <th scope="col">publishing date</th>
      <th scope="col">Page count</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody >
    {
        favlist.length > 0  && 
        favlist.map((element, key) => {
            console.log(3)
            return(
            <tr>
            <th scope="col">{key+ 1}</th>
            <th scope="col">{element["title"]}</th>
            <th scope="col">{element["author"]}</th>
            <th scope="col">{element["Categories"]}</th>
            <th scope="col">{element["publisher"]}</th>
            <th scope="col">{element["publishedDate"]}</th>
            <th scope="col">{element["pageCount"]}</th>
            <th scope="col">{element["description"]}</th>
          </tr>)

        })
        
    }
  </tbody>
</table>
   
   </>
  )
}
