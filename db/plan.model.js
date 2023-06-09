//  RMIT University Vietnam

  // Course: COSC2430 Web Programming

  // Semester: 2023A

  // Assessment: Assignment 3

  // Author: Your names (e.g. Nguyen Van Minh)

  // ID: s3978223

  // Acknowledgement: Acknowledge the resources that you use here.
const { mongoose } = require("./mongoose");

// Define the meal schema
const mealSchema = new mongoose.Schema({
  // Your work starts here
  name: {
    type: String
  },
  dayOfWeek: {
   type: ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
  },
  mealType: {
    type: ["Food" , "Drink"]
  },
  ImageURL: {
    type: String
  }
});

// Define the plan schema
const planSchema = new mongoose.Schema({
  meals: {
    type: [mealSchema],
    required: true,
  },
  // Your work starts here
});

// Create the plan model, REPLACE <sid> WITH YOUR STUDENT ID
const Plan = mongoose.model("s3978223", planSchema);

module.exports = Plan;
