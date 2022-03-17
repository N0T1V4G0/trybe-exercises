const express = require('express');
const simpsonsControllers = require('../controllers/simpsonsControllers');

const router = express.Router();

router
  .route('/')
  .get(simpsonsControllers.getAllSimpsons)
  .post(simpsonsControllers.validadeID, simpsonsControllers.createSimpson);
router
  .route('/:id')
  .get(simpsonsControllers.checkID, simpsonsControllers.getSimpson);

module.exports = router;
