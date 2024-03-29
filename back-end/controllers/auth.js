const User = require('../models/user');
const jwt = require('jsonwebtoken'); 
const { expressjwt: expressJwt } = require("express-jwt");//authorization
//const expressJwt = require('express-jwt');// for authori
const { errorHandler } = require ("../helpers/dbErrorHandler");


exports.signup = (req, res)=> {
    //console.log('req.body',req.body);
    const user = new User(req.body);
    user.save((err, user) => {

        if(err){
            return res.status(400).json({
                err:errorHandler(err)
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    });
};

exports.signin = (req,res) => {
    const {email, password} = req.body
    User.findOne({email},(err, user)=>{
        if(err || !user) {
            return res.status(400).json({
                error: 'User with that email doesnt exist'
            });
        }
        //if user is found make sure the email and passowrd match
        //create authenticate method in user model
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error:"Email and password dont match"
            });
        }
        //generate a signed token with user id 
        const token = jwt.sign({_id:user._id},process.env.JWT_Secret);
        //persist the token as 't' in cookie with expiry date
        res.cookie('t',token,{expire: new Date()+ 9999})

        const{_id,name, email,role} = user
        return res.json({token,user:{_id,email,name,role}});
    });
};

exports.signout = (req,res) => {
    res.clearCookie('t')
    res.json({message:"Signout Success"});
};

exports.requireSignin =
 expressJwt({
    //??
    secret: process.env.JWT_Secret,
    algorithms: ["HS256"],
    userProperty:"auth",
});

// exports.requireSignin =function authenticateToken(req, res, next) {
//     console.log("this is requireSignin")
    
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]
//   console.log(authHeader)
//   console.log(token)

//   if (token == null) return res.sendStatus(401)

//   jwt.verify(token, process.env.JWT_Secret, (err, user) => {
//     console.log(err)

//     if (err) return res.sendStatus(403)

//     req.userr = user

//     next()
//   })
// }

exports.isAuth = (req, res, next) =>{
    let user = req.profile && req.auth && req.profile._id == req.auth._id;
    if(!user || req.profile._id != req.tempid ){
        return res.status(403).json({
            error:"Accessd denied"
        });
    }
    next();
};

exports.isAdmin = (req,res,next)=>{
    if (req.profile.role === 0){
        return res.status(403).json({
            error:"Admin resourse! Access denied"
        });
    }
    next();
};