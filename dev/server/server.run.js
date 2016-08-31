'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('./database')();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

let port = 8091;

require('./controllers')(app);

app.listen(port);



console.log('magic happend on port', port);
