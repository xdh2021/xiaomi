<template>
  <div id="home">
    <el-container>
        <div class="header_top">
          <div class="hd_t" >
            <ul>
                <li v-if="!isLogin" class="login">
                  <router-link to="/Login" >
                    <div class="nologin">
                      <el-button type="primary" @click="login">登录</el-button>
                      <span>|</span>
                      <el-button type="primary" @click="reg">注册</el-button>
                    </div>
                  </router-link>
                </li>
                <li v-else class="login">
                  欢迎<p>这里是用户</p>
                  <el-button type="primary">退出登录</el-button>
                </li>
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
        <div class="content">
          <div class="main_top">
          <!-- <div class="left_nav">
            <v-menu style="width:240px;background:#a09d9d;color:#f0f0f0;" :data="verticalMenuData1"></v-menu>
            <v-menu style="width:240px;background:#a09d9d;color:#f0f0f0;" :data="verticalMenuData2"></v-menu>
            <v-menu style="width:240px;background:#a09d9d;color:#f0f0f0;" :data="verticalMenuData3"></v-menu>
            <v-menu style="width:240px;background:#a09d9d;color:#f0f0f0;" :data="verticalMenuData4"></v-menu>
            <v-menu style="width:240px;background:#a09d9d;color:#f0f0f0;" :data="verticalMenuData5"></v-menu>
            <v-menu style="width:240px;background:#a09d9d;color:#f0f0f0;" :data="verticalMenuData6"></v-menu>
            <v-menu style="width:240px;background:#a09d9d;color:#f0f0f0;" :data="verticalMenuData7"></v-menu>
            <v-menu style="width:240px;background:#a09d9d;color:#f0f0f0;" :data="verticalMenuData8"></v-menu>
            <v-menu style="width:240px;background:#a09d9d;color:#f0f0f0;" :data="verticalMenuData9"></v-menu>
            <v-menu style="width:240px;background:#a09d9d;color:#f0f0f0;" :data="verticalMenuData10"></v-menu>
            <v-menu style="width:240px;background:#a09d9d;color:#f0f0f0;" :data="verticalMenuData11"></v-menu>  
            <v-menu class="menu1" style="width:240px;background:#a09d9d;color:#f0f0f0;" :data="verticalMenuData12"></v-menu>
          </div> -->
          <div class="banner">
            <el-carousel height="460px">
              <el-carousel-item v-for="item in hbannerList" :key="item.id">
                <img :src="item.hb_img" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="content1">
          <div class="ct1">
            <div class="c1">
              <span class="el-icon-s-custom"></span>
              <p>保障服务</p>
            </div>
            <div class="c1">
              <span class="el-icon-office-building"></span>
              <p>保障服务</p>
            </div>
            <div class="c1">
              <span class="el-icon-key"></span>
              <p>F码通道</p>
            </div>
            <div class="c1">
              <span class="el-icon-s-ticket"></span>
              <p>米粉卡</p>
            </div>
            <div class="c1">
              <span class="el-icon-refresh"></span>
              <p>保障服务</p>
            </div>
            <div class="c1">
              <span class="el-icon-sell"></span>
              <p>话费充值</p>
            </div>
          </div>
          <div class="ct2">
            <img src="../assets/imgs/c1-1.jpg" alt="">
          </div>
          <div class="ct3">
            <img src="../assets/imgs/c1-2.png" alt="">
          </div>
          <div class="ct4">
            <img src="../assets/imgs/c1-3.jpeg" alt="">
          </div>
        </div>
      </div>
      </el-main>
      <el-main class="main2">
        <div class="content1">
          <img src="../assets/imgs/k40.jpg" alt="">
        </div>
        <div class="content2">
          <div class="c2title">
            <div class="t1">
              <h2>手机</h2>
            </div>
            <div class="t2">查看更多<el-button class="box" type="Success" icon="el-icon-arrow-right"></el-button></div>
          </div>
          <div class="c2ct">
              <div class="left">
                <router-link to>
                  <img src="../assets/imgs/phone.jpg" alt="" style="width:100%;height:100%">
                </router-link>
              </div>
            <div class="right">
              <div class="box_item" v-for="item in phonelist" :key="item.id" >
                  <router-link :to="{ path: '/Detail', query: {product_id:item.product_id} }">
                    <img :src="item.product_picture" style="width:100%;height:100%" >
                  </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="content2">
          <div class="c2title">
            <div class="t1">
              <h2>家电</h2>
            </div>
            <div class="t2">查看更多<el-button class="box" type="primary" icon="el-icon-arrow-right"></el-button></div>
          </div>
          <div class="c2ct">
            <div class="right">
              <div class="box_item" v-for="item in jiadianlist" :key="item.id" >
                  <router-link :to="{ path: '/jiadianDetail', query: {product_id:item.product_id} }">
                    <img :src="item.product_picture" style="width:100%;margin-top:30px;" >
                  </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="content2">
          <div class="c2title">
            <div class="t1">
              <h2>配件</h2>
            </div>
            <div class="t2">查看更多<el-button class="box" type="primary" icon="el-icon-arrow-right"></el-button></div>
          </div>
          <div class="c2ct">
            <div class="right">
              <div class="box_item" v-for="item in peijianlist" :key="item.id" >
                  <router-link :to="{ path: '/peijianDetail', query: {product_id:item.product_id} }">
                    <img :src="item.product_picture" style="width:100%;margin-top:30px;" >
                  </router-link>
              </div>
            </div>
          </div>
        </div>
      </el-main>
      <!-- <el-main class="main3">
        <div class="footer">
          <div class="ct1">
            <ul>
              <li>111</li>
              <li>222</li>
              <li>333</li>
              <li>444</li>
              <li>555</li>
            </ul>
          </div>
          <div class="ct2"></div>
        </div>
      </el-main> -->
      <el-footer class="ft">
        <div class="ft_last">
          <img src="https://s02.mifile.cn/assets/static/image/logo-mi2.png" alt="logo" style="width:150px;height:150px">
          <span><h1>让每个人都能享受科技带来的美好生活</h1></span>
        </div>
      </el-footer>

    </el-container>

  </div>
