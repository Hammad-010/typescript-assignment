"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myName = "Hammad Khan";
// lower case
let lowercase = myName.toLowerCase();
console.log(lowercase);
// upper case
let uppercase = myName.toUpperCase();
console.log(uppercase);
// title case
function toTitlecase(input) {
    return input.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
}
let titlecasestring = toTitlecase(myName);
console.log(titlecasestring);
