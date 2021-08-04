import React,{useEffect, useState} from "react";
import axios from "axios";
// import Counter from "./Counter";

const ToDoList = () => {
    const [todos, setTodo] = useState();
    useEffect(()=>{
        axios.get('http://jsonplaceholder.typicode.com/todos').then((res=> {
            const responseTodos = res.data;
            setTodo(responseTodos)
        }))
    },[])
    console.log(todos);
    return(
        <div>
            <h1>Todo list</h1>
            {todos && todos.map((todo) => {
                const {id, userId,title} = todo;
                return(
                    <div key={id}>
                        <h5>{title}</h5>
                        <h6>Assigned user: {userId}</h6>
                    </div>
                )
            })}

        </div>
    );

            };

export default ToDoList;