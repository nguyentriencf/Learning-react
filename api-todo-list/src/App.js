import {BrowserRouter as Router,Switch, Route } from "react-router-dom"
import Todos from "./Todos";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<Todos />} />
          <Route exact path="/todos/:id" children={<Todo/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
