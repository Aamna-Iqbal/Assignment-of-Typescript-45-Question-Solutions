//Creating a Array
var pizza_flavors = ["Chicken Tikka", "Malai Boti", "Chicken Fajita"];
//Using For loop
for (var _i = 0, pizza_flavors_1 = pizza_flavors; _i < pizza_flavors_1.length; _i++) {
    var favoritePizza = pizza_flavors_1[_i];
    console.log("I like ".concat(favoritePizza, " pizza."));
}
//Printing of the message outside the For loop
console.log("I really love pizza!");
