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
    if (err) throw err;
    res.json(JSON.parse(data));
  })
});

// Write note on db.json 
app.post("/api/notes", function (req, res) {
  const addNote = req.body;
  fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if (err) throw err;
    const dataParse = JSON.parse(data);
    dataParse.push(addNote);
    noteID = dataParse.map((note, index) => {
      note.id = index + 1
    });
    let newNote = JSON.stringify(dataParse);
    fs.writeFile('./db/db.json', newNote, (err) => {
      if (err) throw err;
    });
    res.json(dataParse)
  })
});
// Delete note from db.json
app.delete("/api/notes/:id", function (req, res) {
  //   //parse int   req.params.id

  //  parse fs.readfile sync 
  //   .filter to select all notes not to delete
  // stringify the notes
  // writeFile to db json all notes except one to remove
  });

  // HTML Routes
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });
  // Catch all Html route
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

  // The catch all route I.E. * has to be at the bottom of your routes. Otherwise, it'll break everything.


  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
