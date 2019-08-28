const express = require('express');
const router = express.Router();
const Division = require('../models/Division');


//get a list of data
router.get('/divisions', function(req, res){
    res.send({type: 'GET'});
})

//add new data
router.post('/divisions', function(req, res){
    // var division = new Division(req.body);
    // division.save();
    Division.create(req.body).then(function(division){
        res.send({division});
    });
    req.body;
})

//update data
router.put('/divisions/:id', function(req, res){
    res.send({type: 'PUT'});
})

//delete data
router.delete('/divisions/:id', function(req, res){
    res.send({type: 'DELETE'});
})

module.exports = router;