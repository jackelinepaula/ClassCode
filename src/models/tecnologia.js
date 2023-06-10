const {tecnologia} = require('../models/banco.js')

async function getTecnologia(id){
    let obj = {}

    const dataTecnologia = await tecnologia.findAll()

    obj = dataTecnologia

    return obj
}

module.exports = {getTecnologia}