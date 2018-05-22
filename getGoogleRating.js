const fetch = require('node-fetch');

const Place_ID_key = process.env.Place_ID_key;
const urlPlaceId = `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJQX6emgUpw0cRheMt66DDlBM&key=${Place_ID_key}`

function getGoogleRating() {
  return fetch(urlPlaceId)
    .then(response => response.json())
    .then(result => {
      if (result.status === "ok") {
        return ({
          note : result.result.rating,
          nb_notes: result.result.reviews.length,
          adresse:"104 Rue Louise Michel, Wasquehal",
          tel:"06 87 79 27 79",
          mapUrl:"https://maps.google.com/?cid=1410967679181644677",
          siret:"79759284700017",
          opening_hour:10,
          closing_hour:22,
          opening_days:['lun','mar','mer','jeu','ven','sam']
        });
      } else {
        return ({
          note : "indisponnible pour le moment !",
          nb_notes: "indisponnible pour le moment !",
          adresse:"104 Rue Louise Michel, Wasquehal",
          tel:"06 87 79 27 79",
          mapUrl:"https://maps.google.com/?cid=1410967679181644677",
          siret:"79759284700017",
          opening_hour:10,
          closing_hour:22,
          opening_days:['lun','mar','mer','jeu','ven','sam']
        });
      }
    })
    .catch(err => console.error(err));
}

module.exports = getGoogleRating;
//OVER_QUERY_LIMIT'
