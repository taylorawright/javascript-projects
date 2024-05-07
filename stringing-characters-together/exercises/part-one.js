let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(1001));
console.log(typeof String(1001));
console.log(String(1001).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let numTwo = 12.45
let numTwoLength = String(numTwo).length-1;
console.log(numTwoLength);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
let numX = 12387699.01
if (String(numX).includes('.')){
    console.log(String(numX).length - 1);
} else {
    console.log(String(numX).length);
}