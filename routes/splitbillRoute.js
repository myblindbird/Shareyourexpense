const express = require("express");
const router = express.Router();

const {split} = require('../controllers/splitbillController');

router.post('/', split)

module.exports=router;