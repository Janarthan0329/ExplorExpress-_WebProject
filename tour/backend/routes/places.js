const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Places = require("../models/Places");


router.post("/destination",async (req,res)=>{
  

    const {name}=req.body
    try {

        const newPlaces = new Places({
            name:name
        })
        
        await newPlaces.save();

        return res.status(201).json({ 'message': 'places posted successfully' });
        
    } catch (error) {
        console.error('posted failed:', error);
        return res.status(500).json({ error: 'posted failed' });
    }

})


router.get("/destination",async (req,res)=>{
    try {
        const allPlaces = await Places.find();
        return res.status(200).json(allPlaces);
    } catch (error) {
        console.error('Error fetching places:', error);
        return res.status(500).json({ error: 'Failed to fetch places' });
    }
})




module.exports=router;
