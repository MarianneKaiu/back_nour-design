const express = require("express");
const sequelize = require("./db/sequelize");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const cors = require("cors");

//const userRoutes = require("./routes/User");

const app = express();

app.get("/api", (req, res) => {
    res.send({ message: "Hello from server !" });
});

app.use(bodyParser.json());
app.use(cors());

sequelize.initDb();

//app.use("/api/users", userRoutes);

require("./controllers/Crud_User/findAll_users")(app);

require("./controllers/Crud_User/findByPk_user")(app);
require("./controllers/Crud_User/create_user")(app);
require("./controllers/Crud_User/update_user")(app);
require("./controllers/Crud_User/delete_user")(app);

// require("./routes/Image");
// require("./routes/Comment");

require("./auth/authController")(app);

app.listen(
    PORT,
    console.log(`Server started on port : ${PORT} http://localhost:${PORT}`)
);
