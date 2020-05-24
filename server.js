// Dependencies
const express = require("express")
const fs = require("fs");
const path = require("path");
const app = express();
// Set our port to production ready port or 8080
const PORT = process.env.PORT || 8080;
//Set static route
app.use(express.static('public'))
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//API Routes
//Get saved notes from db.json
app.get("/api/notes", function (req, res) {
  fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if (err) throw err
    jsonData = JSON.parse(data)
    return res.json(jsonData);
  })
  
})
// app.get("/api/notes", function (req, res) {
//   fs.readFile('db.json', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     return res.json("db.json");
//   });
// });

// Write note on db.json 
app.post("/api/notes", function (req, res) {
  let newNote = req.body
  fs.writeFile("db.json", newNote, (err) => {
    if (err) return console.log(err);

  })
});

// Delete note from db.json
// app.delete("/api/notes", function(req, res) {
//   
// });

// HTML Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.js"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});
// Catch all Html route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.js"));
});

// The catch all route I.E. * has to be at the bottom of your routes. Otherwise, it'll break everything.


app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
})
