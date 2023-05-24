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
