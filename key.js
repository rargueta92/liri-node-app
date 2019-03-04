
var spotify = {
  id:process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

var omdb = process.env.OMDB_KEY;

var bandsintown = process.env.BANDS_IN_TOWN_KEY;

module.exports = {
 spotify: spotify,
 omdb: omdb,
 bandsintown: bandsintown

};