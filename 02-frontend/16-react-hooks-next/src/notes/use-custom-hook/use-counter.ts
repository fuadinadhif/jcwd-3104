import { useState } from "react";

export default function useCounter(
  val: number,
  step: number
): [number, () => void, () => void] {
  const [counter, setCounter] = useState(val);

  function increment() {
    setCounter(counter + step);
  }

  function decrement() {
    setCounter(counter - step);
  }

  return [counter, increment, decrement];
}
