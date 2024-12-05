import useCounter from "./use-counter";

export default function ComponentUseCustomHook() {
  // const [counter, setCounter] = useState(0);
  const [counter, increment, decrement] = useCounter(0, 5);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}
