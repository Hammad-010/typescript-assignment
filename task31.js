"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Original list of users
const users = ["hammad", "haris", "usama", "naveed", "ali"];
// Check if the list of users is not empty
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Remove all usernames from the array
    users.length = 0;
    // Print a message indicating that all usernames are removed
    console.log("All usernames are removed.");
}
// Check if the list is now empty
if (users.length === 0) {
    console.log("The list of users is empty.");
}
else {
    console.log("Remaining users:");
    for (const user of users) {
        console.log(user);
    }
}
