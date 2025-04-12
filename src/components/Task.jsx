const Task = ({ task, onDelete, onToggle }) => {
  const handleClick = () => {
    onToggle(task.id);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
        onClick={handleClick}
      >
        {task.text}
      </span>
      <button
        style={{ marginLeft: "0.5rem" }}
        onClick={() => onDelete(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default Task;
