const { Image } = require("../../db/sequelize");

module.exports = (app) => {
    app.delete("/api/images/:id", (req, res) => {
        Image.findByPk(req.params.id).then((image) => {
            const imageDeleted = image;
            if (image === null) {
                const message = `L'image demandée n'existe pas, veuillez réessayer avec un autre id`;
                res.status(404).json({ message });
            } else {
                Image.destroy({
                    where: { id: image.id },
                })
                    .then(() => {
                        const message = `L'image avec l'identifiant n°${imageDeleted.id} à bien été supprimée`;
                        res.status(200).json({
                            message,
                            data: imageDeleted,
                        });
                    })
                    .catch((error) => {
                        const message = `L'image demandée n'a pas pu être supprimée, veuillez réessayer dans quelques instants`;
                        res.status(500).json({ message, data: error });
                    });
            }
        });
    });
};
