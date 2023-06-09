const sessionChecker = (req, res, next) => {    
    if (req.session.logged) {
        next();
    } else {
        res.redirect('/');
    }
};   

const sessao = {
    secret: 'sua_chave_secreta',
    resave: false,
    saveUninitialized: true,
    logged: false,
};

module.exports = {
    sessao,
    sessionChecker
}