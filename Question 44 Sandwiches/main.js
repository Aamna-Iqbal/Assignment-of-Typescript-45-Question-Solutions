// Define a function with a rest parameter that accepts an array of items a person wants on a sandwich
function sandwichesRecipe() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nThe Recipe of Sandwich includes the following items:\n");
    items.forEach(function (addItems) { return console.log(addItems); });
    console.log("\nEnjoy your Tasty, Delicious and Healthy order.");
}
//Caling the function three times by using a different number of arguments
sandwichesRecipe("Special Chicken Club Sandwich:\n", "Bread", "Boneless Chicken", "Cheese", "Mayonnaise", "Chilli Sause", "Egg", "Tomato Ketchup", "Salad leaves", "Cucumber", "Capsicum", "Olives", "Mushroom", "White sause");
sandwichesRecipe("Cheesy BBQ Chicken Sandwich:\n", "Bread", "Boneless Chicken", "Cheddar Cheese", "Mozzarella Cheese", "BBQ Sause", "Onion", "Olives", "Mushroom", "Capsicum");
sandwichesRecipe("Chicken Tikka Sandwich :\n", "Bread", "Boneless Chicken", "Tikka masala", "Onion", "Salad leaves", "Cucumber", "Capsicum", "Mayonnaise", "Tomato Ketchup");
