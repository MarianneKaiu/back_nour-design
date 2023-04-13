const { Image } = require("../../db/sequelize");

module.exports = (app) => {
    app.get("/api/images", (req, res) => {
        Image.findAll()
            .then((images) => {
                const message = `Les images ont pu être récupérés`;
                res.json({ message, data: images });
            })
            .catch((error) => {
                const message = `Les images n'ont pas pu être récupérés`;
                res.status(500).json({ message, data: error });
            });
    });
};
