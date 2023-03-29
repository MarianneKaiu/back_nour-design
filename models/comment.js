module.exports = (sequelize, DataTypes) => {
    return sequelize.define("comment", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            allowEmpty: false,
        },
        content: {
            type: DataTypes.STRING,
        },
    });
};
