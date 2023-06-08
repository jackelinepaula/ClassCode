const express = require("express")
const handlebars = require("express-handlebars").engine
const {aluno} = require("./services/banco")
const session = require('express-session');
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.urlencoded({extended: true}));

const sessionChecker = (req, res, next) => {    
    if (req.session.logged) {
        next();
    } else {
        res.redirect('/');
    }
};   

app.use(session({
    secret: 'sua_chave_secreta',
    resave: false,
    saveUninitialized: true,
    logged: false,
}));

app.post('/auth', async (req, res) => {
    const {authID, authEmail, authName} = req.body

    try {
        const dadoExistente = await aluno.findOne({
            where:{
                'authId': authID
            }
        })

        if (dadoExistente === null) {
            await aluno.create({
                nomeAluno: authName,
                email: authEmail,
                authId: authID
            }).then(() => {
                console.log("Cadastrado", authName, authEmail, authID);
            })
        }

        req.session.logged = true
        req.session.cookie = { 
            secure: false, // This will only work if you have https enabled!
            maxAge: 60000 * 60, // 1 min * 60
            name: authName,
            email: authEmail,
        }

        console.log(req.session)
        res.redirect("/aluno")

    } catch (error) {
        console.error(error)
    }
})

app.get('/logout', (req, res) => {
    req.session.logged = false
    req.session.cookie = {}
    res.redirect("/")
})

app.get('/aluno', sessionChecker ,function(req, res) { 
    // Verifica a autenticação e envia o ussuario pra dash
    app.engine(pageExtensao, handlebars({
        defaultLayout: "main",
    }))
    res.render("dash_aluno", {
        //Esse trecho aqui ta passando o caminho do css como 
        //parâmetro pro handlebars
        style: "/css/dashaluno.css"
    })
  });




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
app.set("view engine", pageExtensao)

// ROTAS

app.get("/", function(req, res){
    app.engine(pageExtensao, handlebars({
        defaultLayout: "login",
    }))
    res.render("index", {
        style: "/css/login.css"
    })
})

app.get("/cadastro", function(req, res){
    app.engine(pageExtensao, handlebars({
        defaultLayout: "login",
    }))
    res.render("cadastro", {
        style: "/css/login.css",
    })
})

app.get("/aluno/dash", function(req, res) {
    app.engine(pageExtensao, handlebars({
        defaultLayout: "main",
    }))
    res.render("dash_aluno", {
        //Esse trecho aqui ta passando o caminho do css como 
        //parâmetro pro handlebars
        style: "/css/dashaluno.css"
    })
})

app.get("/tutor/dash", function(req, res){
    app.engine(pageExtensao, handlebars({
        defaultLayout: "main",
    }))
    res.render("dash_tutor", {
        style: "/css/dashtutor.css"
    })
})

app.get("/aluno/tutor", function(req, res) {
    res.render("escolha_tutores", {
        style: "/css/tutores.css"
    })
})

app.get("/aluno/comprar", function(req, res) {
    res.render("comprar_minutos", {
        style: "/css/minuto.css"
    })
})

app.get("/aluno/tutor/duvida", function(req, res) {
    res.render("duvida", {
        style: "/css/duvida.css"
    })
})

app.get("/aluno/historico", function(req, res) {
    res.render("historico", {
        style: "/css/historico.css"
    })
})


app.listen(portaRede, () => {
    console.log("[express] Working http://localhost:" + portaRede);
})
