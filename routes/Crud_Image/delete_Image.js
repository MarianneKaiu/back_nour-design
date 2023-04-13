const { Image } = require("../../db/sequelize");

module.exports = (app) => {
    app.delete("/api/images/:id", (req, res) => {
        Image.findByPk(req.params.id).then((image) => {
            const imageDeleted = image;
            if (image === null) {
                const message = `L'image demandée n'éxiste pas, veuillez réessayer avec un autre Id`;
                res.status(404).json({ message });
            } else {
                Image.destroy({
                    where: { id: image.id },
                })
                    .then(() => {
                        const message = `L'image avec l'identifiant n°${imageDeleted.id} à bien étée supprimée`;
                        res.status(200).json({
                            message,
                            data: imageDeleted,
                        });
                    })
                    .catch((error) => {
                        const message = `L'image n'a pas pu être supprimée, réessayez dans un instant`;
                        res.status(500).json({ message, data: error });
                    });
            }
        });
    });
};
