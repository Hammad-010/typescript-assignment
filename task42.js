"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magician_name) {
    for (let magician of magician_name) {
        console.log(`great ${magician}`);
    }
}
let magician_names = ["hasan", "maaz", "ali"];
make_great(magician_names);
