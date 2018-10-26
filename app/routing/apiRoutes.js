var express = require("express")
var router = express.Router()
var friendsArr = require("../data/friends.js")

router.get("/api/friends", function(req, res){
    res.json(friendsArr)
})

module.exports = router
