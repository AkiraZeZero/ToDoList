import React, { useState } from "react";

export function NewTaskForm(props) {
  const [newItem, setNewItem] = useState("");
//   const [task, setTasks] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if(newItem === "") return

   props.onSubmit(newItem)

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Add New Item</label>
        <input
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
