const { Comment } = require("../../db/sequelize");

module.exports = (app) => {
    app.put("/api/comments/:id", (req, res) => {
        const id = req.params.id;

        Comment.update(req.body, {
            where: { id: id },
        }).then(() => {
            return Comment.findByPk(id)
                .then((comment) => {
                    if (comment === null) {
                        const message = `Le commentaire demandé n'éxiste pas, veuillez réessayer avec un autre Id`;
                        res.status(404).json({ message });
                    }
                    const message = `Le commentaire n° ${comment.id} a bien été modifié.`;
                    res.status(200).json({ message, data: comment });
                })
                .catch((error) => {
                    const message = `Le commentaire n'a pas pu être modifié, reessayez dans quelques instants`;
                    res.status(500).json({ message, data: error });
                });
        });
    });
};
