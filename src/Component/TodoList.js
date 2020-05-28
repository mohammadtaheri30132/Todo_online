import React, {useContext, useState} from "react";
import Todo from "./Todo";
import todosContext from "../Context/todo";

export function TodoList(props) {
    const [StatusDone, SetStatusDone] = useState(false);
    const TodosContext = useContext(todosContext)
    let filterTodos = TodosContext.Todos.filter(item => item.done === StatusDone)

    return (
        <>
            <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className={`nav-item nav-link ${StatusDone ? "" : "active"} font-weight-bold`}
                       id="nav-home-tab" onClick={() => SetStatusDone(false)}>انجام نشده ها <span
                         className="badge badge-secondary">
                        {TodosContext.Todos.filter(item => item.done === false).length}
                       </span></a>
                    <a className={`nav-item nav-link ${StatusDone ? "active" : ""} font-weight-bold`}
                       id="nav-profile-tab" onClick={() => SetStatusDone(true)}>انجام شده ها <span
                        className="badge badge-success">
                        {TodosContext.Todos.filter(item => item.done === true).length}
                       </span></a>
                </div>
            </nav>
            {
                filterTodos.length === 0 ?
                    <p>خالی است</p> :
                    filterTodos.map(item =>
                        <Todo
                            Key={item.key}
                            item={item}
                            donetodo={TodosContext.donetodo}
                            deleteitem={TodosContext.deleteitem}
                        />)
            }

        </>
    )
}