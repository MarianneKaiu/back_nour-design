const { Comment } = require("../../db/sequelize");
const auth = require("../../auth/auth");

module.exports = (app) => {
    app.post("/api/comments", auth, (req, res) => {
        Comment.create(req.body)
            .then((comment) => {
                const message = `Le message à bien été créé.`;
                res.json({ message, data: comment });
            })
            .catch((error) => {
                const message = `Le commentaire créé n'a pas pu être ajouté, reessayez dans quelques instants`;
                res.status(500).json({ message, data: error });
            });
    });
};
