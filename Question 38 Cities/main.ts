//Creating a function
function describe_city (city:string, country:string = "Pakistan"){
console.log(`${city} is in ${country}.`);
}
//Calling a function with different cities and country having default value
describe_city("Karachi");
describe_city("Islamabad");
//Calling a function with different city and country
describe_city("Chicago", "United States of America")
