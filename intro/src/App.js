import './App.css';
import Employee from './Employee';


function App() {
  const employees =["Nguyen Dinh Phat Trien","Le Van Ti","Lo Vi Song"]
  return ( 
    <div className="App">
      {employees && employees.length >0 && (
        <div>
          <h1>Em ployees List:</h1>
          {employees.map((employee) => (
            <h4>{employee}</h4>
          ))}
        </div>
      )}


    </div> 

  );
}
export default App;
