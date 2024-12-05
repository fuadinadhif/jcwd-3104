import { useRef } from "react";

export default function ComponentUseRef() {
  console.log("Render!");

  const counterRef = useRef<HTMLHeadingElement>(null);
  let counter = 0;

  function increment() {
    counter++;

    if (counterRef.current) {
      counterRef.current.textContent = `Count: ${counter}`;
    }
  }

  return (
    <div>
      <h1 ref={counterRef}>Count: 0</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
