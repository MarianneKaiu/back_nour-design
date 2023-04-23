const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const AgencementsModel = require("../models/agencement");
const MeubleModel = require("../models/meuble");
const PetitObjetModel = require("../models/petitObjet");
const CommentModel = require("../models/comment");
const UserModel = require("../models/user");
const ImageModel = require("../models/image");
const RoleModel = require("../models/role");
const CategorieModel = require("../models/categorie");

//PHASE DE TEST
// const agencements = require("../db/mock_agencement");
// const petitsObjets = require("../db/mock_PetitsObjets");
// const meubles = require("../db/mock_Meuble");
// const comments = require("../db/mock_Comment");
// const images = require("../db/mock_images");
// const users = require("../db/mock_Users");
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
const Role = RoleModel(sequelize, DataTypes);
const Categorie = CategorieModel(sequelize, DataTypes);

const initDb = () => {
    User.hasMany(Comment, {
        foreignKey: {
            name: "user_id",
        },
    });
    Comment.belongsTo(User, {
        foreignKey: {
            name: "user_id",
        },
    });
    User.belongsTo(Role, {
        foreignKey: {
            name: "role_id",
        },
    });
    Role.hasMany(User, {
        foreignKey: {
            name: "user_id",
        },
    });
    Image.belongsTo(Categorie, {
        foreignKey: {
            name: "image_id",
        },
    });
    Categorie.hasMany(Image, {
        foreignKey: {
            name: "categorie_id",
        },
    });

    return sequelize.sync().then(() => {
        console.log("Connécté à Maria !");
        //PHASE DE TEST
        // images.map((image) => {
        //     Image.create({
        //         name: image.name,
        //         chemin: image.chemin,
        //         description: image.description,
        //     });
        //     // .then((image) => console.log(image.toJSON()));
        // });
        // agencements.map((agencement) => {
        //     Agencement.create({
        //         name: agencement.name,
        //         location: agencement.location,
        //         description: agencement.description,
        //     }); //.then((agencement) => console.log(`Agencement n° ${agencement.id} OK`))
        // });
        // petitsObjets.map((petitObjet) => {
        //     PetitObjet.create({
        //         name: petitObjet.name,
        //         description: petitObjet.description,
        //         prix: petitObjet.prix,
        //     }); //.then((petitObjet) => console.log(`Petit Objet n° ${petitObjet.id} ==> OK`))
        // });
        // meubles.map((meuble) => {
        //     Meuble.create({
        //         name: meuble.name,
        //         description: meuble.description,
        //         prix: meuble.prix,
        //     }); //.then((meuble) => console.log(`Meuble n° ${meuble.id} ==> OK`));
        // });
        // comments.map((comment) => {
        //     Comment.create({
        //         userName: comment.userName,
        //         content: comment.content,
        //     }); //.then((comment) => console.log(`comment n° ${comment.id} ==> OK`))
        // });
        // users.map((user) => {
        //     bcrypt.hash(user.password, 10).then((hash) => {
        //         User.create({
        //             userName: user.userName,
        //             eMail: user.eMail,
        //             password: hash,
        //         }); //.then((user) => console.log(user));
        //     });
        // });
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
    User,
};
