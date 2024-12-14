import { useEffect, useState } from "react";
import ComponentUseContext from "./notes/use-context/ComponentUseContext";
import ComponentUseRef from "./notes/use-ref/ComponentUseRef";
// import ComponentUseCustomHook from "./notes/use-custom-hook/ComponentUseCustomHook";
// import ComponentUseContext from "./notes/use-context/ComponentUseContext";
// import ComponentUseReducer from "./notes/use-reducer/ComponentUseReducer";
// import ComponentUseCallback from "./notes/use-callback/ComponentUseCallback";
// import ComponentUseMemo from "./notes/use-memo/ComponentUseMemo";

export default function App() {
  const [name, setName] = useState("John");

  useEffect(() => {
    setTimeout(() => {
      setName("Yoko");
    }, 3000);
  }, [name]);

  return <Greeting initialName={name} />;
}

function Greeting({ initialName }) {
  const [anotherName, setAnotherName] = useState(initialName);

  useEffect(() => {
    console.log("Prop changed, but state wont update!");
  }, []);

  return <h1>Hello, {anotherName}!</h1>;
}
