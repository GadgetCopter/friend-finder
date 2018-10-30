var express = require("express")
var path = require("path")
var htmlRoutes = require("./app/routing/htmlRoutes.js")
var apiRoutes = require("./app/routing/apiRoutes.js")

var app = express()
var PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(apiRoutes)
app.use(htmlRoutes)

app.listen(PORT, function(){
    console.log("listening on PORT " + PORT)
})