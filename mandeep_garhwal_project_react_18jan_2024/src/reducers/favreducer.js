import { FAVADD } from "../Actions"


const initialfav = []
export const favreducer = (state = initialfav, action) => {
    switch(action.type) {
        case FAVADD:
            return [...state, action.payload]  
        default:
            return state
    }
}



