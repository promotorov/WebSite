'use strict';

global.Sequelize = require('sequelize');
global.sequelize = new Sequelize('postgres://uylgtlgt:525K6ldOq3y8JILuISnI1z48EL5r3RYP@tantor.db.elephantsql.com:5432/uylgtlgt', 
{
  pool: {
    max: 2,
    min: 0,
    idle: 10000
  }
});
var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var crypto = require('crypto');
const Article = require('./crud/Article');
const Image = require('./crud/Image');
const Champion = require('./crud/Champion');
const Role = require('./crud/Role');
const Item = require('./crud/Item');
const User = require('./crud/User');
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
var user = new User();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(cookieParser('your secret here'));
app.use(session());
const KEY = "RGAPI-1802db79-87d1-4154-ae14-d9852ff4b61e";

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
	if (req.session.status  === undefined){
		console.log("NULLL");
		req.session.status = "was";
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

		games: 0,

		listItems: new Array(),
		gameItems: new Array(),
		winItems: new Array(),
		winRateItems: new Array(),

		gamesItems: 0
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
			mEUW.getItemsList(args, resolve);
		});
		let promise6 = new Promise((resolve, reject) => {
			item.loadItems(args, resolve);
		});

	    Promise.all([promise, promise2, promise3, promise4, promise5, promise6]).then(result => {
			function compareGuides(a, b) {
	  			return b.raiting - a.raiting;
			}
			var j;
			args.guides.sort(compareGuides);
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


			for(j=0; j<args.listItems.length; j++){
				args.winRateItems[j] = args.winItems[j]/args.gameItems[j] * 100
			}
			var winItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				winItemSort.push({
				    key:   args.listItems[j],
				    value: args.winRateItems[j]
				});
			}
			var pickItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				pickItemSort.push({
				    key:   args.listItems[j],
				    value: args.gameItems[j]/args.gamesItems*100
				});
			}
			winItemSort.sort(compareWinChamp);
			pickItemSort.sort(compareWinChamp);

			for(j=0; j<winItemSort.length; j++){
				console.log(winItemSort[j].key + ":" + winItemSort[j].value);
			}

			req.session.title = args.articles
			req.session.count = args.count
			req.session.image = args.images
			req.session.main = args.main
			req.session.champion = args.champions
			req.session.championsImages = args.championsImages
			req.session.guides = args.guides
			req.session.guidesImages = args.guidesImages
			req.session.items = args.items
			req.session.itemsImages = args.itemsImages
			req.session.winChampions = winChampSort
			req.session.pickChampions = pickChampSort
			req.session.winItems = winItemSort
			req.session.pickItems = pickItemSort

	    	res.render('index.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    		guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    		winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort});
	   	});
	}
	else if (req.session.status==="was"){
		console.log("WAS");
		console.log(req.session.userId);
		res.render('index.ejs', {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
	    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
	    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
	    		winItems: req.session.winItems, pickItems: req.session.pickItems});
	}
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
	if (req.session.status  === undefined){
		console.log("NULLL");
		req.session.status = "was";
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

		games: 0,

		listItems: new Array(),
		gameItems: new Array(),
		winItems: new Array(),
		winRateItems: new Array(),

		gamesItems: 0
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
			mEUW.getItemsList(args, resolve);
		});
		let promise6 = new Promise((resolve, reject) => {
			item.loadItems(args, resolve);
		});

	    Promise.all([promise, promise2, promise3, promise4, promise5, promise6]).then(result => {
			function compareGuides(a, b) {
	  			return b.raiting - a.raiting;
			}
			var j;
			args.guides.sort(compareGuides);
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


			for(j=0; j<args.listItems.length; j++){
				args.winRateItems[j] = args.winItems[j]/args.gameItems[j] * 100
			}
			var winItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				winItemSort.push({
				    key:   args.listItems[j],
				    value: args.winRateItems[j]
				});
			}
			var pickItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				pickItemSort.push({
				    key:   args.listItems[j],
				    value: args.gameItems[j]/args.gamesItems*100
				});
			}
			winItemSort.sort(compareWinChamp);
			pickItemSort.sort(compareWinChamp);

			for(j=0; j<winItemSort.length; j++){
				console.log(winItemSort[j].key + ":" + winItemSort[j].value);
			}

			req.session.title = args.articles
			req.session.count = args.count
			req.session.image = args.images
			req.session.main = args.main
			req.session.champion = args.champions
			console.log(req.session.champion.length)
			req.session.championsImages = args.championsImages
			req.session.guides = args.guides
			req.session.guidesImages = args.guidesImages
			req.session.items = args.items
			req.session.itemsImages = args.itemsImages
			req.session.winChampions = winChampSort
			req.session.pickChampions = pickChampSort
			req.session.winItems = winItemSort
			req.session.pickItems = pickItemSort

	    	res.render('login.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    		guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    		winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort});
	   	});
	}
	else if (req.session.status==="was"){
		console.log("WAS");
		res.render('login.ejs', {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
	    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
	    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
	    		winItems: req.session.winItems, pickItems: req.session.pickItems});
	}
});

