import "./App.css";
import { useState } from "react";
import { NewTaskForm } from "./Components/NewTaskForm";
import { TaskList } from "./Components/TaskList";

function App() {
  const [task, setTask] = useState([]);

  function addTask(title){
    setTask((currentTask) => {
      return [
        ...currentTask,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTask(id, completed) {
    setTask(currentTask => {
      return currentTask.map(task => {
        if(task.id === id) {
          return { ...task, completed}
        }

        return task
      })
    })
  }

  function deleteTask(id) {
    setTask(currentTask => {
      return currentTask.filter(task => task.id !== id)
    })
  }

  return (
    <div className="testing">
      <NewTaskForm onSubmit={addTask}/>
      <h1>To Do List</h1>
      <TaskList task={task} toggleTask={toggleTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
