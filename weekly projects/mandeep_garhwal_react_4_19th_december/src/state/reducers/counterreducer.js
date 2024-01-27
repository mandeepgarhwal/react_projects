export const counterreducer = (state = {counter :0}, action) => {
    console.log(state)
    console.log(action.payload)
    console.log(action.type)
    console.log(action.type == "increase")
    switch (action.type) {
        case "increase":


            return {...state,
                 counter : state.counter + 1 }
        case "decrease":
            return {...state, 
                counter: state.counter - 1 };
        default:
            return state;
    }
}
