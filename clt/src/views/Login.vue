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
                <el-button slot="append" icon="el-icon-search" @click="login"></el-button>
              </el-input>
            </div>
          </div>
      </el-header>
      <el-main>
          <div class="login">
            <div class="ct">
              <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
                <el-tab-pane label="登录" name="second">
                  <el-input v-model="loginForm.account" placeholder="请输入帐号"></el-input>
                  <el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
                  <el-button type="success" style="width:50%" @click="login">登录</el-button>
                </el-tab-pane>
                <el-tab-pane label="注册" name="first">
                  <el-input v-model="zc_user" placeholder="请输入帐号"></el-input>
                  <el-input placeholder="请输入密码" v-model="zc_password" show-password></el-input>
                  <el-button type="success" style="width:50%" @click="reg">注册</el-button>
                </el-tab-pane>
              </el-tabs>
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
import { mapMutations } from 'vuex';
export default {
  name: 'Login',
  data(){
    return {
      activeName: 'second',
      loginForm:{
        account:'',
        password:'',
      },
      zc_user:'',
      zc_password:'',
      input3:"",
    }
  },
    methods: {
    ...mapMutations(['changeLogin']),
    login () {
      // let _this = this;
      // if (this.loginForm.account === '' || this.loginForm.password === '') {
      //   alert('账号或密码不能为空');
      // } else {
      //   this.axios({
      //     method: 'post',
      //     url: '/user/login',
      //     data: _this.loginForm
      //   }).then(res => {
      //     console.log(res.data);
      //     _this.userToken = 'Bearer ' + res.data.data.body.token;
      //     // 将用户token保存到vuex中
      //     _this.changeLogin({ Authorization: _this.userToken });
      //     _this.$router.push('/Home');
      //     alert('登陆成功');
      //   }).catch(error => {
      //     alert('账号或密码错误');
      //     console.log(error);
      //   });
      // }
      this.$router.push('Home')
    },
    reg(){
      this.$router.push('Login')
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
      padding: 0;
      height: 600px;
      width: 100%;
      box-sizing: border-box;
      .login{
        width: 1226px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        
        .ct{
          margin-top: 150px;
          width: 600px;
          height: 350px;
          background: #f5f5f5;
          box-shadow: 0 15px 30px rgba(0,0,0,0.6);
          .el-input:nth-child(1){
            margin-top: 50px;
          }
          .el-button{
            margin-left: 150px;
            margin-top: 50px;
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