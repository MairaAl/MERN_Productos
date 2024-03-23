const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
