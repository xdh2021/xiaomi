// 我的（设置）界面
const mongoose = require('mongoose')

var product_picturesSchema = mongoose.Schema({
        product_id:String,
        product_picture:String,
},{
        timestamps: true 
});

var Product_pictures = mongoose.model('product_pictures', product_picturesSchema);

module.exports = Product_pictures;