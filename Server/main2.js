'use strict';

global.Sequelize = require('sequelize');
global.sequelize = new Sequelize('postgres://uylgtlgt:525K6ldOq3y8JILuISnI1z48EL5r3RYP@tantor.db.elephantsql.com:5432/uylgtlgt', 
{
  pool: {
    max: 3,
    min: 0,
    idle: 10000
  }
});
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const Article = require('./crud/Article');
const Image = require('./crud/Image');
const Champion = require('./crud/Champion');
const Role = require('./crud/Role');
const Item = require('./crud/Item');
var article = new Article();
var img = new Image();
var champion = new Champion();
const Guide = require('./crud/Guide');
const PlayerEUW = require('./crud/PlayerEUW');
const GameEUW = require('./crud/GameEUW');
const StatEUW = require('./crud/StatisticEUW');
const MatchEUW = require('./crud/MatchEUW');
var guide = new Guide();
var item = new Item();
var role = new Role();
var pEUW = new PlayerEUW();
var gEUW = new GameEUW();
var sEUW = new StatEUW();
var mEUW = new MatchEUW();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

/*pEUW.createPlayer(1, "Eclipse");
pEUW.createPlayer(2, "Murazor");
pEUW.createPlayer(3, "Jove");

pEUW.createPlayer(4, "TeamleSS");
pEUW.createPlayer(5, "DoubleLift");
pEUW.createPlayer(6, "JekLucky");

pEUW.createPlayer(7, "Gabriel_Angelos");
pEUW.createPlayer(8, "123xaxaxaxaxa");
pEUW.createPlayer(9, "Mugenor");

pEUW.createPlayer(10, "Huni");
pEUW.createPlayer(11, "Blank");
pEUW.createPlayer(12, "Wolf");*/

/*gEUW.createGame(1);
gEUW.createGame(2);
gEUW.createGame(3);
gEUW.createGame(4);
gEUW.createGame(5);
gEUW.createGame(6);
gEUW.createGame(7);
gEUW.createGame(8);
gEUW.createGame(9);
gEUW.createGame(10);*/

/*sEUW.createStatistic(1, 12, 24, 6, 201);
sEUW.createStatistic(2, 22, 24, 0, 101);
sEUW.createStatistic(3, 2, 14, 1, 123);
sEUW.createStatistic(4, 4, 26, 2, 153);
sEUW.createStatistic(5, 21, 15, 3, 146);
sEUW.createStatistic(6, 4, 32, 4, 153);
sEUW.createStatistic(7, 3, 54, 5, 223);
sEUW.createStatistic(8, 6, 12, 6, 264);
sEUW.createStatistic(9, 8, 75, 7, 256);
sEUW.createStatistic(10, 3, 33, 8, 234);

sEUW.createStatistic(11, 14, 1, 9, 65);
sEUW.createStatistic(12, 31, 2, 8, 43);
sEUW.createStatistic(13, 23, 3, 7, 65);
sEUW.createStatistic(14, 4, 4, 6, 34);
sEUW.createStatistic(15, 1, 5, 5, 65);
sEUW.createStatistic(16, 0, 6, 4, 153);
sEUW.createStatistic(17, 1, 7, 3, 164);
sEUW.createStatistic(18, 6, 8, 2, 178);
sEUW.createStatistic(19, 2, 9, 1, 173);
sEUW.createStatistic(20, 7, 10, 6, 153);

sEUW.createStatistic(21, 15, 3, 5, 123);
sEUW.createStatistic(22, 17, 23, 4, 126);
sEUW.createStatistic(23, 18, 0, 3, 132);
sEUW.createStatistic(24, 19, 43, 2, 135);
sEUW.createStatistic(25, 11, 12, 1, 154);
sEUW.createStatistic(26, 21, 32, 7, 164);
sEUW.createStatistic(27, 20, 12, 8, 168);
sEUW.createStatistic(28, 4, 43, 9, 167);
sEUW.createStatistic(29, 18, 32, 10, 301);
sEUW.createStatistic(30, 5, 21, 1, 300);

sEUW.createStatistic(31, 7, 25, 2, 321);
sEUW.createStatistic(32, 5, 32, 3, 345);
sEUW.createStatistic(33, 5, 26, 4, 115);
sEUW.createStatistic(34, 7, 28, 5, 211);
sEUW.createStatistic(35, 15, 19, 10, 125);
sEUW.createStatistic(36, 32, 13, 9, 307);
sEUW.createStatistic(37, 5, 1, 8, 237);
sEUW.createStatistic(38, 14, 21, 7, 342);
sEUW.createStatistic(39, 1, 4, 6, 154);
sEUW.createStatistic(40, 24, 6, 1, 107);*/

