const Tutor = require('../models/tutor.js')
const Aluno = require('../models/aluno.js')

async function cadastroUsuario(req,res){
    const {tipoUser, authEmail} = req.body

    const verificaUser = await verificarUserBanco(["Aluno", "Tutor"], {
        'email' : authEmail
    })

    console.log(verificaUser);
    console.log("Usuario existe? " + verificaUser);

    if (verificaUser){
        res.redirect("/cadastro?emailExiste=true")
    } else {
        const model = tipoUser === "Aluno" ? Aluno : Tutor
        console.log(model);
        model["set" + tipoUser](req.body)

        res.redirect(307, "/auth")
    }
}

function verificarUserBanco(tabelas, where){
    for (let i = 0; i < tabelas.length; i++) {
        const model = tabelas[i] === "Aluno" ? Aluno : Tutor
        return model["existe" + tabelas[i]](where).then((data) => {
            return data 
        })
    } 
}

module.exports = cadastroUsuario