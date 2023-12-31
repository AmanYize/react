import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const isEmployee = true;
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Jim",
      role: "Developer",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Jinx",
      role: "Architect",
      img: "https://images.pexels.com/photos/2167673/pexels-photo-2167673.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Martin",
      role: "Designer",
      img: "https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "Anna",
      role: "Model",
      img: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      name: "Kevin",
      role: "Movie Director",
      img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 6,
      name: "Marie",
      role: "Actress",
      img: "https://images.pexels.com/photos/2224736/pexels-photo-2224736.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updateEmployees = employees.map((employee) => {
      if (employee.id == id) {
        employee.name = newName;
        employee.role = newRole;
      }
      return employee;
    });
    setEmployees(updateEmployees);
  }

  return (
    <div className="App">
      {isEmployee ? (
        <div>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h2>Not Employee</h2>
      )}
    </div>
  );
}

export default App;
