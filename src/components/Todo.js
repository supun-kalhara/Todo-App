import React, { useState } from "react";
import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
//components

const Todo = ({ todos, completeTodo, removeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
  });

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <CloseCircleOutlined
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <EditOutlined
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
