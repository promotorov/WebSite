'use strict';
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://uylgtlgt:525K6ldOq3y8JILuISnI1z48EL5r3RYP@tantor.db.elephantsql.com:5432/uylgtlgt');

var Image = sequelize.define('image', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    url: Sequelize.STRING
    }, 
    {
        timestamps: true
    }
);

Image.sync({
    //force: true
});

module.exports = Image;