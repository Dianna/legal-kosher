//setup Dependencies
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')
var http = require('http');
var port = 8008;

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../build')));
app.use(cors());

var server = http.createServer(app);


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '../build/index.html'));
});

var server = http.createServer(app);
server.listen(port);

console.log('Listening on:' + port );