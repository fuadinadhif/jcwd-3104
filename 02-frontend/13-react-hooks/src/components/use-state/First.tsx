import { useState } from "react";

export default function First() {
  const [slotOne, setSlotOne] = useState(0);
  const [slotTwo, setSlotTwo] = useState(0);
  const [slotThree, setSlotThree] = useState(0);

  return (
    <>
      <div style={{ display: "flex " }}>
        <h1>{slotOne}</h1>
        <h1>{slotTwo}</h1>
        <h1>{slotThree}</h1>
      </div>
      <button
        onClick={() => {
          setSlotOne(Math.floor(Math.random() * 5));
          setSlotTwo(Math.floor(Math.random() * 5));
          setSlotThree(Math.floor(Math.random() * 5));
        }}
      >
        Max Win
      </button>
    </>
  );
}

// export default function First() {
//   let counter = 0;

//   return (
//     <>
//       <h1>{counter}</h1>
//       <button
//         onClick={() => {
//           counter++;
//           console.log(counter);
//         }}
//       >
//         Increment
//       </button>
//     </>
//   );
// }
