const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine" , "handlebars")

app.get("/", function(req, res) {
    res.send("aaaa")
})

app.listen(8080, () => {
    console.log("[express] Working http://localhost:8080");
})
