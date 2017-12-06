'use strict';

var Replay = global.sequelize.define('replay', {
    id:{
        type: global.Sequelize.INTEGER,
        primaryKey: true
    },
    name: global.Sequelize.STRING,
    text: global.Sequelize.TEXT,
}, {
    timestamps: true
});

Replay.sync({
    //force: true
});

module.exports = Replay;