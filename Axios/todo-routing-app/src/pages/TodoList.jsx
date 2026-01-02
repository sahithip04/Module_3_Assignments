import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <div>
      <h1>Todo List</h1>

      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/todo/${todo.id}`}>
            <h3>{todo.title}</h3>
          </Link>
          <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
