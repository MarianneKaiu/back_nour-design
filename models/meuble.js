module.exports = (sequelize, Sequelize) => {
    return sequelize.define("meuble", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowEmpty: false,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowEmpty: true,
            allowNull: true,
        },
        prix: {
            type: Sequelize.INTEGER,
            allowEmpty: true,
            allowNull: true,
        },
        categorie: {
            type: Sequelize.ENUM,
            values: ["Neuf", "Réemplois", "Mixte"],
        },
    });
};
