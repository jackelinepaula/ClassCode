const db = require("../models/banco")

async function auth(req, res) {
    const {authID, authEmail, authName} = req.body

    const dados = await verificarTipoUser(["aluno", "tutor"], {
        'authId': authID
    })
    
    console.log(dados);

    if (dados === null) {
        res.redirect("/cadastro")
    } else {
        req.session.logged = true
        req.session.cookie = { 
            secure: false, // This will only work if you have https enabled!
            maxAge: 60000 * 60, // 1 min * 60
            name: authName,
            email: authEmail,
        }
    
        res.redirect(`/${dados.tipoUser}`)
    }
}

async function verificarTipoUser(tabelas, where){
    let obj = null
    for (let i = 0; i < tabelas.length; i++) {
        await db[tabelas[i]].findAll({ where: where }).then((data) => {
            console.log(data);
            if (data.length > 0){
                obj = {
                    tipoUser: tabelas[i],
                    dataUser: data
                }
            }
        })
    }
    
    return obj
}


module.exports = auth