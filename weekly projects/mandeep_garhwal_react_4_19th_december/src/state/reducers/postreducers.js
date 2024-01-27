
export const postreducer = (state = {
    "userId": 101,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }, action) => {
    console.log(3)
    console.log(action.data)
    console.log(action.type)
    switch (action.type) {
        case "add":
            return state.push(action.payload);
        case  "FetchData":
            return { ...state, data: action.data };
        case  "ERROR":
            return { ...state, error: action.msg }
        default:
            return state;
    }
}


