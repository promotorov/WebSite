'use strict';
const Champion= require('../models/DefineChampion');

Champion.prototype.createChampion = function (id, name, des, history, roleId, imageId){
    Champion.create({
        id: id,
        name: name,
        description: des,
        history: history,
        roleId: roleId,
        imageId: imageId
    });
};

Champion.prototype.deleteChampion = function (id){
    Champion.destroy({
        where:{
            id: id
        }
    })
};

Champion.prototype.loadNewestChampions = function (args, resolve) {
    Champion.findAll({
        raw: true
    }).then(function (champions) {
        args.champions = champions;
        resolve("result");
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