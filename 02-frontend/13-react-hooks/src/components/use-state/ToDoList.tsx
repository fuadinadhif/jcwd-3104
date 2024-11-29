import { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([
    { id: Date.now(), text: "Washing cloth", completed: false },
  ]);
  const [text, setText] = useState("");

  function addTask() {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setText("");
  }

  function toggleTask(id: number) {
    setTasks(
      tasks.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  }

  function deleteTask() {}

  return (
    <>
      <h1>To Do List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((element, index) => (
          <li>
            <input
              type="checkbox"
              id={String(index)}
              onClick={() => toggleTask(element.id)}
            />
            <label
              htmlFor={String(index)}
              style={{
                textDecoration: element.completed ? "line-through" : "none",
              }}
            >
              {element.text}
            </label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
