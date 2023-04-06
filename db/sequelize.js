const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const AgencementsModel = require("../models/agencement");
const MeubleModel = require("../models/meuble");
const PetitObjetModel = require("../models/petitObjet");
const CommentModel = require("../models/comment");
const UserModel = require("../models/user");
const ImageModel = require("../models/image");

//PHASE DE TEST
const agencements = require("../db/mock_agencement");
const petitsObjets = require("../db/mock_PetitsObjets");
const meubles = require("../db/mock_Meuble");
const comments = require("../db/mock_Comment");
const images = require("../db/mock_images");
//FIN DE PHASE TEST

//Initialisation de la db via sequelize
const sequelize = new Sequelize("Atelier_NourEdde", "root", "", {
    host: "localhost",
    dialect: "mariadb",
    dialectOptions: {
        timezone: "Etc/GMT-2",
    },
    logging: false,
});

const Agencement = AgencementsModel(sequelize, DataTypes);
const Meuble = MeubleModel(sequelize, DataTypes);
const PetitObjet = PetitObjetModel(sequelize, DataTypes);
const Comment = CommentModel(sequelize, DataTypes);
const Image = ImageModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);

const initDb = () => {
    return sequelize.sync({ force: true }).then(() => {
        console.log("La base de donnée a bien été initialisée !");
        //PHASE DE TEST
        images.map((image) => {
            Image.create({
                name: image.name,
                chemin: image.chemin,
                description: image.description,
                categorie: image.categorie,
            }).then((image) => console.log(image.toJSON()));
        });
        agencements.map((agencement) => {
            Agencement.create({
                name: agencement.name,
                location: agencement.location,
                description: agencement.description,
                categorie: agencement.categorie,
            }); //.then((agencement) => console.log(`Agencement n° ${agencement.id} OK`))
        });
        petitsObjets.map((petitObjet) => {
            PetitObjet.create({
                name: petitObjet.name,
                description: petitObjet.description,
                prix: petitObjet.prix,
                categorie: petitObjet.categorie,
            }); //.then((petitObjet) => console.log(`Petit Objet n° ${petitObjet.id} ==> OK`))
        });
        meubles.map((meuble) => {
            Meuble.create({
                name: meuble.name,
                description: meuble.description,
                prix: meuble.prix,
                categorie: meuble.categorie,
            }); //.then((meuble) => console.log(`Meuble n° ${meuble.id} ==> OK`));
        });
        comments.map((comment) => {
            Comment.create({
                userName: comment.userName,
                content: comment.content,
            }); //.then((comment) => console.log(`comment n° ${comment.id} ==> OK`))
        });
        bcrypt.hash("tchoubi", 10).then((hash) => {
            User.create({
                pseudo: "tchoubi",
                eMail: "tchoubi@tchoubi.fr",
                password: hash,
            });
        });

        //FIN DE PHASE DE TEST
    });
};

//
module.exports = {
    initDb,
    Agencement,
    Meuble,
    PetitObjet,
    Comment,
    Image,
};
