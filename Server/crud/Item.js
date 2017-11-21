'use strict';
const Item= require('../models/DefineItem');
const Image = require('./Image');
Item.prototype.createItem = function (id, name, ad, ap, cdr, description, imageId){
    Item.create({
        id: id,
        name: name,
        ad: ad,
        ap: ap,
        cdr: cdr,
        description: description,
        imageId: imageId
    });
};

Item.prototype.loadItems = function (args, resolve) {
    Item.findAll({
        raw: true
    }).then(function (articles) {
        var arr = new Array();
        var i;
        var main;
        for(i = articles.length -1; i>=0; i--){
            arr[i] = articles[i].imageId;
            if(articles[i].main === true) {
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
            args.items = articles;
            args.itemsImages = images;
            resolve("result");
        })
    });
};

Item.prototype.loadOneItem =  function (id, args, resolve) {
    Item.findAll({
        where: {
            id: id 
        },
        raw: true
    }).then(function (item) {
        args.mainItem = item;
        resolve("result");
    });
};


Item.prototype.deleteItem = function (id){
    Item.destroy({
        where:{
            id: id
        }
    })
};

Item.prototype.updateItem  = function (id, name, ad, ap, cdr, description, imageId){
    if(typeof  name != 'undefined' && name != ''){
        const newData = {
            name: name
        };
        Item.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  ad != 'undefined' && ad != ''){
        const newData = {
            ad: ad
        };
        Item.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  ap != 'undefined' && ap != ''){
        const newData = {
            ap: ap
        };
        Item.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  cdr != 'undefined' && cdr != ''){
        const newData = {
            cdr: cdr
        };
        Item.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  description != 'undefined' && description != ''){
        const newData = {
            description: description
        };
        Item.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  imageId != 'undefined' && imageId != ''){
        const newData = {
            imageId: imageId
        };
        Item.update(newData, {
            where: {id: id}
        })
    }
};

module.exports = Item;