const express = require("express");
const cors = require("cors");

const sequelize = require("./db/sequelize");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/api", (req, res) => {
    res.send({ message: "Hello from server !" });
});

app.use(bodyParser.json());
app.use(cors());

sequelize.initDb();

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
