//  plug-ins
var fs = require("fs");
var moment = require("moment");
require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");


//  entering & defining commands
var action = process.argv[2];
console.log(process.argv);

var searchTermArr = process.argv.slice(3);
var searchTerm = searchTermArr.join(" ");
var spotify = new Spotify(keys.spotify);

// random snark
if (action === "do-what-it-says") {

  fs.readFile("random.txt", "utf8", function(error, random) {

    // log errors
    if (error) {
      return console.log(error);
    }
  
    // log snark
    console.log(random);

    // TODO read the contents of string random, split by comma, determine action and searchTerm
    {
      line = random.split(",");
      actions(line[0], line[1]);

  };
  else {
    
    // action is something other than "do-what-it-says"
    // read search term from argv
    runSearch(action, searchTerm);
  }
})




function runSearch(action, searchTerm) {

  //  for concerts
  if (action === "concert-this") {

    axios.get("https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp").then(
      function (response) {
        // no data found
        if (response.data.length === 0) {
          console.log("No records found. Maybe check your spelling, Phil?");
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

  //  for songs
  if (action === "spotify-this-song") {

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

      //  if song
      song.search(track)({type: 'track', query: 'USER INPUT' }, function(err, data){
        if (err) {
            return console.log('Error occurred: ' + err)};
      
        console.log(data);
      }
      );
        //   1. Artist(s), 2. The song's name, 3. A preview link of the song from Spotify, 4. The album that the song is from, 5. If no song is provided then your program will default to "The Sign" by Ace of Base.
  }

  //  for movies
  else if (action === "movie-this") {
    searchTerm = searchTerm || "Mr. Nobody";
    console.log("Movie: " + searchTerm);
  }



// concert.search(searchTerm)
console.log(searchTerm);





movie.search(title)
axios.get("http://www.omdbapi.com/" + title + "&apikey=trilogy").then(
  function(response) {
    // can't find the title
    if (response.data.Response === 'False') {
      console.log(response.data.err + "I can't find that movie. You might like 'Mr. Nobody.' It's on Netflix!")};

      // can find the title
      else (action === "movie-this") ;{
        searchTerm = searchTerm;
        console.log("Movie: " + searchTerm);
     
      // displaying the title
      console.log("The information I have on: " + response.data.title + "is this:");
      // displaying the year
      console.log("This movie was released in: " + response.data.year);
      // displaying the imdb rating

      for (var i = 0; i < movie.Ratings.length; i++) {
        var rating = movie.Ratings[i];
        if (rating.Source === 'Internet Movie Database') {
          console.log("IMDB Rating: " + rating.Value);
        }
        else if (rating.Source === 'Rotten Tomatoes') {
          console.log("Rotten Tomatoes Rating: " + rating.Value);
        }
      };
    console.log("Internet Movie Database gives this movie the following rating: " + response.data.imdbRating);//<--HMM?
    // displaying the Rotten Tomatoes rating
    console.log("And Rotten Tomatoes gives it this score: " + response.data.rtRating);//<--HMM?
    // displaying the language
    console.log("The movie is performed in: " + response.data.language);
    // displaying the plot
    console.log("The plot summary is: " + response.data.plot);
    // displaying the actors
    console.log("The cast includes: " + response.data.actors);
  }


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
}})}}
