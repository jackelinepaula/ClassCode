const express = require("express")
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const {sessao} = require("./controllers/session.js")
const session = require('express-session');
const routes = require('./routes.js')
const app = express()

app.use(bodyParser.urlencoded({extended: true}));

const pageExtensao = "hbs" 
app.use(express.static('public'));

app.set("views", "./src/views")
app.engine(pageExtensao, handlebars({
    defaultLayout: "main",
}))
app.set("view engine", pageExtensao)

app.use(session(sessao))

app.use(routes)

const portaRede = 8081; 

app.listen(portaRede, () => {
    console.log('\x1b[33m%s\x1b[0m', "[express] Working http://localhost:" + portaRede)
})