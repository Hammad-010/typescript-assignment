
interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function makeAlbum(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
      artist,
      title,
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Create three album objects
  let album1: Album = makeAlbum('Artist 1', 'Album 1');
  let album2: Album = makeAlbum('Artist 2', 'Album 2');
  let album3: Album = makeAlbum('Artist 3', 'Album 3', 12); 
  
  // Print the album information
  console.log(album1);
  console.log(album2);
  console.log(album3);
  