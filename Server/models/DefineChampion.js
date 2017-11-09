'use strict';
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://uylgtlgt:525K6ldOq3y8JILuISnI1z48EL5r3RYP@tantor.db.elephantsql.com:5432/uylgtlgt');
const Role = require('./DefineRole');
const Image = require('./DefineImage');

var Champion = sequelize.define('champion', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
    	type: Sequelize.TEXT,
        allowNull: false	
    },
    history:{
    	type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: true
});

Champion.belongsTo(Role);
Champion.belongsTo(Image);


Champion.sync({
    //force: true
});

module.exports = Champion;