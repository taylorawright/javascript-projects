let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";



strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas(commaString) {
	//TODO: 1. create and instantiate your variables.
	let check = commaString;
	let output = check.split(',').reverse().join(',');
	
	//TODO: 2. write the code required for this step
	if (check.includes(',')) {
		output;
}
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash(hasSemicolon) {
	let check = hasSemicolon;
	let output =  check.split(';').sort().join('-');
//TODO: write the code required for this step
	if (check.includes(';')) {
		output;
}
  
	return output;
}

//4)
function reverseSpaces(hasSpace) {
	let check = hasSpace;
	let output = check.split(' ').sort().reverse().join(' ');
  //TODO: write the code required for this step
	if (check.includes(' ')) {
		output;
}
	return output;
}

//5)
function commaSpace(hasCommaSpace) {
	let check = hasCommaSpace;
	let output = check.split(', ').reverse().join(',');
	//TODO: write the code required for this step
	if (check.includes(', ')) {
		output;
  }
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
