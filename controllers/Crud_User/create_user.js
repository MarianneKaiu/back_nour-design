const { User } = require("../../db/sequelize");
const bcrypt = require("bcrypt");
const { ValidationError, UniqueConstraintError } = require("sequelize");

module.exports = (app) => {
    app.post("/api/users", (req, res) => {
        bcrypt.hash(req.body.password, 10).then((hash) => {
            User.create({
                userName: req.body.userName,
                eMail: req.body.eMail,
                password: hash,
            })
                .then((user) => {
                    const message = `L'utilisateur à bien été créé.`;
                    res.json({ message, data: user });
                })
                .catch((error) => {
                    if (error instanceof ValidationError) {
                        return res
                            .status(400)
                            .json({ message: error.message, data: error });
                    }
                    if (error instanceof UniqueConstraintError) {
                        return res
                            .status(400)
                            .json({ message: error.message, data: error });
                    }
                })

                .catch((error) => {
                    const message = `L'utilisateur' créé n'a pas pu être ajouté, reessayez dans quelques instants`;
                    res.status(500).json({ message, data: error });
                });
        });
    });
};
