const express = require("express")
const handlebars = require("express-handlebars").engine
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const {aluno} = require("./services/banco")

// const admin = require('firebase-admin');
// const serviceAccount = require('./config/firebaseServiceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const firebaseAuth = admin.auth();








const app = express()



passport.use(new LocalStrategy(
    function (username, password, done) {
        // Aqui você pode verificar as credenciais do usuário com o banco de dados
        // Toda a lógica do banco, verificação se um usuário é um tutor ou aluno, nome, senha, é feita aqui
        try {
            aluno.findAll({
                where:{
                    'emailAluno': username
                }
            }).then((data) => {
                const aluno = data[0].dataValues
                console.log(aluno);
                if (username === aluno.emailAluno && password === aluno.senhaAluno) {
                    return done(null, {
                        id: aluno.idAluno,
                        name: aluno.nomeAluno
                    });
                }
            })

            // tutor.findAll({
            //     where:{
            //         'emailTutor': username
            //     }
            // }).then((data) => {
            //     const tutor = data[0].dataValues
            //     console.log(tutor);
            //     if (username === tutor.emailTutor && password === 'senha') {
            //         return done(null, {
            //             id: tutor.idTutor,
            //             name: tutor.nomeTutor
            //         });
            //     }
            // })
            
        } catch (error) {
            console.log(error);
            return done(null, false);
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

// Rota de login, aqui é definido se X usuário é aluno ou tutor e pra onde ele será redirecionado
app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/aluno/dash',
        failureRedirect: '/'
    }),
    passport.authenticate('tutor', {
        successRedirect: '/tutor/dash',
        failureRedirect: '/'
    })
);

app.post('/insert', async (req, res) => {
    const {username, email, senha} = req.body

    console.log(req.body);

    try {
        const dadoExistente = await aluno.findOne({
            where:{
                'emailAluno': email
            }
        })

        if (!dadoExistente) {
            aluno.create({
                nomeAluno: username,
                emailAluno: email,
                senhaAluno: senha
            }).then(() => {
                console.log("Cadastrado", username, email, senha);
            })
            res.redirect("/aluno")
        }
    } catch (error) {
        
    }

    if ("aluno"){
    

    }

    if ("tutor"){

    }

});

app.get('/aluno', isAuthenticated, function(req, res) { 
    // Verifica a autenticação e envia o ussuario pra dash
    app.engine(pageExtensao, handlebars({
        defaultLayout: "main",
    }))
    res.render("dash_aluno", {
        //Esse trecho aqui ta passando o caminho do css como 
        //parâmetro pro handlebars
        style: "/css/dashaluno.css"
    })
  });




//Declação de variáveis
const portaRede = 8081; //define a porta de rede que será usada
const pageExtensao = "hbs" // define o nome da extensão dos arquivos

app.use(express.static('public'));

//Mudei a localização da pasta views
app.set("views", "./src/views")

// ( "Define a extensão dos arquivos, define o layout padrão ")
app.engine(pageExtensao, handlebars({
    defaultLayout: "main",
}))
app.set("view engine", pageExtensao)

// ROTAS

app.get("/", function(req, res){
    app.engine(pageExtensao, handlebars({
        defaultLayout: "login",
    }))
    res.render("index", {
        style: "/css/login.css"
    })
})

app.get("/cadastro", function(req, res){
    app.engine(pageExtensao, handlebars({
        defaultLayout: "login",
    }))
    res.render("cadastro", {
        style: "/css/login.css",
    })
})

app.get("/aluno/dash", function(req, res) {
    app.engine(pageExtensao, handlebars({
        defaultLayout: "main",
    }))
    res.render("dash_aluno", {
        //Esse trecho aqui ta passando o caminho do css como 
        //parâmetro pro handlebars
        style: "/css/dashaluno.css"
    })
})

app.get("/tutor/dash", function(req, res){
    app.engine(pageExtensao, handlebars({
        defaultLayout: "main",
    }))
    res.render("dash_tutor", {
        style: "/css/dashtutor.css"
    })
})

app.get("/aluno/tutor", function(req, res) {
    res.render("escolha_tutores", {
        style: "/css/tutores.css"
    })
})

app.get("/aluno/comprar", function(req, res) {
    res.render("comprar_minutos", {
        style: "/css/minuto.css"
    })
})

app.get("/aluno/tutor/duvida", function(req, res) {
    res.render("duvida", {
        style: "/css/duvida.css"
    })
})

app.get("/aluno/historico", function(req, res) {
    res.render("historico", {
        style: "/css/historico.css"
    })
})


app.listen(portaRede, () => {
    console.log("[express] Working http://localhost:" + portaRede);
})
