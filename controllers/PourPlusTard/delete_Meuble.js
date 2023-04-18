const { Meuble } = require("../../db/sequelize");

module.exports = (app) => {
    app.delete("/api/meubles/:id", (req, res) => {
        Meuble.findByPk(req.params.id).then((meuble) => {
            const meubleDeleted = meuble;
            if (meuble === null) {
                const message = `L'agencement demandé n'éxiste pas, veuillez réessayer avec un autre Id`;
                res.status(404).json({ message });
            } else {
                Meuble.destroy({
                    where: { id: meuble.id },
                })
                    .then(() => {
                        const message = `L'agencement avec l'identifiant n°${meubleDeleted.id} à bien été supprimé`;
                        res.status(200).json({
                            message,
                            data: meubleDeleted,
                        });
                    })
                    .catch((error) => {
                        const message = `L'agencement n'a pas pu être supprimé, réessayez dans un instant`;
                        res.status(500).json({ message, data: error });
                    });
            }
        });
    });
};
