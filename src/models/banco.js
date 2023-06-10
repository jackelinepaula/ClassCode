const db = require("./db")

const aluno = db.sequelize.define("alunos", {
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

const tutor = db.sequelize.define("tutores", {
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
    instEnsino: {
        type: db.Sequelize.STRING
    },
    statusDisponibilidade: {
        type: db.Sequelize.STRING
    },
},{
    timestamps: false
})

const tecnologia = db.sequelize.define("tecnologias", {
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

const tecnologiaTutor = db.sequelize.define("tecnologiaTutor", {
    idTecnologiaTutor: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
},{
    timestamps: false
})

const minutos = db.sequelize.define("minutos", {
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

const duvida = db.sequelize.define("duvidas", {
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

const aula = db.sequelize.define("aulas", {
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
tecnologiaTutor.belongsTo(tutor, {
    constraint: true,
    foreignKey: 'idTutor'
})

tecnologiaTutor.belongsTo(tecnologia, {
    constraint: true,
    foreignKey: 'idTecnologia'
})

minutos.belongsTo(aluno, {
    constraint: true, 
    foreignKey: 'idAluno'
})

duvida.belongsTo(aluno, {
    constraint: true, 
    foreignKey: 'idAluno'
})

duvida.belongsTo(tecnologia, {
    constraint: true, 
    foreignKey: 'idTecnologia'
})

duvida.belongsTo(tutor, {
    constraint: true, 
    foreignKey: 'idTutor'
})

aula.belongsTo(duvida, {
    constraint: true, 
    foreignKey: 'idDuvida'
})

aula.belongsTo(tutor, {
    constraint: true, 
    foreignKey: 'idTutor'
})

aula.belongsTo(aluno, {
    constraint: true, 
    foreignKey: 'idAluno'
})


// db.sequelize.sync({force: true})
//     .then(() => {
//         console.log('\x1b[33m%s\x1b[0m', "[Sequelize] Tabelas Criadas com sucesso");
//     })


module.exports = {
    aluno,
    tutor,
    tecnologia,
    tecnologiaTutor,
    minutos,
    duvida,
    aula
}
