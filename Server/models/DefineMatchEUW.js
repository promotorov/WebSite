'use strict';
const Player = require('./DefinePlayerEUW');
const Game = require('./DefineGameEUW');
const Statistic = require('./DefineStatisticEUW');

var MatchEUW = global.sequelize.define('matcheuw', {
    id:{
        type: global.Sequelize.INTEGER,
        primaryKey: true
    },
    status: {
        type: global.Sequelize.BOOLEAN,
        allowNull: false
    }
},
    {
        timestamps: true
    }
);

MatchEUW.belongsTo(Player);
MatchEUW.belongsTo(Game);
MatchEUW.belongsTo(Statistic);

MatchEUW.sync({
    //force: true
});

module.exports = MatchEUW;