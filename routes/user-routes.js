const express= require("express");
const { getAllUsers ,addUser} = require("../controller/user-controller");

const router= express.Router();

router.get("/",getAllUsers)
router.post("/", addUser)


module.exports=router;