"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["hammad", "haris", "tahir"];
// Print a message to the guests
console.log("\nInvitation List:");
for (let guest of guests) {
    console.log("Dear " + guest + ", you are  invited to dinner!");
}
// Print a message indicating the number of people invited to dinner
console.log("Number of people invited to dinner: " + guests.length);