app.get('/register', function(req, res) {

	if (req.session.status  === undefined){
		console.log("NULLL");
		req.session.status = "was";
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

		games: 0,

		listItems: new Array(),
		gameItems: new Array(),
		winItems: new Array(),
		winRateItems: new Array(),

		gamesItems: 0
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
			mEUW.getItemsList(args, resolve);
		});
		let promise6 = new Promise((resolve, reject) => {
			item.loadItems(args, resolve);
		});

	    Promise.all([promise, promise2, promise3, promise4, promise5, promise6]).then(result => {
			function compareGuides(a, b) {
	  			return b.raiting - a.raiting;
			}
			var j;
			args.guides.sort(compareGuides);
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


			for(j=0; j<args.listItems.length; j++){
				args.winRateItems[j] = args.winItems[j]/args.gameItems[j] * 100
			}
			var winItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				winItemSort.push({
				    key:   args.listItems[j],
				    value: args.winRateItems[j]
				});
			}
			var pickItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				pickItemSort.push({
				    key:   args.listItems[j],
				    value: args.gameItems[j]/args.gamesItems*100
				});
			}
			winItemSort.sort(compareWinChamp);
			pickItemSort.sort(compareWinChamp);

			for(j=0; j<winItemSort.length; j++){
				console.log(winItemSort[j].key + ":" + winItemSort[j].value);
			}

			req.session.title = args.articles
			req.session.count = args.count
			req.session.image = args.images
			req.session.main = args.main
			req.session.champion = args.champions
			console.log(req.session.champion.length)
			req.session.championsImages = args.championsImages
			req.session.guides = args.guides
			req.session.guidesImages = args.guidesImages
			req.session.items = args.items
			req.session.itemsImages = args.itemsImages
			req.session.winChampions = winChampSort
			req.session.pickChampions = pickChampSort
			req.session.winItems = winItemSort
			req.session.pickItems = pickItemSort

	    	res.render('register.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    		guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    		winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort});
	   	});
	}
	else if (req.session.status==="was"){
		console.log("WAS");
		res.render('register.ejs', {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
	    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
	    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
	    		winItems: req.session.winItems, pickItems: req.session.pickItems});
	}
});

app.get('/champions', function(req, res) {

	if (req.session.status  === undefined){
		console.log("NULLL");
		req.session.status = "was";
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

		games: 0,

		listItems: new Array(),
		gameItems: new Array(),
		winItems: new Array(),
		winRateItems: new Array(),

		gamesItems: 0
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
			mEUW.getItemsList(args, resolve);
		});
		let promise6 = new Promise((resolve, reject) => {
			item.loadItems(args, resolve);
		});

	    Promise.all([promise, promise2, promise3, promise4, promise5, promise6]).then(result => {
			function compareGuides(a, b) {
	  			return b.raiting - a.raiting;
			}
			var j;
			args.guides.sort(compareGuides);
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


			for(j=0; j<args.listItems.length; j++){
				args.winRateItems[j] = args.winItems[j]/args.gameItems[j] * 100
			}
			var winItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				winItemSort.push({
				    key:   args.listItems[j],
				    value: args.winRateItems[j]
				});
			}
			var pickItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				pickItemSort.push({
				    key:   args.listItems[j],
				    value: args.gameItems[j]/args.gamesItems*100
				});
			}
			winItemSort.sort(compareWinChamp);
			pickItemSort.sort(compareWinChamp);

			for(j=0; j<winItemSort.length; j++){
				console.log(winItemSort[j].key + ":" + winItemSort[j].value);
			}

			req.session.title = args.articles
			req.session.count = args.count
			req.session.image = args.images
			req.session.main = args.main
			req.session.champion = args.champions
			console.log(req.session.champion.length)
			req.session.championsImages = args.championsImages
			req.session.guides = args.guides
			req.session.guidesImages = args.guidesImages
			req.session.items = args.items
			req.session.itemsImages = args.itemsImages
			req.session.winChampions = winChampSort
			req.session.pickChampions = pickChampSort
			req.session.winItems = winItemSort
			req.session.pickItems = pickItemSort

	    	res.render('champion.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    		guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    		winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort});
	   	});
	}
	else if (req.session.status==="was"){
		console.log("WAS");
		res.render('champion.ejs', {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
	    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
	    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
	    		winItems: req.session.winItems, pickItems: req.session.pickItems});
	}
});

