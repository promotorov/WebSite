var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://legxxeqb:uqDL6YSe5RR_AS4wAqPq7qYXh8qCMTVq@pellefant.db.elephantsql.com:5432/legxxeqb');
sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

var Article = sequelize.define('article', {
   articleid:{
       type: Sequelize.INTEGER,
        primaryKey: true
   },
   title: Sequelize.STRING,
   body: Sequelize.TEXT
}, {
    timestamps: true
});

function loadArticlesStart(req, res) {
    Article.findAll({
        raw: true
    }).then(function (articles) {
    	console.log(articles);
        res.render('index.ejs', {title: articles, count: articles.length});
    });
}

function loadArticlesButtonClick(req, res) {
    Article.findAll({
        where: {
        	//
        },
        raw: true
    }).then(function (articles) {
    	var count = req.body.count;
    	var c = 0;
    	console.log(articles);
    	var result = '{ "articles": ['
    	for(i = articles.length - 1; i >=0; i--){
    		if(count>0){
    			count--;
    			continue;
    		}
    		if(c === 3){
    			break;
    		}
    		if( c !== 0){
    			result += ", "
    		}
    		c++;
  			result += '{ "title": "' + articles[i].title + '", "body": "' + articles[i].body +'", "image": "sd"} ';
		}
		result += ' ], "count": "' + c + '" }';
		console.log(result);
        res.send(result);
    });
}

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get(['/', '/index.html'], function(req, res) {
    loadArticlesStart(req, res);
});

app.post('/login', function(req, res) {
  	console.log("login ....");
  	loadArticlesButtonClick(req, res);
});

app.listen(3049);