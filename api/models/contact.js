const mongoose = require("mongoose");
const contact = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    companyName:{
        type: String
    },
    subject: { 
        type: String, 
        required: true 
    },
    message: { 
        type: String, 
        required: true 
    },
    createdDate: {
        type: Date,
        default: Date().now,
    },
});
module.exports = mongoose.model("Contact", contact, "contact");
