//Array in Original Order.
let places_tovisit:string[]=['Saudi Arabia', 'Dubai', 'Canada', 'Turkey', 'America', 'London', 'Italy'];
console.log('Original Order: ' + places_tovisit);

//Array in Alphabetical Order.
console.log('Alphabetical Order: ' + [...places_tovisit].sort());
//Show your Array is still in its original order.
console.log('Still in its Original Order: ' + places_tovisit);
//Array in Reverse Alphabetical Order without changing the order of the original list.
console.log('Reverse Alphabetical Order: ' + [...places_tovisit].reverse());
//Show that your Array is still in its original order by printing it again.
console.log('Still in its Original Order: ' + places_tovisit);
//Reverse the order of your list.Print the array to show that its order has changed.
console.log('Reverse Original Order: ' + places_tovisit.reverse());
//Reverse the order of your list again to show it is back to its original order.
console.log('Back to its Original Order: ' + places_tovisit.reverse());
//Sort your Array so it is stored in Alphabetical Order
console.log('Sort Array in Alphabetical Order: ' + places_tovisit.sort());
//Sort to change your Array so it is reverse Alphabetical Order.
console.log('Sort Array in Reverse Alphabetical Order: '+ places_tovisit.reverse());