import React from 'react';
import { TodosApis } from '../api/TodosApis';
import { ModalEditTodo } from './ModalEditTodo';

export const TodoList = () => {
  const [todos, setTodos] = React.useState([]);

  const getTodos = async () => {
    const todos = await TodosApis.getTodos();
    setTodos(todos);
  };

  React.useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    await TodosApis.deletTodo(id);
    getTodos();
  };

  const saveEditedTodo = async (id, description, setDescription) => {
    await TodosApis.saveEditedTodo(id, { description });
    setDescription('');
    getTodos();
  };

  return (
      <table className="table mt-4 table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <ModalEditTodo
                  todo={todo}
                  saveEditedTodo={saveEditedTodo}
                />
                <button
                  type="button"
                  className="btn btn-outline-info"
                  data-toggle="modal"
                  data-target={`#${todo.todo_id}_myModal`}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};
