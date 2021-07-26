import './App.css';
import Employee from './Employee';

const employeeInfo = [
  {
  firstName:"Trien",
  lastName:"Nguyen Dinh Phat",
  employeeAge:"21",
  idEm:'1'
},
  {
  firstName:"Teo",
  lastName:"Nguyen Van",
  employeeAge:"31",
  idEm:'2'
},
  {
  firstName:"Bim",
  lastName:"Lo Vi Song",
  employeeAge:"32",
  idEm:"3"
}


]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Welcom to my counter</h2>
      {employeeInfo.map((employee) => {
        // const {firstName, lastName, employeeAge} = employee;
        return(
          // <Employee firstName={firstName} lastName={lastName} employeeAge={employeeAge}/>
          <Employee key={employee.idEm} {...employee}/>
        )
      })}
      
      </header>
    </div>
  );
}

export default App;