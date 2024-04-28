//Define an array which contains magician's names
let magiciansNames =["Robert Houdin", "Harry Kellar", "Mark Wilson", "Alexander Herrmann", "Dai Vernon ", "Cardini ", "Paul Daniels"];
//By using .slice function making the copy of Original array
let copyMagiciansNames = magiciansNames.slice()
//Define a function that will show magician's names
function show_magicians(magiciansNames:string[]){
magiciansNames.forEach(name => console.log(name));
}
//Define a function to modify magician's name into "The Great" magician's names through .map
function make_great(magiciansNames:string[]){
return magiciansNames.map(name => `The Great ${name}`);
}
//Modifying the array by including "The Great "with the copy of the magician's names
let copymake_great = make_great(copyMagiciansNames);
//Calling the show_magicians to show that array with Original magician's names
console.log("Showing array with Original magicians names\n")
show_magicians(magiciansNames);
//Calling the show_magicians to show that array with "The Great" added to the copy of each magician's names
console.log("Showing array with 'The Great' added to the copy of each magician's names\n")
show_magicians(copymake_great);

 