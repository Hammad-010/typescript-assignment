"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeshirt(size = "large", message = "i love typescript") {
    console.log(`the size of the shirt is : ${size}`);
    console.log(`the message is : ${message}`);
}
makeshirt();
makeshirt("medium");
makeshirt("small", "hello world");
