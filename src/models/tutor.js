const { Tutor } = require('../models/banco.js')

function existeTutor(where){
    return Tutor.findAll({ where: where }).then((data) => {
        if (data.length !== 0) {
            return true
        }
        return false
    })
}

function setTutor({authName, authEmail, authID, authImg, instEnsino, profissao}){
    Tutor.create({
        nome: authName,
        email: authEmail,
        authId: authID,
        perfilImg: authImg,
        instEnsino: instEnsino,
        profissao
    }).then(() => {
        console.log('\x1b[33m%s\x1b[0m', "[sequelize] Tutor Cadastrado: " + authName)
    })
}

async function getTutor(id){
    let obj = {}

    const tutores = await Tutor.findAll({
        where: {authId: id}
    })
    if (tutores.length === 0) return null

    obj = tutores[0].dataValues
    obj.primeiroNome = obj.nome.split(" ")[0]

    return obj
}

function editarTutor({idTutor, nome, instEnsino, profissao}){
    Tutor.update({
        nome,
        instEnsino,
        profissao
    },{
        where: { idTutor }
    }).then(() => {
        res.redirect("/tutor/dash")
    })
}

function deletarTutor(id){
    Aluno.destroy({ where: { idTutor: id }}).then(res.redirect("/logout"))
}

module.exports = { getTutor, setTutor, existeTutor, editarTutor, deletarTutor}