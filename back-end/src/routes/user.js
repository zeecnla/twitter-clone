
const UserModel = require('../models/users.model');
const express = require('express');
const router = express.Router();

//create new user
router.post('/user', (req,res)=>{
    if(!req.body){
        return res.status(400).send('Request Body is missing');
    }
    const model = new UserModel(req.body);
    model.save(function(error) {
        console.log(error);
        if (error) throw error;
    })
    .then(doc => {
        if(!doc || doc.length===0){
            return res.status(500).send(doc);
        }
        return res.status(200).send(doc);
    })
    .catch(error => {
        res.status(500).json(error);
    }); 
});

router.get('/users', (req,res)=>{
    UserModel.find({}, (error, users)=>{
        var usersMap = {};

        users.forEach(function(user) {
            usersMap[user._id] = user;
        });

        res.status(200).send(usersMap); 
    });
});

module.exports = router;