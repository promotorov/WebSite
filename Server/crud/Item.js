'use strict';
const Item= require('../models/DefineItem');

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