const { Meuble } = require("../../db/sequelize");

module.exports = (app) => {
    app.get("/api/meuble/:id", (req, res) => {
        Meuble.findByPk(req.params.id)
            .then((meuble) => {
                if (meuble === null) {
                    const message = `Le meuble recherché n'existe pas, réesayez avec un autre Id`;
                    res.status(404).json({ message });
                }
                const message = `Un meuble à bien été trouvé.`;
                res.json({ message, data: meuble });
            })
            .catch((error) => {
                const message = `Le meuble recherché n'a pas pu être récupéré, reessayez dans quelques instants`;
                res.satus(500).json({ message, data: error });
            });
    });
};
