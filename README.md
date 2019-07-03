# liri-node-app
Liri is a student project to create a server-side CLI that responds to specific input. It calls information using the SPotify API, and with Axios, the APIs from OMBD, and Bands In Town.

The user may input specific line commands:
1. "spotify-this-song"
2. "concert-this"
3. "movie-this"
4. "do-what-i-say"

Each of the first 3 commands should be follwed by a search term that is related to the command, eg, a song, a movie, a band. The application then sends the information request to return the data in format as specificed. There are default settings if the user input is not found.

With the fourth command, the application calls on a separate file, "random.txt" to retrieve information which is then sent to Spotify.

I pseudo-coded the life out of this, then received a lot of information from Stack Overflow, YoutTube, Adarsh Bhat (friend who is a programmer), and Hani Khellafi (classmate) assisted me with the syntax.

