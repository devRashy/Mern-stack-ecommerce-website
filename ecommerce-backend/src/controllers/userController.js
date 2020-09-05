const User = require('../models/User');

exports.signUp = (req, res) => {
    User.findOne({email: req.body.email})
    .exec((error,user) => {
        if (user) return res.status(400).json({
            message: "User already registered"
        });
        const { firstName,lastName, username,email, password } = req.body;
        const _user = new User({
            firstName,
            lastName,
            username,
            email,
            password
            
            
            
        });

        _user.save((error, data) => {
            if(error){
                return res.status(400).json({
                message: `Something went wrong ${error}`});
                console.log(error)
            }

            if(data){
                return res.status(201).json({
                    user: data
                })
            }
        })
    });
}
