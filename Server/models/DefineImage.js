'use strict';

var Image = global.sequelize.define('image', {
    id:{
        type: global.Sequelize.INTEGER,
        primaryKey: true
    },
    url: Sequelize.STRING
    }, 
    {
        timestamps: true
    }
);

Image.sync({
    //force: true
});

module.exports = Image;