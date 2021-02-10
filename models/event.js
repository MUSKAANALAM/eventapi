const mongoose = require("mongoose");
var Schema = mongoose.Schema;



const EventSchema = new Schema(
  {
    
    title: {
      type: String,
      required: [true, "Event must have a title."],
      trim:true
    },
    description: {
      type: String,
      required: [true, "Event must have a description."],
    },
    link: {
      type: String,
      required: [true, "Event must have a link."],
      
    },


    
    datetime: {
      type: Date,
      required: [true, "Event must have a date and time."],
      
    },

    speaker:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "speaker"
      }
    ],
    moderator:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "moderator"
      }
    ],

    organiser:  [
        {
          type: String
        }
      ],
    
    tags: [{
        type: String
       }]
} 
);

module.exports = mongoose.model('event', EventSchema);

