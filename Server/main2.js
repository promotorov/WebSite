'use strict';

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const Article = require('./crud/Article');
const Image = require('./crud/Image');
var article = new Article();
var img = new Image();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get(['/', '/index.html'], function(req, res) {
    article.loadArticlesStart(req, res);
});

app.post('/login', function(req, res) {
  	console.log("login ....");
  	article.loadArticlesButtonClick(req, res);
});

app.listen(3060);