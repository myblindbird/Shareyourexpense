const express = require("express");
const router = express.Router();

const {calculateexpense} = require('../controllers/expenseController');

router.get('/', calculateexpense)

module.exports=router;