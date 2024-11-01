function countDown(startCount) {
  console.log(startCount);

  let nextNumber = startCount - 1;

  if (nextNumber >= 0) {
    countDown(nextNumber);
  }
}

countDown(5);
