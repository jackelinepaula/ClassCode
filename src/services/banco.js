const db = require("./db")

const aluno = db.sequelize.define("alunos", {
    idAluno: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeAluno:{
        type: db.Sequelize.STRING
    },
    emailAluno:{
        type: db.Sequelize.STRING
    },
    instEnsinoAluno: {
        type: db.Sequelize.STRING
    },
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
    nomeTutor:{
        type: db.Sequelize.STRING
    },
    emailTutor:{
        type: db.Sequelize.STRING
    },
    instEnsinoTutor: {
        type: db.Sequelize.STRING
    },
    statusDisponibilidade: {
        type: db.Sequelize.STRING
    },
},{
    timestamps: false
})

const categoriaDuvida = db.sequelize.define("categoriaduvida", {
    idCategoriaDuvida: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricaoDuvida:{
        type: db.Sequelize.STRING
    },
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

minutos.belongsTo(aluno, {
    constraint: true, 
    foreignKey: 'idAluno'
})

duvida.belongsTo(aluno, {
    constraint: true, 
    foreignKey: 'idAluno'
})

duvida.belongsTo(categoriaDuvida, {
    constraint: true, 
    foreignKey: 'idCategoriaDuvida'
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
//         console.log("[Sequelize] Tabelas Criadas com sucesso");
//     })


module.exports = {
    aluno,
    tutor,
    categoriaDuvida,
    minutos,
    duvida,
    aula
}