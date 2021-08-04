import './App.css';
import React from 'react'
// import Counter from './Counter';
import ToDoList from './ToDoList';

function App() {
  // const [showCouter,setShowCouter] =useState(false) ;
  return ( 
    <div className="App">
      {/* <h1>Welcom to the my app</h1>
      <button onClick={()=>
        setShowCouter(!showCouter)}>
          {showCouter ? ("Hide Show counter"):("Show Counter")}
        </button>
     {showCouter && <Counter/>} */}
     <ToDoList/>
    </div> 
  );
}
export default App;
