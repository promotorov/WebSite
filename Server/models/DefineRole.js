'use strict';
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://uylgtlgt:525K6ldOq3y8JILuISnI1z48EL5r3RYP@tantor.db.elephantsql.com:5432/uylgtlgt');

var Role = sequelize.define('role', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING,
    difficult: Sequelize.INTEGER,
}, {
    timestamps: true
});

Role.sync({
    //force: true
});

module.exports = Role;