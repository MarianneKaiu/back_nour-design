const express = require("express");
const sequelize = require("./db/sequelize");
const bodyParser = require("body-parser");
const port = 6000;
//require("dotenv").config({ path: "./config/.env" });

const app = express();

app.use(bodyParser.json());

sequelize.initDb();

app.get("/", (req, res) => {
    res.json("Hello :)");
});

require("./routes/read/findAll_Agencement")(app);
require("./routes/read/findAll_Meuble")(app);
require("./routes/read/findAll_PetitsObjets")(app);
require("./routes/read/findAll_Comment")(app);

require("./routes/read/findByPk_Agencement")(app);
require("./routes/read/findByPk_Meuble")(app);
require("./routes/read/findByPk_PetitObjet")(app);
require("./routes/read/findByPk_Comment")(app);

require("./routes/update/update_Agencement")(app);
require("./routes/update/update_Meuble")(app);
require("./routes/update/update_PetitObjet")(app);
require("./routes/update/update_Comment")(app);

require("./routes/create/create_Agencement")(app);
require("./routes/create/create_Meuble")(app);
require("./routes/create/create_PetitObjet")(app);
require("./routes/create/create_Comment")(app);

require("./routes/delete/delete_Agencement")(app);
require("./routes/delete/delete_Meuble")(app);
require("./routes/delete/delete_PetitObjet")(app);
require("./routes/delete/delete_Comment")(app);

app.listen(port, () => {
    console.log(`Listening on Port ${port} http://localhost:${port}`);
});
