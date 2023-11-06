function describeCity(name : string, country : string = "pakistan"): void{
    console.log(`${name} is in ${country}.`);
}
describeCity("lahore","pakistan");
describeCity("sydney","australia");
describeCity("paris","france");