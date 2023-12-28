import './App.css';
import Employee from './components/Employee';
function App() {
  const isEmployee = true;
  return (
    <div className="App">
     {isEmployee ? 
     <div>
      <Employee />
      </div> : 
      <h2>Not Employee</h2>
      }
       
        
      
    </div>
  );
}

export default App;
