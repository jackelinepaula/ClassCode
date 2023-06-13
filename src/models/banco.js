const db = require("./db")

const Aluno = db.sequelize.define("alunos", {
    idAluno: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    authId: {
        type: db.Sequelize.STRING,
        unique: true,
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    nome:{ type: db.Sequelize.STRING },
    perfilImg: { type: db.Sequelize.STRING },
    instEnsino: { type: db.Sequelize.STRING },
},{
    timestamps: false
})

const Tutor = db.sequelize.define("tutores", {
    idTutor: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    authId: {
        type: db.Sequelize.STRING,
        unique: true,
    },
    nome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    },
    perfilImg: { type: db.Sequelize.STRING },
    profissao: { type: db.Sequelize.STRING },
    instEnsino: {
        type: db.Sequelize.STRING
    },
    statusDisponibilidade: {
        type: db.Sequelize.STRING
    },
},{
    timestamps: false
})

const Tecnologia = db.sequelize.define("tecnologias", {
    idTecnologia: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeTecnologia:{
        type: db.Sequelize.STRING
    },
},{
    timestamps: false
})

const TecnologiaTutor = db.sequelize.define("tecnologiaTutor", {
    idTecnologiaTutor: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
},{
    timestamps: false
})

const Minutos = db.sequelize.define("minutos", {
    idMinutos: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantidadeMinutos:{
        type: db.Sequelize.INTEGER
    },
},{
    timestamps: false
})

const Duvida = db.sequelize.define("duvidas", {
    idDuvida: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    assuntoDuvida:{
        type: db.Sequelize.STRING
    },
    descricaoDuvida:{
        type: db.Sequelize.STRING
    },
},{
    timestamps: false
})

const Aula = db.sequelize.define("aulas", {
    idAula: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    horaInicioAula:{
        type: db.Sequelize.TIME
    },
    horaFimAula:{
        type: db.Sequelize.TIME
    },
},{
    timestamps: false
})

// Chaves Estrangeiras
TecnologiaTutor.belongsTo(Tutor, {
    constraint: true,
    foreignKey: 'idTutor'
})

TecnologiaTutor.belongsTo(Tecnologia, {
    constraint: true,
    foreignKey: 'idTecnologia'
})

Minutos.belongsTo(Aluno, {
    constraint: true, 
    foreignKey: 'idAluno'
})

Duvida.belongsTo(Aluno, {
    constraint: true, 
    foreignKey: 'idAluno'
})

Duvida.belongsTo(Tecnologia, {
    constraint: true, 
    foreignKey: 'idTecnologia'
})

Duvida.belongsTo(Tutor, {
    constraint: true, 
    foreignKey: 'idTutor'
})

Aula.belongsTo(Duvida, {
    constraint: true, 
    foreignKey: 'idDuvida'
})

Aula.belongsTo(Tutor, {
    constraint: true, 
    foreignKey: 'idTutor'
})

Aula.belongsTo(Aluno, {
    constraint: true, 
    foreignKey: 'idAluno'
})


// db.sequelize.sync({force: true})
//     .then(() => {
//         console.log('\x1b[33m%s\x1b[0m', "[Sequelize] Tabelas Criadas com sucesso");
//     })


module.exports = {
    Aluno,
    Tutor,
    Tecnologia,
    TecnologiaTutor,
    Minutos,
    Duvida,
    Aula
}
