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

router.get('/:id', (req, res) => {
    projects.getProjectById(req.params.id).then(projects => {
        if (projects.length > 0) {
            res.status(200).json(projects[0]);
        } else {
            res.status(404).json({ message: 'Unable to retrieve the project you requested' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unable to retrieve the project requested.'});
    });
});

//In a real project, I would put this in a different router.
router.get('/resources', (req, res) => {
    projects.getAllResources().then(resources => {
        res.status(200).json(resources);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unable to retrieve a list of resources.'});
    });
});

router.get('/:id/resources', (req, res) => {
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

router.get('/:id/tasks', (req, res) => {
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

module.exports = router;