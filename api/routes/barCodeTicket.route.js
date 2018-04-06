
const express = require('express');
const router = express.Router();

const {
  checkBarCodeTicket
} = require('../controllers/barCodeTicket.controller');

router.get('/', checkBarCodeTicket);

router.post('/', checkBarCodeTicket);

module.exports = router;
