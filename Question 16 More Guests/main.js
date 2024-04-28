var guest_list = ['Ayesha', 'Fatima', 'Maryam', 'Kinza', 'Hira', 'Anaya', 'Aliza'];
var guest_absent = 'Kinza';
var new_guest = 'Areeba';
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Friend ' + guest_list[i] + ',\nWe are having a dinner party and it wiil be delighted for us if you could join us.\n\nThank You!');
}
console.log("Miss ".concat(guest_absent, " will not come in dinner party."));
guest_list.unshift('Maria');
guest_list.splice(4, 0, 'Maham');
guest_list.push('Khadija');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Friend ' + guest_list[i] + ',\nWe are having a dinner party and it wiil be delighted for us if you could join us.\n\nThank You!\nWe have found a bigger dinner table, so now more space is available and we have decided to invite 3 more guest in dinner party.');
}
