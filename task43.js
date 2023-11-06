"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeGreat(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        let greatMagician = "Great " + magician;
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Define an array of magician names
let magicians = ["hanif", "hassan", "hammad"];
// Make a copy of the original array and modify it with "Great"
let greatMagicians = makeGreat([...magicians]); // Create a copy using the spread operator
// Show the original array
console.log("Original Magicians:");
showMagicians(magicians);
// Show the modified array
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
