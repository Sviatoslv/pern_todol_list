import React from 'react';

export const ModalEditTodo = ({ saveEditedTodo, todo }) => {
  const [description, setDescription] = React.useState(todo.description);

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };

  return (
    <div className="modal" id={`${todo.todo_id}_myModal`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Modal Heading</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <div className="modal-body">
            <input
              className="form-control"
              type="text"
              value={description}
              onChange={handleDescription}
            />
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>

            <button
              type="button"
              className="btn btn-success"
              data-dismiss="modal"
              onClick={() => saveEditedTodo(todo.todo_id, description, setDescription)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

