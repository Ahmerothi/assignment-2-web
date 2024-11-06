var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    
   });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    
   });
});
/* GET Aboutme page. */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About me',
    
   });
});
/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Projects',
    
   });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact me',
    
   });
});


module.exports = router;
/*
MVC --> Model view controller
*/