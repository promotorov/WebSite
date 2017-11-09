'use strict';
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://uylgtlgt:525K6ldOq3y8JILuISnI1z48EL5r3RYP@tantor.db.elephantsql.com:5432/uylgtlgt');
var Image = require('./DefineImage');

var Item = sequelize.define('item', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
    	type: Sequelize.TEXT,
    	allowNull: false
    },
    ad:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ap:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cdr:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description:{
    	type: Sequelize.TEXT,
    	allowNull: false
    }
}, {
    timestamps: true
});

Item.belongsTo(Image);

Item.sync({
    //force: true
});

module.exports = Item;