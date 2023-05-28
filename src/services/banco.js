const Sequelize = require("sequelize")
const sequelize = new Sequelize("classcode", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

const aluno = sequelize.define("aluno", {
    
})



module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}