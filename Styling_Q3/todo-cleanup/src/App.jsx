import { useState } from "react";
import TodosList from "./TodoList";

const App = () => {
  const [showTodos, setShowTodos] = useState(true);

  const unmountTodos = () => {
    setShowTodos(false);
  };

  return (
    <div>
      <button onClick={unmountTodos}>
        Unmount Todos
      </button>

      {showTodos && <TodosList />}
    </div>
  );
};

export default App;
