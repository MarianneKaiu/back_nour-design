module.exports = (sequelize, Sequelize) => {
    return sequelize.define("agencement", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        location: {
            type: Sequelize.STRING,
            allowEmpty: true,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
            allowEmpty: true,
            allowNull: true,
        },
        categorie: {
            type: Sequelize.ENUM,
            values: ["Neuf", "Réemplois", "Mixte"],
        },
    });
};
