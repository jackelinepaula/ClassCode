const {tecnologiaTutor} = require('../models/banco.js')

async function getTecnologiaTutor(where = null){
    let obj = {}

    const dataTecnologia = await tecnologiaTutor.findAll({where: where})

    obj = dataTecnologia

    return obj
}

module.exports = { getTecnologiaTutor }