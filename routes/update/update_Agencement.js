const { Agencement } = require("../../db/sequelize");

module.exports = (app) => {
    app.put("/api/agencements/:id", (req, res) => {
        const id = req.params.id;

        Agencement.update(req.body, {
            where: { id: id },
        }).then(() => {
            return Agencement.findByPk(id)
                .then((agencement) => {
                    if (agencement === null) {
                        const message = `L'agencement demandé n'éxiste pas, veuillez réessayer avec un autre Id`;
                        res.status(404).json({ message });
                    }
                    const message = `L'agencement n° ${agencement.id} a bien été modifié.`;
                    res.status(200).json({ message, data: agencement });
                })
                .catch((error) => {
                    const message = `L'agencement n'a pas pu être modifié, reessayez dans quelques instants`;
                    return res.status(500).json({ message, data: error });
                });
        });
    });
};
