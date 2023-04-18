const express = require("express");
const app = express();

require("../controllers/Crud_Comment/findAll_comments")(app);

require("../controllers/Crud_Comment/findByPk_comment")(app);
require("../controllers/Crud_Comment/update_comment")(app);
require("../controllers/Crud_Comment/create_comment")(app);
require("../controllers/Crud_Comment/delete_comment")(app);
