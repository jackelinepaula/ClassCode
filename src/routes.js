const express = require('express');
const router = express.Router()
const auth = require('./controllers/authUser.js')
const {sessionChecker} = require('./controllers/session.js')
const crud = require('./controllers/crud.js')

//rotas e autenticação

router.post("/auth", auth)

router.get("/cadastro", function(req, res){
    res.render("cadastro", {
        style: "/css/login.css",
        layout: "login"
    })
})

router.get('/logout', (req, res) => {
    req.session.logged = false
    req.session.cookie = {}
    res.redirect("/")
})

router.get('/aluno', sessionChecker, function(req, res) { 
    res.render("dash_aluno", {
        style: "/css/dashaluno.css"
    })
});


// rotas de navegação

router.get("/", function(req, res){
    res.render("index", {
        style: "/css/login.css",
        layout: "login"
    })
})

router.get("/aluno/dash", crud.alunoDash)

router.get("/tutor/dash", function(req, res){
    res.render("dash_tutor", {
        style: "/css/dashtutor.css"
    })
})

router.get("/aluno/tutor", function(req, res) {
    res.render("escolha_tutores", {
        style: "/css/tutores.css"
    })
})

router.get("/aluno/comprar", function(req, res) {
    res.render("comprar_minutos", {
        style: "/css/minuto.css"
    })
})

router.get("/aluno/tutor/duvida", function(req, res) {
    res.render("duvida", {
        style: "/css/duvida.css"
    })
})

router.get("/aluno/historico", function(req, res) {
    res.render("historico", {
        style: "/css/historico.css"
    })
})

module.exports = router
/*
    index.js
    foreach
    app.get(pagina, function)

    routes.js
    [
        {"/auth", function(req,res)},
        {"/login", function(req,res)},
        {"/logout", function(req,res)},
        {"/aluno", function(req,res)},
    ]

*/