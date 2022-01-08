<template>
  <div id="cart">
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
              <h1>我的购物车</h1>
            </div>
          </div>
          <div class="cart">
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 1000px"
                @selection-change="handleSelectionChange">
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  prop="img"
                  label="商品"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="商品名"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="单价"
                  width="200"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="数量"
                  width="200"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  prop="total_price"
                  label="小计"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>
              <div class="total">
                合计:299999元
              </div>
              <div class="shop">
                <el-button type="success" style="width:200px;height:50px" @click="toshop">立即购买</el-button>
              </div>
          </div>
      </el-main>
      <el-footer class="ft">
        <div class="ft_last">
          <img src="https://s02.mifile.cn/assets/static/image/logo-mi2.png" alt="logo" style="width:150px;height:150px" >
          <span><h1>让每个人都能享受科技带来的美好生活</h1></span>
        </div>
      </el-footer>

    </el-container>
  </div>
</template>

<script>

export default {
  name: 'Detail',
  data(){
    return {
      tabPosition:'left',
      tableData: [{
          img: '',
          name: '小米12',
          price: '2999',
          num:'1',
          total_price:''
        },
        {
          img: '',
          name: '小米12',
          price: '2999',
          num:'1',
          total_price:''
        },
        {
          img: '',
          name: '小米12',
          price: '2999',
          num:'1',
          total_price:''
        },
        {
          img: '',
          name: '小米12',
          price: '2999',
          num:'1',
          total_price:''
        },
        {
          img: '',
          name: '小米12',
          price: '2999',
          num:'1',
          total_price:''
        },
        {
          img: '',
          name: '小米12',
          price: '2999',
          num:'1',
          total_price:''
        }
        ],
        multipleSelection: []
    }
  },
  methods: {
    handleClick(e) {
      console.log('click ', e);
    },
    toshop(){
      this.$router.push('Submit')
    },
    toHome(){
      this.$router.push('Home')
    }
    ,
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }  
  }
}
</script>

<style lang="scss" scoped>
html,body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#cart{
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
      height: 800px;
      padding: 0;
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
            align-items: center;
            h1{
              font-size: 30px;
            }
          }
        }
        .cart{
          width: 1226px;
          height: 500px;
          margin: 0 auto;
          margin-top: 40px;
          position: relative;
          .el-table{
            margin: 0 auto;
          }
          .total{
            font-size: 40px;
            color: #ff6700;
             position: absolute;
            right: 0;
            bottom: 80px;
          }
          .shop{
            position: absolute;
            right: 0;
            bottom: 0px;
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