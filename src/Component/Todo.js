import React, {useContext, useState} from "react";
import todosContext from "../Context/todo";

function Todo(props) {
    const TodosContext =useContext(todosContext)



    return (
                <div className="col-6 mb-2">
                    <div
                        className="d-flex justify-content-between align-items-center border rounded p-3">
                        <div>
                            {props.item.text}
                        </div>
                        <div>
                            <button type="button" className="btn btn-info btn-sm ml-1"
                                    onClick={() => TodosContext.dispatch({type:'done_todo',payload:{key:props.item.key}})}
                            >{props.item.done ? "بازگشت" : 'انجام شده'}</button>
                            <button type="button" className="btn btn-danger btn-sm ml-1"
                                    onClick={() => TodosContext.dispatch({type:'dellet_todo',payload:{key:props.item.key}})}
                            >پاک کردن
                            </button>
                        </div>
                    </div>
                </div>



    )


}

export default Todo