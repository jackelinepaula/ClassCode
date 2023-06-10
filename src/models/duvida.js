const {duvida, tecnologia, tutor} = require("./banco")

async function setDuvida({idTecnologia, idTutor, assunto, imagens, descricao, status}, userid){
    await duvida.create({
        assuntoDuvida: assunto,
        descricaoDuvida: descricao,
        idTecnologia: idTecnologia,
        idTutor: idTutor,
        idAluno: userid     
    })
}

async function getDuvida(id = null){
    let arr = []

    const parameters = {
        include: [
            {model: tecnologia},
            {model: tutor}
        ],
    }

    if (id !== null){
        parameters.where = {idAluno: id}
    }

    const dataDuvida = await duvida.findAll()

    console.log(dataDuvida);

    // dataDuvida.map((item) => {    
    //     const dataObj = item.dataValues

    //     const tutor = item.tutore
    //     const tecnologia = item.tecnologia

    //     const contentObj = {
    //         dataValues: dataObj,
    //         tutor: tutor.dataValues,
    //         tecnologia: tecnologia.dataValues
    //     }

    //     arr.push(contentObj)
    // })    

    return arr
}

module.exports = {
    setDuvida,
    getDuvida
}