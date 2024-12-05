import { useReducer } from "react";

interface Action {
  type: string;
  payload?: number;
}

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + action.payload!;
    case "decrement":
      return state - action.payload!;
    case "times 10":
      return state * 10;
    default:
      return state;
  }
}

export default function ComponentUseReducer() {
  // const [counter, setCounter] = useState(0);
  const [counter, dispatch] = useReducer(reducer, 0);

  function increment() {
    // setCounter(counter + 1);
    dispatch({ type: "increment", payload: 1 });
  }

  function decrement() {
    // setCounter(counter - 1);
    dispatch({ type: "decrement", payload: 1 });
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => dispatch({ type: "times 10" })}>times 10</button>
    </>
  );
}
