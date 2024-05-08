const Todo = ({
  todo: { id, title, isCompleted },
  removeTodo,
  updateStatusTodo,
}) => {
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between">
        <p>{title}</p>
        <div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={isCompleted}
              onChange={() => updateStatusTodo(id)}
            />
          </div>
          <button className="btn-close" onClick={() => removeTodo(id)}></button>
        </div>
      </div>
    </li>
  );
};

export default Todo;
