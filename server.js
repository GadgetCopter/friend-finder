var express = require("express")
var path = require("path")


var app = express()
var PORT = 8008

var apiRoutes = require("./app/routing/apiRoutes.js")

app.use(apiRoutes)
app.use(express.urlencoded({extended: true}))
app.use(express.json())




require("./app/routing/htmlRoutes.js")(app)

app.listen(PORT, function(){
    console.log("listening on PORT " + PORT)
})