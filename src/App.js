import { List } from "./components/List";
import "./styles/Style.css";
import { useState } from 'react';
import { Todo } from "./components/Todo";
import { Form } from "./components/Form";
import { FormRange } from "./components/FormRange";
import { Routes, Route, Link } from "react-router-dom";
import FormFinal from "./components/FormFinal";
import { UsestateHook } from "./components/UsestateHook";
import { UseEffect } from "./components/UseEffect";
import { Fetching } from "./components/Fetching";
import { Fetching1 } from "./components/Fetching1";
import { UseReducer } from "./components/UseReducer";


function App() {
  const [todos, setTodos] = useState([
    {
      id: 'todo1',
      createAt: '18:00',
    },
    {
      id: 'todo2',
      createAt: '20:30',
    }
  ]);

  const reverseOrder = () => {
    setTodos([...todos].reverse())
  }

  function TOodo() {
    return (
      <div>
        <button onClick={reverseOrder}>Reverse</button>
        <table>
          <tbody>
            {todos.map((todo, index) => (
              <Todo key={todo.id} id={index} createAt={todo.createAt} /> //don't use the "index" for key /
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div>
      <nav className="flex w-screen justify-around mb-20">
        <Link to="/form-range" className="nav-item">FormRange</Link>
        <Link to="/form" className="nav-item">Form</Link>
        <Link to="/list" className="nav-item">List</Link>
        <Link to="/todo" className="nav-item">Todo</Link>
        <Link to="/form-final" className="nav-item">FormFinal</Link>
        <Link to="/usestate-hook" className="nav-item">Usestate Hook</Link>
        <Link to="/useEffect" className="nav-item">UseEffect</Link>
        <Link to="/fetching" className="nav-item">Fetching</Link>
        <Link to="/fetching1" className="nav-item">Fetching1</Link>
        <Link to="/useReducer" className="nav-item">UseReducer</Link>
      </nav>
      <Routes>
        <Route path="/form-range" element={<FormRange />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/todo" element={<TOodo/>}/>
        <Route path="/form-final" element={<FormFinal/>}/>
        <Route path="/usestate-hook" element={<UsestateHook/>}/>
        <Route path="/useEffect" element={<UseEffect/>}/>
        <Route path="/fetching" element={<Fetching/>}/>
        <Route path="/fetching1" element={<Fetching1/>}/>
        <Route path="/useReducer" element={<UseReducer/>}/>
        
      </Routes>
      
      
      
      
    </div>
  )
}

export default App;
