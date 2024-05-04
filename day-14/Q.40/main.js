// Question 40:
//  Album: Create objects for music albums.
var make_album = function (artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
};
console.log(make_album("Artist one", "the first album"));
console.log(make_album("Artist one", "the second album"));
console.log(make_album("Artist one", "the third album", 23));
