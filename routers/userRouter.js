const express = require("express");
const router = express.Router();


const postmiddleware = require("../middlewares/requireUser");
const {followUnfollowcontroler, getpostsoffollowing, getmyposts, getpostofuser, deletprofile, 
    getmyinformation,} = require("../controllers/userController");

router.post("/follow",postmiddleware,followUnfollowcontroler);
router.get("/getpostsoffollowing",postmiddleware,getpostsoffollowing);
router.get("/getmypost",postmiddleware,getmyposts);
router.get("/getpostofuser",postmiddleware,getpostofuser);
router.delete("/",postmiddleware,deletprofile);
router.get("/getmyinformation",postmiddleware,getmyinformation);
router.get("/updateprofile",postmiddleware,)
module.exports = router;