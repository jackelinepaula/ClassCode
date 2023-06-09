
const Tutor = require('../models/tutor.js')
const Aluno = require('../models/aluno.js')
const Tecnologia = require('../models/tecnologia.js')

async function alunoDash(req, res) {
    try {
        const user = await Aluno.getAluno(req.session.cookie.authID)
        const tecnologia = await Tecnologia.getTecnologia()
        
        res.render("dash_aluno", {
            data: {
                aluno: user,
                tecnologia: tecnologia
            },
            style: "/css/dashaluno.css"
        })

    } catch (error) {
        res.send("Erro" + error)
    }
}

async function tutorDash(req, res) {
    const tutor = await Tutor.getTutor(req.session.cookie.authID)

    console.log(tutor)

    res.render("dash_tutor", {
        data: {
            tutor: tutor
        },
        style: "/css/dashtutor.css"
    })
}


module.exports = {
    alunoDash,
    tutorDash
}