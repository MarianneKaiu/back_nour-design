module.exports = (sequelize, DataTypes) => {
    return sequelize.define("comment", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userName: {
            type: DataTypes.STRING,
            required: true,
        },
        content: {
            type: DataTypes.TEXT("long"),
        },
    });
};
