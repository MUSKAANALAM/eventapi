const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const ModeratorSchema = new Schema(
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
         //required: true
    }}


);

module.exports = mongoose.model('moderator', ModeratorSchema);