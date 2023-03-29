const { Agencement } = require("../../db/sequelize");

module.exports = (app) => {
    app.get("/api/agencements", (req, res) => {
        Agencement.findAll()
            .then((agencements) => {
                const message =
                    "La liste des aménagements à bien été récupérée.";
                res.json({ message, data: agencements });
            })
            .catch((error) => {
                const message = `La liste des aménagements n'a pas pu être récupérée Reessayez dans quelques instants`;
                res.status(500).json({ message, data: error });
            });
    });
};
