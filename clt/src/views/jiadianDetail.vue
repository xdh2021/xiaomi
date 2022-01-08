<template>
     <el-container>
        <div class="header_top">
          <div class="hd_t" >
            <ul>
              <router-link to="/Login">
                <li>
                  登录
                </li>
              </router-link>
              <router-link to="/Login">
                <li>
                  注册  
                </li>
              </router-link>
              <router-link to="/Home">
                <li>
                  首页
                </li>
              </router-link>
              <router-link to="/cart">
                <li>
                  我的订单
                </li>
              </router-link>
            </ul>
          </div>
        </div>
      <el-header class="a-header">
          <div class="hd">
            <div class="logo">
              <img src="https://s02.mifile.cn/assets/static/image/logo-mi2.png" alt="logo" style="width:70px;height:70px" @click="toHome">
            </div>
            <div class="nav">

            </div>
            <div class="search">
              <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </div>
      </el-header>
      <el-main>
          <div class="title">
            <div class="title_c">

            <div class="tleft"><h1>{{product_detail.product_name}}</h1></div>
            <div class="tright">
              <ul>
                <li><a href="#">概述</a></li>
                <li><a href="#">参数</a></li>
                <li><a href="#">用户评价</a></li>
              </ul>
            </div>
            </div>
          </div>
        <div class="product">
          <div class="content">
            <div class="left_banner">
              <el-carousel trigger="click" height="500px">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <img :src="product_detail.product_picture" style="width:100%;height:100%">
                  </el-carousel-item>
              </el-carousel>
            </div>
            <div class="right_ct">
              <div class="pd">{{product_detail.product_name}}</div>
              <div class="ct">
                <div class="info">
                  {{product_detail.product_intro}}
                </div>
                <div class="from">
                  小米自营
                </div>
                <div class="sale">
                  <div class="sale_top">
                    <div class="pname">小米12</div>
                    <div class="price">
                      <div class="salePrice">
                        {{product_detail.product_selling_price}}元
                      </div>
                      <div class="delPrice">
                        <del>{{product_detail.product_price}}元</del>
                      </div>
                    </div>
                  </div>
                  <div class="total_price">
                    总计：{{product_detail.product_selling_price}}元
                  </div>
                </div>
              </div>
              <div class="bt">
                <el-row>
                  <el-button type="success" plain>加入购物车</el-button>
                </el-row>
                <el-row>
                  <el-button type="danger" plain  @click="toshop">立即购买</el-button>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </el-main>
      <el-footer class="ft">
        <div class="ft_last">
          <img src="https://s02.mifile.cn/assets/static/image/logo-mi2.png" alt="logo" style="width:150px;height:150px">
          <span><h1>让每个人都能享受科技带来的美好生活</h1></span>
        </div>
      </el-footer>

    </el-container>
</template>

<script>
export default {
  name: 'jiadianDetail',
  data(){
    return {
      tabPosition:'left',
      product_id: "", 
      product_name:"",
      product_title:"",
      product_intro:"",
      product_picture:"",
      pbanner_id:"",
      product_detail:[],
      input3:""
    }
  },
  created(){
     this.product_id = this.$route.query.product_id
      // this.getDetail(this.product_id)
      this.$axios.post(`http://localhost:2021/api/jiadianDetail/${this.product_id}`).then(res=>{
          this.product_detail = res.data.data;
          console.log('res',res);
          console.log('res.data.product_id',res.data.data);
        })
  }
  ,
  methods:{
    //商品名称
    // this.$axios.post('http://localhost:2021/api/getAllproduct').then(res=>{
    //     this.product_name = res.data.data;
    //     console.log('res',res);
    //     console.log('res.data.product_name',res.data.data);
    //   })

    toshop(){
      this.$router.push('Submit')
    }
    ,
    toHome(){
      this.$router.push('Home')
    }
    ,
    //商品标题
    // getDetail:(product_id)=>{
    //   console.log(123);
    //   this.$axios.post('http://localhost:2021/api/productdetail',product_id).then(res=>{
    //       this.product_detail = res.data.data;
    //       console.log('res',res);
    //       console.log('res.data.product_id',res.data.data);
    //     })
    // },
    
    //商品标题
    // getTitle:(val)=>{
    //   this.$axios.post('http://localhost:2021/api/getAllproduct',{product_id:val}).then(res=>{
    //       this.product_title = res.data.data;
    //       console.log('res',res);
    //       console.log('res.data.product_title',res.data.data);
    //     })
    // }
    //商品介绍
    // this.$axios.post('http://localhost:2021/api/getAllproduct').then(res=>{
    //     this.product_intro = res.data.data;
    //     console.log('res',res);
    //     console.log('res.data.product_intro',res.data.data);
    //   })
    //商品轮播图图片
    // this.$axios.post('http://localhost:2021/api/getAllProductImg').then(res=>{
    //     this.product_picture = res.data.data;
    //     console.log('res',res);
    //     console.log('res.data.product_picture',res.data.data);
    //   })
    //商品轮播图所属id
    // this.$axios.post('http://localhost:2021/api/getAllProductImg').then(res=>{
    //     this.product_intro = res.data.data;
    //     console.log('res',res);
    //     console.log('res.data.product_intro',res.data.data);
    //   })
  },
  // methods: {
  //   handleClick(e) {
  //     console.log('click ', e);
  //   },
  // },
  // 通过路由获取商品id
  activated() {
    if (this.$route.query.product_id != undefined) {
      this.product_id = this.$route.query.product_id;
    }
  },
  watch: {
    // 监听商品id的变化，请求后端获取商品数据
    // product_id
  },
  mounted(){
    // this.product_id = this.$route.query.product_id
    // this.getDetail(this.product_id);
  }

}
</script>

