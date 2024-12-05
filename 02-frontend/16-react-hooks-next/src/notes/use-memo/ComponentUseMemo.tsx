import { useState, useMemo } from "react";

export default function ComponentUseMemo() {
  const [score, setScore] = useState(0);
  const [age, setAge] = useState(0);

  function isScoreEven() {
    let i = 0;

    while (i < 1000000000) {
      i++;
    }

    return score % 2 === 0;
  }

  const scoreCheck = useMemo(isScoreEven, []);

  return (
    <>
      <h2>{score}</h2>
      {/* <h2>{isScoreEven() ? "Even" : "Odd"}</h2> */}
      <h2>{scoreCheck ? "Even" : "Odd"}</h2>
      <button onClick={() => setScore(score + 1)}>Increment Score</button>

      <hr />

      <h2>{age}</h2>
      <button onClick={() => setAge(age + 1)}>Increment Age</button>
    </>
  );
}
