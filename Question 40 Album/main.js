//Creating the make_album function and define it's value
function make_album(artist_name, album_titles, tracks) {
    var album = {
        artist: artist_name,
        title: album_titles,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling three functions and creating three variables which have parameters with different values
var albumNo1 = make_album("Maria", "Album title No:1");
var albumNo2 = make_album("Ahmed", "Album title No:2");
var albumNo3 = make_album("Saad", "Album No 3", 40);
//Printing values of our objects created by function
console.log(albumNo1);
console.log(albumNo2);
console.log(albumNo3);
