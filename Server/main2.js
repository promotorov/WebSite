'use strict';

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const Article = require('./crud/Article');
const Image = require('./crud/Image');
const Champion = require('./crud/Champion');
var article = new Article();
var img = new Image();
var champion = new Champion();
const Guide = require('./crud/Guide');
var guide = new Guide();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get(['/', '/index.html'], function(req, res) {
	var args = {
		articles: new Array(),
		images: new Array(),
		count: 0, 
		main: 0,
		champions: new Array(),
		guides: new Array(),
		guidesImages: new Array()
	}

	let promise = new Promise((resolve, reject) => {	
		article.loadArticlesStart(args, resolve);
	});
	let promise2 = new Promise((resolve, reject) => {	
		champion.loadNewestChampions(args, resolve);
	});
	let promise3 = new Promise((resolve, reject) => {	
		guide.loadMostPopulars(args, resolve);
	});
    Promise.all([promise, promise2, promise3]).then(result => {

		function compareGuides(a, b) {
  			return b.raiting - a.raiting;
		}
		args.guides.sort(compareGuides);
    	res.render('index.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions,
    		guides: args.guides, guidesImages: args.guidesImages});
    });
});

app.post('/login', function(req, res) {
  	console.log("login ....");
  	article.loadArticlesButtonClick(req, res);
});

app.listen(3204);