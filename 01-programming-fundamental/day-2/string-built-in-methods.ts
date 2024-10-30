/* -------------------------- Function Introduction ------------------------- */
function sayHello() {
  console.log("Hello");
  console.log("World");
}

// console.log("First");

/*




*/

// sayHello();

/* --------------------------- Method Introduction -------------------------- */
const greetings = {
  name: "John Doe",
  address: {
    country: "England",
    postalCode: 55428,
  },
  sayHi: function () {
    console.log("Hai");
  },
};

// console.log(greetings.address.postalCode);
// greetings.sayHi();

/* ------------------------- String Built In Methods ------------------------ */
const lyrics = "INDONESIA RAYA!";
const points = 100;
// console.log(lyrics.toLowerCase());
// console.log("I'm a little characters".toUpperCase());

const fullName = "Fulan Fulanah Binti Fulun";
const arrayFullName = fullName.split(" ");
console.log(arrayFullName);
console.log(arrayFullName.join("-"));

const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.replace(/Dog/gi, "cat"));

const title = "      This        is a title      ";
console.log(title);
const firstCharacter = title.trim().charAt(0).toUpperCase();
console.log(firstCharacter);
