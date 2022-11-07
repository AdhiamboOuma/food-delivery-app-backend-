const mongoose = require("mongoose");
const validator = require("validator");

const SignUp = mongoose.model("SignUp",{
    username:{
        type: String,
        required: true,
        trim:true,
    },
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
    phonenumber: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error ('Kindly input a number')
            }
        },
    },
});
module.exports = SignUp;