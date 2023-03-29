const { Comment } = require("../../db/sequelize");

module.exports = (app) => {
    app.get("/api/comment/:id", (req, res) => {
        Comment.findByPk(req.params.id)
            .then((comment) => {
                if (Comment === null) {
                    const message = `La ressource demandée n'existe pas`;
                    return res.status(404).json({ message });
                }
                const message = `Le commentaire à bien été trouvé`;
                res.status(200).json({ message, data: comment });
            })
            .catch((error) => {
                const message = `Le commentaire recherché n'a pas pu être récupéré, reessayez dans quelques instants`;
                res.status(500).json({ message, data: error });
            });
    });
};
