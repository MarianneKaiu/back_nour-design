const { PetitObjet } = require("../../db/sequelize");

module.exports = (app) => {
    app.delete("/api/petits_objets/:id", (req, res) => {
        PetitObjet.findByPk(req.params.id).then((petitObjet) => {
            const petitObjetDeleted = petitObjet;
            if (petitObjet === null) {
                const message = `Le petit Objet demandé n'éxiste pas, veuillez réessayer avec un autre Id`;
                res.status(404).json({ message });
            } else {
                PetitObjet.destroy({
                    where: { id: petitObjet.id },
                })
                    .then(() => {
                        const message = `Le petit Objet avec l'identifiant n°${petitObjet.id} à bien été supprimé`;
                        res.status(200).json({
                            message,
                            data: petitObjetDeleted,
                        });
                    })
                    .catch((error) => {
                        const message = `Le petit Objet n'a pas pu être supprimé, réessayez dans un instant`;
                        res.status(500).json({ message, data: error });
                    });
            }
        });
    });
};
