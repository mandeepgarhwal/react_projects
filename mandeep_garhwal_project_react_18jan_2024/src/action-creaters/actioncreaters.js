import { FAVADD, FETCHDATAT, FETCHDATAP, FETCHDATAA } from "../Actions";



  

export function datafetchingt(data){
    alert("action creater is called")
    return {
        type : FETCHDATAT,
        payload : data
    }
}
export function datafetchingp(sterm1, sterm2){
    return {
        type : FETCHDATAP,
        payload : {value1 : sterm1, value2 : sterm2 }
    }
}
export function datafetchinga(sterm1, sterm2){
    return {
        type : FETCHDATAA,
        payload : {value1 : sterm1, value2 : sterm2 }
    }
}
export function addtofav(book){
    return {
        type : FAVADD,
        payload : book
    }
}
