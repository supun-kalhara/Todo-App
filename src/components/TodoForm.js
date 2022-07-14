import React, { useState } from "react";
import nextId from "react-id-generator";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const randId = nextId();

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
      <input
        type="text"
        placeholder="Add an entree"
        value={input}
        name="text"
        className="todo-input"
        onChange={onFormChange}
      />
      <button className="todo-btn">Add</button>
    </form>
  );
};

export default TodoForm;
