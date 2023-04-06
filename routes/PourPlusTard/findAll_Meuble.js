const { Meuble } = require("../../db/sequelize");

module.exports = (app) => {
    app.get("/api/meubles", (req, res) => {
        Meuble.findAll()
            .then((meubles) => {
                const message = `La liste des meubles à bien été récupérée`;
                res.json({ message, data: meubles });
            })
            .catch((error) => {
                const message = `La liste de meuble n'a pas pu être récupérée. Reessayez dans quelques instants`;
                res.status(500).json({ message, data: error });
            });
    });
};
