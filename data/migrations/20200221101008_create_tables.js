
exports.up = function(knex) {
    return knex.schema.createTable('project', tbl => {
        tbl.increments().unsigned();
        tbl.string('name').notNullable();
        tbl.text('description');
    }).createTable('task', tbl => {
        tbl.increments().unsigned();
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('project').onDelete('RESTRICT').onUpdate('CASCADE');
        tbl.text('description').notNullable();
        tbl.text('notes');
        tbl.boolean('completed').defaultTo(false);
    }).createTable('resource', tbl => {
        tbl.increments().unsigned();
        tbl.string('name').notNullable();
        tbl.text('description');
    }).createTable('project_resources', tbl => {
        tbl.primary(['project_id', 'resource_id']);
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('project').onDelete('RESTRICT').onUpdate('CASCADE');
        tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resource').onDelete('RESTRICT').onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources')
    .dropTableIfExists('resource')
    .dropTableIfExists('task')
    .dropTableIfExists('project');
};
