const students = [
  { name: "Arya", age: "2005-01-01", email: "arya@mail.com", score: 88 },
  { name: "Aldy", age: "2001-01-01", email: "aldy@mail.com", score: 89 },
  { name: "Arifin", age: "1999-01-01", email: "arifin@mail.com", score: 100 },
  { name: "Joko", age: "2024-01-01", email: "joko@mail.com", score: 10 },
];

function calculateStudentDate(students) {
  let highestScore = -Infinity;
  let lowestScore = Infinity;
  let oldestAge = -Infinity;
  let youngestAge = Infinity;
  const studentsTotal = students.length;
  let totalScore = 0;
  let totalAge = 0;

  for (let element of students) {
    totalScore = totalScore + element.score;
    if (element.score > highestScore) {
      highestScore = element.score;
    }
    if (element.score < lowestScore) {
      lowestScore = element.score;
    }

    let age = new Date().getFullYear() - new Date(element.age).getFullYear();
    totalAge = totalAge + age;
    if (age > oldestAge) {
      oldestAge = age;
    }
    if (age < youngestAge) {
      youngestAge = age;
    }
  }

  averageScore = totalScore / studentsTotal;
  averageAge = Math.floor(totalAge / studentsTotal);

  return {
    score: {
      highest: highestScore,
      lowest: lowestScore,
      average: averageScore,
    },
    age: {
      oldest: oldestAge,
      youngest: youngestAge,
      average: averageAge,
    },
  };
}

console.log(calculateStudentDate(students));
