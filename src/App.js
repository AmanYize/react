import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
function App() {
  
  const isEmployee = true;
  const [role, setRole] = useState('dev');
  return (
    <div className="App">
     {isEmployee ? 
     <div>
       <input type="text" onChange={(e)=>{
              setRole(e.target.value);
                console.log(e.target.value)
              }}/>
        <div className="flex flex-wrap justify-center">
        <Employee name="Draco" role="Intern" img="https://images.pexels.com/photos/980859/pexels-photo-980859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Employee name="Luna" role={role} img="https://images.pexels.com/photos/980859/pexels-photo-980859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Employee name="Astral" img="https://images.pexels.com/photos/980859/pexels-photo-980859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Employee name="Draco" role="Intern" img="https://images.pexels.com/photos/980859/pexels-photo-980859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Employee name="Luna" role={role} img="https://images.pexels.com/photos/980859/pexels-photo-980859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Employee name="Astral" img="https://images.pexels.com/photos/980859/pexels-photo-980859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
      </div> : 
      <h2>Not Employee</h2>
      }
       
        
      
    </div>
  );
}

export default App;
