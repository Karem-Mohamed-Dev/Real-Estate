const router = require("express").Router();

const {test} = require('../controllers/user');

router.get('/', test)

module.exports = router;