import { useContext } from "react";
import { ChildrenNameContext } from "./ComponentUseContext";

export default function Children() {
  const childrenName = useContext(ChildrenNameContext);

  return (
    <>
      <h2>Children</h2>
      <p>My name is {childrenName}</p>
    </>
  );
}
