let myName:string = "Hammad Khan"

// lower case

let lowercase:string = myName.toLowerCase()
console.log(lowercase)

// upper case

let uppercase:string = myName.toUpperCase()
console.log(uppercase)

// title case

function toTitlecase(input:string):string
{
    return input.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
}
let titlecasestring = toTitlecase(myName)
console.log(titlecasestring) 
