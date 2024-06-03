let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 2,
   move: function () { return Math.floor(Math.random() * 11) }
   
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 5,
   move: function () { return Math.floor(Math.random() * 11) }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 4,
   move: function () { return Math.floor(Math.random() * 11) }
};

let astroDog = {
   name: "Leroy",
   species: "Dog",
   mass: 14,
   age: 5,
   astronautID: 7,
   move: function () { return Math.floor(Math.random() * 11) }
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 9,
   move: function () { return Math.floor(Math.random() * 11) }
};

let crew = [superChimpOne, superChimpTwo, salamander, astroDog, waterBear];

function crewReports(animal) {
   report = console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`)

   return report;
};

function fitnessTest(array) {
   let raceScores = [];
   for (let i = 0; i < array.length; i++){
      numberOfMoves = Math.ceil(20 / array[i].move());
      raceString = `${array[i].name} took ${numberOfMoves} turns to take 20 steps.`;
      raceScores.push(raceString);
   }
   return raceScores;
};
console.log(fitnessTest(crew));
// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
