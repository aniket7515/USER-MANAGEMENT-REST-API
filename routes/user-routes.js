const express= require("express");
const { getAllUsers ,addUser,updateUser, deleteUser} = require("../controller/user-controller");


const router= express.Router();

router.get("/",getAllUsers)
router.post("/", addUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)

module.exports=router;