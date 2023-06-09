const {tecnologia} = require('../models/banco.js')

async function getTecnologia(){
    let obj = {}

    const dataTecnologia = await tecnologia.findAll()

    obj = dataTecnologia

    return obj
}

module.exports = {getTecnologia}