//mEUW.createMatch(37,     1, 10, 37,  11, 15,  true);
//mEUW.createMatch(38,     2, 10, 38,  13, 14,  false);
//mEUW.createMatch(39,     3, 10, 39,  8, 19,  false);
//mEUW.createMatch(40,     4, 10, 40,  17, 2,  true);

//mEUW.createMatch(37,     1, 10, 37,    true);
//mEUW.createMatch(38,     2, 10, 38,    false);
//mEUW.createMatch(39,     3, 10, 39,    true);
//mEUW.createMatch(40,     4, 10, 40,    false);

app.get(['/', '/index.html'], function(req, res) {
	console.log("------------------------------");

	var args = {
		articles: new Array(),
		images: new Array(),
		count: 0, 
		main: 0,
		champions: new Array(),
		championsImages: new Array(),
		guides: new Array(),
		guidesImages: new Array(),
		items: new Array(),
		itemsImages: new Array(),

		listChampions: new Array(),
		gameChampions: new Array(),
		winChampions: new Array(),
		winRateChampions: new Array(),

		games: 0
	}

	let promise = new Promise((resolve, reject) => {	
		console.log(1);
		article.loadArticlesStart(args, resolve);
	});
	let promise2 = new Promise((resolve, reject) => {	
		console.log(2);
		champion.loadChampionsWithImages(args, resolve);
	});
	let promise3 = new Promise((resolve, reject) => {
		console.log(3);	
		guide.loadMostPopulars(args, resolve);
	});
	let promise4 = new Promise((resolve, reject) => {	
		mEUW.getChampionsList(args, resolve);
	});
	let promise5 = new Promise((resolve, reject) => {	
		mEUW.getPickedChampions(args, resolve);
	});
    Promise.all([promise, promise2, promise3, promise4]).then(result => {
		function compareGuides(a, b) {
  			return b.raiting - a.raiting;
		}
		var j;
		args.guides.sort(compareGuides);
		console.log("Size: "+args.listChampions.length +" Elements: ");
		console.log("Size: "+args.topWinChampions.length +" Elements: ");
		for(j=0; j<args.listChampions.length; j++){
			args.winRateChampions[j] = args.winChampions[j]/args.gameChampions[j] * 100
		}
		var winChampSort = [];
		for(j=0; j<args.listChampions.length; j++){
			winChampSort.push({
			    key:   args.listChampions[j],
			    value: args.winRateChampions[j]
			});
		}
		var pickChampSort = [];
		for(j=0; j<args.listChampions.length; j++){
			pickChampSort.push({
			    key:   args.listChampions[j],
			    value: args.gameChampions[j]/args.games*100
			});
		}
		function compareWinChamp(a, b) {
  			return b.value - a.value;
		}
		winChampSort.sort(compareWinChamp);
		pickChampSort.sort(compareWinChamp);

		for(j=0; j<pickChampSort.length; j++){
			console.log(pickChampSort[j].key + ":" + pickChampSort[j].value);
		}

    	res.render('index.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
    		guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, winChampions: winChampSort, pickChampions: pickChampSort});
    });
});

app.post('/loadNewArticles', function(req, res) {
  	console.log("load ....");
  	article.loadArticlesButtonClick(req, res);
});

app.get('/stop', function(req, res) {
	console.log("stop connection");
  	global.sequelize.close();
});

