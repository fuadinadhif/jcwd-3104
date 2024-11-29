import { useState } from "react";

export default function Second() {
  const [name, setName] = useState("Joko Anwar");
  return (
    <>
      <label htmlFor="inputName">Input Your Name</label>
      <input
        type="text"
        value={name}
        id="inputName"
        onChange={(event) => setName(event.target.value)}
      />
      <p>Selamat pagi, {name}!</p>
    </>
  );
}
