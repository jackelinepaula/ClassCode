const {Tecnologia} = require('../models/banco.js')

async function getTecnologia(id){
    let obj = {}

    const dataTecnologia = await Tecnologia.findAll()
    if (dataTecnologia.length === 0) return null


    obj = dataTecnologia

    return obj
}

module.exports = {getTecnologia}