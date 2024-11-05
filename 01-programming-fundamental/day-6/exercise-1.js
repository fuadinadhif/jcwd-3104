const students = [
  { name: "Arya", age: "2005-01-01", email: "arya@mail.com", score: 88 },
  { name: "Aldy", age: "2001-01-01", email: "aldy@mail.com", score: 89 },
  { name: "Arifin", age: "1999-01-01", email: "arifin@mail.com", score: 100 },
];

function calculateStudentDate(students) {
  let highestScore = 0;
  let oldestAge = 0;

  students.forEach((element) => {
    if (element.score > highestScore) {
      highestScore = element.score;
    }

    const age = new Date().getFullYear() - new Date(element.age).getFullYear();
    if (age > oldestAge) {
      oldestAge = age;
    }
  });

  return {
    score: {
      highest: highestScore,
      lowest: "-",
      average: "-",
    },
    age: {
      oldest: oldestAge,
      youngest: "-",
      average: "-",
    },
  };
}

console.log(calculateStudentDate(students));
