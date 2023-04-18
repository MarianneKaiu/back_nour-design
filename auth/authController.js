const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../db/sequelize");
module.exports = (app) => {
    app.post("/api/users/login", (req, res) => {
        const eMail = req.body.eMail;
        User.findOne({ where: { eMail: eMail } })
            .then((user) => {
                if (user === null) {
                    const message = "Paire login/ mot de passe incorrecte";
                    return res.status(401).json({ message });
                }
                bcrypt
                    .compare(req.body.password, user.password)
                    .then((isPasswordValid) => {
                        if (!isPasswordValid) {
                            const message =
                                "Paire login/ mot de passe incorrecte";
                            return res.status(401).json({ message });
                        }

                        const message = `Bonjour ${user.userName}, bienvenu chez vous :)`;
                        return res.status(200).json({
                            message,
                            data: {
                                userName: user.userName,
                                userId: user.id,
                                token: jwt.sign(
                                    { userId: user.id },
                                    "RANDOM_TOKEN_SECRET",
                                    { expiresIn: "24h" }
                                ),
                            },
                        });
                    });
            })
            .catch((error) => {
                const message = `L'utilisateur n'a pas pu être récupéré, veuillez reessayer plus tard.`;
                return res.status(500).json({ message, data: error });
            });
    });
};
// const bcrypt = require("bcrypt");
// const { User } = require("../db/sequelize");
// module.exports = (app) => {
//     app.post("/api/users/login/:id", (req, res) => {
//         const id = req.params.id;
//         User.findByPk(id)
//             .then((user) => {
//                 if (user === null) {
//                     const message = "Paire login/ mot de passe incorrecte";
//                     return res.status(401).json({ message });
//                 }
//                 bcrypt
//                     .compare(req.body.password, user.password)
//                     .then((isPasswordValid) => {
//                         if (!isPasswordValid) {
//                             const message =
//                                 "Paire login/ mot de passe incorrecte";
//                             return res.status(401).json({ message });
//                         }
//                         const message = `L'utilisateur à été connécté avec succès`;
//                         return res.json({ message, data: user });
//                     });
//             })
//             .catch((error) => {
//                 const message = `L'utilisateur n'a pas pu être récupéré, veuillez reessayer plus tard.`;
//                 return res.status(500).json({ message, data: error });
//             });
//     });
// };
