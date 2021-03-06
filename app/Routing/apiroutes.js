// ===============================================================================
// LOAD DATA
// We are linking our routes to our friend data array
// ===============================================================================

var friendData = require("../Data/friendData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array.
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

      friendData.push(req.body);
      res.json(true);

  });



};
