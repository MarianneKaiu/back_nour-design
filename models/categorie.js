module.exports = (sequelize, DataTypes) => {
    return sequelize.define("categorie", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    });
};
