const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("role", {
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
