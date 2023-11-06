"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Original list of guests
const guests = ["Ali", "usama", "naveed", "haris"];
// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table!");
// Add new guests
guests.unshift("junaid"); // Add to the beginning
guests.splice(2, 0, "raza"); // Add to the middle
guests.push("hassan"); // Add to the end
// Print new set of invitation messages
console.log("\nUpdated Invitation List:");
for (const guest of guests) {
    console.log("Dear " + guest + ", you are invited to dinner!");
}
