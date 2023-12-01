const express = require('express');
const donations = require('../models/donations');
const Donations = require('../models/donations');

const router = express.Router();

//save Donations

router.post('/donation/save',(req,res)=>{

    let newDonation= new Donations(req.body);

    newDonation.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Donations saved successfully"
        });
    });
});

// get donations

router.get('/donations',(req,res) =>{
    Donations.find().exec((err,donations) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingDonations:donations
        });
    });
});

// get a sepecific donations

router.get("/donation/:id",(req,res) =>{

    let donationId = req.params.id;

    Donations.findById(donationId,(err,donation) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            donation
        });
    });


});

//update Donation

router.put('/donation/update/:id', (req,res)=>{
    Donations.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,donation)=>{
            if(err){
                return res.status(400).json({error:err});   
            }
            return res.status(200).json({
                success:"updated Successfuly"    
            });
        }
    );
});

//delete donations

router.delete('/donation/delete/:id',(req,res) =>{
    Donations.findByIdAndRemove(req.params.id).exec((err,deletedDonation) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete successful",deletedDonation
        });

    });
});

module.exports = router;