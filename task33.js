"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of numbers) {
    let ordinalSuffix;
    if (num === 1) {
        ordinalSuffix = 'st';
    }
    else if (num === 2) {
        ordinalSuffix = 'nd';
    }
    else if (num === 3) {
        ordinalSuffix = 'rd';
    }
    else {
        ordinalSuffix = 'th';
    }
    console.log(`${num}${ordinalSuffix}`);
}
