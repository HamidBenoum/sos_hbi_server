const fetch = require('node-fetch');

const Place_ID_key = process.env.Place_ID_key;
const Place_search_key = process.env.Place_search_key;

const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=H.B.I+104+rue+LOUISE+MICHEL+Wasquehal&key=${Place_search_key}`;
const urlPlaceId = `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJQX6emgUpw0cRheMt66DDlBM&key=${Place_ID_key}`

function getGoogleRating() {
  return fetch(urlPlaceId)
    .then(response => response.json())
    .then(result => {
      return ({
        note : result.result.rating,
        nb_notes: result.result.reviews.length,
        adresse : result.result.vicinity,
       tel : result.result.formatted_phone_number,
       horraires : result.result.opening_hours,
       maplink : result.result.url
      });
    })
    .catch(err => console.error(err));
}

module.exports = getGoogleRating;
//"place_id" : "ChIJQX6emgUpw0cRheMt66DDlBM",

/*
function getGoogleRating() {
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      return result.results[0].place_id;
    })
    .then(result => {
      return fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${result}&key=${Place_ID_key}`)
    })
    .then(response => response.json())
    .then(result => {
      return ({
        note : result.result.rating,
        nb_notes: result.result.reviews.length
      });
    })
    .catch(err => console.error(err));
}

*/
