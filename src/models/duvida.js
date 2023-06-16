const {Duvida, Tecnologia, Tutor, Aluno} = require("./banco")

async function setDuvida({idTecnologia, idTutor, assunto, imagens, descricao, status}, userid){
    await Duvida.create({
        assuntoDuvida: assunto,
        descricaoDuvida: descricao,
        idTecnologia: idTecnologia,
        idTutor: idTutor,
        idAluno: userid     
    })
}

async function getDuvida(where = null){
    let arr = []
    const parameters = {
        include: [
            {model: Tecnologia},
            {model: Tutor},
            {model: Aluno}
        ],
    }

    if (where !== null){
        parameters.where = where
    }

    const dataDuvida = await Duvida.findAll(parameters)
    if (dataDuvida.length === 0) return null

    console.log(dataDuvida);
    dataDuvida.map((item) => {    
        const dataObj = item.dataValues

        const tutor = dataObj.tutore
        const tecnologia = dataObj.tecnologia
        const aluno = dataObj.aluno

        const contentObj = {
            dataValues: dataObj,
            tutor: {
                id: tutor.dataValues.idTutor,
                name: tutor.dataValues.nome,
                img: tutor.dataValues.perfilImg,
                instEnsino: tutor.dataValues.instEnsino,
            },
            tecnologia: tecnologia.dataValues,
            aluno: aluno.dataValues
        }

        
        arr.push(contentObj)
    })
    
    return arr
    
}

module.exports = {
    setDuvida,
    getDuvida
}