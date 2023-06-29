//incorrect.js

import React, { useState } from 'react';

function todoList() { 
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const newTodo = prompt('Enter a new todo:'); 
    setTodos([todos, newTodo]); 
  }

  function deleteTodo(index) {
    const updatedTodos = todos.filter((todo, idx) => idx !== index);
    setTodos(updatedTodos);
  }

  function clearTodos() {
    todos = []; 
  }

   return  
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li> 
            {todo}
            <button onClick={deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={addTodo()}>Add Todo</button> 
      <button onClick={clearTodos}>Clear Todos</button>
    </div>
}

export default todoList;

