const { PetitObjet } = require("../../db/sequelize");

module.exports = (app) => {
    app.put("/api/petits_objets/:id", (req, res) => {
        const id = req.params.id;

        PetitObjet.update(req.body, {
            where: { id: id },
        }).then(() => {
            return PetitObjet.findByPk(id)
                .then((petitObjet) => {
                    if (petitObjet === null) {
                        const message = `L'agencement demandé n'éxiste pas, veuillez réessayer avec un autre Id`;
                        res.status(404).json({ message });
                    }
                    const message = `L'agencement n° ${petitObjet.id} a bien été modifié.`;
                    res.status(200).json({ message, data: petitObjet });
                })
                .catch((error) => {
                    const message = `L'agencement n'a pas pu être modifié, reessayez dans quelques instants`;
                    res.status(500).json({ message, data: error });
                });
        });
    });
};
