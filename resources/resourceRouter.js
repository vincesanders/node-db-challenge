const express = require('express');
const resources = require('./resourceModel');

const router = express.Router();

router.get('/', (req, res) => {
    resources.get().then(resources => {
        res.status(200).json(resources);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unable to retrieve a list of resources.'});
    });
});

router.post('/', validateResource, (req, res) => {
    resources.insert(req.body).then(resource => {
        res.status(201).json(resource);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Unable to add the resources.'});
    })
})

function validateResource(req, res, next) {
    if (!req.body) {
        res.status(500).json({ message: "Please include a body for your request."});
    } else if (!req.body.name) {
        res.status(500).json({ message: "Please include the name of the resource"});
    } else {
        next();
    }
}

module.exports = router;