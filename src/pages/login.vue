<template>
  <div class="login">
    <div class="header">
      <div class="container">
        <div class="logo">
          <img src="/imgs/logo-mi.png" alt="">
          <div class="title">
            <h3>小米商城</h3>
            <p>让每个人都能享受科技的乐趣</p>
          </div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="container">
        <img src="/imgs/login-bg2.png" alt="">
        <div class="login-form">
          <div class="title">
            <span class="account" @click="changeLoginWayAccount">账号登录</span>
            <span class="wash" @click="changeLoginWayWash">扫码登录</span>
          </div>
          <div v-if="loginWay === 0">
            <div class="in">
              <input type="text" placeholder="邮箱/手机号码/小米ID" onautocomplete="off">
              <input type="password" placeholder="密码" onautocomplete="off">
              <button>登录</button>
            </div>
            <div class="foot">
              <span class="foot-1">手机短信登录/注册</span>
              <span class="foot-2">立即注册 | 忘记密码？</span>
            </div>
          </div>
          <div class="figure" v-else>
            <img src="imgs/login-figure.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="footor">
      <span class="spanUp">简体 | 繁体 | English | 常见问题 | 隐私政策</span>
      <span class="spanDown">小米公司版权所有-京ICP备10046444-<img src="imgs/police-logo.png" alt="">京公网安备11010802020134号-京ICP证110507号</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        // 登录方式，0是账号登录，1是扫码登录
        loginWay: 0,
      }
    },
    methods: {
      changeLoginWayAccount() {
        this.loginWay = 0;
        let account = document.getElementsByClassName("account")[0];
        let wash = document.getElementsByClassName("wash")[0];
        account.style.color = "#ff6600";
        wash.style.color = "#666666";
      },
      changeLoginWayWash() {
        this.loginWay = 1;
        let account = document.getElementsByClassName("account")[0];
        let wash = document.getElementsByClassName("wash")[0];
        account.style.color = "#666666";
        wash.style.color = "#ff6600";
      }
    }
  }
</script>

<style lang="scss">

  .login {
    box-sizing: border-box;

    .header {
      background-color: #ffffff;

      .container {
        width: 1226px;
        margin-left: auto;
        margin-right: auto;


        .logo {
          display: flex;
          margin-bottom: 41px;
          margin-top: 21px;

          img {
            width: 53px;
            height: 52px;
            margin-right: 18px;
          }

          .title {
            display: flex;
            flex-direction: column;

            h3 {
              display: block;
              font-size: 33px;
              color: #333333;
              line-height: 33px;
              margin-bottom: 8px;
              font-weight: normal;
            }

            p {
              color: #666666;
              font-size: 10px;
              line-height: 10px;
            }
          }
        }
      }
    }

    .body {
      .container {
        position: relative;
        width: 100%;
        margin-left: auto;
        margin-right: auto;

        img {
          width: 100%;
        }

        .login-form {
          position: absolute;
          width: 410px;
          height: 390px;
          background: rgba(255, 255, 255, 1);
          top: 37px;
          left: 950px;

          .title {
            margin-top: 40px;
            font-size: 24px;
            margin-bottom: 49px;

            .account {
              cursor: pointer;
              color: #ff6600;
              display: inline-block;
              line-height: 24px;
              margin-left: 73px;
              padding-right: 35px;
              border-right: 2px solid #D7D7D7;
            }

            .wash {
              cursor: pointer;
              color: #666666;
              display: inline-block;
              margin-left: 34px;
              line-height: 24px;
            }
          }

          .figure {
            text-align: center;

            img {
              width: 300px;
            }
          }

          .in {
            text-align: center;

            input {
              width: 348px;
              height: 50px;
              border: 1px solid #D7D7D7;
              margin-bottom: 20px;
              color: #999999;
              font-size: 14px;
              line-height: 60px;
              outline: none;
              text-indent: 18px;
            }

            button {
              width: 350px;
              height: 50px;
              margin-top: 10px;
              border: none;
              background-color: #FF6600;
              color: #ffffff;
              font-size: 16px;
              line-height: 16px;
            }
          }

          .foot {
            display: flex;
            justify-content: space-between;
            margin-left: 31px;
            margin-right: 31px;
            margin-top: 14px;
            font-size: 14px;

            span:first-child {
              color: #ff6600;
            }

            span:last-child {
              color: #999999;
            }
          }
        }
      }
    }

    .footor {
      height: 391px;
      border: 1px solid white;
      width: 100%;
      text-align: center;

      span {
        display: block;
        color: #333333;
        font-size: 14px;
      }

      .spanUp {
        margin-top: 251px;
      }

      .spanDown {

        img {
          vertical-align: middle;
        }
      }
    }
  }
</style>