"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describeCity(name, country = "pakistan") {
    console.log(`${name} is in ${country}.`);
}
describeCity("lahore", "pakistan");
describeCity("sydney", "australia");
describeCity("paris", "france");
