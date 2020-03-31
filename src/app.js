const Twitter = require("twitter");
const config = require("./config.js");
const TwitterApp = new Twitter(config);

// search parameters
var params = {
  q: "#nodejs",
  count: 10, // number of tweets to return
  result_type: "recent", // return only the most recent results
  lang: "en" // return only English results
};

TwitterApp.get("search/tweets", params)
  .then(res => {
    // todo
  })
  .catch(err => console.error(err));
