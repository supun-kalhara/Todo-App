import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./TodoList.css";
// import bgImage from "./bg-image.webp";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    //regex syntax to check irregular input
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (id, val) => {
    //regex syntax to check irregular input
    if (!val.text || /^\s*$/.test(val.text)) {
      return;
    }

    setTodos((prev) => prev.map((item) => (item.id === id ? val : item)));
  };

  const removeTodo = (id) => {
    console.log("removing", id);
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="main-wrapper d-flex justify-content-center align-items-center">
      <div className="wrapper rounded p-2 p-sm-3">
        <div className="d-flex justify-content-center">
          <div className="col">
            <div className="text-center">
              <img className="img" />
              <h1 className="heading">Today's Tasks</h1>
              <Row>
                <span className="search-bar">
                  <TodoForm onSubmit={addTodo} />
                </span>
              </Row>
              <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
