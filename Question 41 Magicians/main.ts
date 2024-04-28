//Define an array which contains magician's names
let magiciansNames =["Robert Houdin", "Harry Kellar", "Mark Wilson", "Alexander Herrmann", "Dai Vernon ", "Cardini ", "Paul Daniels"];
//Define a function for printing magician's names from an array
function show_magicians(magiciansNames:string[]){
magiciansNames.forEach(name => console.log(name));

}
//Calling the function for printing each magician's names from an array
show_magicians(magiciansNames);