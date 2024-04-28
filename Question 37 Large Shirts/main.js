//Creating a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love TypeScript"; }
    console.log("Make a ".concat(size, " size shirt with the ").concat(printMessage, " message prints on shirt."));
}
//Calling a function with By Default values prints on shirt
make_shirt();
//Calling a function now with Medium size and Default message prints on shirt
make_shirt("Medium");
//Calling a function with Small size and different message prints on shirt
make_shirt("Small", "Think Positive do your best");
