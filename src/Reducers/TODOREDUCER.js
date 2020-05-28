import React from "react";

export function TodoReducer(state, action) {
    switch (action.type) {
        case 'init_todo':
            let { DBtext } = action.payload;
            return  {

                Todos:[...state.Todos,{key: Date.now(), done: false, text: DBtext}]

            }
        case "add_todo":
            return add_todo(state, action);

        case 'done_todo':
            return done_todo(state, action);
        case "dellet_todo":
            return dellet_todo(state, action);

        default :
            return
            break;
    }

}

let add_todo = (state, action) => {
    let {Text} = action.payload;
    return {
        ...state,
        Todos: [
            {key: Date.now(), done: false, text: Text}, ...state.Todos
        ]
    }

}


let done_todo = (state, action) => {
    let {key} = action.payload
    let list = state.Todos.find(item => item.key === key)
    let newlist = state.Todos.filter(item => item.key !== key)
    list.done = !list.done
 return{
     Todos : [...newlist, list]

 }
}

let dellet_todo = (state, action) => {
    let {key} = action.payload
    return {
        ...state,
        Todos: state.Todos.filter(item => item.key !== key)
    }

}


// let AddTodo = (Text) => {
//     SetTodos([
//         ...Todos, {key: Date.now(), done: false, text: Text}
//     ])
// }


// let donetodo = (key) => {
//     let list = Todos.find(item => item.key === key)
//     let newlist = Todos.filter(item => item.key !== key)
//     list.done = !list.done
//     SetTodos([...newlist, list]
//     )
// }


// let deleteitem = (key) => {
//     SetTodos(prevState =>
//         prevState.filter(item => item.key !== key)
//     )
// }