
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {project_id: 1, description: 'In the terminal type create-react-app and then the project name', notes: 'if using npm, you will have to type npx first'},
        {project_id: 1, description: 'Remove unwanted code from App.js', notes: 'This will be everythin in between the outermost divs'},
        {project_id: 1, description: 'Create a components directory.', notes: ''},
        {project_id: 1, description: 'Start making your App!!!', notes: ''},
        {project_id: 2, description: 'type yarn init -y in the terminal', notes: 'If using npm, type npm init --y.'},
        {project_id: 2, description: 'Create your gitignore file', notes: 'Type yarn create gitignore node.'},
        {project_id: 2, description: 'Add your index.js file.', notes: 'Type touch index.js in the terminal in the root directory.'},
        {project_id: 2, description: 'Make your start script', notes: 'In your package.json file type "scripts": {"start": "node index.js"}'},
        {project_id: 2, description: 'Start building your server!!!', notes: ''},
        {project_id: 3, description: 'Create your knexfile.', notes: 'Type knex init in the terminal.'},
        {project_id: 3, description: 'Modify the development object in the knex file', notes: 'Add useNullAsDefault: true and the pool object with the afterCreat cb function if using sqlite3.'},
        {project_id: 3, description: 'Create your tables', notes: 'Type knex migrate:make <table_name> into the console and build your tables in the migration file.'},
        {project_id: 3, description: 'Seed data into your tables', notes: 'Typed knex seed:make 001_table into the console and add the data to that file.'}
      ]);
    });
};
