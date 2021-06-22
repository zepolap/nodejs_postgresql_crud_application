//
// use node server.js <port>
//

const express = require('express');
const app = express();

var bodyParser = require('body-parser');

global.__basedir = __dirname;
 
const db = require('./app/config/db.config.js');

let router = require('./app/routers/router.js');

const PORT = (process.argv[2] || 4000);

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static('resources'));
app.use('/', router);

// Create a server
// Start listening on a specific port
const server = app.listen(PORT, function () {
 
  console.log("Application are listening at port: %s", PORT);

});
