import React, { useState } from "react";
import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import { Alert, Space } from "antd";
import "antd/dist/antd.css";
//components
import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    // <div
    //   className={todo.isComplete ? "todo-row complete" : "todo-row"}
    //   key={index}
    // >
    //   <div key={todo.id} onClick={() => completeTodo(todo.id)}>
    //     {todo.text}
    //   </div>
    //   <div className="icons">
    //     <CloseCircleOutlined
    //       onClick={() => removeTodo(todo.id)}
    //       className="delete-icon"
    //     />
    //     <EditOutlined
    //       onClick={() => setEdit({ id: todo.id, value: todo.text })}
    //       className="edit-icon"
    //     />
    //   </div>
    //   <div>
    //     <Alert message="Alert Message Text" type="success" closable />
    //   </div>
    // </div>

    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <Alert
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
        message={todo.text}
        type="success"
        action={
          <Space>
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
          </Space>
        }
      />
    </div>
  ));
};

export default Todo;