<style lang="scss" scoped>
.el-container{
    padding: 0;
    .header_top{
          width: 100%;
          background: #333333;
          .hd_t{
          width: 1226px;
          margin: 0 auto;
          height: 40px;
          box-sizing: border-box;
          position: relative;
            ul{
              position: absolute;
              right: 0;
              width: 300px;
              li{
                float: left;
                box-sizing: border-box;
                list-style: none;
                color: #b0b0b0;
                padding: 10px 8px;
              }
            }
          }
      }
    .a-header{
        padding: 0;
        margin: 0 auto;
        .hd{
          width: 1226px;
          display: flex;
          flex-direction: column;
          height: 124px !important; 
          box-sizing: border-box; 
          display: flex;
          justify-content: space-between;
          align-self: center;
          position: relative;
          .logo{
            position: absolute;
            top: 30px;
            left: 0;
          }
          .search{
            position: absolute;
            top: 40%;
            right: 0;
            border-radius: 0% !important;
            .el-input{
              width: 370px;
            }
          }
        }
    }
    .el-main{
      padding: 0;
      height: 800px;
        width: 100%;
         box-sizing: border-box;
         .title{
          margin-top: 40px;
          width: 100%;
          box-shadow: 0 5px 5px rgba(0,0,0,0.2);
          .title_c{
            margin: 0 auto;
            width: 1226px;
            height: 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            ul{
              li{
                list-style: none;
                float: left;
                margin-left: 20px;
              }
            }
          }
        }
      .product{
        display: flex;
        width: 100%;
        margin-top: 20px;
        .content{ 
        width: 1226px;
        margin: 0 auto;
        display: flex;
          .left_banner{
            width: 400px;
              .el-carousel__item h3 {
                  color: #475669;
                  font-size: 14px;
                  opacity: 0.75;
                }
    
                .el-carousel__item:nth-child(2n) {
                  background-color: #99a9bf;
                }
        
                .el-carousel__item:nth-child(2n+1) {
                  background-color: #d3dce6;
                }
          }
          .right_ct{
            padding: 20px;
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-left: 40px;
            .pd{
                height: 40px;
                color: #212121; 
                font-size: 30px;
                font-weight: 400;
            }
            .ct{
              width: 500px;
              .info{
                color: #b0b0b0;
                margin-top: 20px;

              }
              .from{
                font-size: 14px;
                color: #ff6700;
                margin-top: 10px;
              }
              .sale{
                width: 600px;
                height: 150px;
                background: #fafafa;
                padding: 30px;
                box-sizing: border-box;
                margin-top: 10px;
                display: flex;
                flex-direction: column;
                .sale_top{
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 20px;
                  .pname{
                    font-size: 20px;
                  }
                  .price{
                    font-size: 20px;
                    .salePrice{
                    float: left;
                    margin-right: 20px;
                    }
                    .delPrice{
                      float: left;
                    }
                  }
                }
                .total_price{
                  font-size: 30px;
                  color: #ff6700;
                }
              } 
            }
            .bt{
              width: 600px;
              height: 100px;
              display: flex;
              justify-content: center;
              align-items: center;
              .el-button{
                width: 200px;
                height: 50px;
              }
            }
          }
        }
      }
    }
    .ft{
      padding: 30px 0;
      width: 100%;
      height: 206px !important;
      background: #fafafa;
      display: flex;

      .ft_last{
        margin: 0 auto;
        width: 1226px;
        background: #fafafa;
        img{
          margin-left: 150px;
        }
        span{
          float: right;
          line-height: 150px;
          margin-right: 350px;
          h1{
            font-size: 30px;
            color: #bababa;
          }
        }
      }
    }
  }
</style>