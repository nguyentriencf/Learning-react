import './App.css';
import {Switch, Route, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import Contact from './Contact';
import {useHistory} from 'react-router-dom'
function App() {
  const history = useHistory()
  return (
    <div className="App">
      <button><Link to='/about'>About</Link></button>
      {/* <button onClick={() => history.push('/about')}>About us</button> */}
      <button onClick={()=>history.push('/contact')}>Contact us</button>
      <button onClick={()=> history.push('/home')}>Home page</button>
      <Switch>
        <Route exact path="/about" render ={(props)=><About {...props}/>}/>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}
// Những điều lưu ý về react-router 
/*
1. là cần phải có provider để bao bọc lại toàn bộ app 
2. là phải có switch statement để xác định người dùng muốn show ra page mong muốn(xác định url)
3. là cần phải có history(useHistory của thư viện react-router) để xác định component muốn show
ra dựa vào thuộc tính push để push url của component đó.
4. là thay thế cho history(useHistory) laf Link thuộc tính to để truyền url của page muốn show

*/
export default App;
