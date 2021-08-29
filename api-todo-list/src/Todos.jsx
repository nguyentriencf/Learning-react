import React,{useEffect, useState} from "react";
import axios from "axios";
import {CircularProgress} from "@material-ui/core"
import TodoCart from "./TodoCart";
const Todos = () => {
    const [todos, setTodos] = useState();
     useEffect(() => {
       axios.get("http://jsonplaceholder.typicode.com/todos").then((res) => {
         const responseTodos = res.data;
         setTodos(responseTodos);
       });
     }, []);
     console.log(todos);
  return (<>
  {todos ?
   (<div>
       {todos.map(todo => <TodoCart todo={todo}/>)}
       </div>)
        :
  <CircularProgress/>}
  </>)
};

export default Todos;
