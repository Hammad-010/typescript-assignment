"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model,
    };
    for (const [key, value] of options) {
        car[key] = value;
    }
    return car;
}
// Call the function with required and optional information
const carInfo = createCar("Honda", "Civic", ["color", "white"], ["year", 2023]);
// Print the car information
console.log(carInfo);
