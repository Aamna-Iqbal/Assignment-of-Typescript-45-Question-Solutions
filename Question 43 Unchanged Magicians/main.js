//Define an array which contains magician's names
var magiciansNames = ["Robert Houdin", "Harry Kellar", "Mark Wilson", "Alexander Herrmann", "Dai Vernon ", "Cardini ", "Paul Daniels"];
//By using .slice function making the copy of Original array
var copyMagiciansNames = magiciansNames.slice();
//Define a function that will show magician's names
function show_magicians(magiciansNames) {
    magiciansNames.forEach(function (name) { return console.log(name); });
}
//Define a function to modify magician's name into "The Great" magician's names through .map
function make_great(magiciansNames) {
    return magiciansNames.map(function (name) { return "The Great ".concat(name); });
}
//Modifying the array by including "The Great "with the copy of the magician's names
var copymake_great = make_great(copyMagiciansNames);
//Calling the show_magicians to show that array with Original magician's names
console.log("Showing array with Original magicians names\n");
show_magicians(magiciansNames);
//Calling the show_magicians to show that array with "The Great" added to the copy of each magician's names
console.log("Showing array with 'The Great' added to the copy of each magician's names\n");
show_magicians(copymake_great);
