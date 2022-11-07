const mongoose = require("mongoose");
const validator = require("validator");

const LogIn = mongoose.model("LogIn",{
    
    email: {
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        },

    },
    password:{
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes("password")) {
                throw new Error("Password cannot contain 'password'");
            }
        },
    },

});
module.exports = LogIn;