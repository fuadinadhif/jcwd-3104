/* ------------------------------ Error from JS ----------------------------- */
const studentName = "John";
// studentName = "Jane";

/* ------------------------------ Error from Us ----------------------------- */
// const sucess = false;

// if (sucess) {
//   console.log("We are succeed!");
// } else {
//   throw new Error("Itentional error");
// }

/* -------------------------- Handle Error Internal ------------------------- */
function handleError() {
  try {
    const success = false;

    if (success) {
      console.log("We are succeed again!");
    } else {
      throw new Error("Error again!");
    }

    console.log("Lalala");
  } catch (error) {
    console.error(error.message);
  }
}

// handleError();

/* ----------------------- Handle Error Fetching Data ----------------------- */
async function getUsers1() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (response.status === 404) {
      throw new Error("Something is wrong with us!");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

getUsers1();
