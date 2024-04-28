//Define an array which contains magician's names
let magiciansNames =["Robert Houdin", "Harry Kellar", "Mark Wilson", "Alexander Herrmann", "Dai Vernon ", "Cardini ", "Paul Daniels"];
//Call make_great function for modifying magician's names
let great_magicians = make_great(magiciansNames)
//Define a function that will show magician's names
function show_magicians(magiciansNames:string[]){
magiciansNames.forEach(name => console.log(name));
}
//Define a function to modify magician's name into "The Great" magician's names through .map
function make_great(magiciansNames:string[]){
return magiciansNames.map(name => `The Great ${name}`);
}
//Call magicians's names to print modified list of magician's names
show_magicians(great_magicians);