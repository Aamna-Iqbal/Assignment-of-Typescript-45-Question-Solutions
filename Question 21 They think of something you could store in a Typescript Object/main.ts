interface item {
Name:string;
Price:number;
}
//Creating two Objects
let chocolateName:item ={
Name:'Cadbury Dairy Milk',
Price:350
}
let FoodName:item={
Name:'Singaporian Rice',
Price:1200
}
console.log(`Chocolate Name: ${chocolateName.Name}\nPrice: Rs.${chocolateName.Price} `)
console.log(`Food Name: ${FoodName.Name}\nPrice: Rs.${FoodName.Price}`)
