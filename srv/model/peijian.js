// 配件
const mongoose = require('mongoose')

var peijianSchema = mongoose.Schema({
        product_id:String,
        product_name:String,
        category_id:String,
        product_title:String,
        product_intro:String,
        product_picture:String,
        product_price:String,
        product_selling_price:String,
        product_num:String,
        product_sales:String,
},{
        timestamps: true 
});

var Peijian = mongoose.model('peijian', peijianSchema);

module.exports = Peijian;