app.get('/items', function(req, res) {

	if (req.session.status  === undefined){
		console.log("NULLL");
		req.session.status = "was";
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

		games: 0,

		listItems: new Array(),
		gameItems: new Array(),
		winItems: new Array(),
		winRateItems: new Array(),

		gamesItems: 0
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
			mEUW.getItemsList(args, resolve);
		});
		let promise6 = new Promise((resolve, reject) => {
			item.loadItems(args, resolve);
		});

	    Promise.all([promise, promise2, promise3, promise4, promise5, promise6]).then(result => {
			function compareGuides(a, b) {
	  			return b.raiting - a.raiting;
			}
			var j;
			args.guides.sort(compareGuides);
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


			for(j=0; j<args.listItems.length; j++){
				args.winRateItems[j] = args.winItems[j]/args.gameItems[j] * 100
			}
			var winItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				winItemSort.push({
				    key:   args.listItems[j],
				    value: args.winRateItems[j]
				});
			}
			var pickItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				pickItemSort.push({
				    key:   args.listItems[j],
				    value: args.gameItems[j]/args.gamesItems*100
				});
			}
			winItemSort.sort(compareWinChamp);
			pickItemSort.sort(compareWinChamp);

			for(j=0; j<winItemSort.length; j++){
				console.log(winItemSort[j].key + ":" + winItemSort[j].value);
			}

			req.session.title = args.articles
			req.session.count = args.count
			req.session.image = args.images
			req.session.main = args.main
			req.session.champion = args.champions
			console.log(req.session.champion.length)
			req.session.championsImages = args.championsImages
			req.session.guides = args.guides
			req.session.guidesImages = args.guidesImages
			req.session.items = args.items
			req.session.itemsImages = args.itemsImages
			req.session.winChampions = winChampSort
			req.session.pickChampions = pickChampSort
			req.session.winItems = winItemSort
			req.session.pickItems = pickItemSort

	    	res.render('item.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    		guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    		winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort});
	   	});
	}
	else if (req.session.status==="was"){
		console.log("WAS");
		res.render('item.ejs', {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
	    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
	    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
	    		winItems: req.session.winItems, pickItems: req.session.pickItems});
	}
});

app.get('/items/*', function(req, res) {
	var id = req.path.substring(7);
	if (req.session.status  === undefined){
		req.session.status = "was";
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

			games: 0,

			listItems: new Array(),
			gameItems: new Array(),
			winItems: new Array(),
			winRateItems: new Array(),

			gamesItems: 0,

			mainItem: new Array()
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
			mEUW.getItemsList(args, resolve);
		});
		let promise6 = new Promise((resolve, reject) => {
			item.loadItems(args, resolve);
		});
		let promise7 = new Promise((resolve, reject) => {
			item.loadOneItem(id, args, resolve);
		});
	    Promise.all([promise, promise2, promise3, promise4, promise5, promise6, promise7]).then(result => {
			function compareGuides(a, b) {
	  			return b.raiting - a.raiting;
			}
			var j;
			args.guides.sort(compareGuides);
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


			for(j=0; j<args.listItems.length; j++){
				args.winRateItems[j] = args.winItems[j]/args.gameItems[j] * 100
			}
			var winItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				winItemSort.push({
				    key:   args.listItems[j],
				    value: args.winRateItems[j]
				});
			}
			var pickItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				pickItemSort.push({
				    key:   args.listItems[j],
				    value: args.gameItems[j]/args.gamesItems*100
				});
			}
			winItemSort.sort(compareWinChamp);
			pickItemSort.sort(compareWinChamp);

			for(j=0; j<winItemSort.length; j++){
				console.log(winItemSort[j].key + ":" + winItemSort[j].value);
			}
			req.session.title = args.articles
			req.session.count = args.count
			req.session.image = args.images
			req.session.main = args.main
			req.session.champion = args.champions
			req.session.championsImages = args.championsImages
			req.session.guides = args.guides
			req.session.guidesImages = args.guidesImages
			req.session.items = args.items
			req.session.itemsImages = args.itemsImages
			req.session.winChampions = winChampSort
			req.session.pickChampions = pickChampSort
			req.session.winItems = winItemSort
			req.session.pickItems = pickItemSort
	    	res.render('itemOne.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    		guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    		winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort,  mainItem: args.mainItem[0]});
	    });
	}
	else if (req.session.status==="was"){
		var id = req.path.substring(7);
		console.log("WAS");
		var args = {
			mainItem: new Array()
		}
		let promise7 = new Promise((resolve, reject) => {
			item.loadOneItem(id, args, resolve);
		});
	    Promise.all([promise7]).then(result => {
			res.render('itemOne.ejs', {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
		    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
		    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
		    		winItems: req.session.winItems, pickItems: req.session.pickItems, mainItem: args.mainItem[0]});
		});
	}
});


