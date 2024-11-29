import { useEffect, useState } from "react";

export default function SecondEffect() {
  const [bgColor, setBgColor] = useState("red");

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 500) {
        setBgColor("blue");
      }
      console.log(`Scrol Position: ${window.scrollY}`);
    }

    // function handleMouseMove(e: MouseEvent) {
    //   console.log(`Cursor X: ${e.clientX}, Cursor Y: ${e.clientY}`);
    // }

    window.addEventListener("scroll", handleScroll);
    // window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        height: "50px",
        backgroundColor: bgColor,
        width: "100%",
      }}
    ></div>
  );
}
