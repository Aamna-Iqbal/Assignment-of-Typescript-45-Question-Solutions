let guest_list:string[]=['Ayesha', 'Fatima', 'Maryam', 'Kinza', 'Hira', 'Anaya','Aliza'];
let guest_absent:string='Kinza';
let new_guest :string='Areeba';
guest_list[3]=new_guest;
for(let i=0; i<guest_list.length;i++){
console.log('Dear Friend ' + guest_list[i] + ',\nWe are having a dinner party and it wiil be delighted for us if you could join us.\n\nThank You!')
}
console.log(`Miss ${guest_absent} will not come in dinner party.` )
guest_list.unshift('Maria');
guest_list.splice(4,0,'Maham');
guest_list.push('Khadija');
for(let i=0; i<guest_list.length; i++){
console.log('Dear Friend ' + guest_list[i] + ',\nWe are having a dinner party and it wiil be delighted for us if you could join us.\n\nThank You!\nWe have found a bigger dinner table, so now more space is available and we have decided to invite 3 more guest in dinner party.')
}
