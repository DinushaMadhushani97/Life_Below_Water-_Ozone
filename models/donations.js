const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
   
    },
    address:{
        type:String,
        required:true
    },
    cardType:{
        type:String,    
        required:true
    },

    expDate:{
        type:String,    
        required:true
    },

    cvCode:{
        type:String,    
        required:true
    }
   
});

module.exports = mongoose.model('Donations',donationSchema);