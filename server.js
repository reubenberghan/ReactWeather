'use strict';

const express = require('express');

// create our app
const app = express();
const PORT = process.env.PORT || 3000;

// set the port
app.set('port', PORT);

// set our folder to serve static files from
app.use(express.static('public'));

// start our server
app.listen(app.get('port'), () => console.log(`Express server is up on port ${ app.get('port') }`))