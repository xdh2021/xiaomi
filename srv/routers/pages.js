const express = require('express');
const  router = express.Router();
const Products = require("../model/products")
const Product_pictures = require("../model/product_pictures")
const Hbanner = require("../model/hbanner")
const Hphone = require("../model/hphone");
const Jiadian = require('../model/jiadian');
const Peijian = require('../model/peijian');




// 添加商品
router.post('/addproduct', async (req,res)=>{
    const { product_id,product_name,category_id,product_title,product_intro,product_picture,product_price,product_selling_price,product_num,product_sales} = req.body;
    // 数据过滤
    if(!product_id||!product_name||!category_id||!product_title||!product_intro||!product_picture||!product_price||!product_selling_price||!product_num||!product_sales) return res.send( {success:false,info:'请填写必要参数'});

    // 添加入库
    try{
        await Products.create({
          product_id,product_name,category_id,product_title,product_intro,product_picture,product_price,product_selling_price,product_num,product_sales
        })
        res.send({success:true,info:'添加成功'})
        
    } catch(e) {
        res.send( {success:false,info:'未知错误 请于网站管理员联系'});
    }

})


// 获取单个商品信息

router.post('/productdetail/:id',async (req,res)=>{

    const { id } = req.params;
    console.log(id);
    if(!id)  res.send({success:false,info:'请一定要传入id'})
    const a = {product_id:id}
    try {
        let products = await Products.findOne(a) // 分页查询
      
        res.send({success:true,info:'查询成功',data:products});
      }catch(e){
         
        res.send({success:false,info:'获取失败'})
      }

})

// 获取全部商品信息

router.post('/getAllproduct', async (req,res)=>{
      try {
        let products = await Products.find() // 分页查询
        res.send({success:true,info:'查询成功',data:products});
      }catch(e){
          console.log(e)
        res.send({success:false,info:'获取失败'})
      }

})

//添加家电
router.post('/addjiadian', async (req,res)=>{
  const { product_id,product_name,category_id,product_title,product_intro,product_picture,product_price,product_selling_price,product_num,product_sales} = req.body;
  // 数据过滤
  if(!product_id||!product_name||!category_id||!product_title||!product_intro||!product_picture||!product_price||!product_selling_price||!product_num||!product_sales) return res.send( {success:false,info:'请填写必要参数'});

  // 添加入库
  try{
      await Jiadian.create({
        product_id,product_name,category_id,product_title,product_intro,product_picture,product_price,product_selling_price,product_num,product_sales
      })
      res.send({success:true,info:'添加成功'})
      
  } catch(e) {
      res.send( {success:false,info:'未知错误 请于网站管理员联系'});
  }

})


// 获取单个家电信息

router.post('/jiadianDetail/:id',async (req,res)=>{

  const { id } = req.params;
  console.log(id);
  if(!id)  res.send({success:false,info:'请一定要传入id'})
  const a = {product_id:id}
  try {
      let jiadian = await Jiadian.findOne(a) // 分页查询
    
      res.send({success:true,info:'查询成功',data:jiadian});
    }catch(e){
       
      res.send({success:false,info:'获取失败'})
    }

})

// 获取全部家电信息

router.post('/getAlljiadian', async (req,res)=>{
    try {
      let jiadian = await Jiadian.find() // 分页查询
      res.send({success:true,info:'查询成功',data:jiadian});
    }catch(e){
        console.log(e)
      res.send({success:false,info:'获取失败'})
    }

})



//添加配件
router.post('/addpeijian', async (req,res)=>{
  const { product_id,product_name,category_id,product_title,product_intro,product_picture,product_price,product_selling_price,product_num,product_sales} = req.body;
  // 数据过滤
  if(!product_id||!product_name||!category_id||!product_title||!product_intro||!product_picture||!product_price||!product_selling_price||!product_num||!product_sales) return res.send( {success:false,info:'请填写必要参数'});

  // 添加入库
  try{
      await Peijian.create({
        product_id,product_name,category_id,product_title,product_intro,product_picture,product_price,product_selling_price,product_num,product_sales
      })
      res.send({success:true,info:'添加成功'})
      
  } catch(e) {
      res.send( {success:false,info:'未知错误 请于网站管理员联系'});
  }

})


// 获取单个配件信息

