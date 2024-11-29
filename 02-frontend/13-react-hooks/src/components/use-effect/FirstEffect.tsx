import { useState, useEffect } from "react";

export default function FirstEffect() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Effect running!");
    document.title = `Counter: ${counter}`;
  }, [counter, name]);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}
