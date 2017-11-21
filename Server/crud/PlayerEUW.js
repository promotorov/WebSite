'use strict';
const PlayerEUW= require('../models/DefinePlayerEUW');

PlayerEUW.prototype.createPlayer = function (id, name){
    PlayerEUW.create({
        id: id,
        name: name
    });
};

PlayerEUW.prototype.deletePlayer = function (id){
    PlayerEUW.destroy({
        where:{
            id: id
        }
    })
};

module.exports = PlayerEUW;