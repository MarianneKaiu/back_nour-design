const { Comment } = require("../../db/sequelize");

module.exports = (app) => {
    app.get("/api/comments", (req, res) => {
        Comment.findAll()
            .then((comments) => {
                const message = `La liste des commentaires à bien pu être récupérée`;
                res.json({ message, data: comments });
            })
            .catch((error) => {
                const message = `La liste des commentaires n'a pas pu être récupérée. Reessayez dans quelques instants`;
                res.status(500).json({ message, data: error });
            });
    });
};
