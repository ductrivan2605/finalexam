//  RMIT University Vietnam

//   Course: COSC2430 Web Programming

//   Semester: 2023A

//   Assessment: Assignment 3

//   Author: Your names (e.g. Nguyen Van Minh)

//   ID: Your student ids (e.g. s1234567)

// Acknowledgement: Acknowledge the resources that you use here.
const express = require("express");
const app = express();
const planSchema = require("./db/plan.model")

// Set the static folder
app.use(express.static("public"));

// Home route
app.get("/", function (req, res) {
  // Your work starts here
  res.render("index")
});

// Randomize route
app.post('/random', (req,res) =>{
  planSchema(req.body)
})
// Your work starts here
app.set('view engine', 'ejs');
// Start the server
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
