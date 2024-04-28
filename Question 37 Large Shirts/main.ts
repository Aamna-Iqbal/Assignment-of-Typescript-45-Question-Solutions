//Creating a Function
function make_shirt(size:string= "Large", printMessage:string ="I love TypeScript"){
console.log(`Make a ${size} size shirt with the ${printMessage} message prints on shirt.`)
}
//Calling a function with By Default values prints on shirt
make_shirt();
//Calling a function now with Medium size and Default message prints on shirt
make_shirt("Medium")
//Calling a function with Small size and different message prints on shirt
make_shirt("Small", "Think Positive do your best")