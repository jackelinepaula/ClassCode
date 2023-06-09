const db = require("../models/banco")

async function cadastroUsuario(req,res){
    const {tipoUser, authID, authName, authEmail} = req.body

    const verificaUser = await verificarUserBanco(["aluno", "tutor"], {
        'email' : authEmail
    })

    console.log("Usuario existe? " + verificaUser);

    if (verificaUser){
        res.send("Email já Cadastrado no sistema")
    } else {
        await db[tipoUser].create({
            nome: authName,
            email: authEmail,
            authId: authID
        }).then(() => {
            console.log("Cadastrado", authName, authEmail, authID);
        })
        res.redirect(307, "/auth")
    }
}

async function verificarUserBanco(tabelas, where){
    let existeUser = false

    for (let i = 0; i < tabelas.length; i++) {
        await db[tabelas[i]].findAll({ where: where }).then((data) => {
            if (data.length !== 0) {
                return existeUser = true
            }
        })
    }
    
    return existeUser
}





module.exports = cadastroUsuario