// Dependencies
const express = require("express")
const fs = require("fs");
const app = express();
const path = require("path");
// Set our port to production ready port or 8080
const PORT = process.env.PORT || 8080;
app.use(express.static('public'))
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//API Routes
//Get saved notes from db.json
app.get("/api/notes", function(req, res){
  return res.json(req.body);
})
app.get("/api/notes", function(req, res) {
  fs.readFile('/etc/passwd', (err, data) => {
    if (err){
      throw err;
    console.log(data);
  } else {
    console.log(data)
  }
  });
  });

// Post notes from json 
app.post("/api/notes", function(req, res) {
  let newNote = req.body
  fs.appendFile('db.json', newNote, (err) => {
    if (err) throw err;
    console.log('The "newNote" was appended to file!');
  });
});

// Delete notes from json
// app.delete("/api/notes", function(req, res) {
//   
// });

// HTML Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.js"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.js"));
});

// The catch all route I.E. * has to be at the bottom of your routes. Otherwise, it'll break everything.











app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
})