app.get('/champions/*', function(req, res) {
	var id = req.path.substring(11);
	if (req.session.status  === undefined){
		req.session.status = "was";
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

			games: 0,

			listItems: new Array(),
			gameItems: new Array(),
			winItems: new Array(),
			winRateItems: new Array(),

			gamesItems: 0,

			mainChampion: new Array()
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
			mEUW.getItemsList(args, resolve);
		});
		let promise6 = new Promise((resolve, reject) => {
			item.loadItems(args, resolve);
		});
		let promise7 = new Promise((resolve, reject) => {
			champion.loadOneChampion(id, args, resolve);
		});
	    Promise.all([promise, promise2, promise3, promise4, promise5, promise6, promise7]).then(result => {
			function compareGuides(a, b) {
	  			return b.raiting - a.raiting;
			}
			var j;
			args.guides.sort(compareGuides);
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


			for(j=0; j<args.listItems.length; j++){
				args.winRateItems[j] = args.winItems[j]/args.gameItems[j] * 100
			}
			var winItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				winItemSort.push({
				    key:   args.listItems[j],
				    value: args.winRateItems[j]
				});
			}
			var pickItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				pickItemSort.push({
				    key:   args.listItems[j],
				    value: args.gameItems[j]/args.gamesItems*100
				});
			}
			winItemSort.sort(compareWinChamp);
			pickItemSort.sort(compareWinChamp);

			for(j=0; j<winItemSort.length; j++){
				console.log(winItemSort[j].key + ":" + winItemSort[j].value);
			}
			req.session.title = args.articles
			req.session.count = args.count
			req.session.image = args.images
			req.session.main = args.main
			req.session.champion = args.champions
			req.session.championsImages = args.championsImages
			req.session.guides = args.guides
			req.session.guidesImages = args.guidesImages
			req.session.items = args.items
			req.session.itemsImages = args.itemsImages
			req.session.winChampions = winChampSort
			req.session.pickChampions = pickChampSort
			req.session.winItems = winItemSort
			req.session.pickItems = pickItemSort
	    	res.render('championOne.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    		guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    		winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort,  mainChampion: args.mainChampion[0]});
	    });
	}
	else if (req.session.status==="was"){
		var id = req.path.substring(11);
		console.log("WAS");
		var args = {
			mainChampion: new Array()
		}
		let promise7 = new Promise((resolve, reject) => {
			champion.loadOneChampion(id, args, resolve);
		});
	    Promise.all([promise7]).then(result => {
			res.render('championOne.ejs', {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
		    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
		    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
		    		winItems: req.session.winItems, pickItems: req.session.pickItems, mainChampion: args.mainChampion[0]});
		});
	}
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

app.get('/euw/*', function(req, res) {
	getStatistics(req, res, "euw1", 5);
});

app.get('/br/*', function(req, res) {
	getStatistics(req, res, "br1", 4);
});

app.get('/kr/*', function(req, res) {
	getStatistics(req, res, "kr",  4);
});

app.get('/tk/*', function(req, res) {
	getStatistics(req, res, "euw1", 4);
});

app.get('/rus/*', function(req, res) {
	getStatistics(req, res, "ru", 5);
});

app.get('/jap/*', function(req, res) {
	getStatistics(req, res, "jp1", 5);
});

app.get('/na/*', function(req, res) {
	getStatistics(req, res, "na1", 4);
});

app.get('/la/*', function(req, res) {
	getStatistics(req, res, "la1", 4);
});


app.listen(8178);

function compareGuides(a, b) {
  	return b.raiting - a.raiting;
}

function compareChampionsWin(a, b) {
  	return b - a;
}

