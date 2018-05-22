const express = require("express");
const fetch = require("node-fetch");
const getGoogleRating = require('./getGoogleRating');

const port = process.env.PORT || 4000;
const app = express();

app.use(require("body-parser").json());
app.use(require("body-parser").urlencoded({ extended: false }));

app.use(function(request, result, next) {
  const allowedOrigins = ['https://sos_hbi.herokuapp.com', 'http://sos_hbi.herokuapp.com', 'https://sos_hbi-develop.herokuapp.com', 'http://sos_hbi-develop.herokuapp.com'];
  const origin = request.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
       result.setHeader('Access-Control-Allow-Origin', origin);
  }

  result.header('Access-Control-Allow-Methods', 'GET');
  result.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Needed by ExpressJS
  next();
});

// to retrieve hbi rating from Google
app.get("/getGoogleRating", function(request, result) {
  getGoogleRating()
  .then( response => {
    result.json(response);
  })
});

//get constants from server
app.get("/constants", function(request, result) {
  constants();
});

app.get("/", function(request, result) {
  result.send("Welcome SOS HBI server")
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
