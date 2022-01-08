// 手机商品
const mongoose = require('mongoose')

var productsSchema = mongoose.Schema({
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

var Products = mongoose.model('products', productsSchema);

module.exports = Products;