app.get('/login', function(req, res) {

	var args = {
		champions: new Array(),
		championsImages: new Array(),
		guides: new Array(),
		guidesImages: new Array(),
		items: new Array(),
		itemsImages: new Array(),

		listChampions: new Array(),
		gameChampions: new Array(),
		winChampions: new Array(),
		winRateChampions: new Array(),

		games: 0
	}

	let promise = new Promise((resolve, reject) => {	
		article.loadArticlesStart(args, resolve);
	});
	let promise2 = new Promise((resolve, reject) => {	
		champion.loadChampionsWithImages(args, resolve);
	});
	let promise3 = new Promise((resolve, reject) => {	
		guide.loadMostPopulars(args, resolve);
	});
	let promise4 = new Promise((resolve, reject) => {	
		mEUW.getChampionsList(args, resolve);
	});
	let promise5 = new Promise((resolve, reject) => {	
		mEUW.getPickedChampions(args, resolve);
	});
    Promise.all([promise, promise2, promise3, promise4]).then(result => {
		function compareGuides(a, b) {
  			return b.raiting - a.raiting;
		}
		var j;
		args.guides.sort(compareGuides);
		console.log("Size: "+args.listChampions.length +" Elements: ");
		console.log("Size: "+args.topWinChampions.length +" Elements: ");
		for(j=0; j<args.listChampions.length; j++){
			args.winRateChampions[j] = args.winChampions[j]/args.gameChampions[j] * 100
		}
		var winChampSort = [];
		for(j=0; j<args.listChampions.length; j++){
			winChampSort.push({
			    key:   args.listChampions[j],
			    value: args.winRateChampions[j]
			});
		}
		var pickChampSort = [];
		for(j=0; j<args.listChampions.length; j++){
			pickChampSort.push({
			    key:   args.listChampions[j],
			    value: args.gameChampions[j]/args.games*100
			});
		}
		function compareWinChamp(a, b) {
  			return b.value - a.value;
		}
		winChampSort.sort(compareWinChamp);
		pickChampSort.sort(compareWinChamp);

		for(j=0; j<pickChampSort.length; j++){
			console.log(pickChampSort[j].key + ":" + pickChampSort[j].value);
		}

    	res.render('login.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
    		guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, winChampions: winChampSort, pickChampions: pickChampSort});
    });
});

app.get('/register', function(req, res) {

	var args = {
		champions: new Array(),
		championsImages: new Array(),
		guides: new Array(),
		guidesImages: new Array(),
		items: new Array(),
		itemsImages: new Array(),

		listChampions: new Array(),
		gameChampions: new Array(),
		winChampions: new Array(),
		winRateChampions: new Array(),

		games: 0
	}

	let promise = new Promise((resolve, reject) => {	
		article.loadArticlesStart(args, resolve);
	});
	let promise2 = new Promise((resolve, reject) => {	
		champion.loadChampionsWithImages(args, resolve);
	});
	let promise3 = new Promise((resolve, reject) => {	
		guide.loadMostPopulars(args, resolve);
	});
	let promise4 = new Promise((resolve, reject) => {	
		mEUW.getChampionsList(args, resolve);
	});
	let promise5 = new Promise((resolve, reject) => {	
		mEUW.getPickedChampions(args, resolve);
	});
    Promise.all([promise, promise2, promise3, promise4]).then(result => {
		function compareGuides(a, b) {
  			return b.raiting - a.raiting;
		}
		var j;
		args.guides.sort(compareGuides);
		console.log("Size: "+args.listChampions.length +" Elements: ");
		console.log("Size: "+args.topWinChampions.length +" Elements: ");
		for(j=0; j<args.listChampions.length; j++){
			args.winRateChampions[j] = args.winChampions[j]/args.gameChampions[j] * 100
		}
		var winChampSort = [];
		for(j=0; j<args.listChampions.length; j++){
			winChampSort.push({
			    key:   args.listChampions[j],
			    value: args.winRateChampions[j]
			});
		}
		var pickChampSort = [];
		for(j=0; j<args.listChampions.length; j++){
			pickChampSort.push({
			    key:   args.listChampions[j],
			    value: args.gameChampions[j]/args.games*100
			});
		}
		function compareWinChamp(a, b) {
  			return b.value - a.value;
		}
		winChampSort.sort(compareWinChamp);
		pickChampSort.sort(compareWinChamp);

		for(j=0; j<pickChampSort.length; j++){
			console.log(pickChampSort[j].key + ":" + pickChampSort[j].value);
		}

    	res.render('register.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
    		guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, winChampions: winChampSort, pickChampions: pickChampSort});
    });
});

