

const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const express = require('express');

const MongoClient = require('mongodb').MongoClient;
wafawafawagf
// Error handling
const sendError = (err, res) => {
   
    response.message = typeof err == 'object' ? err.message : err;
    res.json(response);
};
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) throw err;

  var db = client.db('database');
// Response handling
let response = {
 
    data: [],
   
};



// Get project
router.get('/project', (req, res) => {
        db.collection('project')
            .find()
            .toArray()
            .then((project) => {
                response.data = project;
                res.json(response);
                console.log(response.data);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Get personal
router.get('/personal', (req, res) => {
    db.collection('personal')
        .find()
        .toArray()
        .then((personal) => {
            response.data = personal;
            res.json(response);
            console.log(response.data);
        })
        .catch((err) => {
            sendError(err, res);
        });
});
// Get task
router.get('/task', (req, res) => {
    db.collection('task')
        .find()
        .toArray()
        .then((task) => {
            response.data = task;
            res.json(response);
            console.log(response.data);
        })
        .catch((err) => {
            sendError(err, res);
        });
});
// Get Report
router.get('report', (req, res) => {
    db.collection('report')
        .find()
        .toArray()
        .then((report) => {
            response.data = report;
            res.json(response);
            console.log(response.data);
        })
        .catch((err) => {
            sendError(err, res);
        });
});

module.exports = router;
