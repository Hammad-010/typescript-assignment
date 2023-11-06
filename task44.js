"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function orderSandwich(...items) {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
}
// Call the function three times with different numbers of arguments
orderSandwich("egg", "kabab", "Tomato");
orderSandwich("chicken", "Cheese");
orderSandwich(); // Empty sandwich
