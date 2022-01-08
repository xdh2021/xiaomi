//轮播图图片
const mongoose = require('mongoose')

var hphoneSchema = mongoose.Schema({
        hp_img:String,
},{
        timestamps: true 
});

var Hphone = mongoose.model('hphone', hphoneSchema);

module.exports = Hphone;
