'use strict';


const Role = require('./DefineRole');
const Image = require('./DefineImage');

var Champion = global.sequelize.define('champion', {
    id:{
        type: global.Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type: global.Sequelize.STRING,
        allowNull: false
    },
    description:{
    	type: global.Sequelize.TEXT,
        allowNull: false	
    },
    history:{
    	type: global.Sequelize.TEXT,
        allowNull: false
    },
    imageBig:{
        type: global.Sequelize.STRING,
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