const { Image } = require("../../db/sequelize");
const auth = require("../../auth/auth");
module.exports = (app) => {
    app.put("/api/images/:id", auth, (req, res) => {
        const id = req.params.id;

        Image.update(req.body, {
            where: { id: id },
        }).then(() => {
            return Image.findByPk(id)
                .then((image) => {
                    if (image === null) {
                        const message = `L'image demandée n'éxiste pas, veuillez réessayer avec un autre Id`;
                        res.status(404).json({ message });
                    }
                    const message = `L'image n° ${image.id} a bien été modifiée.`;
                    res.status(200).json({ message, data: image });
                })
                .catch((error) => {
                    const message = `L'image n'a pas pu être modifiée, reessayez dans quelques instants`;
                    res.status(500).json({ message, data: error });
                });
        });
    });
};
