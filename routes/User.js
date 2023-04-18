const express = require("express");
const router = express.router();

const createUserCtrl = require("../controllers/Crud_User/create_user");

router.post("/", createUserCtrl);

module.exports = router;
