import { List } from "./components/List";
import "./styles/Style.css";
import { useState } from 'react';
import { Todo } from "./components/Todo";
import { Form } from "./components/Form";

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

  return (
    <div>
      <Form/>
      <List/>
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
    </div>
  )
}

export default App;
