
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const port = process.env.PORT || 3000;
const app = express();

const barCodeTicketRouter = require('./api/routes/barCodeTicket.route');

app
  .use(helmet())
  .use(bodyParser.urlencoded({ extended: true}))
  .use(bodyParser.json())
  .use('/barcodeticket', barCodeTicketRouter)
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

module.exports = app;
