var Event = require('../models/event')
var Speaker = require('../models/speaker')
var Moderator = require('../models/moderator')
var Resources = require('../models/resources')



exports.postspeaker = async(req,res,next)=>{
    try{
        const result=await Speaker.create(req.body);
        const addtoproduct = await Event.updateOne({_id:req.params.id},{$push:{speaker:result._id}})
        res.json(addtoproduct)
      }
    catch(err){
        res.json(err);
    }
}




exports.updatespeaker = async(req,res,next)=>{
    try{
    const event=await Speaker.updateOne({_id:req.params.id},{$set:req.body});
     res.json(event);
        console.log(event)
      }
    catch(err){
        res.json(err);
    }
}

exports.deletespeaker = async(req,res,next)=>{
    
    
    const deletespeaker =await Speaker.remove({_id: req.params.id});
     const event=await Event.remove({speaker:{$in:req.params.id}})

    
    res.json(event);
        
   }