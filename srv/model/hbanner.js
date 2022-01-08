//轮播图图片
const mongoose = require('mongoose')

var hbannerSchema = mongoose.Schema({
        hb_img:String,
},{
        timestamps: true 
});

var Hbanner = mongoose.model('hbanner', hbannerSchema);

module.exports = Hbanner;
