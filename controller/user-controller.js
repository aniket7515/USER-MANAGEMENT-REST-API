const User= require("../model/User")

const getAllUsers= async(req,res,next)=>{
    let users;
    try{
        users=await User.find();
    }catch(err){
        return next(err);
    }
    if(!users){
        return res.status(500).json({message: "Internal Server Error"});
    }

    return res.status(200).json({users})
}


const addUser = async(req,res,next)=>{
    const {name,email,password} = req.body;
    if(!name && name.trim()=="" && !email && email.trim()==="" && !password && password.length<6){
        return res.status(422).json({message:"Invalid Data"});
    }
    let user;
    try{
        user=new User({
            name,
            email,
            password,
        })
        user=await user.save()  // saving the user record in database
    }catch(err){
        return next(err);
    }
    if(!user){
        return res.status(500).json({message:"Unable to save user"})
    }
    return res.status(201).json({user})
}

const updateUser= async(req,res,next)=>{
    const id=req.params.id;
    const {name,email,password} = req.body;
    if(!name && name.trim()=="" && !email && email.trim()==="" && !password && password.length<6){
        return res.status(422).json({message:"Invalid Data"});
    }

    let user;
    try {
        user=await User.findByIdAndUpdate(id,{name,email,password})
    } catch (error) {
        return next(error)
    }
    if(!user){
        return res.status(500).json({message:"Unable to save user"})
    }
    return res.status(200).json({message:"Updated Succesfully"})
}


exports.getAllUsers=getAllUsers;
exports.addUser=addUser;
exports.updateUser =updateUser;

// status 422 means unprocessable entity
// status 201 used when something is siccesfully addedd