import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
function App() {
  
  const isEmployee = true;
  const [role, setRole] = useState('dev');
  return (
    <div className="App bg-red-300">
     {isEmployee ? 
     <div>
       <input type="text" onChange={(e)=>{
              setRole(e.target.value);
                console.log(e.target.value)
              }}/>
        <Employee name="Aman" role="Intern" />
        <Employee name="Luna" role={role}/>
        <Employee name="Astral" />
      </div> : 
      <h2>Not Employee</h2>
      }
       
        
      
    </div>
  );
}

export default App;
