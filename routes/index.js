var express = require('express');
var router = express.Router();
var model=require('./db.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/index.html', function(req, res, next) {
  res.render('index');
});
router.get('/create.html', function(req, res, next) {
  res.render('create');
});
//添加大图
router.post('/swiperCreate', function(req, res, next){
	model.swiper.create(req.body,function(err,doc){
		if(err){
			console.log(err);
		}
		res.send(doc);
	})
});
//显示大图
router.get('/swiper', function(req, res, next) {
	model.swiper.find(req.query,function(err,doc){
		if(err){
			console.log(err);
		}
		res.send(doc);
		console.log(doc);
	})
});
//时间成长
router.post('/apiCreate', function(req, res, next){
	model.timeGroup.create(req.body,function(err,doc){
		if(err){
			console.log(err);
		}
		res.send(doc);
	})
});
//显示时间成长
router.get('/api', function(req, res, next) {
	console.log(req.query)
	if(req.query.action=='list'){
		model.timeGroup.find({},function(err,doc){
		if(err){
			console.log(err);
		}
		res.send(doc);
		
	})
	}
});

//今日特惠
router.post('/todayItemCreate', function(req, res, next){
	model.todayItem.create(req.body,function(err,doc){
		if(err){
			console.log(err);
		}
		res.send(doc);
	})
});
//显示今日特惠
router.get('/todayItem', function(req, res, next) {
	console.log(req.query)
		model.todayItem.find({},function(err,doc){
		if(err){
			console.log(err);
		}
		res.send(doc);
		
	})
});
module.exports = router;
