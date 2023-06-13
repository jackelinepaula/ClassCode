const {Tecnologia} = require('../models/banco.js')

async function getTecnologia(id){
    let obj = {}

    const dataTecnologia = await Tecnologia.findAll()

    obj = dataTecnologia

    return obj
}

module.exports = {getTecnologia}