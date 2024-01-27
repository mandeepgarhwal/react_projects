
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {datafetchinga, datafetchingt } from "../action-creaters/actioncreaters"



export default function Home() {
    const dispatch = useDispatch();
    var searchresults = useSelector((state) => state.data)
    var favlist = useSelector((state) => state.favlist)
    const [showlist, setshowlist] = useState([])

    if (searchresults.length != 0){
        console.log(searchresults)
        console.log(typeof(searchresults))
        var i = 0
    searchresults.forEach((item) => {
        i += 1
       

         showlist.push({
            "author" : item["volumeInfo"]["authors"],
            "publisher" : item["volumeInfo"]["publisher"],
            "publishedDate" : item["volumeInfo"]["publishedDate"],
            "categories" : item["volumeInfo"]["categories"],
            "description" : item["volumeInfo"]["description"],
            "pageCount" : item["volumeInfo"]["pageCount"],
            "title" : item["volumeInfo"]["title"]
        })
    
    })
    console.log(i)
    console.log(showlist)
    }else{alert("No search results yet to show!!!!")}
    function Titlefetch() {
        var sterm1 = document.getElementById("searchterm1").innerText
        var sterm2 = document.getElementById("searchterm2").innerText
        console.log(sterm1)
        console.log(sterm2)
       dispatch(datafetchingt)

        
    }
    function authorfetch() {
        var sterm1 = document.getElementById("searchterm1").innerText
        var sterm2 = document.getElementById("searchterm2").innerText
        console.log(sterm1)
        console.log(sterm2)
        dispatch(datafetchinga(sterm1, sterm2))
        
    }
    function publisherfetch() {
        var sterm1 = document.getElementById("searchterm1").innerText
        var sterm2 = document.getElementById("searchterm2").innerText
        console.log(sterm1)
        console.log(sterm2)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${sterm1}+inpublisher:${sterm2}&key=AIzaSyBhNgUBepULJp82BzJ-HL5qUVTaEPwMCsU`)
        .then((res) => {searchresults = res.data.items})
        .catch((err) => console.log(err))
        console.log(searchresults)

        if (searchresults){
            console.log(searchresults)
            console.log(typeof(searchresults))
            var i = 0
        searchresults.forEach((item) => {
            i += 1
           
           
             showlist.push({
                "author" : item["volumeInfo"]["authors"],
                "publisher" : item["volumeInfo"]["publisher"],
                "publishedDate" : item["volumeInfo"]["publishedDate"],
                "categories" : item["volumeInfo"]["categories"],
                "description" : item["volumeInfo"]["description"],
                "pageCount" : item["volumeInfo"]["pageCount"],
                "title" : item["volumeInfo"]["title"]
            })
        
        })
        console.log(i)
        console.log(showlist)
    }}

    function addtofav(element){
            dispatch(addtofav(element))
    }
  return (
    <>
    <div style={{display : "flex", justifyContent :"center", paddingTop : "100px"}}>
    <form style= {{display : "flex", flexDirection : "column", width : "400px"}}>
  <div className="mb-3">
    <label  className="form-label">Enter Key word</label>
    <input  className="form-control" id="searchterm1" aria-describedby="emailHelp"/>
    <label  className="form-label">Enter Title/Author/Publisher</label>
    <input  className="form-control" id="searchterm2" aria-describedby="emailHelp"/>

  </div>
  <div className="btn-group">
  <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Search By
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
    <li><button className="dropdown-item" type="button" onClick={Titlefetch}>Title</button></li>
    <li><button className="dropdown-item" type="button" onClick={authorfetch}>Author</button></li>
    <li><button className="dropdown-item" type="button"onClick={publisherfetch}>Publisher</button></li>
  </ul>
</div>

</form>
</div>
<div>
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
      <th scope="col">Actions</th>      
    </tr>
  </thead>
  <tbody >
    {
        showlist.length > 0  && 
        showlist.map((element, key) => {
            console.log(3)
            // newrow(element,key)
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
            <th scope="col"><button className='btn btn-danger' onClick={(element) => addtofav(element)}>Add to Fav.</button> </th>
          </tr>)

        })
        
    }
  </tbody>
</table>
    </div>
    </>
  )
}
