const express = require("express");
const app = express();

require("../controllers/Crud_Image/findAll_images")(app);

require("../controllers/Crud_Image/create_image")(app);
require("../controllers/Crud_Image/update_image")(app);
require("../controllers/Crud_Image/delete_image")(app);
require("../controllers/Crud_Image/findByPk_image")(app);
