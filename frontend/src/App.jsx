import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/");
        const data = response.data;
        setTodos(data);
      } catch (error) {
        console.log("Something went wrong:", error);
      }
    };

    getTodos();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
