const express = require("express");
const router = express.Router();

const {split} = require('../controllers/splitbillController');

router.get('/', split)

module.exports=router;