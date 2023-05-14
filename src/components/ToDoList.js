import React, { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li className="todo-item" key={index}>
            <input type="checkbox" />
            <span>{todo}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
