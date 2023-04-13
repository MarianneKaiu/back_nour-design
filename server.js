const express = require("express");
const sequelize = require("./db/sequelize");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const cors = require("cors");

const app = express();

app.get("/api", (req, res) => {
    res.send({ message: "Hello from server !" });
});

app.use(bodyParser.json());
app.use(cors());

sequelize.initDb();

////////////////////////////////////ADMIN////////////////////////////////////////////////////////
require("./routes/Crud_Admin/adm_create_Image")(app);
require("./routes/Crud_Admin/adm_update_image")(app);
require("./routes/Crud_Admin/adm_delete_Image")(app);

require("./routes/Crud_User/findAll_users")(app);
require("./routes/Crud_User/findByPk_user.js")(app);
require("./routes/Crud_User/create_user")(app);
require("./routes/Crud_User/update_user")(app);
require("./routes/Crud_User/delete_user")(app);

////////////////////////////////////ADMIN////////////////////////////////////////////////////////

require("./routes/Crud_Comment/findAll_Comment")(app);
require("./routes/Crud_Image/findAll_Images")(app);

require("./routes/Crud_Comment/findByPk_Comment")(app);
require("./routes/Crud_Image/findByPk_Image")(app);

require("./routes/Crud_Comment/update_Comment")(app);

require("./routes/Crud_Comment/create_Comment")(app);

require("./routes/Crud_Comment/delete_Comment")(app);

app.listen(
    PORT,
    console.log(`Server started on port : ${PORT} http://localhost:${PORT}`)
);
