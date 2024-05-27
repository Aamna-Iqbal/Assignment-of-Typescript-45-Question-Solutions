//Define a function that stores information about a car in a Object
function carFeatures(manufacturer, model, ...optional){
//Function is receiving a manufacturer and a model name
let car = {
manufacturerName:manufacturer,
modelName: model
};
//Function is accepting an arbitary number of keyword arguments
optional.forEach(optional => {
let [key, value] = optional.split(":");
car[key.trim()] = value.trim();
});
return car;
}
//Call the function with the required information and two other name-value pairs, such as color or other optional features
let this_car = carFeatures("Honda", "City", "color:Grey", "Airbags:True");
//Print the Object that is returned to make sure all the information was stored correctly
console.log(this_car);