//Lower Case
var personName = "Maria";
console.log("lowerCase:", personName.toLowerCase());
//Upper Case
console.log("upperCase:", personName.toUpperCase());
//Title Case
console.log("titleCase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
