import { List } from "./components/List";
import "./styles/Style.css";
import { useState } from 'react';
import { Todo } from "./components/Todo";
import { Form } from "./components/Form";
import { FormRange } from "./components/FormRange";
import { Routes, Route, Link } from "react-router-dom";
import FormFinal from "./components/FormFinal";


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
      <nav>
        <Link to="/form-range" className="nav-item">FormRange</Link>
        <Link to="/form" className="nav-item">Form</Link>
        <Link to="/list" className="nav-item">List</Link>
        <Link to="/todo" className="nav-item">Todo</Link>
        <Link to="/form-final" className="nav-item">FormFinal</Link>
      </nav>
      <Routes>
        <Route path="/form-range" element={<FormRange />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/todo" element={<TOodo/>}/>
        <Route path="/form-final" element={<FormFinal/>}/>
      </Routes>
      
      
      
      
    </div>
  )
}

export default App;