function getStatistics(req, res, server, crop) {
	if (req.session.status  === undefined){
		req.session.status = "was";
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

			games: 0,

			listItems: new Array(),
			gameItems: new Array(),
			winItems: new Array(),
			winRateItems: new Array(),

			gamesItems: 0,

			mainItem: new Array()
		}
		var name = req.path.substring(crop)
		var data = {};
		var recent = {};
		data.name = name;
		var URL = "https://"+server+".api.riotgames.com/lol/summoner/v3/summoners/by-name/"+name+"?api_key="+ KEY;
		let promise10 = new Promise((resolve, reject) => {	
			request(URL, function(err, response, body){
				if(!err && response.statusCode===200){
					var json = JSON.parse(body);
					data.id = json.id;
					data.accountId = json.accountId;
					resolve("result")
				}
				else {
					res.render("pagenotfound.ejs", {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    			guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    			winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort,  mainItem: args.mainItem[0], data: data, recent: recent});
				}
			});
		});

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
			mEUW.getItemsList(args, resolve);
		});
		let promise6 = new Promise((resolve, reject) => {
			item.loadItems(args, resolve);
		});
	    Promise.all([promise, promise2, promise3, promise4, promise5, promise6]).then(result => {
			function compareGuides(a, b) {
	  			return b.raiting - a.raiting;
			}
			var j;
			args.guides.sort(compareGuides);
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


			for(j=0; j<args.listItems.length; j++){
				args.winRateItems[j] = args.winItems[j]/args.gameItems[j] * 100
			}
			var winItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				winItemSort.push({
				    key:   args.listItems[j],
				    value: args.winRateItems[j]
				});
			}
			var pickItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				pickItemSort.push({
				    key:   args.listItems[j],
				    value: args.gameItems[j]/args.gamesItems*100
				});
			}
			winItemSort.sort(compareWinChamp);
			pickItemSort.sort(compareWinChamp);

			for(j=0; j<winItemSort.length; j++){
				console.log(winItemSort[j].key + ":" + winItemSort[j].value);
			}

			var URL2 = "https://"+server+".api.riotgames.com/lol/league/v3/positions/by-summoner/"+data.id+"?api_key="+ KEY;
	    	console.log(URL2);
	    	let promise11 = new Promise((resolve, reject) => {	
		    	request(URL2, function(err, response, body){
					if(!err && response.statusCode===200){
						var json = JSON.parse(body);
						if(json[0] === undefined ) {
							console.log("page not found");
							res.render("pagenotfound.ejs", {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    			guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    			winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort,  mainItem: args.mainItem[0], data: data, recent: recent});
						}
						else{
							console.log("is Wolf");
							data.wins = json[0].wins;
							data.losses = json[0].losses;
							data.leagueName = json[0].playerOrTeamId;
							data.rank = json[0].rank;
							data.tier = json[0].tier;
							data.leaguePoints = json[0].leaguePoints;
							data.server = "europe west";
							console.log(data.accountId);
							console.log(data.wins);
							console.log(data.losses);
							console.log(data.leagueName);
							console.log(data.rank);
							console.log(data.tier);
							console.log(data.leaguePoints);
							resolve("result");
						}
					}
					else {
						res.render("pagenotfound.ejs", {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    			guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    			winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort,  mainItem: args.mainItem[0], data: data, recent: recent});
					}
				});
		    });


	    	var URL3 = "https://"+server+".api.riotgames.com/lol/match/v3/matchlists/by-account/"+data.accountId+"/recent?api_key="+ KEY;
	    	console.log(URL3);
	    	let promise12 = new Promise((resolve, reject) => {	
		    	request(URL3, function(err, response, body){
					if(!err && response.statusCode===200){
						var json = JSON.parse(body);
						console.log(json.matches.length);
						recent.top = 0;
						recent.mid = 0;
						recent.jungle = 0;
						recent.adc = 0;
						recent.support = 0;
						recent.length = json.matches.length;
						recent.maxRole = 0;
						recent.gameId = new Array();
						recent.maxName = "";
						for(var i=0; i<json.matches.length; i++){
							var lane = json.matches[i].lane
							recent.gameId[i] = json.matches[i].gameId;
							if(lane === "TOP") {recent.top++}
							else if(lane === "JUNGLE") {recent.jungle++}
							else if(lane === "MID") {recent.mid++}
							else if(lane === "BOTTOM" && json.matches[i].role === "DUO_SUPPORT") {recent.support++}
							else recent.adc++
						}
						var max = Math.max(recent.top, recent.mid, recent.jungle, recent.adc, recent.support);
						if(max === recent.top) {
							recent.maxRole = recent.top;
							recent.maxName = "top";
						}
						else if(max === recent.jungle) {
							recent.maxRole = recent.jungle;
							recent.maxName = "jungle";
						}
						else if(max === recent.mid) {
							recent.maxRole = recent.mid;
							recent.maxName = "mid";
						}
						else if(max === recent.adc) {
							recent.maxRole = recent.adc;
							recent.maxName = "adc";
						}
						else {
							recent.maxRole = recent.support;
							recent.maxName = "support";
						}
						resolve("result");
					}
					else {
						res.render("pagenotfound.ejs", {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    			guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    			winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort,  mainItem: args.mainItem[0], data: data, recent: recent});
					}
				});
		    });
	    	req.session.title = args.articles
			req.session.count = args.count
			req.session.image = args.images
			req.session.main = args.main
			req.session.champion = args.champions
			req.session.championsImages = args.championsImages
			req.session.guides = args.guides
			req.session.guidesImages = args.guidesImages
			req.session.items = args.items
			req.session.itemsImages = args.itemsImages
			req.session.winChampions = winChampSort
			req.session.pickChampions = pickChampSort
			req.session.winItems = winItemSort
			req.session.pickItems = pickItemSort
		    Promise.all([promise11, promise12]).then(result => {
		    	console.log("DDDDD");
		    	let promise13 = new Promise((resolve, reject) => {
		    		var k={};
		    		var URL4 = "https://"+server+".api.riotgames.com/lol/match/v3/matches/"+recent.gameId[0]+"?api_key="+ KEY;
		    		console.log(URL4);
		    		request(URL4, function(err, response, body){
		    			console.log(response.statusCode);
						if(!err && response.statusCode===200){
							console.log("In");
							var json = JSON.parse(body);
							var i;
							for(i=0; i<10; i++){
								console.log(json.participantIdentities[i].player.summonerName);
								if(json.participantIdentities[i].player.summonerName === data.name){
									k.id = json.participantIdentities[i].participantId;
								}
							}
							console.log(k.id);
							if(k.id != undefined){
								data.vision = json.participants[k.id-1].stats.visionScore;
								console.log("Vision: " + data.vision);
								data.kills = json.participants[k.id-1].stats.kills;
								data.assists = json.participants[k.id-1].stats.assists;
								data.deaths = json.participants[k.id-1].stats.deaths;
								data.champ = json.participants[k.id-1].stats.champLevel;
								data.damage = json.participants[k.id-1].stats.totalDamageDealtToChampions;
								data.gold = json.participants[k.id-1].stats.goldSpent;
							}
							else {
								data.vision = 0;
								data.kills = 0;
								data.assists = 0;
								data.deaths = 0;
								data.vision = 0;
								data.champ = 0;
								data.damage = 0;
								data.gold = 0;
							}							
							resolve("result");
						}	
						else {
							res.render("pagenotfound.ejs", {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    			guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    			winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort,  mainItem: args.mainItem[0], data: data, recent: recent});
						}
			    	});
			    });
	    		Promise.all([promise13]).then(result => {
	    			console.log("fdsdsds");
					res.render('stat.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    			guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    			winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort,  mainItem: args.mainItem[0], data: data, recent: recent});
				});
		    });
	    });
	}
	else if (req.session.status==="was"){
		var name = req.path.substring(crop)
		var data = {};
		var recent = {};
		data.name = name;
		var URL = "https://"+server+".api.riotgames.com/lol/summoner/v3/summoners/by-name/"+name+"?api_key="+ KEY;
		let promise10 = new Promise((resolve, reject) => {	
			request(URL, function(err, response, body){
				if(!err && response.statusCode===200){
					var json = JSON.parse(body);
					data.id = json.id;
					data.accountId = json.accountId;
					resolve("result")
				}
				else {
					res.render("pagenotfound.ejs", {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
				    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
				    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
				    		winItems: req.session.winItems, pickItems: req.session.pickItems, data: data, recent: recent});
				}
			});
		});
		Promise.all([promise10]).then(result => {
			var URL2 = "https://"+server+".api.riotgames.com/lol/league/v3/positions/by-summoner/"+data.id+"?api_key="+ KEY;
	    	console.log(URL2);
	    	let promise11 = new Promise((resolve, reject) => {	
		    	request(URL2, function(err, response, body){
					if(!err && response.statusCode===200){
						var json = JSON.parse(body);
						if(json[0] === undefined ) {
							console.log("page not found!!!");
							res.render("pagenotfound.ejs", {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
				    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
				    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
				    		winItems: req.session.winItems, pickItems: req.session.pickItems, data: data, recent: recent});
						}
						else{
							console.log(json[0]+"EEEEEEEEEEEEEEEE");
							data.wins = json[0].wins;
							data.losses = json[0].losses;
							data.leagueName = json[0].playerOrTeamId;
							data.rank = json[0].rank;
							data.tier = json[0].tier;
							data.leaguePoints = json[0].leaguePoints;
							data.server = "europe west";
							console.log(data.accountId);
							console.log(data.wins);
							console.log(data.losses);
							console.log(data.leagueName);
							console.log(data.rank);
							console.log(data.tier);
							console.log(data.leaguePoints);
							resolve("result");
						}
					}
					else {
						res.render("pagenotfound.ejs", {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
				    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
				    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
				    		winItems: req.session.winItems, pickItems: req.session.pickItems, data: data, recent: recent});
					}
				});
		    });
		    Promise.all([promise11]).then(result => {
			    var URL3 = "https://"+server+".api.riotgames.com/lol/match/v3/matchlists/by-account/"+data.accountId+"/recent?api_key="+ KEY;
			    	console.log(URL3);
			    	let promise12 = new Promise((resolve, reject) => {	
				    	request(URL3, function(err, response, body){
						if(!err && response.statusCode===200){
							var json = JSON.parse(body);
							console.log(json.matches.length);
							recent.top = 0;
							recent.mid = 0;
							recent.jungle = 0;
							recent.adc = 0;
							recent.support = 0;
							recent.length = json.matches.length;
							recent.maxRole = 0;
							recent.gameId = new Array();
							recent.maxName = "";
							for(var i=0; i<json.matches.length; i++){
								var lane = json.matches[i].lane
								recent.gameId[i] = json.matches[i].gameId;
								if(lane === "TOP") {recent.top++}
								else if(lane === "JUNGLE") {recent.jungle++}
								else if(lane === "MID") {recent.mid++}
								else if(lane === "BOTTOM" && json.matches[i].role === "DUO_SUPPORT") {recent.support++}
								else recent.adc++
							}
							var max = Math.max(recent.top, recent.mid, recent.jungle, recent.adc, recent.support);
							if(max === recent.top) {
								recent.maxRole = recent.top;
								recent.maxName = "top";
							}
							else if(max === recent.jungle) {
								recent.maxRole = recent.jungle;
								recent.maxName = "jungle";
							}
							else if(max === recent.mid) {
								recent.maxRole = recent.mid;
								recent.maxName = "mid";
							}
							else if(max === recent.adc) {
								recent.maxRole = recent.adc;
								recent.maxName = "adc";
							}
							else {
								recent.maxRole = recent.support;
								recent.maxName = "support";
							}
							resolve("result");
						}
						else {
							res.render("pagenotfound.ejs", {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
				    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
				    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
				    		winItems: req.session.winItems, pickItems: req.session.pickItems, data: data, recent: recent});
						}
					});
				});	
				Promise.all([promise11, promise12]).then(result => {
			    	console.log("DDDDD");
			    	let promise13 = new Promise((resolve, reject) => {
			    		var k={};
			    		console.log("IN");
			    		var URL4 = "https://"+server+".api.riotgames.com/lol/match/v3/matches/"+recent.gameId[0]+"?api_key="+ KEY;
			    		console.log(URL4);
			    		request(URL4, function(err, response, body){
			    			console.log(response.statusCode);
							if(!err && response.statusCode===200){
								console.log("In");
								var json = JSON.parse(body);
								var i;
								for(i=0; i<10; i++){
									console.log(json.participantIdentities[i].player.summonerName);
									if(json.participantIdentities[i].player.summonerName === data.name){
										k.id = json.participantIdentities[i].participantId;
									}
								}
								console.log(k.id);
								if(k.id != undefined){
									data.vision = json.participants[k.id-1].stats.visionScore;
									console.log("Vision: " + data.vision);
									data.kills = json.participants[k.id-1].stats.kills;
									data.assists = json.participants[k.id-1].stats.assists;
									data.deaths = json.participants[k.id-1].stats.deaths;
									data.champ = json.participants[k.id-1].stats.champLevel;
									data.damage = json.participants[k.id-1].stats.totalDamageDealtToChampions;
									data.gold = json.participants[k.id-1].stats.goldSpent;
								}
								else {
									data.vision = 0;
									data.kills = 0;
									data.assists = 0;
									data.deaths = 0;
									data.vision = 0;
									data.champ = 0;
									data.damage = 0;
									data.gold = 0;
								}							
								resolve("result");
							}	
							else {
								res.render("pagenotfound.ejs", {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
				    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
				    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
				    		winItems: req.session.winItems, pickItems: req.session.pickItems, data: data, recent: recent});
							}
				    	});
				    });
		    		Promise.all([promise13]).then(result => {
		    			console.log("fdsdsds");
						res.render('stat.ejs', {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
				    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
				    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
				    		winItems: req.session.winItems, pickItems: req.session.pickItems, data: data, recent: recent});
					});
			    });		    
			});
		});
	}
}

