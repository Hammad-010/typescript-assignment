"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeAlbum(artist, title, tracks) {
    let album = {
        artist,
        title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three album objects
let album1 = makeAlbum('Artist 1', 'Album 1');
let album2 = makeAlbum('Artist 2', 'Album 2');
let album3 = makeAlbum('Artist 3', 'Album 3', 12);
// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);
