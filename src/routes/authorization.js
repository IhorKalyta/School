const router = require('express').Router();
const authController = require('../controllers/authorizationController');

router.post('/', authController.createAuthorizationToken);

module.exports = router;