'use strict';
const User= require('../models/DefineUser');

User.prototype.createUser = function (id, login, fn, sn, pass, nick, age, ser){
    User.create({
        id: id,
        login: login,
        firstName: fn,
        secondName: sn,
        password: pass,
        nickname: nick,
        age: age,
        server: ser
    });
};

User.prototype.deleteUser = function (id){
    User.destroy({
        where:{
            id: id
        }
    })
};

User.prototype.updateUser  = function (id,fn, sn, nick, age, ser){
    if(typeof  name != 'undefined' && name != ''){
        const newData = {
            name: name
        };
        User.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  fn != 'undefined' && fn != ''){
        const newData = {
            firstName: fn
        };
        User.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  sn != 'undefined' && sn != ''){
        const newData = {
            secondName: sn
        };
        User.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  nick != 'undefined' && nick != ''){
        const newData = {
            nickname: nick
        };
        User.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  age != 'undefined' && age != ''){
        const newData = {
            age: age
        };
        User.update(newData, {
            where: {id: id}
        })
    }
    if(typeof  ser != 'undefined' && ser != ''){
        const newData = {
            server: ser
        };
        User.update(newData, {
            where: {id: id}
        })
    }
};

module.exports = User;