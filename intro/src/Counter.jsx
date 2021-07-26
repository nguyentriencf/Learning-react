import React,{useState} from 'react';

const Counter = () => {
  let [count,setCount] = useState(0);
 
 
  return(
    <React.Fragment>
      <h2>this count:{count}</h2>
      <button onClick={()=> setCount(count++)}>increament</button>
      <button onClick={()=> setCount(count--)}>decreament</button>

    </React.Fragment>
  );
};

export default Counter