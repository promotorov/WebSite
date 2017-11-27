'use strict';
const MatchEUW= require('../models/DefineMatchEUW');

MatchEUW.prototype.createMatch = function (id, p, g, stat, ch, it, s){
    MatchEUW.create({
        id: id,
        playereuwId: p,
        gameeuwId: g,
        statisticeuwId: stat,
        championId: ch,
        itemId: it,
        status: s
    });
};

MatchEUW.prototype.getChampionsList = function(args, resolve) {
    MatchEUW.findAll({
        raw: true
    }).then(function (matches) {
        Array.prototype.contains = function(obj) {
            var i = this.length;
            while (i--) {
                if (this[i] === obj) {
                    return true;
                }
            }
            return false;
        }
        var j;
        var list = new Array();
        for(j = 0; j < matches.length; j++){
            if(!list.contains(matches[j].championId)) {
                list.push(matches[j].championId);
            }
        }
        args.listChampions = list;
        var allGames = new Array();
        var winGames = new Array();
        var games = 0;
        for(j=0; j < list.length; j++){
            MatchEUW.findAll({
                where: {
                    championId: list[j]
                },
                raw: true
            }).then(function(champion){
                allGames[list.indexOf(champion[0].championId)] = champion.length;
                games+=champion.length;
                MatchEUW.findAll({
                    where: {
                        championId: champion[0].championId,
                        status: true
                    },
                    raw: true
                }).then(function(championWin){
                    if(championWin.length>1) {winGames[list.indexOf(championWin[0].championId)] = champion.length;}
                    else winGames[list.indexOf(champion[0].championId)] = 0;
                    args.topWinChampions = winGames;
                    if (champion[0].championId === list[list.length - 1]) {
                        console.log("Done");
                        args.winChampions = winGames;
                        args.gameChampions = allGames;
                        console.log(games);
                        args.games = games;
                        resolve("result");
                    }
                })
            });
        }
    });
};


MatchEUW.prototype.getItemsList = function(args, resolve) {
    MatchEUW.findAll({
        raw: true
    }).then(function (matches) {
        Array.prototype.contains = function(obj) {
            var i = this.length;
            while (i--) {
                if (this[i] === obj) {
                    return true;
                }
            }
            return false;
        }
        var j;
        var list = new Array();
        for(j = 0; j < matches.length; j++){
            if(!list.contains(matches[j].itemId)) {
                list.push(matches[j].itemId);
            }
        }
        args.listItems = list;
        var allGamesItems = new Array();
        var winGamesItems = new Array();
        var games = 0;
        for(j=0; j < list.length; j++){
            MatchEUW.findAll({
                where: {
                    itemId: list[j]
                },
                raw: true
            }).then(function(champion){
                allGamesItems[list.indexOf(champion[0].itemId)] = champion.length;
                games+=champion.length;
                MatchEUW.findAll({
                    where: {
                        itemId: champion[0].itemId,
                        status: true
                    },
                    raw: true
                }).then(function(championWin){
                    if(championWin.length>1) {winGamesItems[list.indexOf(championWin[0].itemId)] = champion.length;}
                    else winGamesItems[list.indexOf(champion[0].itemId)] = 0;
                    args.topWinChampions = winGamesItems;
                    if (champion[0].itemId === list[list.length - 1]) {
                        console.log("Done");
                        args.winItems = winGamesItems;
                        args.gameItems = allGamesItems;
                        console.log(games);
                        args.gamesItems = games;
                        resolve("result");
                    }
                })
            });
        }
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