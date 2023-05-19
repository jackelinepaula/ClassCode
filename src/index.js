const express = require("express")
const handlebars = require("express-handlebars").engine

const app = express()

//Declação de variáveis
const portaRede = 8081; //define a porta de rede que será usada
const pageExtensao = "hbs" // define o nome da extensão dos arquivos

app.use(express.static('public'));

//Mudei a localização da pasta views
app.set("views", "./src/views")

// ( "Define a extensão dos arquivos, define o layout padrão ")
app.engine(pageExtensao, handlebars({
    defaultLayout: "main",
}))
app.set("view engine" , pageExtensao)

// ROTAS

app.get("/", function(req, res) {
    res.render("index", {
        //Esse trecho aqui ta passando o caminho do css como 
        //parâmetro pro handlebars
        style: "/css/style.css"
    })
})
app.get("/comprar", function(req, res) {
    res.render("comprar_minutos")
})
app.get("/novaduvida", function(req, res) {
    res.render("tela_duvida")
})

app.get("/dashtutor", function(req, res){
    res.render("dash_tutor", {
        style: "/css/dashtutor.css"
    })
})
app.listen(portaRede, () => {
    console.log("[express] Working http://localhost:" + portaRede);
})