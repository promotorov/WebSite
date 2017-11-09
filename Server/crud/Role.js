'use strict';
const Role= require('../models/DefineRole');

Role.prototype.createRole = function (id, name, dif){
    Role.create({
        id: id,
        name: name,
        difficult: dif
    });
};

Role.prototype.deleteRole = function (id){
    Role.destroy({
        where:{
            id: id
        }
    })
};

Role.prototype.updateRole  = function (id, name, dif){
    if(typeof  name != 'undefined' && name != ''){
        const newData = {
            name: name
        };
        Role.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  dif != 'undefined' && dif != ''){
        const newData = {
            difficult: dif
        };
        Role.update(newData, {
            where: {id: id}
        })
    }
};

module.exports = Role;