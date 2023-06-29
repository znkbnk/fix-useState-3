//correct

import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function handleInputChange(event) {
    setNewTodo(event.target.value);
  }

  function addTodo() {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  }

  function deleteTodo(index) {
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    setTodos(updatedTodos);
  }

  function clearTodos() {
    setTodos([]);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearTodos}>Clear Todos</button>
    </div>
  );
}

export default TodoList;
