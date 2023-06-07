const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    async function (us , password, done) {
        const {authID, authEmail, authName} = req.query
    try {
        const dadoExistente = await aluno.findOne({
            where:{
                'authId': authID
            }
        })
        console.log(authID, authEmail, authName)

        if (dadoExistente !== null) {
            res.send("Login existente")
        }else {
            await aluno.create({
                nomeAluno: authName,
                email: authEmail,
                authId: authID
            }).then(() => {
                console.log("Cadastrado", authName, authEmail, authID);
                return done({
                    authID: authID,
                    email: authEmail,
                    name: authName,
                })
             })
        }
    } catch (error) {
        console.error(error)
    }

    }
));

// Serialização e desserialização do usuário
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    // Aqui você deve implementar a lógica para recuperar o usuário com base no ID
    // Por exemplo, você pode consultar um banco de dados
    const user = {};

    // aluno.findAll({
            
    // }).then((data) => {
    //     user = {
    //         id: data.dataValues,
    //         userEmail: 'aluno'
    //     }
    // })

    ;
    done(null, user);
});



function isAuthenticated(req, res, next) { 
    // Caso alguém acessar uma URL restrita, e verificado se ele tem acesso, se não, volta pro login
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
}

module.exports = {
    isAuthenticated,
    passport
}