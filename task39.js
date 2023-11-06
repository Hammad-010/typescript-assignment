"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    return `${city},${country}`;
}
let output1 = city_country("lahore", "pakistan");
let output2 = city_country("dubai", "UAE");
let output3 = city_country("paris", "france");
console.log(output1);
console.log(output2);
console.log(output3);
