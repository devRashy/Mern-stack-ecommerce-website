const User = require('../../models/User');
const jwt = require("jsonwebtoken")

exports.adminSignUp = (req, res) => {
    User.findOne({email: req.body.email})
    .exec((error,user) => {
        if (user) return res.status(400).json({
            message: "admin already registered"
        });
        const { firstName,lastName, username,email, password } = req.body;
        const _user = new User({
            firstName,
            lastName,
            username,
            email,
            password,
            role: "admin"
            
            });

        _user.save((error, data) => {
            if(error){
                return res.status(400).json({
                message: `Something went wrong ${error}`});
                console.log(error)
            }

            if(data){
                return res.status(201).json({
                    user: "admin created successfully"
                })
            }
        })
    });
}

exports.adminSignIn = (req, res) => {
    User.findOne({email: req.body.email})
    .exec((error, user) => {
        if(error) return res.status(400).json({error});
        if(user){
            if(user.authenticate(req.body.password) &&  user.role === "admin"){
                const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, { expiresIn: "1h"});
                const { _id, firstName, lastName, email, role, fullName} = user;
                res.status(200).json({
                    token,
                    user: {
                       _id, firstName, lastName, email, role, fullName 
                    }
                });

                } else{
                return res.status(400).json({
                    message: "invalid password"
                })
            }

        } else{
            return res.status(400).json({message: "something went wrong"})
        }
    })
}

exports.adminProfile = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token,  process.env.JWT_SECRET);
    req.user = user;
    next();
    
}