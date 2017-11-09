'use strict';
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://uylgtlgt:525K6ldOq3y8JILuISnI1z48EL5r3RYP@tantor.db.elephantsql.com:5432/uylgtlgt');

var User = sequelize.define('user', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    login:{
    	type: Sequelize.STRING,
    	unique: true
    },
    firstName: Sequelize.STRING,
    secondName: Sequelize.STRING,
    password: Sequelize.STRING,
    nickname: Sequelize.STRING,
    age: Sequelize.INTEGER,
    server: Sequelize.STRING
}, {
    timestamps: true
});

User.sync({
    //force: true
});

module.exports = User;