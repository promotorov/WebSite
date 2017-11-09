'use strict';
const Guide= require('../models/DefineGuide');
const Image = require('./Image');

Guide.prototype.createGuide = function (id, title, body, content, imageId, championId, userId, raiting){
    Guide.create({
        id: id,
        title: title,
        body: body,
        content: content,
        imageId: imageId,
        championId: championId,
        userId: userId,
        raiting: raiting
    });
};

Guide.prototype.deleteGuide = function (id){
    Guide.destroy({
        where:{
            id: id
        }
    })
};

Guide.prototype.loadMostPopulars = function (args, resolve) {
    Guide.findAll({
        raw: true
    }).then(function (guides) {
        var arr = new Array();
        var i;
        var main;
        for(i = guides.length -1; i>=0; i--){
            arr[i] = guides[i].imageId;
            if(guides[i].main === true) {
                main = i;
            }
        }
        Image.findAll({
            where: {
                id: arr 
            },
            raw: true
        }).then(function(images){
            console.log("before");
            args.guides = guides;
            args.guidesImages = images;
            resolve("result");
        })
    });
};

Guide.prototype.updateGuide  = function (id, title, body, content, imageId, raiting){
    if(typeof  title != 'undefined' && title != ''){
        const newData = {
            title: title
        };
        Guide.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  body != 'undefined' && body != ''){
        const newData = {
            body: body
        };
        Guide.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  content != 'undefined' && content != ''){
        const newData = {
            content: content
        };
        Guide.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  imageId != 'undefined' && imageId != ''){
        const newData = {
            imageId: imageId
        };
        Guide.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  raiting != 'undefined' && raiting != ''){
        const newData = {
            raiting: raiting
        };
        Guide.update(newData, {
            where: {id: id}
        })
    }
};

module.exports = Guide;