/*app.get('*', function(req, res) {
	  res.render('pagenotfound.ejs', {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
	    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
	    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
	    		winItems: req.session.winItems, pickItems: req.session.pickItems});
});*/

app.get('/streams', function(req, res) {
	res.render('streams.ejs', {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
	    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
	    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
	    		winItems: req.session.winItems, pickItems: req.session.pickItems});
});

app.get('/documents', function(req, res) {
  	if (req.session.status  === undefined){
		console.log("NULLL");
		req.session.status = "was";
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

		games: 0,

		listItems: new Array(),
		gameItems: new Array(),
		winItems: new Array(),
		winRateItems: new Array(),

		gamesItems: 0
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
			mEUW.getItemsList(args, resolve);
		});
		let promise6 = new Promise((resolve, reject) => {
			item.loadItems(args, resolve);
		});

	    Promise.all([promise, promise2, promise3, promise4, promise5, promise6]).then(result => {
			function compareGuides(a, b) {
	  			return b.raiting - a.raiting;
			}
			var j;
			args.guides.sort(compareGuides);
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


			for(j=0; j<args.listItems.length; j++){
				args.winRateItems[j] = args.winItems[j]/args.gameItems[j] * 100
			}
			var winItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				winItemSort.push({
				    key:   args.listItems[j],
				    value: args.winRateItems[j]
				});
			}
			var pickItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				pickItemSort.push({
				    key:   args.listItems[j],
				    value: args.gameItems[j]/args.gamesItems*100
				});
			}
			winItemSort.sort(compareWinChamp);
			pickItemSort.sort(compareWinChamp);

			for(j=0; j<winItemSort.length; j++){
				console.log(winItemSort[j].key + ":" + winItemSort[j].value);
			}

			req.session.title = args.articles
			req.session.count = args.count
			req.session.image = args.images
			req.session.main = args.main
			req.session.champion = args.champions
			req.session.championsImages = args.championsImages
			req.session.guides = args.guides
			req.session.guidesImages = args.guidesImages
			req.session.items = args.items
			req.session.itemsImages = args.itemsImages
			req.session.winChampions = winChampSort
			req.session.pickChampions = pickChampSort
			req.session.winItems = winItemSort
			req.session.pickItems = pickItemSort
			if(req.session.userId == undefined)
	    	res.render('login.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    		guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    		winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort});
	    	else res.render('register.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    		guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    		winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort});
	   	});
	}
	else if (req.session.status==="was"){
		console.log("WAS");
		if(req.session.userId == undefined)
			res.render('login.ejs', {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
	    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
	    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
	    		winItems: req.session.winItems, pickItems: req.session.pickItems});
		else res.render('register.ejs', {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
	    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
	    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
	    		winItems: req.session.winItems, pickItems: req.session.pickItems});
	}
});

