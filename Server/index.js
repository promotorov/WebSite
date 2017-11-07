var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://legxxeqb:uqDL6YSe5RR_AS4wAqPq7qYXh8qCMTVq@pellefant.db.elephantsql.com:5432/legxxeqb');
sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

/*MODELS DEFENITION--------------------------------------------------*/

/** Defenition table ARTICLES
 * @param {integer} id
 * @param {string} title
 * @param {string} body
 * */
var Article = sequelize.define('article', {
   articleid:{
       type: Sequelize.INTEGER,
        primaryKey: true
   },
   title: Sequelize.STRING,
   body: Sequelize.TEXT
}, {
    timestamps: true
});


/** Defenition table GUIDES
 * @param {integer} id
 * @param {string} title
 * @param {string} body
 * */
var Guide = sequelize.define('guide', {
    guideid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
    //champion: Sequelize.INTEGER
}, {
    timestamps: true
});

/** Defenition table ROLES
 * @param {integer} id
 * @param {string} name
 * @param {integer} difficult
 * */

var Roles = sequelize.define('role', {
    roleid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING,
    difficult: Sequelize.INTEGER,
}, {
    timestamps: true
});


/** Defenition table Players
 * @param {integer} id
 * @param {string} firstname
 * @param {string} secondName
 * @param {integer} age
 * */

var Players = sequelize.define('player', {
    playerid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true
});


/** Defenition table MAPS
 * @param {integer} id
 * @param {string} name
 * */

var Maps = sequelize.define('map', {
    mapid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});


/** Defenition table GAMES
 * @param {integer} id
 * @param {string} time
 * */

