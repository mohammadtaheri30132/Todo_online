import React, {useContext, useEffect, useReducer, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Component/Header";
import FormAddTodo from "./Component/FormAddInput";
import Todo from "./Component/Todo";
import {TodoList} from "./Component/TodoList";
import todosContext from "./Context/todo"
import {TodoReducer} from "./Reducers/TODOREDUCER";
import axios from "axios"
export default function App() {

    const TodosContext = useContext(todosContext)


    const [FormInput, SetForminput] = useState('')

    const [state,dispatch]=useReducer(TodoReducer,{
        Todos:[]
    })
    useEffect(()=>{
        axios.get("http://dummy.restapiexample.com/api/v1/employees")
            .then( res=>jasonhadlet(res.data.data))

    },[])

    let  jasonhadlet =(data)=>{
        data.forEach((item)=>{
            addtodoDB(item.employee_name)
        })
    }
    let addtodoDB=(DBtext)=>{
        dispatch({type:'init_todo',payload:{DBtext:DBtext}})
    }

    return (
        <todosContext.Provider value={{
            Todos:state.Todos,
            dispatch

        }
        }>
            <div className="App">
                <Header/>
                <main>
                    <section className="jumbotron">
                        <div className="container d-flex flex-column align-items-center">
                            <h1 className="jumbotron-heading">خوش امدید</h1>
                            <p className="lead text-muted">محمد طاهری</p>
                            <FormAddTodo/>
                        </div>
                    </section>
                    <div className="todosList">
                        <div className="container">
                            <div className="d-flex flex-column align-items-center ">
                                <TodoList/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </todosContext.Provider>

    );
}

