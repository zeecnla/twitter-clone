const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT = 10;
let UserSchema = new mongoose.Schema({
    username: { type: String, required:true, trim:true},
    firstname: { type:String, required: true, trim:true},
    lastname: {type:String, required:true, trim:true},
    email: { type: String, required:true,lowercase: true, trim:true},
    password: { type: String, required:true }
});

UserSchema.pre('save', function(next){
    var user = this;
    if (!this.isModified('password')) return next();

    bcrypt.genSalt(SALT, function(error, salt) {
        if (error) return next(error);
        bcrypt.hash(user.password, salt, function(error, hash) {
            if (error) return next(error);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(error, isMatch) {
        if (error) return cb(error);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User' , UserSchema);