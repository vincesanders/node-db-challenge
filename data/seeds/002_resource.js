
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'computer', description: 'This can be a laptop or desktop, but you will need internet access and a second monitor will make things easier.'},
        {name: 'react docs', description: 'If you have any questions, you can reference the react docs.'},
        {name: 'Google', description: 'If you have any questions, you can do a Google search.'},
        {name: 'knex docs', description: 'If you have any questions, you can reference the knex docs.'},
        {name: 'sqlite studio', description: 'Sqlite studio will make it easier to inspect your database and check which data is in it and if it was created properly.'},
        {name: 'Db Designer', description: 'This tool will help you organize your database in the planning phase.'},
      ]);
    });
};
