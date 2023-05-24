const express = require("express")
const handlebars = require("express-handlebars").engine
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const app = express()

//AUTENTICAÇÃO PARA ÁREA RSTRITA


// Configuração do Express
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'seu_segredo_aqui',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({
    extended: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    function (username, password, done) {
        // Aqui você pode verificar as credenciais do usuário com o banco de dados
        if (username === 'usuario' && password === 'senha') {
            return done(null, {
                id: 1,
                name: 'Usuario'
            });
        } else {
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
    const user = {
        id: 1,
        username: 'admin'
    };
    done(null, user);
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }

// Rota de login
app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/'
    })
);

app.get('/dashboard', isAuthenticated, function(req, res) {
    res.send('Você está autenticado! Bem-vindo ao dashboard.');
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
        style: "/css/login.css"
    })
})

app.get("/aluno", function(req, res) {
    app.engine(pageExtensao, handlebars({
        defaultLayout: "main",
    }))
    res.render("dash_aluno", {
        //Esse trecho aqui ta passando o caminho do css como 
        //parâmetro pro handlebars
        style: "/css/home.css"
    })
})

app.get("/tutor", function(req, res){
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

app.get("/aluno/duvida", function(req, res) {
    res.render("tela_duvida", {
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