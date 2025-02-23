const express = require('express')
const router = express.Router()
const Mylist = require('../models/Mylist');

const {body , validationResult} = require('express-validator');

router.post('/mylist',
async ( req, resp)=>{
    try{
        console.log(req.body.order)
        await Mylist.create({
            order: req.body.order
        })
        resp.json({success: true})
    }catch (error){
        console.log(error)
        resp.json({success: false})
    }
})
module.exports = router;
// let email = req.body.email;
// let userData = await Mylist.findOne({email});
// if (userData) {
//     return resp.status(400).json({ errors: "Email Alredy in Use !! Try SingUp with Other Email" });
// }
// else {
    // }