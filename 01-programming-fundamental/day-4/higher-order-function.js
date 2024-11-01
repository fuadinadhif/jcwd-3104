/* ---------------------------- Return A Function --------------------------- */
function greetMe(name) {
  const hiYou = function () {
    return `Hi ${name}`;
  };

  return hiYou;
}

// const greetMeOn = greetMe("Adam");
// console.log(greetMeOn);
// console.log(greetMeOn());
// console.log(greetMe("John")());

/* ----------------------------- Take A Function ---------------------------- */
function hiHim(ismi) {
  return `Hai ${ismi}`;
}

function greetHim(callback, name) {
  return callback(name);
}

console.log(greetHim(hiHim, "Joko"));