app.post('/findUser', function(req, res) {
	console.log("post finduser");
	console.log(req.body.name);
	console.log(req.body.password);
	var args = {}
	args.suc = false;
	var key = 'abcdeg';
    var hash = crypto.createHmac('sha1', key).update(req.body.password).digest('hex');
	let promise = new Promise((resolve, reject) => {	
		user.loadOneUser(req.body.name, hash, args, resolve);
	});
	Promise.all([promise]).then(result => {
		console.log(args.suc);
		if(args.suc == true){
			req.session.userId = req.body.name
		}
		res.send('{"suc": "'+args.suc+'"}');
	});
});

app.post('/registerUser', function(req, res) {
	console.log("post registeruser");
	console.log(req.body.nick);
	console.log(req.body.password);
	var args = {}
	args.suc = false;
	var ok = true;
	if (req.body.password.length < 4 || req.body.length >17) ok = false;
    if (req.body.repassword != req.body.password) ok = false;
    if (req.body.nick.length < 4 || req.body.password.length >11) ok = false;
    if (req.body.fn.length < 4 || req.body.fn.length >11) ok = false;
    if (req.body.sn.length < 4 || req.body.sn.length >11) ok = false;
    if(ok == false){res.send('{"suc": "'+args.suc+'"}');}
    else{
        var key = 'abcdeg';
        var hash = crypto.createHmac('sha1', key).update(req.body.password).digest('hex');
		console.log(hash);

		let promise = new Promise((resolve, reject) => {	
			user.checkUser(req.body.nick, args, resolve);
		});
		Promise.all([promise]).then(result => {
			let promise2 = new Promise((resolve, reject) => {	
				user.getLength(req.body.nick, args, resolve);
			});
			Promise.all([promise2]).then(result => {
				let promise3 = new Promise((resolve, reject) => {
					if(args.suc==true){
						user.createUser(args.length+2,req.body.nick, req.body.fn, req.body.sn, hash, "default", req.body.age, "EUW");
					}
				});	
				Promise.all([promise2]).then(result => {
					res.send('{"suc": "'+args.suc+'"}');
				});
			});
		});
	}
});


