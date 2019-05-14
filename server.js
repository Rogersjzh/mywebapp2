var express =  require('express');
var port = process.env.PORT||8080;
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var http = require('http');

var path = require('path');

app.use(router);

app.listen(port, function() {
	console.log('Listening on port ' + port)
})