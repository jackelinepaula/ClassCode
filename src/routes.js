const express = require('express');
const auth = require('./controllers/auth.js')
const {sessionChecker} = require('./controllers/session.js')
const crud = require('./controllers/functions.js');
const cadastroUsuario = require('./controllers/cadastroUsuario.js');

const router = express.Router()
//rotas de autenticação

router.get("/", function(req, res){
    res.render("index", {
        style: "/css/login.css",
        layout: "login"
    })
})

router.post("/auth", auth)

router.get("/cadastro", function(req, res){
    res.render("cadastro", {
        style: "/css/login.css",
        layout: "login"
    })
})

router.post("/cadastrar", cadastroUsuario)

router.get('/logout', (req, res) => {
    req.session.logged = false
    req.session.authID = null
    req.session.user = null
    res.redirect("/")
})

router.get('/aluno', sessionChecker, crud.alunoDash);

router.get("/tutor", sessionChecker, crud.tutorDash);

// rotas de navegação

router.get("/aluno/tutor", sessionChecker, crud.alunoTutor)

router.get("/aluno/tutor/duvida", sessionChecker, function(req, res) {
    res.render("duvida", {
        style: "/css/duvida.css",
        user: req.session.user,
        query: req.query
    })
})

router.post("/duvida/cadastro", sessionChecker, crud.cadastrarDuvida)

router.get("/aluno/comprar", sessionChecker, function(req, res) {
    res.render("comprar_minutos", {
        style: "/css/minuto.css",
        user: req.session.user,
    })
})

router.get("/aluno/historico", sessionChecker, crud.getHistorico)

module.exports = router