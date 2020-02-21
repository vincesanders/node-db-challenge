const db = require('../data/db-config');

module.exports = {
    get,
    getById,
    insert
};

function get() {
    return db('resource');
}

function getById(id) {
    return db('resource').where({ id });
}

function insert(newResource) {
    return db('resource').insert(newResource).then(ids => {
        return getById(ids[0]);
    });
}