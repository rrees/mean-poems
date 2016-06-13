var express = require('express');
const Promise = require('bluebird');
var MongoClient = require('mongodb').MongoClient;
Promise.promisifyAll(MongoClient);

const dbUri =  process.env.MONGODB_URI;

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    MongoClient.connect(dbUri).then((db) => {
        const poems = db.collection('poems');
        poems.find().toArray((error, docs) => {
            res.render('poems', { title: 'Poems', poems: docs});
        });
    }, (error) => {
        console.log('No database available', error);
    });

});

module.exports = router;
