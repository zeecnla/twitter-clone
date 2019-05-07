
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
import db from '../../lib/lowdb';

export function create(req, res, next) {
    if(!req.body){
        return;
    }
    const prePassword = req.body.password;
    bcrypt.genSalt(10, function (err, salt) {
        if (err) console.log(err);
        bcrypt.hash(prePassword, salt, function (err, hash) {
            if (err) console.log(err);
            //in order to prevent multiples 
            //ill check if that username already exists
            if(db.get('users').find({email:req.body.email}).value()){
                console.log('value found');
                res.json({
                    status: "failed",
                    message: "user already exists",
                    data: null
                })
            }else{
                console.log('wrigint to json');
                db.get('users')
                .push({
                    username: req.body.username,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: hash
                })
                .write()

                res.json({
                    status: "success",
                    message: "user added",
                    data: null
                });
            }
        });
    });
}
export function authenticate(req, res, next) {
    console.log('authenticating...');
    const userInfo = db.get('users')
    .find({email:req.body.email})
    .value();

    if(!userInfo) {
        res.json({
            status: "error",
            message: "user does not exist",
            data: null
        });
    }
    else { 
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            const token = jwt.sign({
                    email: userInfo.email
                }, req.app.get('secretKey'), {
                    expiresIn: '24h'
                });
            res.json({
                status: "success",
                message: "user found",
                data: {
                    user: {
                        "firstname" : userInfo.firstname,
                        "lastname": userInfo.lastname,
                        "email":userInfo.email,
                        "username":userInfo.username
                    },
                    token: token
                }
            });
        } else {
            res.json({
                status: "error",
                message: "Invalid email/password!!!",
                data: null
            });
        }
    }  
}