router.post('/peijianDetail/:id',async (req,res)=>{

  const { id } = req.params;
  console.log(id);
  if(!id)  res.send({success:false,info:'请一定要传入id'})
  const a = {product_id:id}
  try {
      let peijian = await Peijian.findOne(a) // 分页查询
    
      res.send({success:true,info:'查询成功',data:peijian});
    }catch(e){
       
      res.send({success:false,info:'获取失败'})
    }

})

// 获取全部配件信息

router.post('/getAllpeijian', async (req,res)=>{
    try {
      let peijian = await Peijian.find() // 分页查询
      res.send({success:true,info:'查询成功',data:peijian});
    }catch(e){
        console.log(e)
      res.send({success:false,info:'获取失败'})
    }

})



// 添加商品图片
router.post('/addProductImg', async (req,res)=>{
    const { id,product_picture } = req.body;
    // 数据过滤
    if(!id||!product_picture) return res.send( {success:false,info:'请填写必要参数'});

    // 添加入库
    try{
      
        await Product_pictures.create({
          id,product_picture 
        })
        res.send({success:true,info:'添加成功'})
        
    } catch(e) {
        res.send( {success:false,info:'未知错误 请于网站管理员联系'});
    }

})

//  查询多个商品图片

router.post('/getAllProductImg', async (req,res)=>{
      try {
        let product_pictures = await Product_pictures.find() // 分页查询
        res.send({success:true,info:'查询成功',data:product_pictures});
      }catch(e){
          console.log(e)
        res.send({success:false,info:'获取失败'})
      }

})



//  获取单个商品图片

router.post('/productImg',async (req,res)=>{

    const { id } = req.body;
    if(!id)  res.send({success:false,info:'请一定要传入id'})

    try {
        let product_pictures = await Product_pictures.findById(id) // 分页查询
      
        res.send({success:true,info:'查询成功',data:product_pictures });
      }catch(e){
         
        res.send({success:false,info:'获取失败'})
      }

})


// 添加轮播图图片
router.post('/addhbanner', async (req,res)=>{
  const { hb_img } = req.body;
  // 数据过滤
  if(!hb_img) return res.send( {success:false,info:'请填写必要参数'});

  // 添加入库
  try{
      await Hbanner.create({
        hb_img
      })
      res.send({success:true,info:'添加成功'})
      
  } catch(e) {
      res.send( {success:false,info:'未知错误 请于网站管理员联系'});
  }

})

// 获取全部轮播图图片

router.post('/getAllhbanner', async (req,res)=>{
    try {
      let hbanner = await Hbanner.find() // 分页查询
      res.send({success:true,info:'查询成功',data:hbanner});
    }catch(e){
        console.log(e)
      res.send({success:false,info:'获取失败'})
    }

})



// 添加首页手机栏图片
router.post('/addHphone', async (req,res)=>{
  const { hp_img } = req.body;
  // 数据过滤
  if(!hp_img) return res.send( {success:false,info:'请填写必要参数'});

  // 添加入库
  try{
      await Hphone.create({
        hp_img
      })
      res.send({success:true,info:'添加成功'})
      
  } catch(e) {
      res.send( {success:false,info:'未知错误 请于网站管理员联系'} );
  }

})

// 获取全部首页手机栏图片

router.post('/getAllHphone', async (req,res)=>{
    try {
      let hphone = await Hphone.find() // 分页查询
      res.send({success:true,info:'查询成功',data:hphone});
    }catch(e){
        console.log(e)
      res.send({success:false,info:'获取失败'})
    }

})




// 添加轮播图图片
router.post('/addhbanner', async (req,res)=>{
  const { hb_img } = req.body;
  // 数据过滤
  if(!hb_img) return res.send( {success:false,info:'请填写必要参数'});

  // 添加入库
  try{
      await Hbanner.create({
        hb_img
      })
      res.send({success:true,info:'添加成功'})
      
  } catch(e) {
      res.send( {success:false,info:'未知错误 请于网站管理员联系'});
  }

})

// 获取全部轮播图图片

router.post('/getAllhbanner', async (req,res)=>{
    try {
      let hbanner = await Hbanner.find() // 分页查询
      res.send({success:true,info:'查询成功',data:hbanner});
    }catch(e){
        console.log(e)
      res.send({success:false,info:'获取失败'})
    }

})
module.exports = router;