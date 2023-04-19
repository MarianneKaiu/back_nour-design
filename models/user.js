module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userName: {
            type: DataTypes.STRING,
            unique: {
                msg: "Ce pseudo est déja utilisé, veuillez en choisir un nouveau",
            },
        },
        eMail: {
            type: DataTypes.STRING,
            unique: {
                msg: "Cette adresse eMail est déja utilisée",
            },
        },
        password: {
            type: DataTypes.STRING,
            required: true,
        },
        role: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
    });
};
