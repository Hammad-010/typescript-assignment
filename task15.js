"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Original list of guests
const guests = ["Ali", "usama", "naveed", "haris"];
// Print the guest who can't make it
console.log("Unfortunately, " + guests[2] + " can't make it to the dinner.");
// Replace the guest who can't make it with a new person
guests[2] = "taha";
// Print a second set of invitation messages
console.log("\nUpdated Invitation List:");
for (const guest of guests) {
    console.log("Dear " + guest + ", you are invited to dinner!");
}
