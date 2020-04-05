import React from 'react';
import './App.css';
import AddTodo from './containers/AddTodo';
import ToDoList from './containers/ToDoList';

function App() {
  return (
    <main className="App container">
      <AddTodo />
      <ToDoList />
    </main>
  );
}

export default App;
