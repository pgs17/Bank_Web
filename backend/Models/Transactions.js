const mongoose = require("mongoose");

const Transaction_Schema = new mongoose.Schema({

    Sender:{
        type: String,
        required : true
    },

    Reciever:{
        type: String,
        required :true
    },

    Amount:{
        type: String,
        required: true
    },
}) ;

const transaction = mongoose.model("bank_transactions", Transaction_Schema);
module.exports = transaction;
