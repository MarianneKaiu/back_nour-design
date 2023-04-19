const { Comment } = require("../../db/sequelize");
const auth = require("../../auth/auth");

module.exports = (app) => {
    app.delete("/api/comments/:id", auth, (req, res) => {
        Comment.findByPk(req.params.id).then((comment) => {
            const commentDeleted = comment;
            if (comment === null) {
                const message = `Le commentaire demandé n'éxiste pas, veuillez réessayer avec un autre Id`;
                res.status(404).json({ message });
            } else {
                Comment.destroy({
                    where: { id: comment.id },
                })
                    .then(() => {
                        const message = `Le commentaire avec l'identifiant n°${commentDeleted.id} à bien été supprimé`;
                        res.status(200).json({
                            message,
                            data: commentDeleted,
                        });
                    })
                    .catch((error) => {
                        const message = `Le commentaire n'a pas pu être supprimé, réessayez dans un instant`;
                        res.status(500).json({ message, data: error });
                    });
            }
        });
    });
};
