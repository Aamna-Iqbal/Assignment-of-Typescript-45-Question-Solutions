//Define an array which contains magician's names
var magiciansNames = ["Robert Houdin", "Harry Kellar", "Mark Wilson", "Alexander Herrmann", "Dai Vernon ", "Cardini ", "Paul Daniels"];
//Define a function for printing magician's names from an array
function show_magicians(magiciansNames) {
    magiciansNames.forEach(function (name) { return console.log(name); });
}
//Calling the function for printing each magician's names from an array
show_magicians(magiciansNames);
