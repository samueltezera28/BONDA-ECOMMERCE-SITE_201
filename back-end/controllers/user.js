const User = require("../models/user");


exports.userById = (req,res,next,id) =>{
    User.findById(id).exec((err, user)=>{
        if(err || !user ){
            return res.status(400).json({
                error:"User Not Found"
            });
        }
        req.profile = user;
        req.tempid = id
        next();
    });
};  


exports.read = (req, res)=>{
    req.profile.hashed_password = undefined;
    req.profile.salt =undefined;
    return res.json(req.profile);
};

exports.update = (req, res)=>{
    User.findOneAndUpdate(
        {_id: req.profile._id},
         {$set:req.body},
         {new: true},
         (err, user)=>{
            if(err){
                return res.status(400).json({
                    error:'You are not authorized to perfom this action'
                });
            }
            user.hashed_password = undefined;
            user.salt =undefined;
            return res.json(user);
         }
    );
};