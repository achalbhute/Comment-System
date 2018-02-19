var express = require('express');
var Comment = require('../models/comment');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('comment');
});

router.get('/comments/:content', function(req, res, next){
    res.render('comments' , {content :req.params.content});
});

router.post('/comment', function(req, res, next){
    var content = req.body.content;
    var comment = new Comment({
        content : content
    });
    comment.save();
    res.redirect('/comments/'+ content);
});

module.exports = router;
