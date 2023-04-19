const { User } = require("../../db/sequelize");
const bcrypt = require("bcrypt");
const { ValidationError } = require("sequelize");
const auth = require("../../auth/auth");

module.exports = (app) => {
    app.put("/api/users/:id", auth, (req, res) => {
        bcrypt.hash(req.body.password, 10).then((hash) => {
            const id = req.params.id;
            if (id === null) {
                const message = `L'utilisateur demandé n'éxiste pas, veuillez réessayer avec un autre Id`;
                return res.status(404).json({ message });
            }
            User.update(
                {
                    password: hash,
                },
                {
                    where: { id: id },
                }
            )
                .catch((error) => {
                    if (error instanceof ValidationError) {
                        return res
                            .status(400)
                            .json({ message: error.message, data: error });
                    }
                })
                .then(() => {
                    return User.findByPk(id)
                        .then((user) => {
                            if (user === null) {
                                const message = `L'utilisateur demandé n'éxiste pas, veuillez réessayer avec un autre Id`;
                                return res.status(404).json({ message });
                            }
                            const message = `L'utilisateur n° ${user.id} a bien été modifié.`;
                            res.status(200).json({ message, data: user });
                        })
                        .catch((error) => {
                            const message = `L'utilisateur n'a pas pu être modifié, reessayez dans quelques instants`;
                            return res
                                .status(500)
                                .json({ message, data: error });
                        });
                });
        });
    });
};
