export function TaskItem({ completed, id, title, toggleTask, deleteTask }) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(event) => toggleTask(id, event.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTask(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
