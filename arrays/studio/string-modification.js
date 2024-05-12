const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str2 = str.slice(0, 3);
let str3 = str.slice(3);
let pigLatin = str3 + str2

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userQuery = input.question("How many letters will you relocate in the word LaunchCode to make it pig-latin?")
str2 = str.slice(0, userQuery);
str3 = str.slice(userQuery);
pigLatin = str3 + str2
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userQuery == 3) {
    console.log(`Perfect! we move 3 letters from the front to the back of the word, and
     ${str} in pig-latin looks like this! ${pigLatin}`);
} else if ((userQuery > 3 && userQuery <= 10) || userQuery < 3){
    console.log(`Not quite, you actually need to move 3 letters to the back of the word so that  
    ${str} in pig-latin looks like this! ${pigLatin}`);
} else {
    console.log(`Thats too many letters, silly! If you rearrange the first 3 letters to the back of the word, 
    ${str} in pig-latin looks like this! ${pigLatin}`);
}