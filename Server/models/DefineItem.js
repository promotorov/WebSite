'use strict';

var Image = require('./DefineImage');

var Item = global.sequelize.define('item', {
    id:{
        type: global.Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
    	type: global.Sequelize.TEXT,
    	allowNull: false
    },
    ad:{
        type: global.Sequelize.INTEGER,
        allowNull: false
    },
    ap:{
        type: global.Sequelize.INTEGER,
        allowNull: false
    },
    cdr:{
        type: global.Sequelize.INTEGER,
        allowNull: false
    },
    description:{
    	type: global.Sequelize.TEXT,
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