const userModel = require('../models/users.model');
const tweetModel = require('../models/tweets.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create: function (req, res, next) {
        console.log('adding user...');

        const newUser = new userModel({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        });
        newUser.save(function (error, result) {
            console.log(error);
            if (error){
                next(error);
            }else{
                res.json({
                    status: "success",
                    message: "user added",
                    data: null
                });
            }
        });
    },
    authenticate: function (req, res, next) {
        console.log('authenticating...');
        userModel.findOne({
            email: req.body.email
        }, function (error, userInfo) {
            if (error) {
                next(error);
            } else {
                if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({
                        id: userInfo._id
                    }, req.app.get('secretKey'), {
                        expiresIn: '1h'
                    });
                    res.json({
                        status: "success",
                        message: "user found",
                        data: {
                            user: userInfo,
                            token: token
                        }
                    });
                } else {
                    res.json({
                        status: "erroror",
                        message: "Invalid email/password!!!",
                        data: null
                    });
                }
            }
        });
    },
    allUsers: function(req,res,next) {
        userModel.find({}, function (error, user) {
            if (error){
                next(error);
            }else{
                res.json({
                    status: "success",
                    message: "found all users",
                    data: user
                });
            }
        });
    }
}