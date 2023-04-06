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

// require("./routes/read/findAll_Agencement")(app);
// require("./routes/read/findAll_Meuble")(app);
// require("./routes/read/findAll_PetitsObjets")(app);
require("./routes/read/findAll_Comment")(app);
require("./routes/read/findAll_Image")(app);

// require("./routes/read/findByPk_Agencement")(app);
// require("./routes/read/findByPk_Meuble")(app);
// require("./routes/read/findByPk_PetitObjet")(app);
require("./routes/read/findByPk_Comment")(app);
require("./routes/read/findByPk_Image")(app);

// require("./routes/update/update_Agencement")(app);
// require("./routes/update/update_Meuble")(app);
// require("./routes/update/update_PetitObjet")(app);
require("./routes/update/update_Comment")(app);
require("./routes/update/update_Image")(app);

// require("./routes/create/create_Agencement")(app);
// require("./routes/create/create_Meuble")(app);
// require("./routes/create/create_PetitObjet")(app);
require("./routes/create/create_Comment")(app);
require("./routes/create/create_Image")(app);

// require("./routes/delete/delete_Agencement")(app);
// require("./routes/delete/delete_Meuble")(app);
// require("./routes/delete/delete_PetitObjet")(app);
require("./routes/delete/delete_Comment")(app);
require("./routes/delete/delete_Image")(app);

app.listen(
    PORT,
    console.log(`Server started on port : ${PORT} http://localhost:${PORT}`)
);
