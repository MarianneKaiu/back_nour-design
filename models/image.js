module.exports = (sequelize, DataTypes) => {
    return sequelize.define("image", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        chemin: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT("long"),
            allowEmpty: true,
            allowNull: true,
        },
        categorieId: {
            type: DataTypes.INTEGER,
        },
    });
};
