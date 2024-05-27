//Lower Case
let personName:string="Maria";
console.log("lowerCase:", personName.toLowerCase());
//Upper Case
console.log("upperCase:", personName.toUpperCase());
//Title Case
console.log("titleCase:", personName.replace(/\bw/g,c=> c.toUpperCase()));