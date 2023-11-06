function makeshirt(size: string = "large", message : string = "i love typescript"): void{
    console.log(`the size of the shirt is : ${size}`);
    console.log(`the message is : ${message}`);
}

makeshirt();
makeshirt("medium")
makeshirt("small","hello world")