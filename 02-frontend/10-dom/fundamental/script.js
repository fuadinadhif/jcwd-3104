// console.log("Connected!");

// const simpleObj = {
//   name: "John",
//   age: 70,
//   address: "England",
// };

// console.dir(document);
// console.dir(simpleObj);

// document.children[0].children[1].children[0].classList.add("content");

// const horas = document.getElementById("hore");
// const paragraph = document.getElementsByClassName("paragraph");

// paragraph[0].classList.add("text");

// console.log(horas);
// console.log(paragraph);

const ourButton = document.getElementsByTagName("button");
console.log(ourButton);

ourButton[0].addEventListener("click", () => {
  const h1Title = document.querySelector(".title");

  h1Title.style.color = "yellow";
});
