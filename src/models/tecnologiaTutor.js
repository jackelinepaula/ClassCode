const {TecnologiaTutor, Tecnologia, Tutor} = require('../models/banco.js');


async function getTecnologiaTutor(id = null){
    let arr = []

    const parameters = {
        include: [
            {model: Tecnologia},
            {model: Tutor}
        ],
    }

    if (id !== null){
        parameters.where = {idTecnologia: id}
    }

    const dataTecnologia = await TecnologiaTutor.findAll(parameters)

    dataTecnologia.map((item) => {    
        const dataObj = item.dataValues

        const tutor = item.tutore
        const tecnologia = item.tecnologia

        const contentObj = {
            dataValues: dataObj,
            tutor: tutor.dataValues,
            tecnologia: tecnologia.dataValues
        }

        arr.push(contentObj)
    })    

    return arr
}

module.exports = { getTecnologiaTutor }