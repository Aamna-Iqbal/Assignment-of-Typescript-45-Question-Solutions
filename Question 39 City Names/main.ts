//Creating a function with parameters which returns a value in string
function city_country(city:string, country:string) :string{
return `${city}, ${country}`;
}
//Calling a function and print the value that's returned
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("Toronto", "Canada"))
console.log(city_country("Canberra", "Australia"))