const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const SpeakerSchema = new Schema(
  {
  
    
    name: {
      type: String,
      required: [true, "Event must have a title."],
      trim: true
    },
    about: {
      type: String,
      required: [true, "Event must have a description."]
    },
    
    imagePath: {
        type: String,
         
    }}


);

module.exports = mongoose.model('speaker', SpeakerSchema);