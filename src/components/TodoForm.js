import React, { useState, useEffect, useRef } from "react";
import nextId from "react-id-generator";

import { Input, Button } from "antd";
import "antd/dist/antd.css";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const randId = nextId();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const onFormChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: randId,
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={onFormSubmit}>
      <Input.Group compact>
        <Input
          style={{ width: "calc(100% - 200px)" }}
          defaultValue="Add an entree"
          onChange={onFormChange}
          ref={inputRef}
          value={input}
        />
        <button class="todo-btn">
          <Button type="primary">Add</Button>
        </button>
      </Input.Group>
      {/* <input
        type="text"
        placeholder="Add an entree"
        value={input}
        name="text"
        className="todo-input"
        onChange={onFormChange}
        ref={inputRef}
      />
      <button className="todo-btn">Add</button> */}
    </form>
  );
};

export default TodoForm;
