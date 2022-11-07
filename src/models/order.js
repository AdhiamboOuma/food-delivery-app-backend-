const mongoose = require("mongoose");
const validator = require("validator");

const Order = mongoose.model("Order",{
    username:{
        type: String,
        required: true,
        trim:true,
    },
    location: {
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        // validate(value) {
        //     if(!validator.isLocation(value)){
        //         throw new Error('Physical address required');
        //     }
        // },

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
    item:{
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
module.exports = Order;