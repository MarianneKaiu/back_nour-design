const { Image } = require("../../db/sequelize");

module.exports = (app) => {
    app.get("api/images/:id", (req, res) => {
        Image.findByPk(req.params.id)
            .then((image) => {
                if (Image === null) {
                    const message = `L'image demandée n'existe pas, veuillez réessayer avec un autre id`;
                    return res.status(404).json({ message });
                }
                const message = `L'image demandée à bien été trouvée`;
                res.status(200).json({ message, data: image });
            })
            .catch((error) => {
                const message = `L'image demandée n'a pas pu être récupérée, veuillez réessayer dans quelques instants`;
                res.status(500).json({ message, data: error });
            });
    });
};
