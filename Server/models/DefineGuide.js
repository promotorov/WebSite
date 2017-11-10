'use strict';

var Image = require('./DefineImage');
var Champion = require('./DefineChampion');
var User = require('./DefineUser');

var Guide = global.sequelize.define('guide', {
    id:{
        type: global.Sequelize.INTEGER,
        primaryKey: true
    },
    title: global.Sequelize.STRING,
    body: global.Sequelize.TEXT,
    content: global.Sequelize.TEXT,
    raiting: global.Sequelize.INTEGER
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