export const addpost = (post) =>{
    return (dispatch) =>{ dispatch(
        {type : "add",
        payload : post}
    )}
}

export const fetchdata =  () => {
    return  async (dispatch) => {
        await fetch ("https://jsonplaceholder.typicode.com/posts")
        .then(response=> response.json())
        .then(json =>{ console.log(json) ; dispatch( { type : "FetchData", data : json})})
        .catch (err => dispatch({ type: "ERROR", msg : "data is not fetched"}))
    }
}

export const inccounter =  (number) => {
    console.log(4)
    return   {type : "increase",
            payload : number}
        
}
export const deccounter =  (number) => {
    console.log(-4)
    return {type : "decrease",
            payload : number}
        
}
