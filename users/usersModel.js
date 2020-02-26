module.exports = {
    add,
    findBy,
    getAll
}

const db = require('../data/db-config');

function add(user){
    return db('users').insert(user);
}

function findBy(username){
    return db('users').where(username);
}

function getAll(){
    return db('users');
}