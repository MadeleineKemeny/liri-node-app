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






if (action === "spotify-this-song") {
  spotify(searchTerm);
}
else if(action === "concert-this"){
  concert(searchTerm)
}
else if(action === "movie-this"){
  movie(searchTerm)
}
else if(action === "do-what-i-say"){
  whatIsay(searchTerm)
}


function spotify(searchTerm) {

  

if (searchTerm){
   song=searchTerm}
   else{
    song="the sign";
   }
    var spotify = new Spotify(keys.spotify);
    
    spotify
      .search({ type: 'track', query: song })
      .then(function(data) {
        //console.log(response);
      console.log("Artist's Name: "+data.tracks.items[0].artists[0].name);
      console.log("Album: "+data.tracks.items[0].album.name);
      console.log("Preview url: "+data.tracks.items[0].preview_url + "\n")

      })
      .catch(function(err) {
        console.log(err);
      });}

function concert(searchTerm) { 

axios.get("https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp").then(
  function (response) {
    for (i=0;i<response.data.length;i++){
      console.log(response.data[i].venue.name)
      console.log(response.data[i].venue.city + " ," + response.data[i].venue.country)
      date=response.data[i].datetime.replace("T"," ");
      formattedDate=moment(date).format("MM/DD/YYYY");
      console.log("date: "+formattedDate + "\n");
    };
  }
)

}

function movie(searchTerm) {

  axios.get("http://www.omdbapi.com/?t="+ searchTerm + "&y=&plot=short&apikey=trilogy").then(
    function(response) {
    console.log("movie title: "+response.data.Title);
    console.log("year of release: "+response.data.Year);
    console.log("IMDB rating: "+response.data.Ratings[0].Value);
    console.log("Rotten Tomatoes: "+response.data.Ratings[1].Value);
    console.log("Country: "+response.data.Country);
    console.log("Language: "+response.data.Language);
    console.log("Plot: "+response.data.Plot);
    console.log("Actors: "+response.data.Actors);

}).catch(function(err){
  console.log("error");
})
}

function whatIsay() {
  fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }
   
    console.log(data);
   
    var dataArr = data.split(",");
   
    if (dataArr[0]=="spotify-this-song"){
      spotify(dataArr[1]);
    }
    if (dataArr[0]=="concert-this"){
      concert(dataArr[1]);
    }
    if (dataArr[0]=="movie-this"){
      movie(dataArr[1]);
    }
   });
}