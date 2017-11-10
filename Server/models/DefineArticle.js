'use strict';
const Image = require('./DefineImage');

var Article = global.sequelize.define('article', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: global.Sequelize.STRING,
    body: global.Sequelize.TEXT,
    content: global.Sequelize.TEXT,
    main: global.Sequelize.BOOLEAN
    }, 
    {
        timestamps: true
    }
);

Article.belongsTo(Image);

Article.sync({
    //force: true
});

module.exports = Article;