/* Pseudocode - Filtering Inputs
1. Input: "Madam!"
2. Output: "Madam"
3. Store palindrome input in a variable
4. Create an array of alphabet
5. Split the palindrome variable into array
6. Make all of the characters become lower case in the palindrome variable
7. Filter palindrome array
  - If character is an alphabet, then accept
  - Else remove
8. Join the palindrome array
 */

let palindrome = "Madam! husain";
// palindrome = palindrome.toLowerCase()
const arrayOfAlphabets = "abcdefghijklmnopqrstuvwxyz ".split("");
console.log(arrayOfAlphabets);
palindrome = palindrome.split("");
palindrome = palindrome.map((el) => el.toLowerCase());
console.log(palindrome);
palindrome = palindrome.filter((el) => arrayOfAlphabets.includes(el));
console.log(palindrome);
palindrome = palindrome.join("");
console.log(palindrome);

/* -------------------------------- Includes -------------------------------- */
const array = ["Sena", "Jamal", "Arya", "Sueb"];
console.log(array.includes("Farrel"));

/* --------------------------------- Filter --------------------------------- */
const score = [50, 70, 90, 100];
console.log(score.filter((el) => el > 80));
console.log(score);
