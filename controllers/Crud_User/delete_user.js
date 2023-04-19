const { User } = require("../../db/sequelize");
const auth = require("../../auth/auth");

module.exports = (app) => {
    app.delete("/api/users/:id", auth, (req, res) => {
        User.findByPk(req.params.id).then((user) => {
            const userDeleted = user;
            if (user === null) {
                const message = `L'utilisateur demandé n'éxiste pas, veuillez réessayer avec un autre Id`;
                res.status(404).json({ message });
            } else {
                User.destroy({
                    where: { id: user.id },
                })
                    .then(() => {
                        const message = `L'utilisateur avec l'identifiant n°${userDeleted.id} à bien été supprimé`;
                        res.status(200).json({
                            message,
                            data: userDeleted,
                        });
                    })
                    .catch((error) => {
                        const message = `L'utilisateur n'a pas pu être supprimé, réessayez dans un instant`;
                        res.status(500).json({ message, data: error });
                    });
            }
        });
    });
};
