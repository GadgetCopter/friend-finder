var express = require("express")
var router = express.Router()
var friendsArr = require("../data/friends.js")

router.get("/api/friends", function(req, res){
    res.json(friendsArr)
})

router.post("/api/friends", function(req, res) {
    console.log(req.body.scores)
    var scoreInput = req.body.scores
    var compareFriendsArray = []

    for (var i = 0; i < friendsArr.length; i++) {
        console.log(friendsArr[i].scores)
        var friendScore = friendsArr[i].scores 
        var total = 0   
        
        for(var k = 0; k < friendScore.length; k++) {
            total += Math.abs(scoreInput[k] - friendScore[k])
        }

        compareFriendsArray.push({name: friendsArr[i].name, photo: friendsArr[i].photo, total: total})
    }

    compareFriendsArray.sort(function(a,b) {
        if(a.total > b.total) {
            return 1
        } else if (b.total > a.total) {
            return -1
        } else {
            return 0
        }
    })

    console.log(compareFriendsArray)
    friendsArr.push(req.body)
    res.send(compareFriendsArray[0])
})

module.exports = router
