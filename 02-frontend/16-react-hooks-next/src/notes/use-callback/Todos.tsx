interface Prop {
  todos: string[];
  handleClick: () => void;
}

import React from "react";

export default React.memo(function Todos(prop: Prop) {
  console.log("Children re-render!");

  return (
    <div>
      <h2>My Todos</h2>
      {prop.todos.map((todo: string, index: number) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={prop.handleClick}>Add Todo</button>
    </div>
  );
});

// import React from "react";

// export default React.memo(function Todos() {
//   console.log("Children On!");

//   return <h1>Hello</h1>;
// });
