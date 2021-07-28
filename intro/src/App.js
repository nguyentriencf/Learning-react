import './App.css';
import React, {useState} from 'react'
import Counter from './Counter';

function App() {
  const [showCouter,setShowCouter] =useState(false) ;
  return ( 
    <div className="App">
      <h1>Welcom to the my app</h1>
      <button onClick={()=>
        setShowCouter(!showCouter)}>
          {showCouter ? ("Hide Show counter"):("Show Counter")}
        </button>
     {showCouter && <Counter/>}
    </div> 
  );
}
export default App;
