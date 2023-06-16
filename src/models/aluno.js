const { Aluno } = require('../models/banco.js')


function existeAluno(where){
    return Aluno.findAll({ where: where }).then((data) => {
        if (data.length !== 0) {
            return true
        }
        return false
    }).catch((e) => {
    })
}

function setAluno({authName, authEmail, authID, authImg, instEnsino}){
    Aluno.create({
        nome: authName,
        email: authEmail,
        authId: authID,
        perfilImg: authImg,
        instEnsino: instEnsino
    }).then(() => {
        console.log('\x1b[33m%s\x1b[0m', "[sequelize] Aluno Cadastrado: " + authName)
    })
}

async function getAluno(where){
    let obj = {}
    
    const alunos = await Aluno.findAll(where)
    if (alunos.length === 0) return null

    obj = alunos[0].dataValues
    obj.primeiroNome = obj.nome.split(" ")[0]

    return obj
}

function editarAluno({idAluno, nome, instEnsino}){
    console.log(idAluno, nome, instEnsino)
    Aluno.update({
        nome: nome,
        instEnsino: instEnsino
    },{
        where: { idAluno: idAluno }
    }).then(()=>{
        console.log('[Dados atualizados com sucesso!]')
    })
       
    
}

function deletarUser(id){
    Aluno.destroy({ where: { idAluno: id }})
}

module.exports = { existeAluno, getAluno, setAluno, editarAluno, deletarUser}