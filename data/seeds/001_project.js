
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'create a react app', description: 'How to start a react app from nothing in an empty directory.'},
        {name: 'make a node project', description: 'How to make a node project from nothing in an empty directory.'},
        {name: 'start a knex database', description: 'How to create a knex database from nothing in an empty directory.'}
      ]);
    });
};
