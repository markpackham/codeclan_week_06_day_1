// const scenario = {
//   murderer: "Miss Scarlet",
//   room: "Library",
//   weapon: "Rope",
// };

// const declareMurderer = function () {
//   return `The murderer is ${scenario.murderer}.`;
// };

// const verdict = declareMurderer();
// console.log(verdict);

// Miss Scarlet
// const is block scoped and we are accessing it, also she is the only suspect assuming the death wasn't a suicide or a faked death
// Correct

/////////////////

// const murderer = "Professor Plum";

// const changeMurderer = function () {
//   murderer = "Mrs. Peacock";
// };

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// };

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// Function won't run, mistrial
// Const can't be changed unless you're dealing with an Object or Array
// Correct

/////////////////

// let murderer = "Professor Plum";

// const declareMurderer = function () {
//   let murderer = "Mrs. Peacock";
//   return `The murderer is ${murderer}.`;
// };

// const firstVerdict = declareMurderer();
// console.log("First Verdict: ", firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log("Second Verdict: ", secondVerdict);
// Mrs. Peakcock first verdict
// Professor Plum 2nd verdict
// Let is changeable but block scoped
// Correct

/////////////////

// let suspectOne = "Miss Scarlet";
// let suspectTwo = "Professor Plum";
// let suspectThree = "Mrs. Peacock";

// const declareAllSuspects = function () {
//   let suspectThree = "Colonel Mustard";
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// };

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);
// Miss Scarlet, Professor Plum, Colonel Mustard
// Mrs. Peakcock
// Block scopping but Let is changeable
// Correct

/////////////////

// const scenario = {
//   murderer: "Miss Scarlet",
//   room: "Kitchen",
//   weapon: "Candle Stick",
// };

// const changeWeapon = function (newWeapon) {
//   scenario.weapon = newWeapon;
// };

// const declareWeapon = function () {
//   return `The weapon is the ${scenario.weapon}.`;
// };

// changeWeapon("Revolver");
// const verdict = declareWeapon();
// console.log(verdict);
// Revolver
// Const can be changed when you change an Object or Array
// Correct

/////////////////

// let murderer = "Colonel Mustard";

// const changeMurderer = function () {
//   murderer = "Mr. Green";

//   const plotTwist = function () {
//     murderer = "Mrs. White";
//   };

//   plotTwist();
// };

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// };

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// Colonel Mustard
// the plotTwist() will have no effect due to block scopping
// WRONG - murderer was Mrs. White so the result did get overriden

///////////////

// let murderer = "Professor Plum";

// const changeMurderer = function () {
//   murderer = "Mr. Green";

//   const plotTwist = function () {
//     let murderer = "Colonel Mustard";

//     const unexpectedOutcome = function () {
//       murderer = "Miss Scarlet";
//     };

//     unexpectedOutcome();
//   };

//   plotTwist();
// };

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// };

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// // Miss Scarlet
// // The called methods are within the Block
// // WRONG - Mr. Green

///////////////

// const scenario = {
//   murderer: "Mrs. Peacock",
//   room: "Conservatory",
//   weapon: "Lead Pipe",
// };

// const changeScenario = function () {
//   scenario.murderer = "Mrs. Peacock";
//   scenario.room = "Dining Room";

//   const plotTwist = function (room) {
//     if (scenario.room === room) {
//       scenario.murderer = "Colonel Mustard";
//     }

//     const unexpectedOutcome = function (murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = "Candle Stick";
//       }
//     };

//     unexpectedOutcome("Colonel Mustard");
//   };

//   plotTwist("Dining Room");
// };

// const declareWeapon = function () {
//   return `The weapon is ${scenario.weapon}.`;
// };

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// Candle Stick
// changeScenario got called changing the murder weapon used
// CORRECT

//////////////////

// let murderer = "Professor Plum";

// if (murderer === "Professor Plum") {
//   let murderer = "Mrs. Peacock";
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// };

// const verdict = declareMurderer();
// console.log(verdict);
// Proffesor Plum
// The if statement will have little impact since nothing is being returned
// CORRECT

////////////////////

// My own episode

var murderer = "The Var Killer";

if (murderer === "The Var Killer") {
  var murderer = "The Var Killer Can Not Be Contained";
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

const verdict = declareMurderer();
console.log(verdict);
// The Var Killer Can Not Be Contained
// CORRECT
