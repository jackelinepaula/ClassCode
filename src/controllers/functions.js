const Tecnologia = require('../models/tecnologia.js');
const {getTecnologiaTutor} = require('../models/tecnologiaTutor.js');
const {setDuvida,getDuvida} = require('../models/duvida.js');
const Aluno = require('../models/aluno.js')
const Tutor = require('../models/tutor.js');

async function alunoDash(req, res) {
    try {
        const tecnologia = await Tecnologia.getTecnologia()
        res.render("dash_aluno", {
            user: req.session.user,
            data: {
                tecnologia: tecnologia
            },
            style: "/css/dashaluno.css",
        })
    } catch (error) {
        res.send("Erro" + error)
    }
}

async function tutorDash(req, res) {
    const duvidas = await getDuvida({
        idTutor: req.session.user.id
    })
    const tecnologias = await getTecnologiaTutor({idTutor: req.session.user.id})
    
    console.log(duvidas)
    console.log("Tecnologias coletadas" + tecnologias)

    res.render("dash_tutor", {
        user: req.session.user,
        data: {
            tecnologias: tecnologias,
            duvidas: duvidas,
        },
        style: "/css/dashtutor.css",
        layout: "tutor",
    })
}

async function alunoTutor(req, res) {
    const {idTecnologia} = req.query
    const tecnologiaTutor = await getTecnologiaTutor({idTecnologia: idTecnologia})


    console.log(tecnologiaTutor);
    if (tecnologiaTutor.length === 0) {
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

function cadastrarDuvida(req, res) {
    setDuvida(req.body, req.session.user.id)
    res.redirect("/aluno/historico")
}

async function getHistorico(req, res) {
    const duvidas = await getDuvida({
        idAluno: req.session.user.id
    })
    console.log(duvidas);
    res.render("historico", {
        style: "/css/historico.css",
        user: req.session.user,
        data: duvidas
    })
}

async function perfilAluno(req, res) {
    console.log(req.session.user.id);
    const dataUser = await Aluno.getAluno({
        where: {
            idAluno: req.session.user.id
        }
    })
    console.log(dataUser)

    console.log("Url da imagem: " + req.session.user.img)

    res.render("perfil", {
        style: "/css/perfil.css",
        user: dataUser,
        userSession: req.session.user
    })
}

async function perfilTutor(req, res) {
    console.log(req.session.user.id);
    const dataUser = await Tutor.getTutor({
        where: {
            idTutor: req.session.user.id
        }
    })
    console.log(dataUser)

    res.render("perfil", {
        style: "/css/perfil.css",
        layout: "tutor",
        user: dataUser,
        userSession: req.session.user
    })
}

async function editPerfilAluno(req, res) {
    const dataUser = await Aluno.getAluno({
        where: {
            idAluno: req.session.user.id
        }
    })

    res.render("editar_perfil", {
        style: "/css/perfil.css", 
        layout: "tutor",
        user: dataUser,
        userSession: req.session.user
    })
}

async function editPerfilTutor(req, res) {
    const dataUser = await Tutor.getTutor({
        where: {
            idTutor: req.session.user.id
        }
    })

    res.render("editar_perfil", {
        style: "/css/perfil.css",
        layout: "tutor",
        user: dataUser,
        userSession: req.session.user
    })
}

async function updatePerfilAluno(req, res) {
    console.log(req.query)

    const up = {
        idAluno: req.session.user.id,
        nome: req.query.nome,
        instEnsino: req.query.instEnsino
    }
    const data = await Aluno.editarAluno(up)
    req.session.user.name = up.nome
    req.session.user.instEnsino = up.instEnsino

    res.redirect('/aluno/perfil')
}

async function updatePerfilTutor(req, res) {
    console.log(req.query)

    const up = {
        idTutor: req.session.user.id,
        nome: req.query.nome,
        instEnsino: req.query.instEnsino
    }
    const data = await Tutor.editarTutor(up)
    req.session.user.name = up.nome
    req.session.user.instEnsino = up.instEnsino

    res.redirect('/tutor/perfil')
}

function deletarUser(req, res) {
    const user = req.session.user
    const model = user.tipoUser === "aluno" ? Aluno : Tutor

    console.log('\x1b[33m%s\x1b[0m', '[session] Usuário Deletado: ' + user.name);

    model.deletarUser(user.id)

    res.redirect("/")
}

module.exports = {
    alunoDash,
    tutorDash,
    alunoTutor,
    cadastrarDuvida,
    getHistorico,
    perfilAluno,
    perfilTutor,
    editPerfilAluno,
    editPerfilTutor,
    updatePerfilAluno,
    updatePerfilTutor,
    deletarUser
}