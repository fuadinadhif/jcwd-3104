/* -------------------------------- Dot Then -------------------------------- */
// const tryPromise = new Promise((resolve, reject) => {
//   const success = false;

//   if (success) {
//     resolve("Promise resolved!");
//   } else {
//     reject("Promise rejected!");
//   }
// });

// console.log(tryPromise);
// tryPromise
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Promise end!"));

/* ------------------------------- Async Await ------------------------------ */
// console.log(1);
// console.log(2);

// async function asyncAwait() {
//   try {
//     const response = await tryPromise;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Promise end!");
//   }
// }

// console.log(3);
// asyncAwait();
// console.log(4);
/* ------------------------------ Real Example ------------------------------ */
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data[0]);
  } catch (error) {
    console.error(error);
  }
}

getUsers();
