const { Agencement } = require("../../db/sequelize");

module.exports = (app) => {
    app.post("/api/agencements", (req, res) => {
        Agencement.create(req.body)
            .then((agencement) => {
                const message = `L'agencement à bien été créé`;
                res.json({ message, data: agencement });
            })
            .catch((error) => {
                const message = `L'agencement créé n'a pas pu être ajouté, reessayez dans quelques instants`;
                res.status(500).json({ message, data: error });
            });
    });
};
