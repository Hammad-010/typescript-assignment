"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create an array of current users
let currentUsers = ['ali', 'hasan', 'Ahmed', 'Basit', 'Hammad'];
// Create an array of new users
let newUsers = ['ahmed', 'Basit', 'Abdullah', 'Rayan', 'Hammad'];
// Convert the currentUsers array to lowercase for case-insensitive comparison
let currentUsersLower = currentUsers.map(user => user.toLowerCase());
// Loop through the newUsers array
for (let newUser of newUsers) {
    // Check if the new username is already in use (case-insensitive)
    if (currentUsersLower.includes(newUser.toLowerCase())) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different one.`);
    }
    else {
        console.log(`The username '${newUser}' is available.`);
    }
}
