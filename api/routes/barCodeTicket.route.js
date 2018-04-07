
const express = require('express');
const router = express.Router();

const {
  getCheckBarCodeTicket,
  postCheckBarCodeTicket,
} = require('../controllers/barCodeTicket.controller');

router.get('/', getCheckBarCodeTicket);

router.post('/', postCheckBarCodeTicket);

module.exports = router;
