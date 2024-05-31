//Create an anonymous function and set it equal to a variable.
let arr = ['Elocution', 21, 'Clean teeth', 100];
/*
let strFunc = function (str) {
    return str;
}
console.log(strFunc('ARRR!'));
let numFunc = function (a) {
    if (x[i])
    return a * 3;
}
console.log(numFunc(3));
/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
let arrrTriple = function (x) {
    if (typeof (x) === 'string') {
        return x = ('ARRR');
    } else if (typeof (x) === 'number') {
        return x * 3;
    }
};
let arrayChange = arr.map(arrrTriple);

console.log(arrayChange);
/* Add to your code! Use your fuction and the map method to change an x  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new x to confirm your work.
*/

