let ordinalNumbers =[1,2,3,4,5,6,7,8,9];
//Using For-loop
for (let arrayNumbers of ordinalNumbers){
let ordinalnumbersEnding :string
if (arrayNumbers === 1){
ordinalnumbersEnding= "st"
}else if (arrayNumbers === 2){
ordinalnumbersEnding = "nd"
}else if (arrayNumbers === 3){
ordinalnumbersEnding = "rd"
}
else{
ordinalnumbersEnding = "th"}
console.log(`${arrayNumbers}${ordinalnumbersEnding}`)
}