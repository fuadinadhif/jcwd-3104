console.log(this);

const identity = {
  name: "Jonathan",
  age: 25,
  showThis() {
    console.log(this.name);
    console.log(identity.name);
  },
};

identity.showThis();

/* ------------------------------------ - ----------------------------------- */

const points = { point1: 10, point2: 20, point3: 30, point4: 40 };
let totalPoints = 0;
let pointCount = 0;

for (let key in points) {
  totalPoints = totalPoints + points[key];
  pointCount++;
}

console.log(totalPoints);
console.log(pointCount);

const average = totalPoints / pointCount;

console.log(average);
