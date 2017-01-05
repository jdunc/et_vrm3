console.log("Visitor Manager is going to work!");

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(morgan('dev'));

//body parser time
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;

var mongoose = require('mongoose');
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/vrm_dev';
mongoose.connect(mongoUri);

app.use('/api', require('./routes'));

app.listen(port);
console.log('Running on ' + port);
