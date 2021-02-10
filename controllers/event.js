
var Event = require('../models/event')
var Speaker = require('../models/speaker')
var Moderator = require('../models/moderator')
var Resources = require('../models/resources')



exports.postevent = async(req,res,next)=>{
    try{
        const result=await Event.create( req.body );
        res.json(result);
      }
    catch(err){
        res.json(err);
    }

}

exports.getevent = async (req, res, next) => {
    const event = await Event.findById(req.params.id).populate("moderator speaker");
    res.status(200).json({ success: true, data: event });
  };

exports.updateevent = async(req,res,next)=>{
    try{
        const event=await Event.updateOne({_id:req.params.id},{$set:req.body});
        res.json(event);
        console.log(event)
      }
    catch(err){
        res.json(err);
    }
}



exports.deleteevent = async(req,res,next)=>{
        
         const result = await Event.findById(req.params.id );
         const deletespeaker =await Speaker.remove({_id:{$in:result.speaker}});
         const deletemoderator =await Moderator.remove({_id:{$in:result.moderator}});
         const deleteresources =await Resources.remove({event_id:req.params.id})
         const final = result.remove();
         res.json(result);
             
        }
    
  