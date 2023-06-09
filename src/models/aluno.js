const {aluno} = require('../models/banco.js')

async function getAluno(id){
    let obj = {}

    const alunos = await aluno.findAll({
        where: {authId: id}
    })

    obj = alunos[0].dataValues

    obj.primeiroNome = obj.nome.split(" ")[0]

    return obj
}




module.exports = {getAluno}




// class Aluno{

// async getAllAluno(){
//     const alunos = await aluno.findAll()
// }

// }