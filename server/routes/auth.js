const router = require("express").Router();

//controller
const {showMessage, register} = require('../controllers/auth')

// router.get("/:message", showMessage)
router.post('/register', register)

module.exports =  router;