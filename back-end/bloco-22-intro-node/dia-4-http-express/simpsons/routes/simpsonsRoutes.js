const express = require('express');
const simpsonsControllers = require('../controllers/simpsonsControllers');

const router = express.Router();

router.route('/').get(simpsonsControllers.getAllSimpsons);

module.exports = router;
