const { Image } = require("../../db/sequelize");
const auth = require("../../auth/auth");

module.exports = (app) => {
    app.post("/api/images", auth, (req, res) => {
        Image.create(req.body)
            .then((image) => {
                const message = `L'image à bien étée ajoutée`;
                res.json({ message, data: image });
            })
            .catch((error) => {
                const message = `L'image n'a pas pu être ajoutée, reessayez dans quelques instants`;
                res.status(500).json({ message, data: error });
            });
    });
};
