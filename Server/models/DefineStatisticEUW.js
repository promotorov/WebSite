'use strict';


var StatisticEUW = global.sequelize.define('statisticeuw', {
    id:{
        type: global.Sequelize.INTEGER,
        primaryKey: true
    },
    kills:{
        type: global.Sequelize.INTEGER
    },
    assists:{
        type: global.Sequelize.INTEGER
    },
    deaths:{
        type: global.Sequelize.INTEGER
    },
    minions:{
        type: global.Sequelize.INTEGER
    }},
    {
        timestamps: true
    }
);

StatisticEUW.sync({
    //force: true
});

module.exports = StatisticEUW;