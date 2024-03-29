const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new Schema({
    email: {
        type: String,
        required:true,
    },

});

//generates hashing salting and username,password
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
