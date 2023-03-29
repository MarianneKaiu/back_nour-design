module.exports = (sequelize, DataTypes) => {
    return sequelize.define("agencement", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        location: {
            type: DataTypes.STRING,
            allowEmpty: true,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowEmpty: true,
            allowNull: true,
        },
        categorie: {
            type: DataTypes.ENUM,
            values: ["Neuf", "Réemplois", "Mixte"],
        },
    });
};
