const db = require('../data/db-config');

module.exports = {
    getProjects,
    getProjectById,
    getResourcesByProjectId,
    getTaskByProjectId,
    getTaskById,
    insert,
    insertTask
};

function getProjects() {
    return db('project');
}

function getProjectById(id) {
    return db('project').where({ id });
}

function getResourcesByProjectId(id) {
    return db('project_resources as pr')
        .join('resource as r', 'pr.resource_id', 'r.id')
        .join('project as p', 'pr.project_id', 'p.id')
        .select('p.name as project-name', 'r.id', 'r.name as resource-name', 'r.description')
        .where('pr.project_id', id);
}

function getTaskById(id) {
    return db('task').where({ id });
}

function getTaskByProjectId(id) {
    return db('task as t')
        .join('project as p', 't.project_id', 'p.id')
        .select('p.name as project-name', 'p.description as project-description', 't.id', 't.description', 't.notes', 't.completed')
        .where('t.project_id', id);
}

function insert(newProject) {
    return db('project').insert(newProject).then(ids => {
        return getProjectById(ids[0]);
    });
}

function insertTask(newTask) {
    return db('task').insert(newTask).then(ids => {
        return getTaskById(ids[0]);
    });
}