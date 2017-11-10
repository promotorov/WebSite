'use strict';

var User = global.sequelize.define('user', {
    id:{
        type: global.Sequelize.INTEGER,
        primaryKey: true
    },
    login:{
    	type: global.Sequelize.STRING,
    	unique: true
    },
    firstName: global.Sequelize.STRING,
    secondName: global.Sequelize.STRING,
    password: global.Sequelize.STRING,
    nickname: global.Sequelize.STRING,
    age: global.Sequelize.INTEGER,
    server: global.Sequelize.STRING
}, {
    timestamps: true
});

User.sync({
    //force: true
});

module.exports = User;