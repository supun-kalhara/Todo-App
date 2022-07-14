import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./TodoList.css";

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
    <div className="main-wrapper justify-content-center align-items-center">
      <Row>
        <h1 className="d-flex">Today's Tasks</h1>
      </Row>
      <Row>
        <TodoForm onSubmit={addTodo} />
      </Row>
      <Row>
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </Row>
    </div>
  );
};

export default TodoList;
