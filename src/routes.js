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
    console.log(req.query);
    res.render("cadastro", {
        style: "/css/login.css",
        layout: "login",
        emailExiste: req.query.emailExiste || false
    })
})

router.post("/cadastrar", cadastroUsuario)

router.get('/logout', (req, res) => {
    console.log('\x1b[33m%s\x1b[0m', "[sequelize] Usuário Desconectado: " + req.session.user.name)
    req.session.logged = false
    req.session.authID = null
    req.session.user = null
    res.redirect("/")
})

router.get("/deletaruser", crud.deletarUser)

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

router.get("/aluno/perfil", sessionChecker, crud.perfilAluno)

router.get("/aluno/edit", sessionChecker, crud.editPerfilAluno)

router.get("/aluno/edit/update", crud.updatePerfilAluno)

router.get("/tutor/perfil", sessionChecker, crud.perfilTutor)

router.get("/tutor/edit", sessionChecker, crud.editPerfilTutor)

router.get("/tutor/edit/update", crud.updatePerfilTutor)

module.exports = router