const { Agencement } = require("../../db/sequelize");

module.exports = (app) => {
    app.delete("/api/agencements/:id", (req, res) => {
        Agencement.findByPk(req.params.id).then((agencement) => {
            const agencementDeleted = agencement;
            if (agencement === null) {
                const message = `L'agencement demandé n'éxiste pas, veuillez réessayer avec un autre Id`;
                res.status(404).json({ message });
            } else {
                Agencement.destroy({
                    where: { id: agencement.id },
                })
                    .then(() => {
                        const message = `L'agencement avec l'identifiant n°${agencementDeleted.id} à bien été supprimé`;
                        res.status(200).json({
                            message,
                            data: agencementDeleted,
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
