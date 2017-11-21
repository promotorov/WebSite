'use strict';
const GameEUW= require('../models/DefineGameEUW');

GameEUW.prototype.createGame = function (id){
    GameEUW.create({
        id: id
    });
};

GameEUW.prototype.deleteGame = function (id){
    GameEUW.destroy({
        where:{
            id: id
        }
    })
};

module.exports = GameEUW;