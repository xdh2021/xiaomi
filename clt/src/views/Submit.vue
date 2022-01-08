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
          <div class="sb">
                  <div class="title">收货地址</div>
              <div class="address">
                  <div class="adr_box">
                      <div>收货人</div>
                      <div>联系电话</div>
                      <div>地址地址地址地址地址地址</div>
                  </div>
                  <div class="adr_box">
                      <div>收货人</div>
                      <div>联系电话</div>
                      <div>地址地址地址地址地址地址</div>
                  </div>
                  <div class="adr_box">
                      <div>添加新地址</div>
                  </div>
              </div>
              <div class="peisong">
                <div class="title">配送方式<span>包邮</span></div>
              </div>  
              <div class="price">
                  <div class="pr">
                        <div>商品数量: <span>0元</span></div>
                        <div>商品总价: <span>0元</span></div>
                        <div>运费: <span>0元</span></div>
                        <div>应付总额: <span>0元</span></div>
                  </div>
              </div>
              <div class="zf">
                  <el-button type="success" style="width:100px">结算</el-button>
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
  name: 'Login',
  data(){
    return {
      activeName: 'second',
      user:'',
      password:'',
      zc_user:'',
      zc_password:'',
    }
  },
  methods: {
    handleClick(tab, event) {
        console.log(tab, event);
      },
    toHome(){
      this.$router.push('Home')
    }
    ,
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
        width: 100%;
        height: 124px  !important;
          box-shadow: 0 5px 5px rgba(0,0,0,0.2);
        .hd{
          margin: 0 auto;
          width: 1226px;
          display: flex;
          flex-direction: column;
          height: 100%; 
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
      padding: 30px;
      height: 600px;
      width: 100%;
      box-sizing: border-box;
      .sb{
          width: 800px;
          height: 500px;
          margin: 0 auto;
          background-color: #fafafa;
          padding: 40px;
          display: flex;
          flex-direction: column;
            .address{
                display: flex;
                height: 200px;
                .adr_box{
                    width: 200px;
                    height: 200px;
                    border: 1px solid #ccc;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-right: 20px;
                }
                }
              .title{
                  font-size: 18px;
                  margin: 20px 0;
              }
              .peisong{
                  span{
                      font-size: 12px;
                      color: #ff6700;
                      margin-left: 50px;
                  }
              }
              .price{
                  .pr{
                      float: right;
                      margin-right: 10px;
                  }
              }
              .zf{
                  .el-button{
                      margin-top: 5px;
                      float: right;
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