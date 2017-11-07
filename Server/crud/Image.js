'use strict';
const Image= require('../models/Defineimage');

Image.prototype.createImage = function (id, url){
    Image.create({
        id: id,
        url: url
    });
};

Image.prototype.deleteImage = function (id){
    Image.destroy({
        where:{
            articleid: id
        }
    })
};

Image.prototype.updateimage  = function (id, url){
    if(typeof  url != 'undefined' && url != ''){
        console.log('OK');
        const newData = {
            url: url
        };
        Image.update(newData, {
            where: {id: id}
        })
    }
};

module.exports = Image;