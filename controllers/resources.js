var Event = require('../models/event')
var Speaker = require('../models/speaker')
var Moderator = require('../models/moderator')
var Resources = require('../models/resources')


exports.postresources = async(req,res,next)=>{
    try{

        const result=await Resources.create( req.body );
        res.json(result)
      }
    catch(err){
        res.json(err);
    }

}

exports.getresources = async(req,res,next)=>{
    try{
        const result=await Resources.find( {event_id:req.params.id} );
        res.json(result)
      }
    catch(err){
        res.json(err);
    }
}


exports.updateresoueces = async(req,res,next)=>{
    try{
        const resources=await Resources.updateOne({event_id:req.params.id},{$set:req.body});
        res.json(resources);
        console.log(resources)
      }
    catch(err){
        res.json(err);
    }
}
