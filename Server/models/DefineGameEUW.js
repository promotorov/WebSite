'use strict';


var StatisticEUW = global.sequelize.define('gameeuw', {
    id:{
        type: global.Sequelize.INTEGER,
        primaryKey: true
    }},
    {
        timestamps: true
    }
);

StatisticEUW.sync({
    //force: true
});

module.exports = StatisticEUW;