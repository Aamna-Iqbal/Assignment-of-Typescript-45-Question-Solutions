var guest_list = ['Ayesha', 'Fatima', 'Maryam', 'Kinza', 'Hira', 'Anaya', 'Aliza'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Friend ' + guest_list[i] + ',\nWe are having a dinner party and it wiil be delighted for us if you could join us.\n\nThank You!');
}
var guest_absent = 'Kinza';
var new_guest = 'Areeba';
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Friend ' + guest_list[i] + ',\nWe are having a dinner party and it wiil be delighted for us if you could join us.\n\nThank You!');
}
console.log("Miss ".concat(guest_absent, " will not come in dinner party."));
