const Tutor = require('../models/tutor.js')
const Aluno = require('../models/aluno.js')

async function auth(req, res) {
    const {authID, authEmail, authName} = req.body
    
    const dados = await verificarTipoUser(["Aluno", "Tutor"], authID)

    if (dados === null) {
        res.redirect("/cadastro")
    } else {
        const userData = await dados.dataUser

        req.session.logged = true
        req.session.authID = authID

        req.session.user = {
            tipoUser: dados.tipoUser,
            id: userData.idAluno || userData.idTutor,
            name: userData.nome,
            firstName: userData.nome.split(" ")[0],
            email: userData.email,
            img: userData.perfilImg,
            instEnsino: userData.instEnsino,
            profissao: userData.profissao
        }


        console.log('\x1b[33m%s\x1b[0m', '[session] Usuário Logado: ' + req.session.user.name);
        
        res.redirect(`/${dados.tipoUser}`)
    }
}

async function verificarTipoUser(tabelas, id){
    let obj = {}
    
    for (let i = 0; i < tabelas.length; i++) {
        let model = {}
        if(tabelas[i] === "Aluno"){
            model = Aluno
            obj.tipoUser = "aluno"
        }else {
            model = Tutor
            obj.tipoUser = "tutor"
        }

        obj.dataUser = await model["get" + tabelas[i]]({
            where: {authId: id}
        })
        
        if(obj.dataUser !== null){
            return obj
        }
    }
    return null
}


module.exports = auth