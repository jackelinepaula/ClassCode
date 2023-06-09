const {tutor} = require('../models/banco.js')

async function getTutor(id){
    let obj = {}

    const tutores = await tutor.findAll({
        where: {authId: id}
    })

    obj = tutores[0].dataValues

    obj.primeiroNome = obj.nome.split(" ")[0]

    return obj
}

module.exports = {getTutor}