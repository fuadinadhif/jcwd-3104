import { createContext } from "react";
import Grandparent from "./Grandparent";

export const ChildrenNameContext = createContext("");

export default function ComponentUseContext() {
  const childrenName = "Angelina";

  return (
    <>
      <ChildrenNameContext.Provider value={childrenName}>
        <h2>Super Grandparent</h2>
        <p>Hello, {childrenName}!</p>
        <Grandparent />
      </ChildrenNameContext.Provider>
    </>
  );
}
