const { Meuble } = require("../../db/sequelize");

module.exports = (app) => {
    app.post("/api/meubles", (req, res) => {
        Meuble.create(req.body)
            .then((meuble) => {
                const message = `Le meuble à bien été créé`;
                res.json({ message, data: meuble });
            })
            .catch((error) => {
                const message = `Le meuble créé n'a pas pu être ajouté, reessayez dans quelques instants`;
                res.status(500).json({ message, data: error });
            });
    });
};
