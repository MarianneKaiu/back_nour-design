const { PetitObjet } = require("../../db/sequelize");

module.exports = (app) => {
    app.get("/api/petits_objets", (req, res) => {
        PetitObjet.findAll()
            .then((petitsObjets) => {
                const message = `La liste des petits objets à bien été récupérée.`;
                res.json({ message, data: petitsObjets });
            })
            .catch((error) => {
                const message = `La liste des petits objets n'a pas pu être récupérée.`;
                res.status(500).json({ message, data: error });
            });
    });
};
