var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sauron');

var personSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});
var Person = mongoose.model("Person", personSchema);