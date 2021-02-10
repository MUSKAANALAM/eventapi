var express = require ("express")
var app = express();
var router = express.Router();
var eventController = require('../controllers/event')
var speakerController = require('../controllers/speaker')
var moderatorController = require('../controllers/moderator')
var resourcesController = require('../controllers/resources')

//post routes

router.post("/postevent",eventController.postevent);
router.post("/postspeaker/:id",speakerController.postspeaker);
router.post("/postmoderator/:id",moderatorController.postmoderator);
router.post("/eventresources",resourcesController.postresources);
//get routes
router.get("/getevent/:id",eventController.getevent)
router.get("/eventresources/:id",resourcesController.getresources);

//update routes
router.put("/updateevent/:id",eventController.updateevent)
router.put("/updatespeaker/:id",speakerController.updatespeaker)
router.put("/updatemoderator/:id",moderatorController.updatemoderator)
router.put("/updateresources/:id",resourcesController.updateresoueces)

//delete routes
router.delete("/deleteevent/:id",eventController.deleteevent)
router.delete("/deletespeaker/:id",speakerController.deletespeaker)
router.delete("/deletemoderator/:id",moderatorController.deletemoderator)


module.exports = router ;
