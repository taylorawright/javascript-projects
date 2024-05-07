//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let firstLetter = language.slice(0, 1);
let secondLetter = language.slice(4, 5);
console.log(firstLetter.concat(secondLetter));
//2. Without using slice(), use method chaining to accomplish the same thing.
let first = language.charAt(0);
let second = language.charAt(4);
console.log(first.concat(second));
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let abbreviation = language.slice(0, 1) + language.slice(4, 5);
console.log(`The abbreviation for ${language} is ${abbreviation}`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.toUpperCase().slice(1, 4).repeat(4));
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(notTitleCase.replace('t', 'T').replace('c', 'C'));