let chocolateName:string='Cadbury Dairy Milk';
let age=30
let number:number=45
let flowerNames:string[]=['Rose', 'Sunflower', 'Jasmine', 'Tulip', 'Lily', 'Hibiscus', 'Daisy', 'Daffodil']
//Test 1 For Equility with strings
console.log("Is chocolateName=='Cadbury Dairy Milk?'");
console.log(chocolateName=='Cadbury Dairy Milk');
//Test 2 For Inequility with strings
console.log("Is chocolateName!='Cadbury Dairy Milk?");
console.log(chocolateName!='Cadbury Dairy Milk');
//Test 3 Using lower case function
console.log("Is chocolateName=='cadbury dairy milk' after converting to lower case ");
console.log(chocolateName.toLowerCase()=='cadbury dairy milk');
//Test 4 Using upper case function
console.log("Is chocolateName!=='cadbury dairy milk' after converting to lowercase?");
console.log(chocolateName.toLowerCase()!=='cadbury dairy milk');
//Test 5 Numerical Tests involving Equility
console.log("Is age==30?");
console.log(age==30);
//Test 6 Numerical Test involving Inequility
console.log("Is age!=30?");
console.log(age!=30);
//Test 7 Numerical Tests involving Greater than
console.log("Is number >40?");
console.log(number >40);
//Test 8 Numerical Tests involving Less than
console.log("Is number <35?");
console.log(number <35);
//Test 9 Greater than or Equal to
console.log("Is age >=30?");
console.log(age >=30);
//Test 10 Less than or Equal to
console.log("Is age <=25?");
console.log(age <=25);
//Test using and Operator
console.log("Is number>40 && number <50?")
console.log(number>40 && number<50);
//Test using 0r Operator
console.log("Is age<25 || age!=30");
console.log(age>35 || age!=30 );
//Test whether an item is in a Array
console.log("Is Sunflower is present in my Array?");
console.log(flowerNames.includes('Sunflower'));
//Test whether an item is not in a Array
console.log("Is Tulip is not present in Array?");
console.log(!flowerNames.includes('Tulip'));










