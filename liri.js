// for .env
require("dotenv").config();
var keys = require("./keys.js");




// 4 arguments: 1. concert-this, 2. spotify-this-song, 3. movie-this, 4. do-what-it-says
var concert = artist  //node + liri.js + "concert-this";
var song = track  //node + liri.js + "spotify-this-song";
var movie = title   //node + liri.js + "movie-this";
var random = snark  //node + liri.js + "do-what-it-says";


//  some kind of prompt with instructions on how to structure a query for this program?

//  if concert
var axios = require("axios");
concert.search(artist)
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
    function(response) {
      // displaying the venue
      console.log("The movie's title is: " + response.data.venue.name); //NOT CERTAIN ABOUT SYNTAX OF RESPONSE IN ALL 3 QUERIES
      // displaying the venue location
      console.log("The movie's title is: " + response.data.venue.city);
      // displaying the event date
      console.log("The movie's title is: " + response.data.datetime.moment()); //Date of the Event (use moment to format this as "MM/DD/YYYY")

    }
);
  

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


  //  ERROR HANDLING  1. If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody', 2. Prompt: "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/. It's on Netflix!"


// "do-what-it-says"; for reading from random.txt
var fs = require("fs");

fs.readFile("random.txt", "utf8", function(error, random) {

  // log errors
  if (error) {
    return console.log(error);
  }

  // log snark
  console.log(data);

  
});
 
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



// spotify API
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

 
var spotify = new Spotify({
  id: 'your spotify client id',
  secret: 'your spotify client secret'
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

//  axios
var axios = require("axios")

//  axios GET request
axios.get("/user?ID=12345")
  .then(function (response) {
    //  handle success
    console.log(response);
  })
  .catch(function (error) {
    //  handle error
    console.log(error);
  })
  .finally(function () {
    //  always executed
  });


// bands in town:
 var artist= "pink" ; 
 "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"


 // omdb:
 "http://www.omdbapi.com/?i=tt3896198&apikey=171d8e50" //should key be someplace else?