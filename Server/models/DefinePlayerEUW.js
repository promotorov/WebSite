'use strict';


var PlayerEUW = global.sequelize.define('playereuw', {
    id:{
        type: global.Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING
    }, 
    {
        timestamps: true
    }
);

PlayerEUW.sync({
    //force: true
});

module.exports = PlayerEUW;