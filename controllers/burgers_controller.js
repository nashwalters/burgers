//Dependencies
const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

//Create all routes
router.get("/", function(req,res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    // console.log(req.body.burger_name);
       burger.insertOne("burger_name",req.body.name, function(result) {
           res.json({id: result.insertId})
       });    
});

router.put("/api/burgers/:id", function(req,res) {
    // console.log(req.params.id);
    var id = req.params.id;
    burger.updateOne("devoured", true, id, function(result){
        if(result.changedRows == 0){
            return res.status(404).end()
        } else {
        res.status(200).end();
        }
    })
})

module.exports = router;