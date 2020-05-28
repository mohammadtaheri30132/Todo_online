import React, {useContext, useState} from "react";
import todosContext from "../Context/todo";
import axios from "axios"
function FormAddTodo(props) {
    const TodosContext = useContext(todosContext)

    const [Text, SetText] = useState('')
    let inputhandler = e => SetText(e.target.value)
    let formhandler = (e) => {
        e.preventDefault()

        TodosContext.dispatch({type: 'add_todo', payload: {Text: Text}})
        SetText('')
    }

    return (
        <form className="form-inline" onSubmit={formhandler}>
            <div className="form-group">
                <input type="text" className="form-control mx-sm-3" value={Text} onChange={inputhandler}
                       placeholder="کار خود را وارد نمایید"/>
                <button type="submit" className="btn btn-primary">اضافه کردن</button>
            </div>
        </form>
    )


}

export default FormAddTodo