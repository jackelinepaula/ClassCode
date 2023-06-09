const db = require("../models/banco")

async function auth(req, res) {
    const {authID, authEmail, authName} = req.body

    const dados = await db["aluno"].findOne({
        where:{
            'authId': authID
        }
    })
    
    if (dados === null) {
        // await db.aluno.create({
        //         nomeAluno: authName,
        //         email: authEmail,
        //         authId: authID
        //     }).then(() => {
        //         console.log("Cadastrado", authName, authEmail, authID);
        //     })
        res.redirect("/cadastro")
    }else{
        req.session.logged = true
        req.session.cookie = { 
            secure: false, // This will only work if you have https enabled!
            maxAge: 60000 * 60, // 1 min * 60
            name: authName,
            email: authEmail,
        }
    
        res.redirect("/aluno")
    }
}


module.exports = auth