var Games = sequelize.define('game', {
    gameid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    time:{
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

/** Defenition table LINES
 * @param {integer} id
 * @param {integer} difficult
 * @param {string} name
 * */

var Lines = sequelize.define('line', {
    lineid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    difficult:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

/** Defenition table CHAMPIONS
 * @param {integer} id
 * @param {string} name
 * @param {integer} roleid
 * */

var Champions = sequelize.define('champion', {
    championid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    /*roleid:{
        type: Sequelize.INTEGER,
        allowNull: false
    },*/
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

/** Defenition table SKINS
 * @param {integer} id
 * @param {string} name
 * @param {integer} championChampionid
 * */

var Skins = sequelize.define('skin', {
    skinid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    /*championid:{
        type: Sequelize.INTEGER,
        allowNull: false
    },*/
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});



/** Defenition table ITEMS
 * @param {integer} id
 * @param {integer} ad
 * @param {integer} ap
 * @param {integer} cdr
 * */

var Items = sequelize.define('item', {
    itemid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    ad:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ap:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cdr:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true
});



/** Defenition table STATISTICS
 * @param {integer} id
 * @param {string} firstname
 * @param {string} secondName
 * @param {integer} age
 * */

var Statistics = sequelize.define('statistic', {
    /*playerid:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },*/
    /*gameid:{
        type: Sequelize.INTEGER,
        allowNull: false
    },*/
    kills:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    assists:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    deaths:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    minions:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true
});

var PlayersGames = sequelize.define('playersgames', {

}, {
    timestamps: true
});

var ItemsGames = sequelize.define('itemsingames', {

}, {
    timestamps: true
});

/*END MODELS DEFENITION --------------------------------------*/

/*MODELS RELATIONSHIPS --------------------------------------*/
Guide.belongsToMany(Players, {through: 'PlayersGuide'})
Players.belongsToMany(Guide, {through: 'PlayersGuide'})

Games.belongsToMany(Players, {through: 'PlayersGames'})
Players.belongsToMany(Games, {through: 'PlayersGames'})

Champions.belongsToMany(Players, {through: 'PlayersChampions'})
Players.belongsToMany(Champions, {through: 'PlayersChampions'})

PlayersGames.belongsTo(Players);
PlayersGames.belongsTo(Games);
PlayersGames.belongsTo(Champions);

ItemsGames.belongsTo(Players);
ItemsGames.belongsTo(Games);
ItemsGames.belongsTo(Items);

Guide.belongsTo(Champions);

Games.belongsTo(Maps);

Champions.belongsTo(Roles);

Skins.belongsTo(Champions);

Statistics.belongsTo(Champions);
Statistics.belongsTo(Games);

/*END MODELS RELATIONSHIPS --------------------------------------*/
sequelize.sync({
    //force: true
});
//createRole(10, 'top', 5);
//createRole(12, 'bot', 7)
//createArticle(1, 'dsd', 'dsds');
//createChampion(777, 'tdasd', 1);
//createChampion(3, 'tdasdsd', 1);
//createGuide(3, 'first', 'body', 777);;
//createPlayer(7217, 'fn', 'ln', 1);
//createGuide(4, 'fff', 'fdssfd', 3);
//createMap(4, 'new');
//createGame(26, '30-02', 4);
//createLine(2, 2, 'newLine');
//createChampion(32, 'dasd', 1);
//createSkin(1, 'newSkin', 32);
//createItem(2, 2 ,3, 4);
//deleteStatistic(1);
//createStatistic(777, 26, 1,2,3,4);
//createPlayersGames(7217, 26, 32);
//createItemsGames(7217, 26, 2);

//readRole(12);
//readChampion(3);
//readLine(2);

//createRole(2, 'top', 5);
//deleteRole(2);
//createChampion(2, 'tdasd', 1);
//deleteChampion(2);
//createLine(4, 2, 'newLine');
//deleteLine(4);

//updateRole(10, 'bottom', 6);
//updateChampion(32, 'updatedName', 12);
//updateStatistic(2, 3, 22, '', '', 4);
/*CRUD ARTICLE --------------------------------------*/

/** CRUD Article
 * @description create instance of Article
 * @param {integer} id
 * @param {string} title
 * @param {string} sbody
 * */

function createArticle(id, title, body){
    console.log('start creating');
    Article.create({
        articleid: id,
        title: title,
        body: body
    });
    console.log('sucsess');
}

function readArticle(id) {
    console.log('start reading');
    Article.findAll({
        where: {articleid: id}
    }).then(function (articles) {
        console.log(articles.length);
    })
    console.log('sucsess');
}

function deleteArticle(id){
    console.log('start destroying');
    Article.destroy({
        where:{
            articleid: id
        }
    })
    console.log('sucsess');
}

function updateArticle(id, title, body){
    console.log('start updating');
    if(typeof title != 'undefined' && title!=''){
        console.log('OK');
        const newData = {
            title: title
        };
        Article.update(newData, {
            where: {articleid: id}
        })
    }
    if(typeof body != 'undefined' && body!=''){
        console.log('OK');
        const newData = {
            body: body
        };
        Article.update(newData, {
            where: {articleid: id}
        })
    }
    console.log('sucsess');
}

/*END CRUD ARTICLE --------------------------------------*/

function createGuide(id, t, b, pi){
    console.log('start creating');
    Guide.create({
        guideid: id,
        title: t,
        body: b,
        championChampionid: pi
    });
    console.log('sucsess');
}

function readGuide(id) {
    console.log('start reading');
    Guide.findAll({
        where: {guideid: id}
    }).then(function (articles) {
        console.log(articles.length);
    })
    console.log('sucsess');
}

function deleteGuide(id){
    console.log('start destroying');
    Guide.destroy({
        where:{
            guideid: id
        }
    })
    console.log('sucsess');
}

function updateGuide(id, title, body, pl){
    console.log('start updating');
    if(typeof title != 'undefined' && title!=''){
        console.log('OK');
        const newData = {
            title: title
        };
        Guide.update(newData, {
            where: {guideid: id}
        })
    }
    if(typeof body != 'undefined' && body!=''){
        console.log('OK');
        const newData = {
            body: body
        };
        Guide.update(newData, {
            where: {guideid: id}
        })
    }
    if(typeof pl != 'undefined' && pl!=''){
        console.log('OK');
        const newData = {
            championChampionid: pl
        };
        Guide.update(newData, {
            where: {guideid: id}
        })
    }
    console.log('sucsess');
}





function createRole(id, n, d){
    console.log('start creating');
    Roles.create({
        roleid: id,
        name: n,
        difficult: d
    });
    console.log('sucsess');
}

function readRole(id) {
    console.log('start reading');
    Roles.findAll({
        where: {roleid: id}
    }).then(function (Roles) {
        console.log(Roles.length);
    })
    console.log('sucsess');
}

function deleteRole(id){
    console.log('start destroying');
    Roles.destroy({
        where:{
            roleid: id
        }
    })
    console.log('sucsess');
}

function updateRole(id, n, d){
    console.log('start updating');
    if(typeof n != 'undefined' && n!=''){
        console.log('OK');
        const newData = {
            name: n
        };
        Roles.update(newData, {
            where: {roleid: id}
        })
    }
    if(typeof d != 'undefined' && d!=''){
        console.log('OK');
        const newData = {
            difficult: d
        };
        Roles.update(newData, {
            where: {roleid: id}
        })
    }
    console.log('sucsess');
}



function createPlayer(id, fn, ln, age){
    console.log('start creating');
    Players.create({
        playerid: id,
        firstname: fn,
        lastname: ln,
        age: age
    });
    console.log('sucsess');
}

function readPlayer(id) {
    console.log('start reading');
    Players.findAll({
        where: {playerid: id}
    }).then(function (Players) {
        console.log(Players.length);
    })
    console.log('sucsess');
}

function deletePlayer(id){
    console.log('start destroying');
    Players.destroy({
        where:{
            playerid: id
        }
    })
    console.log('sucsess');
}

function updatePlayer(id, fn, ln, a){
    console.log('start updating');
    if(typeof fn != 'undefined' && fn!=''){
        console.log('OK');
        const newData = {
            firstname: n
        };
        Players.update(newData, {
            where: {playerid: id}
        })
    }
    if(typeof ln != 'undefined' && ln!=''){
        console.log('OK');
        const newData = {
            lastname: ln
        };
        Players.update(newData, {
            where: {playerid: id}
        })
    }
    if(typeof a != 'undefined' && a!=''){
        console.log('OK');
        const newData = {
            age: a
        };
        Players.update(newData, {
            where: {playerid: id}
        })
    }
    console.log('sucsess');
}



function createMap(id,n){
    console.log('start creating');
    Maps.create({
        mapid: id,
        name: n
    });
    console.log('sucsess');
}

function readMap(id) {
    console.log('start reading');
    Maps.findAll({
        where: {mapid: id}
    }).then(function (Maps) {
        console.log(Maps.length);
    })
    console.log('sucsess');
}

function deleteMap(id){
    console.log('start destroying');
    Maps.destroy({
        where:{
            mapid: id
        }
    })
    console.log('sucsess');
}

function updateMap(id, n){
    console.log('start updating');
    if(typeof n != 'undefined' && n!=''){
        console.log('OK');
        const newData = {
            name: n
        };
        Maps.update(newData, {
            where: {mapid: id}
        })
    }
    console.log('sucsess');
}



function createGame(id,t, m){
    console.log('start creating');
    Games.create({
        gameid: id,
        time: t,
        mapMapid: m
    });
    console.log('sucsess');
}

function readGame(id) {
    console.log('start reading');
    Games.findAll({
        where: {gameid: id}
    }).then(function (Games) {
        console.log(Games.length);
    })
    console.log('sucsess');
}

function deleteGame(id){
    console.log('start destroying');
    Games.destroy({
        where:{
            gameid: id
        }
    })
    console.log('sucsess');
}

function updateGame(id, t, m){
    console.log('start updating');
    if(typeof t != 'undefined' && t!=''){
        console.log('OK');
        const newData = {
            time: t
        };
        Games.update(newData, {
            where: {gameid: id}
        })
    }
    if(typeof m != 'undefined' && m!=''){
        console.log('OK');
        const newData = {
            mapMapid: m
        };
        Games.update(newData, {
            where: {gameid: id}
        })
    }
    console.log('sucsess');
}



function createLine(id,d,n){
    console.log('start creating');
    Lines.create({
        lineid: id,
        difficult: d,
        name: n
    });
    console.log('sucsess');
}

function readLine(id) {
    console.log('start reading');
    Lines.findAll({
        where: {lineid: id}
    }).then(function (Lines) {
        console.log(Lines.length);
    })
    console.log('sucsess');
}

function deleteLine(id){
    console.log('start destroying');
    Lines.destroy({
        where:{
            lineid: id
        }
    })
    console.log('sucsess');
}

function updateLine(id, d, n){
    console.log('start updating');
    if(typeof d != 'undefined' && d!=''){
        console.log('OK');
        const newData = {
            difficult: d
        };
        Lines.update(newData, {
            where: {lineid: id}
        })
    }
    if(typeof n != 'undefined' && n!=''){
        console.log('OK');
        const newData = {
            name: n
        };
        Lines.update(newData, {
            where: {lineid: id}
        })
    }
    console.log('sucsess');
}



function createChampion(id,n,r){
    console.log('start creating');
    Champions.create({
        championid: id,
        name: n,
        roleRoleid: r
    });
    console.log('sucsess');
}

function readChampion(id) {
    console.log('start reading');
    Champions.findAll({
        where: {championid: id}
    }).then(function (Champions) {
        console.log(Champions.length);
    })
    console.log('sucsess');
}

function deleteChampion(id){
    console.log('start destroying');
    Champions.destroy({
        where:{
            championid: id
        }
    })
    console.log('sucsess');
}

function updateChampion(id, n, r){
    console.log('start updating');
    if(typeof n != 'undefined' && n!=''){
        console.log('OK');
        const newData = {
            name: n
        };
        Champions.update(newData, {
            where: {championid: id}
        })
    }
    if(typeof r != 'undefined' && r!=''){
        console.log('OK');
        const newData = {
            roleRoleid: r
        };
        Champions.update(newData, {
            where: {championid: id}
        })
    }
    console.log('sucsess');
}



function createSkin(id,n,r){
    console.log('start creating');
    Skins.create({
        skinid: id,
        name: n,
        championChampionid: r
    });
    console.log('sucsess');
}

function readSkin(id) {
    console.log('start reading');
    Skins.findAll({
        where: {skinid: id}
    }).then(function (Skins) {
        console.log(Skins.length);
    })
    console.log('sucsess');
}

function deleteSkin(id){
    console.log('start destroying');
    Skins.destroy({
        where:{
            skinid: id
        }
    })
    console.log('sucsess');
}

function updateSkin(id, n, r){
    console.log('start updating');
    if(typeof n != 'undefined' && n!=''){
        console.log('OK');
        const newData = {
            name: n
        };
        Skins.update(newData, {
            where: {skinid: id}
        })
    }
    if(typeof r != 'undefined' && r!=''){
        console.log('OK');
        const newData = {
            championChampionid: r
        };
        Skins.update(newData, {
            where: {skinid: id}
        })
    }
    console.log('sucsess');
}





function createItem(id, ad,ap, cdr){
    console.log('start creating');
    Items.create({
        itemid: id,
        ad: ad,
        ap: ap,
        cdr: cdr
    });
    console.log('sucsess');
}

function readItem(id) {
    console.log('start reading');
    Items.findAll({
        where: {itemid: id}
    }).then(function (Items) {
        console.log(Items.length);
    })
    console.log('sucsess');
}

function deleteItem(id){
    console.log('start destroying');
    Items.destroy({
        where:{
            itemid: id
        }
    })
    console.log('sucsess');
}

function updateItem(id, ad, ap, cdr){
    console.log('start updating');
    if(typeof ad != 'undefined' && ad!=''){
        console.log('OK');
        const newData = {
            ad: ad
        };
        Items.update(newData, {
            where: {itemid: id}
        })
    }
    if(typeof ap != 'undefined' && adp!=''){
        console.log('OK');
        const newData = {
            ap: ap
        };
        Items.update(newData, {
            where: {itemid: id}
        })
    }
    if(typeof cdr != 'undefined' && cdr!=''){
        console.log('OK');
        const newData = {
            cdr: cdr
        };
        Items.update(newData, {
            where: {itemid: id}
        })
    }
    console.log('sucsess');
}








function createStatistic(pi, gi, k,a,d,m){
    console.log('start creating');
    Statistics.create({
        championChampionid: pi,
        gameGameid: gi,
        kills: k,
        assists: a,
        deaths: d,
        minions: m
    });
    console.log('sucsess');
}

function readStatistic(id) {
    console.log('start reading');
    Statistics.findAll({
        where: {id: id}
    }).then(function (Statistics) {
        console.log(Statistics.length);
    })
    console.log('sucsess');
}

function deleteStatistic(id){
    console.log('start destroying');
    Statistics.destroy({
        where:{
            id: id
        }
    })
    console.log('sucsess');
}

function updateStatistic(id, ci, gi, k, a, d, m){
    console.log('start updating');
    if(typeof ci != 'undefined' && ci!=''){
        console.log('OK');
        const newData = {
            championChampionid: ci
        };
        Statistics.update(newData, {
            where: {id: id}
        })
    }
    if(typeof gi != 'undefined' && gi!=''){
        console.log('OK');
        const newData = {
            gameGameid: gi
        };
        Statistics.update(newData, {
            where: {id: id}
        })
    }
    if(typeof k != 'undefined' && k!=''){
        console.log('OK');
        const newData = {
            kills: k
        };
        Statistics.update(newData, {
            where: {id: id}
        })
    }
    if(typeof a != 'undefined' && a!=''){
        console.log('OK');
        const newData = {
            assists: a
        };
        Statistics.update(newData, {
            where: {id: id}
        })
    }
    if(typeof d != 'undefined' && d!=''){
        console.log('OK');
        const newData = {
            deaths: d
        };
        Statistics.update(newData, {
            where: {id: id}
        })
    }
    if(typeof m != 'undefined' && m!=''){
        console.log('OK');
        const newData = {
            minions: k
        };
        Statistics.update(newData, {
            where: {id: id}
        })
    }
    console.log('sucsess');
}

function createPlayersGames(pi, gi, ci){
    console.log('start creating');
    PlayersGames.create({
        playerPlayerid: pi,
        gameGameid: gi,
        championChampionid: ci
    });
    console.log('sucsess');
}

function readPlayersGames(id) {
    console.log('start reading');
    PlayersGames.findAll({
        where: {id: id}
    }).then(function (PlayersGamess) {
        console.log(PlayersGamess.length);
    })
    console.log('sucsess');
}

function deletePlayersGames(id){
    console.log('start destroying');
    PlayersGames.destroy({
        where:{
            id: id
        }
    })
    console.log('sucsess');
}

function updatePlayersGames(id, pi, gi, ci){
    console.log('start updating');
    if(typeof pi != 'undefined' && pi!=''){
        console.log('OK');
        const newData = {
            playerPlayerid: ad
        };
        PlayersGames.update(newData, {
            where: {id: id}
        })
    }
    if(typeof gi != 'undefined' && gi!=''){
        console.log('OK');
        const newData = {
            gameGameid: gi
        };
        PlayersGames.update(newData, {
            where: {id: id}
        })
    }
    if(typeof ci != 'undefined' && ci!=''){
        console.log('OK');
        const newData = {
            championChampionid: ci
        };
        PlayersGames.update(newData, {
            where: {id: id}
        })
    }
    console.log('sucsess');
}





function createItemsGames(pi, gi, i){
    console.log('start creating');
    ItemsGames.create({
        playerPlayerid: pi,
        gameGameid: gi,
        itemItemid: i
    });
    console.log('sucsess');
}

function readItemsGames(id) {
    console.log('start reading');
    ItemsGames.findAll({
        where: {id: id}
    }).then(function (ItemsGames) {
        console.log(ItemsGames.length);
    })
    console.log('sucsess');
}

function deleteItemsGames(id){
    console.log('start destroying');
    ItemsGames.destroy({
        where:{
            id: id
        }
    })
    console.log('sucsess');
}

function updateItemsGames(id, pi, gi, i){
    console.log('start updating');
    if(typeof pi != 'undefined' && pi!=''){
        console.log('OK');
        const newData = {
            playerPlayerid: ad
        };
        ItemsGames.update(newData, {
            where: {id: id}
        })
    }
    if(typeof gi != 'undefined' && gi!=''){
        console.log('OK');
        const newData = {
            gameGameid: gi
        };
        ItemsGames.update(newData, {
            where: {id: id}
        })
    }
    if(typeof i != 'undefined' && i!=''){
        console.log('OK');
        const newData = {
            itemItemidd: i
        };
        ItemsGames.update(newData, {
            where: {id: id}
        })
    }
    console.log('sucsess');
}

//FUNCTIONS----------------------------------------------------------------------------------