</template>

<script>
export default {
  name:'Home',
  data(){
    return {
      tabPosition:'left',
      hbannerList:[],
      phonelist:[],
      jiadianlist:[],
      peijianlist:[]
    };
  },
  created(){
    this.$axios.post('http://localhost:2021/api/getAllhbanner').then(res=>{
        this.hbannerList = res.data.data;
        console.log('res',res);
        console.log('res.data.hb_img',res.data.data);
      })
    this.$axios.post('http://localhost:2021/api/getAllproduct').then(res=>{
        this.phonelist = res.data.data;
        console.log('res',res);
        console.log('res.data.hp_img',res.data.data);
      })
    this.$axios.post('http://localhost:2021/api/getAllJiadian').then(res=>{
        this.jiadianlist = res.data.data;
        console.log('res',res);
        console.log('res.data.hp_img',res.data.data);
      })
    this.$axios.post('http://localhost:2021/api/getAllpeijian').then(res=>{
        this.peijianlist = res.data.data;
        console.log('res',res);
        console.log('res.data.hp_img',res.data.data);
      })
  },
   methods: {
    // showProduct(id){
    //   this.$router.push({name: 'Detail',query: {productID:item.product_id})
    // }
    toHome(){
      this.$router.push('Home')
    }
    ,
  },
}
</script>


<style lang="scss" scoped>
#home{
  width: 100%;
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
                .el-button{
                  font-size: 12px;
                  width: 20px;
                  height: 30px;
                  margin-top: -5px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                .nologin{
                  width: 100px;
                  display: flex;
                  justify-content: space-between;
                }
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
      width: 1266px;
          margin: 0 auto;
        box-sizing: border-box;
        .content{
        width: 1226px;
        margin-top: 50px;
          .main_top{
            display: flex;
            position: relative; 
          box-sizing: border-box;
            .left_nav{
              position: absolute;
              left: 0;
              text-align: center;
              
            }
            .banner{
              .el-carousel{
                width: 1226px;
              }
            //   .el-carousel__item h3 {
            //       color: #475669;
            //       font-size: 14px;
            //       opacity: 0.75;
            //     }
    
            //     .el-carousel__item:nth-child(2n) {
            //       background-color: #99a9bf;
            //     }
        
            //     .el-carousel__item:nth-child(2n+1) {
            //       background-color: #d3dce6;
            //     }
            }
          }
          .content1{
            width: 100%;
            height: 254px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            .ct1{
              width: 234px;
              height: 170px;
              background-color: #5f5750;
              display: flex;
              flex-wrap: wrap;
              margin-left: 20px;
              .c1{
                width: 33.33%;
                height: 50%;
                border: 1px solid #665e57;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: center ;
                align-items: center;
                  color: #bababa;
                .el-icon-s-custom,.el-icon-office-building,.el-icon-key,.el-icon-s-ticket,.el-icon-refresh,.el-icon-sell{
                  font-size: 30px;
                }
              }
            }
            .ct2{
              width: 300px;
              height: 170px;
              background-color: #adb4e8;
              img{
                width: 100%;
              }
            }
            .ct3{
              width: 300px;
              height: 170px;
              background-color: #ad2028;
              img{
                width: 100%;
              }
            }
            .ct4{
              width: 300px;
              height: 170px;
              background-color: #a1bce7;
              img{
                width: 100%;
              }
            }
          }
        }
      }
    .main2{
            width: 100%;
            padding: 32px 0;
            background: #f5f5f5;
            box-sizing: border-box;
              .content1{
              margin: 0 auto;
              width: 1226px;
              height: 120px;
              background: #dae2f4;
              margin-bottom: 32px;
              img{
                width: 100%;
              }
            }
              .content2{
                margin: 0 auto;
                width: 1226px;
                margin-bottom: 32px;
                display: flex;
                flex-direction: column;
                  .c2title{
                    display: flex;
                    justify-content: space-between;
                    color: #333;
                    .t1{
                      font-size: 22px;
                      font-weight: 200;
                      line-height: 58px;
                    }
                    .t2{
                      line-height: 58px;
                      font-size: 18px;
                      .box{
                        float: right;
                        width: 40px;
                        border-radius: 50%;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin:10px 10px 0;
                      }
                    }
                  }
                  .c2ct{
                    display: flex;
                    width: 1226px;
                    .left{
                      width: 240px;
                      height: 585px;
                      background: #fff;
                    }
                    .left:hover{
                        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
                        transition: all 1s;
                    }
                    .right{
                      flex: 1;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      flex-wrap: wrap;

                      .box_item{
                        width: 220px;
                        height: 282px;
                        background: #fff;
                        margin-right: 20px;
                        margin-bottom: 20px;
                      }
                      .box_item:hover{
                        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
                        transition: all 1s;
                      }
                    }
                  }
            }
          }  
    .main3{
      padding: 0;
      background: #fff;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      .footer{
        width: 1226px;  
        .ct1{
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid #e0e0e0;
          ul{
            display: flex;
            width: 100%;
            li{
              flex: 1;
              color: #616161;
              text-align: center;
              border-right: 1px solid #e0e0e0;
            }
          }
        }
        .ct2{
          height: 254px;
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
}
</style>
