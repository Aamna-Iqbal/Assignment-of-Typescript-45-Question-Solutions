//Creating a function
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
//Calling a function with different cities and country having default value
describe_city("Karachi");
describe_city("Islamabad");
//Calling a function with different city and country
describe_city("Chicago", "United States of America");
