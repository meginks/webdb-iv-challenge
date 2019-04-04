const db = require('../data/dbConfig'); 

function find() {
    return db('dishes')
}

function findById(id) {
    return db('dishes') 
    .where({id})
    .first()
} 

module.exports = {
    find, 
    findById
}