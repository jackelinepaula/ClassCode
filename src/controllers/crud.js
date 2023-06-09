const { aluno, categoriaDuvida } = require('../models/banco.js')

async function alunoDash(req, res) {
    try {
        const dataAluno = await aluno.findAll()
        const dataCategoria = await categoriaDuvida.findAll()
        
    // console.log(dataCategoria[0].dataValues)
    // console.log(dataAluno[0].dataValues)

        res.render("dash_aluno", {
            data: {
                categoria: dataCategoria, 
                aluno: dataAluno[0].dataValues
            },
            style: "/css/dashaluno.css"
        })

    } catch (error) {
        res.send("Erro" + error)
    }
}


module.exports = { alunoDash }