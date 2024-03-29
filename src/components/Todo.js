import React, { useState } from "react";
import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./Todo.css";
import { Row, Col } from "react-bootstrap";
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
    <div
      className={
        "d-flex justify-content-center align-items-center " +
        (todo.isComplete ? "todo-row complete" : "todo-row ")
      }
      key={index}
    >
      <Row>
        <Col xs={10}>
          <div
            key={todo.id}
            onClick={() => completeTodo(todo.id)}
            className="d-flex justify-content-center todo-text"
          >
            {todo.text}
          </div>
        </Col>
        <Col>
          <div className="icons">
            <span className="icons-1">
              <CloseCircleOutlined
                onClick={() => removeTodo(todo.id)}
                className="delete-icon"
              />
            </span>
            <EditOutlined
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
          </div>
        </Col>
      </Row>
    </div>
  ));
};

export default Todo;
