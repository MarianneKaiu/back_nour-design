require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const cors = require("cors");
// const cookieSession = require("cookie-session");
// const urlEncoded = require("urlencode");

const sequelize = require("./db/sequelize");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(
//     cookieSession({
//         name: "user-session",
//         secret: process.env.COOKIE_SECRET,
//         httpOnly: true,
//         maxAge: 1000 * 60 * 60 * 24,
//     })
// );

sequelize.initDb();

app.get("/api", (req, res) => {
    res.send({ message: "Hello from server !" });
});

require("./controllers/Crud_User/findAll_users")(app);

require("./controllers/Crud_User/findByPk_user")(app);
require("./controllers/Crud_User/create_user")(app);
require("./controllers/Crud_User/update_user")(app);
require("./controllers/Crud_User/delete_user")(app);

require("./controllers/Crud_Comment/findAll_comments")(app);

require("./controllers/Crud_Comment/findByPk_comment")(app);
require("./controllers/Crud_Comment/update_comment")(app);
require("./controllers/Crud_Comment/create_comment")(app);
require("./controllers/Crud_Comment/delete_comment")(app);

require("./controllers/Crud_Image/findAll_images")(app);

require("./controllers/Crud_Image/create_image")(app);
require("./controllers/Crud_Image/update_image")(app);
require("./controllers/Crud_Image/delete_image")(app);
require("./controllers/Crud_Image/findByPk_image")(app);

require("./auth/authController")(app);

app.listen(
    PORT,
    console.log(`Server started on port : ${PORT} http://localhost:${PORT}`)
);
