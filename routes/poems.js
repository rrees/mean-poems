var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const db = req.db;
    const poems = db.get('poems');
    const allPoems = poems.find({}, {}, (error, docs) => {
        console.log(docs);
        res.render('poems', { title: 'Poems', poems: docs});
    });
});

module.exports = router;
