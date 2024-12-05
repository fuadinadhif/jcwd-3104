import { useCallback, useState } from "react";
import Todos from "./Todos";

export default function ComponentUseCallback() {
  console.log("Parent re-render!");

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  function addTodo() {
    setTodos((prev) => [...prev, "New Todo"]);
  }

  return (
    <>
      <Todos todos={todos} handleClick={useCallback(addTodo, [count])} />

      {/* <Todos /> */}

      <hr />

      <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </>
  );
}
