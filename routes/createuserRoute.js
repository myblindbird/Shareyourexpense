const express = require("express");
const router = express.Router();

const {createuser} = require('../controllers/userController');

router.post("/",createuser );

module.exports = router;