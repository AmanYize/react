import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
function App() {
  
  const isEmployee = true;
  const [employees, setEmployees] = useState(
    [
      {
        name: "Jim", role: "Developer", img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "Jinx", role: "Architect", img: "https://images.pexels.com/photos/2167673/pexels-photo-2167673.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "Martin", role: "Designer", img: "https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "Anna", role: "Model", img: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "Kevin", role: "Movie Director", img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        name: "Marie", role: "Actress", img: "https://images.pexels.com/photos/2224736/pexels-photo-2224736.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ]
  );
  return (
    <div className="App">
     {isEmployee ? 
     <div>
       
        <div className="flex flex-wrap justify-center">
              {employees.map((employee)=>{
                return (<Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img}/>);
              })}
        </div>
      </div> : 
      <h2>Not Employee</h2>
      }
       
        
      
    </div>
  );
}

export default App;
