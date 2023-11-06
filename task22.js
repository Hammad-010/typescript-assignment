"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3, 4, 5];
//  (intentional error)
console.log(numbers[6]);
// The line above would cause an "Index" error.
// To correct the error, we should use a valid index number :
console.log(numbers[2]);
