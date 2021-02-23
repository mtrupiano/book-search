const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const Book = require('./models/book')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Define API routes here
app.get('/api/books', (request, response) => {
  Book.find({})
    .then( (result) => {
      console.log(result.data);
      response.json(result);
    })
    .catch( (err) => {
      response.status(500).json(err);
    });
});

app.post('/api/books', ({body}, response) => {

  Book.create(body).then( (result) => {
    response.json(result);
  }).catch( (err) => {
    response.status(500).json(err);
  });

});

app.delete('/api/books/:id', (request, response) => {
  Book.findByIdAndDelete(request.params.id)
    .then( (result) => {
      response.json(result);
    })
    .catch( (err) => {
      response.status(500).json(err);
    });
});

// Send every other request to the React app
// Define any API routes before this runs
let protected = ['transformed.js', 'main.css', 'favicon.ico']
app.get("*", (req, res) => {
  let path = req.params['0'].substring(1)

  if (protected.includes(path)) {
    // Return the actual file
    res.sendFile(`${__dirname}/build/${path}`);
  } else {
    // Otherwise, redirect to /build/index.html
    res.sendFile(`${__dirname}/build/index.html`);
  }
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
