const express = require("express");
const router = express.Router();

const {creategroup} = require('../controllers/groupController')

router.post('/:userId',creategroup)

module.exports = router;