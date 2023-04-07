const { User } = require("../../models/user");
const bcrypt = require("bcrypt");

module.exports = (app) => {
    app.post("/api/login", (req, res) => {
        User.findOne({
            where: { pseudo: req.body.pseudo },
        })
            .then((user) => {
                if (!user) {
                    const message = `L'utilisateur demandé n'éxiste pas.`;
                    return res.status(404).json({ message });
                }
                bcrypt
                    .compare(req.body.password, user.password)
                    .then((isPasswordValid) => {
                        if (!isPasswordValid) {
                            const message = `Le mot de passe ne correspond pas`;
                            return res.status(401).json({ message });
                        }
                        const message = `L'utilisateur à été connécté avec succès`;
                        return res.json({ message, data: user });
                    });
            })
            .catch((error) => {
                const message = `L'utilisateur n'a pas pu être connécté, veuillez reessayer plus tard.`;
                return res.status(500).json({ message, data: error });
            });
    });
};
