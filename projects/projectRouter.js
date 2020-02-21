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

module.exports = router;