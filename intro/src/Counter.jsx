import React,{useState, useEffect} from 'react';

const Counter = () => {
  let [count,setCount] = useState(0);
  useEffect(()=>{
    console.log("the component mounted");
    return () =>{
      console.log("the component unmounted");
    }
  },[])
  /* tham số thứ 2 của hàm useEffect là một emty array được biết như là did mount chỉ 
  nhẩy vào update khi mounted và unmounted */
  return(


    <React.Fragment>
      <h2>this count:{count}</h2>
      <button onClick={()=> setCount(count++)}>increament</button>
      <button onClick={()=> setCount(count--)}>decreament</button>
    </React.Fragment>
  );
};

export default Counter