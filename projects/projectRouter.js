const express = require('express');
const projects = require('./projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    projects.getProjects().then(projects => {
        res.status(200).json(projects);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unable to retrieve the projects requested.'});
    });
});

router.get('/:id', validateProjectId, (req, res) => {
    res.status(200).json(req.project);
});

router.get('/:id/resources', validateProjectId, (req, res) => {
    projects.getResourcesByProjectId(req.params.id).then(resources => {
        if (resources.length > 0) {
            res.status(200).json(resources);
        } else {
            res.status(404).json({ message: 'Unable to retrieve the resources for the project you requested' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unable to retrieve the resources requested.'});
    });
});

router.get('/:id/tasks', validateProjectId, (req, res) => {
    projects.getTaskByProjectId(req.params.id).then(tasks => {
        if (tasks.length > 0) {
            res.status(200).json(tasks);
        } else {
            res.status(404).json({ message: 'Unable to retrieve the tasks for the project you requested' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unable to retrieve the tasks requested.'});
    });
});

router.post('/', validateProject, (req, res) => {
    projects.insert(req.body).then(project => {
        res.status(201).json(project);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unable to add the project.'});
    })
});

router.post('/:id/tasks', validateProjectId, (req, res) => {
    const newTask = {
        ...req.body,
        project_id: req.project.id
    }
    projects.insertTask(newTask).then(task => {
        res.status(201).json(task);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unable to add the task.'});
    })
});

function validateProjectId(req, res, next) {
    projects.getProjectById(req.params.id).then(projects => {
        if (projects.length > 0) {
            req.project = projects[0]
            next();
        } else {
            res.status(404).json({ message: 'Unable to retrieve the project you requested' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unable to retrieve the project requested.'});
    });
}

function validateProject(req, res, next) {
    if (!req.body) {
        res.status(500).json({ message: "Please include a body for your request."});
    } else if (!req.body.name) {
        res.status(500).json({ message: "Please include the name of the project"});
    } else {
        next();
    }
}

module.exports = router;