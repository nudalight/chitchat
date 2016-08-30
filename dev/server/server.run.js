'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

let port = 8091;


require('./controllers')(app);


let User = require('./database/models/user');
let Message = require('./database/models/message');




app.listen(port);

console.log('magic happend on port', port);
