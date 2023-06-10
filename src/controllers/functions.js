
const Tutor = require('../models/tutor.js')
const Aluno = require('../models/aluno.js')
const Tecnologia = require('../models/tecnologia.js')

async function alunoDash(req, res) {
    try {
        console.log(req.session);

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
    // const tutor = await Tutor.getTutor(req.session.authID)

    console.log(tutor)

    res.render("dash_tutor", {
        username: req.session.name,
        userimg: req.session.perfilImg,
        data: {
            // tutor: tutor
        },
        style: "/css/dashtutor.css",
        layout: "tutor",
    })
}


module.exports = {
    alunoDash,
    tutorDash
}