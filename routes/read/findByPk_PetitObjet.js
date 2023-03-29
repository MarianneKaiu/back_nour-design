const { PetitObjet } = require("../../db/sequelize");

module.exports = (app) => {
    app.get("/api/petits_objets/:id", (req, res) => {
        PetitObjet.findByPk(req.params.id)
            .then((petitObjet) => {
                if (petitObjet === null) {
                    const message = `L'objet demandé n'existe pas , réesayez avec un autre Id`;
                    res.status(404).json({ message });
                }
                const message = `L'objet demandé à bien été trouvé`;
                res.json({ message, data: petitObjet });
            })
            .catch((error) => {
                const message = `L'objet demandé n'a pa pu être récupéré, reessayez dans quelques instants`;
                res.status(500).json({ message, data: error });
            });
    });
};
