var Event = require('../models/event')
var Speaker = require('../models/speaker')
var Moderator = require('../models/moderator')
var Resources = require('../models/resources')

exports.postmoderator = async(req,res,next)=>{
    try{
        const result=await Moderator.create(req.body);
        const addtoproduct = await Event.updateOne({_id:req.params.id},{$push:{moderator:result._id}})
        res.json(addtoproduct)
      }
    catch(err){
        res.json(err);
    }
}



exports.updatemoderator = async(req,res,next)=>{
    try{
    const event=await Moderator.updateOne({_id:req.params.id},{$set:req.body});
    res.json(event);
    console.log(event)
    }
    catch(err){
        res.json(err);
    }}

 exports.deletemoderator = async(req,res,next)=>{
        const deletespeaker =await Moderator.remove({_id: req.params.id});
        const event=await Event.remove({moderator:{$in:req.params.id}});
        res.json(result);
           
      }
       
   