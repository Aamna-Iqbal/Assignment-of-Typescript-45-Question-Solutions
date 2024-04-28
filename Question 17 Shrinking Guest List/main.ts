let guest_list:string[]=['Ayesha', 'Fatima', 'Maryam', 'Kinza', 'Hira', 'Anaya','Aliza'];
let guest_absent:string='Kinza';
let new_guest :string='Areeba';
guest_list[3]=new_guest;
guest_list.unshift('Maria');
guest_list.splice(4,0,'Maham');
guest_list.push('Khadija');
console.log('\nUnfortunately, We just found that our new dinner table will not arrive in time for dinner, and we have space for only two guests')
while(guest_list.length>2){
 let remove_guest =guest_list.pop();
console.log(`Sorry Friend ${remove_guest}, \nYou are not invited for dinner party.`);
}
for(let i=0; i<guest_list.length; i++){
console.log('Dear Friend ' + guest_list[i] + ',\nYou are still invited for dinner party.\nThank You!\n')
}
guest_list.splice(0,2);
console.log(guest_list)