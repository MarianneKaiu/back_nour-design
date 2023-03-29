const { Meuble } = require("../../db/sequelize");

module.exports = (app) => {
    app.put("/api/meubles/:id", (req, res) => {
        const id = req.params.id;

        Meuble.update(req.body, {
            where: { id: id },
        }).then(() => {
            return Meuble.findByPk(id)
                .then((meuble) => {
                    if (meuble === null) {
                        const message = `Le meuble demandé n'éxiste pas, veuillez réessayer avec un autre Id`;
                        res.status(404).json({ message });
                    }
                    const message = `Le meuble n° ${meuble.id} a bien été modifié.`;
                    res.status(200).json({ message, data: meuble });
                })
                .catch((error) => {
                    const message = `Le meuble n'a pas pu être modifié, reessayez dans quelques instants`;
                    res.status(500).json({ message, data: error });
                });
        });
    });
};