app.get('/champions', function(req, res) {

	var args = {
		champions: new Array(),
		championsImages: new Array(),
		guides: new Array(),
		guidesImages: new Array(),
		items: new Array(),
		itemsImages: new Array(),

		listChampions: new Array(),
		gameChampions: new Array(),
		winChampions: new Array(),
		winRateChampions: new Array(),

		games: 0
	}

	let promise = new Promise((resolve, reject) => {	
		article.loadArticlesStart(args, resolve);
	});
	let promise2 = new Promise((resolve, reject) => {	
		champion.loadChampionsWithImages(args, resolve);
	});
	let promise3 = new Promise((resolve, reject) => {	
		guide.loadMostPopulars(args, resolve);
	});
	let promise4 = new Promise((resolve, reject) => {	
		mEUW.getChampionsList(args, resolve);
	});
	let promise5 = new Promise((resolve, reject) => {	
		mEUW.getPickedChampions(args, resolve);
	});
    Promise.all([promise, promise2, promise3, promise4]).then(result => {
		function compareGuides(a, b) {
  			return b.raiting - a.raiting;
		}
		var j;
		args.guides.sort(compareGuides);
		console.log("Size: "+args.listChampions.length +" Elements: ");
		console.log("Size: "+args.topWinChampions.length +" Elements: ");
		for(j=0; j<args.listChampions.length; j++){
			args.winRateChampions[j] = args.winChampions[j]/args.gameChampions[j] * 100
		}
		var winChampSort = [];
		for(j=0; j<args.listChampions.length; j++){
			winChampSort.push({
			    key:   args.listChampions[j],
			    value: args.winRateChampions[j]
			});
		}
		var pickChampSort = [];
		for(j=0; j<args.listChampions.length; j++){
			pickChampSort.push({
			    key:   args.listChampions[j],
			    value: args.gameChampions[j]/args.games*100
			});
		}
		function compareWinChamp(a, b) {
  			return b.value - a.value;
		}
		winChampSort.sort(compareWinChamp);
		pickChampSort.sort(compareWinChamp);

		for(j=0; j<pickChampSort.length; j++){
			console.log(pickChampSort[j].key + ":" + pickChampSort[j].value);
		}

    	res.render('champion.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
    		guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, winChampions: winChampSort, pickChampions: pickChampSort});
    });
});

app.get('/items', function(req, res) {

	var args = {
		champions: new Array(),
		guides: new Array(),
		guidesImages: new Array(),
		championsImages: new Array(),
		items: new Array(),
		itemsImages: new Array()
	}
	let promise = new Promise((resolve, reject) => {
		item.loadItems(args, resolve);
	});
	let promise2 = new Promise((resolve, reject) => {	
		champion.loadChampions(args, resolve);
	});
	let promise3 = new Promise((resolve, reject) => {	
		guide.loadMostPopulars(args, resolve);
	});
    Promise.all([promise, promise2, promise3]).then(result => {

		function compareGuides(a, b) {
  			return b.raiting - a.raiting;
		}
		args.guides.sort(compareGuides);
    	res.render('item.ejs', {champion: args.champions, guides: args.guides, guidesImages: args.guidesImages, championsImages: args.championsImages, items: args.items, itemsImages: args.itemsImages});
    });
});

app.get('/champions/*', function(req, res) {
	var id = req.path.substring(11);
	console.log(id);
	var args = {
		champions: new Array(),
		guides: new Array(),
		guidesImages: new Array(),
		championsImages: new Array(),
		items: new Array(),
		itemsImages: new Array(),
		mainChampion: new Array()
	}

	let promise = new Promise((resolve, reject) => {	
		article.loadArticlesStart(args, resolve);
	});
	let promise2 = new Promise((resolve, reject) => {	
		champion.loadChampions(args, resolve);
	});
	let promise3 = new Promise((resolve, reject) => {	
		guide.loadMostPopulars(args, resolve);
	});
	let promise4 = new Promise((resolve, reject) => {	
		champion.loadOneChampion(id, args, resolve);
	});
    Promise.all([promise, promise2, promise3, promise4]).then(result => {

		function compareGuides(a, b) {
  			return b.raiting - a.raiting;
		}
		args.guides.sort(compareGuides);
		console.log(args.mainChampion.length);
    	res.render('championOne.ejs', {champion: args.champions, championsImages: args.championsImages,  guides: args.guides, guidesImages: args.guidesImages, championsImages: args.championsImages,
    		items: args.items, itemsImages: args.itemsImages, mainChampion: args.mainChampion[0]});
    });
});

