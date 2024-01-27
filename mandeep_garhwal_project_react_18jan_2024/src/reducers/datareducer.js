import {  FETCHDATAT, FETCHDATAA, FETCHDATAP } from "../Actions"
import axios from "axios"
const initialdata = []
export const Datareducer = (state = initialdata, action) => {
    console.log("Reducer is called")
    var searchresults = []

     
    switch(action.type) {
        case FETCHDATAT:
            alert("title case is called in data reducer")
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${action.payload.value1}+intitle:${action.payload.value2}&key=AIzaSyBhNgUBepULJp82BzJ-HL5qUVTaEPwMCsU`)
            .then( (res) => { searchresults = res.data.items; alert("9"); console.log(searchresults)})
            .catch((err) => {console.log(err);
                console.log(8)
            })
            console.log(searchresults)
            return state = searchresults
        case FETCHDATAP:
            alert("publisher case is called in data reducer")
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${action.payload.value1}+inpublisher:${action.payload.value2}&key=AIzaSyBhNgUBepULJp82BzJ-HL5qUVTaEPwMCsU`)
            .then((res) => {searchresults = res.data.items})
            .catch((err) => {console.log(err); alert("No search results yet to show!!!!")})
            console.log(searchresults)
            return state = searchresults  
        case FETCHDATAA:
            alert("author case is called in data reducer")
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${action.payload.value1}+inauthor:${action.payload.value2}&key=AIzaSyBhNgUBepULJp82BzJ-HL5qUVTaEPwMCsU`)
            .then((res) => {searchresults = res.data.items})
            .catch((err) => {console.log(err); alert("No search results yet to show!!!!")})
            console.log(searchresults)
            return state = searchresults  
        default:
            return state
    }
}