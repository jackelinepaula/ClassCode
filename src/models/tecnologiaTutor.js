const {TecnologiaTutor, Tecnologia, Tutor} = require('../models/banco.js');


async function getTecnologiaTutor(where = null){
    let arr = []

    const parameters = {
        include: [
            {model: Tecnologia},
            {model: Tutor}
        ],
    }

    if (where !== null){
        parameters.where = where
    }

    const dataTecnologia = await TecnologiaTutor.findAll(parameters)
    if (dataTecnologia.length === 0) return null


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