"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// List of animals with a common characteristic
const animals = ["Dog", "Cat", "Rabbit"];
// Print the name of each animal and a statement about them
for (const animal of animals) {
    let statement = "";
    switch (animal) {
        case "Dog":
            statement = "A dog would make a great pet.";
            break;
        case "Cat":
            statement = "A cat is an independent and low-maintenance pet.";
            break;
        case "Rabbit":
            statement = "A rabbit is a gentle and social animal.";
            break;
        default:
            statement = "This animal is unique!";
    }
    console.log(animal + ": " + statement);
}
// Print a line stating what these animals have in common
console.log("Any of these animals would make a great pet!");
