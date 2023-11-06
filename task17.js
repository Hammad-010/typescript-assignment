"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Original list of guests
const guests = ["Ali", "usama", "naveed", "haris", "junaid", "raza", "hassan"];
// Inform about the limited dinner space
console.log("Sorry, we can only invite two people for dinner.");
// Remove guests until only two remain
while (guests.length > 2) {
    const removedGuest = guests.pop(); // Remove and get the last guest
    console.log("Sorry, " + removedGuest + ", we can't invite you to dinner.");
}
// Print a message to the two remaining guests
for (const guest of guests) {
    console.log("Dear " + guest + ", you are still invited to dinner!");
}
// Remove the last two names to have an empty list
guests.pop();
guests.pop();
// Print the list to confirm it's empty
console.log("\nEmpty Invitation List:", guests);
