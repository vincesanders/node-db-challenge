const db = require('../data/db-config');

module.exports = {
    getProjects,
    getAllResources,
    getProjectById,
    getResourcesByProjectId,
    getTaskByProjectId
}

function getProjects() {
    return db('project');
}

function getProjectById(id) {
    return db('project').where({ id });
}

function getAllResources() {
    return db('resource');
}

function getResourcesByProjectId(id) {
    return db('project_resources as pr')
        .join('resource as r', 'pr.resource_id', 'r.id')
        .join('project as p', 'pr.project_id', 'p.id')
        .select('p.name as project-name', 'r.id', 'r.name as resource-name', 'r.description')
        .where('pr.project_id', id);
}

function getTaskByProjectId(id) {
    return db('task as t')
        .join('project as p', 't.project_id', 'p.id')
        .select('p.name as project-name', 'p.description as project-description', 't.id', 't.description', 't.notes')
        .where('t.project_id', id);
}