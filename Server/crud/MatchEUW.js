'use strict';
const MatchEUW= require('../models/DefineMatchEUW');

MatchEUW.prototype.createMatch = function (id, p, g, stat, s){
    MatchEUW.create({
        id: id,
        playereuwId: p,
        gameeuwId: g,
        statisticeuwId: stat,
        status: s
    });
};

MatchEUW.prototype.deleteMatch = function (id){
    MatchEUW.destroy({
        where:{
            id: id
        }
    })
};

module.exports = MatchEUW;