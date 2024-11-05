/* ----------------------------- Implementation ----------------------------- */
const arifinProfile = {
  name: "Arifin",
  age: 20,
  address: "DKI Jakarta, Indonesia",
  gender: "Male",
  phone: "+6289890970",
  program: "JCWD",
};

const fadhilProfile = {
  name: "Fadhil",
  age: 17,
  address: "Bali, Indonesia",
  gender: "Male",
  phone: "+6289890970",
  program: "JCWD",
};

class StudentProfile {
  constructor(name, age, address, gender, phone) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.gender = gender;
    this.phone = phone;
    this.program = "JCWD";
  }
}

const kaylaProfile = new StudentProfile(
  "Kayla",
  16,
  "DKI Jakarta, Indonesia",
  "Female",
  "+627401257"
);
const aldyProfile = new StudentProfile(
  "Aldy",
  23,
  "Jambi, Indonesia",
  "Male",
  "+628999910"
);

// console.log(kaylaProfile);
// console.log(aldyProfile);

/* ---------------------------------- this ---------------------------------- */
// console.log(this);

const lectureProfile = {
  name: "Annisa",
  program: "JCDM",
  showThis() {
    console.log(this);
  },
  showObject() {
    console.log(lectureProfile);
  },
};

lectureProfile.name = "Ujay";

// lectureProfile.showThis();
// lectureProfile.showObject();

/* ----------------------------- Access Modifier ---------------------------- */
class User {
  #email;

  constructor(name, email) {
    this.name = name;
    this.#email = email;
  }

  greeting() {
    console.log(`Hello ${this.name}, your email is ${this.#email}`);
  }
}

const userJoko = new User("Joko", "joko@dodo.com");
userJoko.greeting();
console.log(userJoko.name);
console.log(userJoko.email);
// console.log(userJoko.#email);

/* ----------------------------- Setter & Getter ---------------------------- */
const farrelIdentity = {
  firstName: "Farrel",
  middleName: "Ihsan",
  lastName: "Prahaditya",
  address: "",

  // get fullName() {
  //   return `My fullname is: ${this.firstName} ${this.middleName} ${this.lastName}`;
  // },

  greetingFarrel() {},

  get fullName() {
    return this.completeName;
  },

  getFullName() {
    return `My fullname is: ${this.firstName} ${this.middleName} ${this.lastName}`;
  },

  // set fullName(value) {
  //   if (typeof value === "string") {
  //     const splittedValue = value.split(" ")
  //     this.firstName = splittedValue[0]
  //     this.middleName = splittedValue[1]
  //     this.lastName = splittedValue[2]
  //   } else if (typeof value === "number") {
  //     this.firstName = value
  //     this.middleName = 000
  //     this.lastName = 999
  //   }
  // }

  set fullName(value) {
    this.completeName = value;
  },
};

// console.log(farrelIdentity.fullName);
// console.log(farrelIdentity.getFullName());
farrelIdentity.fullName = "Nadhif Fuadi";
console.log(farrelIdentity.fullName);

/* ------------------------------- Inheritance ------------------------------ */
class Product {
  constructor(productName, price, uniqueCode, productionYear, color) {
    this.productName = productName;
    this.uniqueCode = uniqueCode;
    this.price = price;
    this.productionYear = productionYear;
    this.color = color;
  }
}

class Book extends Product {
  constructor(author, productName, price, uniqueCode, productionYear, color) {
    super(productName, price, uniqueCode, productionYear, color);
    this.author = author;
  }
}

class Fruit extends Book {
  constructor(productName, price, uniqueCode, productionYear, color, flavour) {
    super(productName, price, uniqueCode, productionYear, color);
    this.flavour = flavour;
  }
}

const harryPotter = new Book(
  "JK. Rowling",
  "Harry Potter Series",
  5000000,
  "axc0b9",
  2024,
  "red"
);
console.log(harryPotter);

const apple = new Fruit();

console.log(harryPotter instanceof Book);
console.log(harryPotter instanceof Fruit);
console.log(harryPotter instanceof Product);

console.log(apple instanceof Product);
console.log(apple instanceof Book);
console.log(apple instanceof Fruit);
