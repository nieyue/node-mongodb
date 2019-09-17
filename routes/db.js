var mongoose=require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/ld",{useNewUrlParser:true});

var db=mongoose.connection;

db.on('error',function(err){
	console.log(err);
})

db.once('open',function(){
	console.log('is running');
})


var swiper=new mongoose.Schema({
	name:String,//图片标题
	imgAddress:String,//图片地址
	//url:{type:String,require:false},//跳转地址
	url:{type:String},//跳转地址
})
var timeGroup=new mongoose.Schema({
	name:String,//标题
	tag:{type:String,default:'成长营'},//标签
	oldPrice:Number,//原价
	price:Number,//现价
	imgAddress:String,//图片地址
	url:{type:String,require:false},//跳转地址
	speaker:String,//主讲人
	msg:{type:String,default:'火爆招生中'},//消息提示
})
var todayItem=new mongoose.Schema({
	name:String,//标题
	imgAddress:String,//图片地址
	url:{type:String,require:false},//跳转地址
})

var swiper=mongoose.model("swiper",swiper);
var timeGroup=mongoose.model("timeGroup",timeGroup);
var todayItem=mongoose.model("todayItem",todayItem);
module.exports={swiper,timeGroup,todayItem};    
