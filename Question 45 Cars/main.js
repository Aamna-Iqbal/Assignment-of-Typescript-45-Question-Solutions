//Define a function that stores information about a car in a Object
function carFeatures(manufacturer, model) {
    var optional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optional[_i - 2] = arguments[_i];
    }
    //Function is receiving a manufacturer and a model name
    var car = {
        manufacturerName: manufacturer,
        modelName: model
    };
    //Function is accepting an arbitary number of keyword arguments
    optional.forEach(function (optional) {
        var _a = optional.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call the function with the required information and two other name-value pairs, such as color or other optioonal  features
var this_car = carFeatures("Honda", "City", "color:Grey", "Airbags:True");
//Print the Object that is returned to make sure all the information was stored correctly
console.log(this_car);