app.use(function(req, res, next){
  if (req.session.status  === undefined){
		console.log("NULLL");
		req.session.status = "was";
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

		games: 0,

		listItems: new Array(),
		gameItems: new Array(),
		winItems: new Array(),
		winRateItems: new Array(),

		gamesItems: 0
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
			mEUW.getItemsList(args, resolve);
		});
		let promise6 = new Promise((resolve, reject) => {
			item.loadItems(args, resolve);
		});

	    Promise.all([promise, promise2, promise3, promise4, promise5, promise6]).then(result => {
			function compareGuides(a, b) {
	  			return b.raiting - a.raiting;
			}
			var j;
			args.guides.sort(compareGuides);
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


			for(j=0; j<args.listItems.length; j++){
				args.winRateItems[j] = args.winItems[j]/args.gameItems[j] * 100
			}
			var winItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				winItemSort.push({
				    key:   args.listItems[j],
				    value: args.winRateItems[j]
				});
			}
			var pickItemSort = [];
			for(j=0; j<args.listItems.length; j++){
				pickItemSort.push({
				    key:   args.listItems[j],
				    value: args.gameItems[j]/args.gamesItems*100
				});
			}
			winItemSort.sort(compareWinChamp);
			pickItemSort.sort(compareWinChamp);

			for(j=0; j<winItemSort.length; j++){
				console.log(winItemSort[j].key + ":" + winItemSort[j].value);
			}

			req.session.title = args.articles
			req.session.count = args.count
			req.session.image = args.images
			req.session.main = args.main
			req.session.champion = args.champions
			console.log(req.session.champion.length)
			req.session.championsImages = args.championsImages
			req.session.guides = args.guides
			req.session.guidesImages = args.guidesImages
			req.session.items = args.items
			req.session.itemsImages = args.itemsImages
			req.session.winChampions = winChampSort
			req.session.pickChampions = pickChampSort
			req.session.winItems = winItemSort
			req.session.pickItems = pickItemSort

	    	res.render('pagenotfound.ejs', {title: args.articles, count: args.count, image: args.images, main: args.main, champion: args.champions, championsImages: args.championsImages,
	    		guides: args.guides, guidesImages: args.guidesImages, items: args.items, itemsImages: args.itemsImages, 
	    		winChampions: winChampSort, pickChampions: pickChampSort, winItems: winItemSort, pickItems: pickItemSort});
	   	});
	}
	else if (req.session.status==="was"){
		console.log("WAShh");
		res.render('pagenotfound.ejs', {title: req.session.title, count: req.session.count, image: req.session.image, main: req.session.main, champion: req.session.champion, championsImages: req.session.championsImages,
	    		guides: req.session.guides, guidesImages: req.session.guidesImages, items: req.session.items, itemsImages: req.session.itemsImages, 
	    		winChampions: req.session.winChampions, pickChampions: req.session.pickChampions, 
	    		winItems: req.session.winItems, pickItems: req.session.pickItems});
	}
});
