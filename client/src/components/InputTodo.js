import React from 'react';
import { TodosApis } from '../api/TodosApis';

export const InputTodo = () => {
  const [description, setDescription] = React.useState('');
  const handleTodoTitle = ({ target }) => setDescription(target.value);

  const saveTodo = async (e) => {
    e.preventDefault();
    if (!description) return;

    await TodosApis.addTodo({description});
  };

  return (
    <form className="d-flex" onSubmit={saveTodo}>
      <input
        value={description}
        onChange={handleTodoTitle}
        placeholder="Your todo"
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn btn-success">
        Add todo
      </button>
    </form>
  );
};
