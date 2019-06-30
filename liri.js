var fs = require("fs");

//  using moment to parse date
var moment = require("moment");

//  if concert
var axios = require("axios");

var Spotify = require("node-spotify-api");

// read from .env
require("dotenv").config();
var keys = require("./keys.js");


//  entering commands
var action = process.argv[2];
console.log(process.argv);



if (action === "do-what-it-says") {

  fs.readFile("random.txt", "utf8", function(error, random) {

    // log errors
    if (error) {
      return console.log(error);
    }
  
    // log snark
    console.log(random);

    // TODO read the contents of string random, split by comma, determine action and searchTerm
    // E.g. spotify-this-song,"I Want it That Way"
    // var actionFromRandom = 
    // var searchTerm = 

    // Now run the seach
    runSearch(actionFromRandom, searchTerm);
  
  });
  
  // * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands: 1. It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`; 2. Edit the text in random.txt to test out the feature for movie-this and concert-this.
  
}
else {
  // action is something other than "do-what-it-says"
  // read search term from argv
  var searchTermArr = process.argv.slice(3);
  var searchTerm = searchTermArr.join(" ");
  runSearch(action, searchTerm);
}


function runSearch(action, searchTerm) {

  if (action === "concert-this") {

    axios.get("https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp").then(
      function (response) {
    
        if (response.data.length === 0) {
          console.log("No records found.");
        }
    
        else {
          for (var i = 0; i < response.data.length; i++) {
            var event = response.data[i];
            // displaying the venue name
            console.log("The concert's venue is: " + event.venue.name);
            // displaying the venue location
            console.log("The venue location is: " + event.venue.city);
            // displaying the event date
            var datetime = moment(event.datetime).format("MM/DD/YYYY")
            console.log("The concert date is: " + datetime + "\n");
          }
        }
      }
    );
  }

  else if (action === "spotify-this-song") {

    searchTerm = searchTerm || "The Sign Ace of Base";

    var spotify = new Spotify(keys.spotify);
    
    spotify
      .search({ type: 'track', query: searchTerm })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      });

  }

  else if (action === "movie-this") {
    searchTerm = searchTerm || "Mr. Nobody";
    console.log("Movie: " + searchTerm);
  }


  else {
// redefine search please
  }
}


// concert.search(searchTerm)
console.log(searchTerm);


//  if song
song.search(track)({type: 'track', query: 'USER INPUT' }, function(err, data){
  if (err) {
      return console.log('Error occurred: ' + err)};

  console.log(data);
}
);
  //   1. Artist(s), 2. The song's name, 3. A preview link of the song from Spotify, 4. The album that the song is from, 5. If no song is provided then your program will default to "The Sign" by Ace of Base.


//  if movie
var axios = require("axios");
movie.search(title)
axios.get("http://www.omdbapi.com/" + title + "&apikey=trilogy").then(
  function(response) {
    // displaying the title
    console.log("The movie's title is: " + response.data.title);
    // displaying the year
    console.log("The movie was release in: " + response.data.year);
    // displaying the rotten tomatoes rating
    console.log("The movie's title is: " + response.data.imdbRating);//<--HMM?
    // displaying the Rotten Tomatoes rating
    console.log("The movie's title is: " + response.data.rtRating);//<--HMM?
    // displaying the language
    console.log("The movie's title is: " + response.data.language);
    // displaying the plot
    console.log("The movie's title is: " + response.data.plot);
    // displaying the actore
    console.log("The movie's title is: " + response.data.actors);
  }
);

  //  *3: response.data.ratings.[{source: "internet movie database","value","NUMBER???" }];
  //    "Ratings": [
  //    {
  //    "Source": "Internet Movie Database",
  //    "Value": "7.7/10"
  //    },
  //    {
  //    "Source": "Rotten Tomatoes",
  //    "Value": "84%"
  //    },
  //  *4: response.data.ratings.[{source: "rotten tomatoes", "value","PERCENTAGE???" }];

// * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands: 1. It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`; 2. Edit the text in random.txt to test out the feature for movie-this and concert-this.


// to add entries to log.txt:
function addEntry() {

  // adding data to log.txt file.
  fs.appendFile("log.txt", ", " + value, function(err) {
    if (err) {
      return console.log(err);
    }
  });
}


 // omdb:
 "http://www.omdbapi.com/?i=tt3896198&apikey=171d8e50" //should key be someplace else? 