app.get('/items/*', function(req, res) {
	var id = req.path.substring(7);
	console.log(id);
	var args = {
		champions: new Array(),
		guides: new Array(),
		guidesImages: new Array(),
		championsImages: new Array(),
		items: new Array(),
		itemsImages: new Array(),
		mainItem: new Array()
	}

	let promise = new Promise((resolve, reject) => {	
		article.loadArticlesStart(args, resolve);
	});
	let promise2 = new Promise((resolve, reject) => {	
		champion.loadChampions(args, resolve);
	});
	let promise3 = new Promise((resolve, reject) => {	
		guide.loadMostPopulars(args, resolve);
	});
	let promise4 = new Promise((resolve, reject) => {	
		item.loadOneItem(id, args, resolve);
	});
	let promise5 = new Promise((resolve, reject) => {
		item.loadItems(args, resolve);
	});
    Promise.all([promise, promise2, promise3, promise4, promise5]).then(result => {

		function compareGuides(a, b) {
  			return b.raiting - a.raiting;
		}
		args.guides.sort(compareGuides);
    	res.render('itemOne.ejs', {champion: args.champions, championsImages: args.championsImages,  guides: args.guides, guidesImages: args.guidesImages, championsImages: args.championsImages,
    		items: args.items, itemsImages: args.itemsImages, mainItem: args.mainItem[0]});
    });
});

app.get('/news/newOne', function(req, res) {
	
	var args = {
		champions: new Array(),
		guides: new Array(),
		guidesImages: new Array(),
		championsImages: new Array(),
		items: new Array(),
		itemsImages: new Array()
	}

	let promise = new Promise((resolve, reject) => {	
		article.loadArticlesStart(args, resolve);
	});
	let promise2 = new Promise((resolve, reject) => {	
		champion.loadChampions(args, resolve);
	});
	let promise3 = new Promise((resolve, reject) => {	
		guide.loadMostPopulars(args, resolve);
	});
    Promise.all([promise, promise2, promise3]).then(result => {

		function compareGuides(a, b) {
  			return b.raiting - a.raiting;
		}
		args.guides.sort(compareGuides);
    	res.render('articleOne.ejs', {champion: args.champions, championsImages: args.championsImages,  guides: args.guides, guidesImages: args.guidesImages, championsImages: args.championsImages,
    		items: args.items, itemsImages: args.itemsImages });
    });

});

app.get('/euw/JekLucky', function(req, res) {
	
	var args = {
		champions: new Array(),
		guides: new Array(),
		guidesImages: new Array(),
		championsImages: new Array(),
		items: new Array(),
		itemsImages: new Array()
	}

	let promise = new Promise((resolve, reject) => {	
		article.loadArticlesStart(args, resolve);
	});
	let promise2 = new Promise((resolve, reject) => {	
		champion.loadChampions(args, resolve);
	});
	let promise3 = new Promise((resolve, reject) => {	
		guide.loadMostPopulars(args, resolve);
	});
    Promise.all([promise, promise2, promise3]).then(result => {

		function compareGuides(a, b) {
  			return b.raiting - a.raiting;
		}
		args.guides.sort(compareGuides);
    	res.render('stat.ejs', {champion: args.champions, championsImages: args.championsImages,  guides: args.guides, guidesImages: args.guidesImages, championsImages: args.championsImages,
    		items: args.items, itemsImages: args.itemsImages });
    });

});

app.listen(8155);

function compareGuides(a, b) {
  	return b.raiting - a.raiting;
}

function compareChampionsWin(a, b) {
  	return b - a;
}