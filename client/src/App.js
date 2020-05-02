import React from 'react';
import { InputTodo } from './components/InputTodo';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt5">PERN todo list</h1>
      <InputTodo/>
      <TodoList/>
    </div>
  );
}

export default App;
