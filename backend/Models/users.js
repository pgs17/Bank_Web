const mongoose = require("mongoose");

const userschema = new  mongoose.Schema({
    Name:{
        type: String,
        required : true
    },
    Phone:{
        type : Number,
        required : true
    },
    Address :{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Gender:{
        type : String,
        required: true
    },
     Account_Type:{
        type : String,
        required: true
    },
    Amount:{
        type : Number,
        required: true
    },
    Employment:{
        type : String,
        required: true
    },
});

const user = mongoose.model("bank_users", userschema);
module.exports= user;