'use strict';
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://uylgtlgt:525K6ldOq3y8JILuISnI1z48EL5r3RYP@tantor.db.elephantsql.com:5432/uylgtlgt');
const Image = require('./DefineImage');

var Article = sequelize.define('article', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
    content: Sequelize.TEXT,
    main: Sequelize.BOOLEAN
    }, 
    {
        timestamps: true
    }
);

Article.belongsTo(Image);

Article.sync({
    //force: true
});

module.exports = Article;