import { TaskItem } from "./TaskItem";

export function TaskList({ task, toggleTask, deleteTask }) {
  return (
    <ul className="list">
      {task.length === 0 && "No Tasks"}
      {task.map((task) => {
        return (
          <TaskItem
            {...task}
            // id={task.id}
            // completed={task.completed}
            // title={task.title}
            key={task.id}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </ul>
  );
}
