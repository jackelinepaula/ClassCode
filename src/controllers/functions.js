
const Tutor = require('../models/tutor.js')
const Aluno = require('../models/aluno.js')
const Tecnologia = require('../models/tecnologia.js');
const { getTecnologiaTutor } = require('../models/tecnologiaTutor.js');
const { setDuvida, getDuvida } = require('../models/duvida.js');

async function alunoDash(req, res) {
    try {

        // const user = await Aluno.getAluno(req.session.authID)
        const tecnologia = await Tecnologia.getTecnologia()
        
        res.render("dash_aluno", {
            user: req.session.user,
            data: {
                // aluno: user,

                tecnologia: tecnologia
            },
            style: "/css/dashaluno.css",
        })

    } catch (error) {
        res.send("Erro" + error)
    }
}

async function tutorDash(req, res) {
    const duvidas = await getDuvida({idTutor: req.session.user.id})
    console.log(duvidas)
    res.render("dash_tutor", {
        user: req.session.user,
        data: {
            duvidas
        },
        style: "/css/dashtutor.css",
        layout: "tutor",
    })
}

async function alunoTutor(req, res){
    const {idTecnologia} = req.query

    const tecnologiaTutor = await getTecnologiaTutor(idTecnologia)
    
    if (tecnologiaTutor.length === 0){
        res.send("Não tem nenhum tutor cadastrado para essa categoria")
    } else {
        res.render("escolha_tutores", {
            style: "/css/tutores.css",
            user: req.session.user,
            nomeTecnologia: tecnologiaTutor[0].tecnologia.nomeTecnologia,
            data: tecnologiaTutor
        })
    }
}

function cadastrarDuvida(req, res){
    setDuvida(req.body, req.session.user.id)
    res.redirect("/aluno/historico")
}

async function getHistorico(req, res){
    const duvidas = await getDuvida({idAluno: req.session.user.id})

    res.render("historico", {
        style: "/css/historico.css",
        user: req.session.user,
        data: duvidas
    })
}

module.exports = {
    alunoDash,
    tutorDash,
    alunoTutor,
    cadastrarDuvida,
    getHistorico
}