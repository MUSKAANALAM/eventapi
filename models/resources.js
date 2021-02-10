const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const resourcesSchema = new Schema(
    {
        event_id:
            {
              type:String,
              required: [true, "must have a the event id to which the resources  belongs."],
            },
        title: 
        {
          type: String,
         
        },
       quote: {
          type: String,
        
        },
       bullet: [{
          type: String,
         
        }],

        links: [{
          type: String,
        
        }],

  
        imagePath:[ {
          type: String,
  
      }] ,
      attachments:
      [{
          data: Buffer,
          contentType: String
      }]},

);

module.exports = mongoose.model('resouces', resourcesSchema);