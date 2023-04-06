const { PetitObjet } = require("../../db/sequelize");

module.exports = (app) => {
    app.post("/api/petits_objets", (req, res) => {
        PetitObjet.create(req.body)
            .then((petitObjet) => {
                const message = `Le petit objet à bien été créé`;
                res.json({ message, data: petitObjet });
            })
            .catch((error) => {
                const message = `Le petit objet créé n'a pas pu être ajouté, reessayez dans quelques instants`;
                res.status(500).json({ message, data: error });
            });
    });
};
