import './App.css';
import React, {useState} from 'react'

function App() {
  const [isLoggedIn, setIsloggedin] =useState(false) ;
  return ( 
    <div className="App">
      <h1>Welcom to the my app</h1>
      <button onClick={()=>
        setIsloggedin(!isLoggedIn)}>
          {isLoggedIn ? ("Log out"):("Log in")}
        </button>
      {isLoggedIn? (<h1>Hello, Nguyen Trien</h1>):(
        <div>
          <h2>please login to continue</h2>
        </div>
      )}
    </div> 

  );
}
export default App;
