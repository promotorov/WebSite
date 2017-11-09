'use strict';
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://uylgtlgt:525K6ldOq3y8JILuISnI1z48EL5r3RYP@tantor.db.elephantsql.com:5432/uylgtlgt');
var Image = require('./DefineImage');
var Champion = require('./DefineChampion');
var User = require('./DefineUser');

var Guide = sequelize.define('guide', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
    content: Sequelize.TEXT,
    raiting: Sequelize.INTEGER
}, {
    timestamps: true
});

Guide.belongsTo(Image);
Guide.belongsTo(Champion);
Guide.belongsTo(User);

Guide.sync({
    //force: true
});

module.exports = Guide;