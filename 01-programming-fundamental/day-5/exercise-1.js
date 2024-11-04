/* ---------------------------- Fibonacci Numbers --------------------------- */

function fibonacci(n) {
  let a = 0;
  let b = 1;

  if (n === 1) {
    console.log(a);
    return;
  }

  for (let i = 2; i <= n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}

fibonacci(15);

/* ------------------------------------ 1 ----------------------------------- */
function printMultiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

printMultiplicationTable(5);

/* ------------------------------------ 2 ----------------------------------- */
// 1.
function isPalindrome(string) {
  const length = string.length;

  for (let i = 0; i < length / 2; i++) {
    if (string[i].toLowerCase() !== string[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("bed"));

function isPalindromeBuiltIn(string) {
  let reverseString = string.split("").reverse().join("");
  if (string.toLowerCase() === reverseString.toLowerCase()) return true;
  return false;
}

console.log(isPalindromeBuiltIn("purwadhika"));
console.log(isPalindromeBuiltIn("Civic"));

/* ------------------------------------ 3 ----------------------------------- */
function cmToKm(cm) {
  let km = cm / 100_000;
  return `${km} Km`;
}

console.log(cmToKm(100000));
console.log(cmToKm(1000000));

/* ------------------------------------ 4 ----------------------------------- */
function formatToIDR(amount) {
  let amountInStr = String(amount);
  let zeroCount = 0;
  let result = "";

  console.log(amountInStr.length - 1);

  for (let i = amountInStr.length - 1; i >= 0; i--) {
    console.log(amountInStr[i]);
    if (zeroCount > 0 && zeroCount % 3 === 0) {
      result = "." + result;
      console.log(result);
    }

    result = amountInStr[i] + result;
    console.log(result);
    zeroCount++;
  }

  return `Rp. ${result}`;
}

console.log(formatToIDR(100000));

function formatToIDRBuiltIn(amount) {
  const result = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
  }).format(amount);

  return result;
}

console.log(formatToIDRBuiltIn(200000));

/* ------------------------------------ 5 ----------------------------------- */
function removeFirstOccurence(text, targetString) {
  const searchPattern = new RegExp(targetString, "g");
  return text.replace(searchPattern, "");
}

console.log(removeFirstOccurence("Hello dello sello", "lo"));
