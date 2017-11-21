'use strict';
const Champion= require('../models/DefineChampion');
const Image= require('../models/DefineImage');
Champion.prototype.createChampion = function (id, name, des, history, roleId, imageId, imageBig){
    Champion.create({
        id: id,
        name: name,
        description: des,
        history: history,
        roleId: roleId,
        imageId: imageId,
        imageBig: imageBig
    });
};

Champion.prototype.deleteChampion = function (id){
    Champion.destroy({
        where:{
            id: id
        }
    })
};

Champion.prototype.loadChampions = function (args, resolve) {
    Champion.findAll({
        raw: true
    }).then(function (champions) {
        args.champions = champions;
        resolve("result");
    });
};

Champion.prototype.loadOneChampion =  function (id, args, resolve) {
    Champion.findAll({
        where: {
            id: id 
        },
        raw: true
    }).then(function (champion) {
        args.mainChampion = champion;
        resolve("result");
    });
};

Champion.prototype.loadChampionsWithImages = function (args, resolve) {
    Champion.findAll({
        raw: true
    }).then(function (champions) {
        var arr = new Array();
        var i;
        for(i = champions.length -1; i>=0; i--){
            arr[i] = champions[i].imageId;
        }
        Image.findAll({
            where: {
                id: arr 
            },
            raw: true
        }).then(function(images){
            console.log("before");
            args.champions = champions;
            args.championsImages = images;
            resolve("result");
        })
    });
};

Champion.prototype.updateChampion  = function (id, name, des, history, roleId){
    if(typeof  name != 'undefined' && name != ''){
        const newData = {
            name: name
        };
        Champion.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  des != 'undefined' && dif != ''){
        const newData = {
            description: des
        };
        Champion.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  history != 'undefined' && history != ''){
        const newData = {
            history: history
        };
        Champion.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  roleId != 'undefined' && roleId != ''){
        const newData = {
            roleId: roleId
        };
        Champion.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  imageId != 'undefined' && imageId != ''){
        const newData = {
            imageId: imageId
        };
        Champion.update(newData, {
            where: {id: id}
        })
    }
};

module.exports = Champion;