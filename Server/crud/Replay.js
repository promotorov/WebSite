'use strict';
const Replay= require('../models/DefineReplay');

Replay.prototype.createReplay = function (id, name, dif){
    Replay.create({
        id: id,
        name: name,
        text: dif
    });
};

Replay.prototype.loadReplays =  function (data, resolve) {
    Replay.findAll({
        where: {
             
        },
        raw: true
    }).then(function (replays) {
        data.replays = replays;
        resolve("result");
    });
};

module.exports = Replay;