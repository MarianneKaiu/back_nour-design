module.exports = {
    host: "localhost",
    user: "root",
    password: process.env.PASWORD_DB,
    db: "Atelier_NourEdde",
    dialect: "mariadb",
    dialectOptions: {
        timezone: "Etc/GMT-2",
    },
};

// const sequelize = new Sequelize(
