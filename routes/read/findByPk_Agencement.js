const { Agencement } = require("../../db/sequelize");

module.exports = (app) => {
    app.get("/api/agencement/:id", (req, res) => {
        Agencement.findByPk(req.params.id)
            .then((agencement) => {
                if (agencement === null) {
                    const message = `La ressource demandée n'éxiste pas`;
                    return res.status(404).json({ message });
                }
                const message = `L'agencement à bien été trouvé.`;
                res.json({ message, data: agencement });
            })
            .catch((error) => {
                const message = `L'agencement demandé n'a pas pu être récupéré, réessayez dans quelques instants`;
                res.status(500).json({ message, data: error });
            });
    });
};
