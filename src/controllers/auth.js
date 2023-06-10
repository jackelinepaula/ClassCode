const db = require("../models/banco")

async function auth(req, res) {
    const {authID, authEmail, authName} = req.body

    const dados = await verificarTipoUser(["aluno", "tutor"], {
        'authId': authID
    })

    if (dados === null) {
        res.redirect("/cadastro")
    } else {
        const userData = await dados.dataUser[0].dataValues

        console.log(userData);

        req.session.logged = true
        req.session.authID = authID

        req.session.user = {
            name: userData.nome,
            firstName: userData.nome.split(" ")[0],
            email: userData.authEmail,
            img: userData.perfilImg,
        }
        
        res.redirect(`/${dados.tipoUser}`)
    }
}

async function verificarTipoUser(tabelas, where){
    let obj = null
    for (let i = 0; i < tabelas.length; i++) {
        await db[tabelas[i]].findAll({ where: where }).then((data) => {
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