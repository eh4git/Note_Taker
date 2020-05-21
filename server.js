// Dependencies
var http = require("http");
var fs = require("fs");
// Set our port to 8080
var PORT = 8080;
// Create our server
var server = http.createServer(handleRequest);
// Start our server
server.listen(PORT, function() {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
  });
  // Create a function which handles incoming requests and sends responses
  function handleRequest(req, res) {
    // Capture the url the request is made to
    var path = req.url;
    // Depending on the URL, display a different HTML file.
    switch (path) {
    case "/notes":
      return displayNotes(res);
    case "/home":
      return displayIndex(res);
    default:
      return display404(path, res);
    }
  }

  //Function to return notes.html
  function displayNotes(res) {
    var myHTML = `<html>
      <body><h1>Home Page</h1>
     <p>This is my awsome notes page!</p> <br>
      <ul>
      <li><a href='/Home'>Home</a></li><br>
    <li><a href='/Favorite_Food'>Food</a></li><br>
    <li><a href='/Favorite_Movies'>Movies</a></li><br>
    <li><a href='/Favorite_CSS_Frameworks'>CSS</a></li><br>
      </ul>
      </body></html>`;
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  }
// Html Routes
//Function to return index.html
function displayIndex(res) {
  var myHTML = `<html>
    <body><h1>Home Page</h1>
   <p>This is my awsome index page!</p> <br>
    <ul>
    <li><a href='/Home'>Home</a></li><br>
  <li><a href='/Favorite_Food'>Food</a></li><br>
  <li><a href='/Favorite_Movies'>Movies</a></li><br>
  <li><a href='/Favorite_CSS_Frameworks'>CSS</a></li><br>
    </ul>
    </body></html>`;
  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });
  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}
function display404(url, res) {
    var myHTML = "<html>" +
      "<body><h1>5150 YOU DID IT WORNG </h1>" +
      "<p>WHAT IN THE WORLD ARE YOU DOING!!  " + url + " DOES NOT EXIST, GET IT TOGETHER MAN!</p>" +
      "</body></html>";
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { "Content-Type": "text/html" });
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  }

  //API Routes
  app.get("/api/notes", function(req, res) {
    res.send("Welcome to the Star Wars Page!");
  });