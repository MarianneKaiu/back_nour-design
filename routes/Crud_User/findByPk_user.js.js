const { User } = require("../../db/sequelize");

module.exports = (app) => {
    app.get("/api/users/:id", (req, res) => {
        const id = req.params.id;
        User.findByPk(id)
            .then((user) => {
                if (user === null) {
                    const message = `L'utilisateur demandé n'éxiste pas.`;
                    return res.status(404).json({ message });
                }
                const message = `L'utilisateur à bien pu être récupéré`;
                res.json({ message, data: user });
            })

            .catch((error) => {
                const message = `L'utilisateur n'a pas pu être récupéré, veuillez reessayer plus tard.`;
                return res.status(500).json({ message, data: error });
            });
    });
};
