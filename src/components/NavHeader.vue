<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="userName">{{ userName }}</a>
          <a href="javascript:;" @click="login" v-else>登录</a>
          <a href="javascript:;" v-if="userName">注册</a>
          <a href="javascript:;" v-else>我的订单</a>
          <a href="javascript:;" class="my-cart"
          ><span class="icon-cart" @click="goToCart"></span> 购物车</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                        class="product"
                        v-for="(item, index) in phoneList"
                        :key="index"
                >
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtile"/>
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="ads1"/>
                    </div>
                    <div class="pro-name">小米CC</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="ads1"/>
                    </div>
                    <div class="pro-name">小米CC</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="ads1"/>
                    </div>
                    <div class="pro-name">小米CC</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt="ads1"/>
                    </div>
                    <div class="pro-name">小米CC</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt="ads1"/>
                    </div>
                    <div class="pro-name">小米CC</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-6.png'" alt="ads1"/>
                    </div>
                    <div class="pro-name">小米CC</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword"/>
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nav-header",
    data() {
      return {
        userName: "",
        phoneList: [],
      };
    },
    filters: {
      currency(val) {
        if (!val) {
          return '0.00';
        } else {
          return "￥" + val.toFixed(2) + "元";
        }
      }
    },
    mounted() {
      this.getProductList();
    },

    methods: {
      getProductList() {
        this.axios
          .get("/products", {
            params: {
              categoryId: "100012",
            },
          })
          .then((res) => {
            if (res.list.length > 6) {
              this.phoneList = res.list.slice(0, 6);
            }
          });
      },
      login() {
        this.$router.push("/login");
      },
      goToCart() {
        this.$router.push("/cart");
      },
    },
  };
</script>

<style lang="scss">
  @import "../assets/scss/base.scss";
  @import "../assets/scss/config.scss";

  .header {
    .nav-topbar {
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color: #b0b0b0;

      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
          display: inline-block;
          color: #b0b0b0;
          margin-right: 17px;
        }

        .my-cart {
          width: 110px;
          background-color: #ff6600;
          text-align: center;
          color: #ffffff;

          .icon-cart {
            display: inline-block;
            width: 16px;
            height: 12px;
            background: url("./../../public/imgs/icon-cart-checked.png") no-repeat center;
            background-size: contain;
            margin-right: 4px;
          }
        }
      }
    }

    .nav-header {
      .container {
        position: relative;
        height: 112px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header-logo {
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #ff6600;

          a {
            display: inline-block;
            width: 110px;
            height: 55px;

            &:before {
              content: " ";
              display: inline-block;
              width: 55px;
              height: 55px;
              background: url("./../../public/imgs/mi-logo.png") no-repeat center;
              background-size: 55px;
              transition: margin 0.2s;
            }

            &:after {
              content: " ";
              display: inline-block;
              width: 55px;
              height: 55px;
              background: url("./../../public/imgs/mi-home.png") no-repeat center;
              background-size: 55px;
            }

            &:hover:before {
              margin-left: -55px;
              transition: margin 0.2s;
            }
          }
        }

        .header-menu {
          display: inline-block;
          padding-left: 209px;
          width: 643px;

          .item-menu {
            display: inline-block;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;

            span {
              cursor: pointer;
            }

            &:hover {
              color: $colorA;

              .children {
                height: 220px;
                opacity: 1;
              }
            }

            .children {
              position: absolute;
              top: 112px;
              left: 0;
              overflow: hidden;
              height: 0;
              opacity: 0;
              width: 1226px;
              border-top: 1px solid #e5e5e5;
              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              z-index: 10;
              transition: all 0.5s;
              background-color: #ffffff;

              .product {
                position: relative;
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;

                .pro-img {
                  height: 137px;
                }

                .pro-name {
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }

                .pro-price {
                  color: $colorA;
                }

                &:before {
                  content: " ";
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }

                &:last-child::before {
                  display: none;
                }

                a {
                  display: inline-block;
                }

                img {
                  height: 111px;
                  margin-top: 26px;
                }
              }
            }
          }
        }

        .header-search {
          width: 319px;

          .wrapper {
            height: 50px;
            border: 1px solid #e0e0e0;
            display: flex;
            align-items: center;

            input {
              border: none;
              border-right: 1px solid #e0e0e0;
              box-sizing: border-box;
              width: 264px;
              height: 50px;
              padding-left: 14px;
              font-size: 15px;
            }

            a {
              display: inline-block;
              width: 18px;
              height: 18px;
              background: url("./../../public/imgs/icon-search.png") no-repeat center;
              background-size: contain;
              margin-left: 17px;
            }
          }
        }
      }
    }
  }
</style>
