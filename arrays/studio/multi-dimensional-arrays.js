let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(',').sort();
equipment = equipment.split(',').sort();
pets = pets.split(',').sort();
sleepAids = sleepAids.split(',').sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [food, equipment, pets, sleepAids];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let cabinetQuery = input.question('Please select a cargo cabinet 0 through 3: ');
let cabinet = cargoHold[cabinetQuery]
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (cabinetQuery <= 3) {
    console.log(`This cabinet contains ${cabinet}`);
} else {
    console.log("Error: This is not a valid cabinet number.")
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
cabinetQuery = input.question('Please select a cargo cabinet 0 through 3: ');
let itemQuery = ''
itemQuery = input.question('Great, which item are you looking for? ')

if (cabinet.includes(itemQuery)) {
    console.log(`Cabinet ${cabinetQuery} DOES contain ${itemQuery}.`)
} else {
    console.log(`Cabinet ${cabinetQuery} DOES NOT contain ${itemQuery}.`)
}