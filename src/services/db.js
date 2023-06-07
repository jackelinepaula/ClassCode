const Sequelize = require("sequelize")
const sequelize = new Sequelize("classcode-firebase", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}