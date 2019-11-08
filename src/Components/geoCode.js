require('dotenv').config()
const opencage = require('opencage-api-client');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

var key = config.myApiKey;

console.log(process.env.apiKey)

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on http://localhost:${PORT} !`);
});

opencage.geocode({q: 'Theresienhöhe 11, München'}).then(data => {
  console.log(JSON.stringify(data));
  if (data.status.code == 200) {
    if (data.results.length > 0) {
      var place = data.results[0];
      console.log(place.formatted);
      console.log(place.geometry);
      console.log(place.annotations.timezone.name);
    }
  } else if (data.status.code == 402) {
    console.log('hit free-trial daily limit');
  } else {
    console.log('error', data.status.message);
  }
}).catch(error => {
  console.log('error:', error.message);
});


// ... prints
// Theresienhöhe 11, 80339 Munich, Germany
// { lat: 48.1341651, lng: 11.5464794 }
// Europe/Berlin