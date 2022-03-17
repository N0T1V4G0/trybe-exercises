const express = require('express');
const simpsonsControllers = require('../controllers/simpsonsControllers');

const router = express.Router();

router.route('/').get(simpsonsControllers.getAllSimpsons);
router
  .route('/:id')
  .get(simpsonsControllers.checkID, simpsonsControllers.getSimpson);

module.exports = router;
