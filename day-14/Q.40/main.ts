// Question 40:
//  Album: Create objects for music albums.
let make_album = (artist: string, title: string, tracks?: number) => {
  let album = { artist, title };

  if (tracks) {
    album["tracks"] = tracks;
  }
  return album;
};
console.log(make_album("Artist one", "the first album"));
console.log(make_album("Artist one", "the second album"));
console.log(make_album("Artist one", "the third album", 23));
