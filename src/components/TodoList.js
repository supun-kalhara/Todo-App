import React, { useState } from "react";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>Today's Tasks</h1>
      <TodoForm />
    </div>
  );
};

export default TodoList;
