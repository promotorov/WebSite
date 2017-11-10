'use strict';

var Role = global.sequelize.define('role', {
    id:{
        type: global.Sequelize.INTEGER,
        primaryKey: true
    },
    name: global.Sequelize.STRING,
    difficult: global.Sequelize.INTEGER,
}, {
    timestamps: true
});

Role.sync({
    //force: true
});

module.exports = Role;