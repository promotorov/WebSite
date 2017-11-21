'use strict';
const StatisticEUW= require('../models/DefineStatisticEUW');

StatisticEUW.prototype.createStatistic = function (id, k, a, d, m){
    StatisticEUW.create({
        id: id,
        kills: k,
        assists: a,
        deaths: d,
        minions: m
    });
};

StatisticEUW.prototype.deleteStatistic = function (id){
    StatisticEUW.destroy({
        where:{
            id: id
        }
    })
};

module.exports = StatisticEUW;