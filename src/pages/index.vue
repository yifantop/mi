<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, i) in menuList" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img :src="sub ? sub.img : 'imgs/item-box-1.png'" alt="">
                      {{sub ? sub.name : '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">耳机 音响</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id"><img :src="item.img"></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads">
        <a :href="'/#/product/' + item.id" v-for="(item, index) in adsList" :key="index">
          <img v-lazy="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'imgs/banner-1.png'" alt="">
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, i) in phoneList" :key="i">
              <div class="item" v-for="(item, j) in arr" :key="j">
                <span class="ad new-pro">新品</span>
                <div class="item-img">
                  <img v-lazy="item.mainImage" alt="">
                </div>
                <div class="item-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price">
                    <span>{{item.price}}元
                      <img v-lazy="'/imgs/icon-cart-hover.png'" alt="" @click="addCart(item.id)">
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal modal-type="middle"
           title="提示"
           :btn-type="3"
           sure-text="保存到购物车"
           :show-modal="showModal"
           v-on:submit="goToCart"
           v-on:cancel="showModal = false">
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>

<script>
  import ServiceBar from "../components/ServiceBar";
  import Modal from "../components/Modal";
  import {Swiper, SwiperSlide} from "vue-awesome-swiper";
  import 'swiper/css/swiper.css'

  export default {
    name: "index",
    data() {
      return {
        swiperOptions: {
          autoplay: true,
          loop: true,
          effect: 'cube',
          cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 100,
            shadowScale: 0.6
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        slideList: [
          {
            id: '42',
            img: "/imgs/slider/slide-1.jpg",
          },
          {
            id: '45',
            img: "/imgs/slider/slide-2.jpg",
          },
          {
            id: '46',
            img: "/imgs/slider/slide-3.jpg",
          },
          {
            id: '',
            img: "/imgs/slider/slide-4.jpg",
          },
          {
            id: '',
            img: "/imgs/slider/slide-5.jpg",
          }
        ],
        menuList: [
          [
            {
              id: 30,
              img: '/imgs/item-box-1.png',
              name: '小米CC9'
            },
            {
              id: 31,
              img: '/imgs/item-box-2.png',
              name: '小米8青春版'
            },
            {
              id: 32,
              img: '/imgs/item-box-3.jpg',
              name: 'Redmi K20 pro'
            },
            {
              id: 33,
              img: '/imgs/item-box-4.jpg',
              name: '小米CC9'
            }
          ], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
        ],
        adsList: [
          {
            id: 33,
            img: 'imgs/ads/ads-1.png'
          },
          {
            id: 48,
            img: 'imgs/ads/ads-2.jpg'
          },
          {
            id: 45,
            img: 'imgs/ads/ads-3.png'
          },
          {
            id: 47,
            img: 'imgs/ads/ads-4.jpg'
          }
        ],
        phoneList: [],
        showModal: false,
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.axios.get('/products', {
          params: {
            categoryId: 100012,
            pageSize: 14,
          }
        }).then((res) => {
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        })
      },
      addCart() {
        this.showModal = true;
        /*this.axios.post("/carts", {
          productId: id,
          selected: true,
        }).then((res) => {

        }).catch(() => {
          this.showModal = true;
        })*/
      },
      goToCart() {
        this.$router.push('/cart');
      }
    },
    components: {
      ServiceBar,
      Swiper,
      SwiperSlide,
      Modal
    },
  };
</script>

<style lang="scss">
  @import "../assets/scss/config.scss";

  .index {
    .swiper-box {
      .nav-menu {
        box-sizing: border-box;
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: 26px 0;
        background-color: #55585a7d;

        .menu-wrap {
          .menu-item {
            width: 264px;
            height: 50px;
            line-height: 50px;

            &:hover {
              background-color: $colorA;

              .children {
                display: block;
              }
            }

            a {
              display: block;
              position: relative;
              font-size: 16px;
              color: $colorG;
              padding-left: 30px;

              &:after {
                position: absolute;
                right: 30px;
                top: 17.5px;
                content: ' ';
                width: 10px;
                height: 15px;
                background: url("./../../public/imgs/icon-arrow.png") no-repeat center;
                background-size: contain;
              }
            }

            .children {
              display: none;
              position: absolute;
              top: 0;
              left: 264px;
              width: 962px;
              height: 451px;
              background-color: $colorG;
              border: 1px solid $colorH;

              ul {
                display: flex;
                justify-content: space-between;
                height: 75px;

                li {
                  height: 75px;
                  line-height: 75px;
                  //flex: 1也可以;
                  width: 241px;
                  padding-left: 23px;

                  img {
                    width: 35px;
                    vertical-align: middle;
                    margin-right: 15px;
                  }

                  a {
                    color: $colorB;
                    font-size: 14px;
                  }
                }
              }
            }
          }
        }
      }

      .swiper-container {
        height: 451px;

        .swiper-button-prev {
          left: 274px;
        }

        img {
          width: 100%;
          height: 451px;
        }
      }
    }

    .ads {
      margin-top: 14px;
      margin-bottom: 31px;
      display: flex;
      justify-content: space-between;

      a {
        width: 296px;
        height: 167px;
      }
    }

    .banner {
      margin-bottom: 50px;
    }

    .product-box {
      background-color: $colorJ;
      padding: 30px 0 50px 0;

      h2 {
        font-size: 22px;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }

      .wrapper {
        display: flex;

        .banner-left {
          margin-right: 16px;

          img {
            width: 224px;
            height: 619px;
          }
        }

        .list-box {
          .list {
            display: flex;
            justify-content: space-between;
            width: 986px;
            margin-bottom: 14px;

            &:last-child {
              margin-bottom: 0;
            }

            .item {
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;

              .ad {
                display: inline-block;
                width: 67px;
                height: 24px;
                font-size: 14px;
                line-height: 24px;
                color: $colorG;

                &.new-pro {
                  background-color: #7ECF68;
                }

                &.kill-pro {
                  background-color: #E82626;
                }
              }

              .item-img {

                img {
                  height: 195px;
                }
              }

              .item-info {
                h3 {
                  font-size: $fontJ;
                  color: $colorB;
                  line-height: $fontJ;
                  font-weight: bold;
                }

                p {
                  color: $colorD;
                  line-height: 13px;
                  margin: 6px auto 13px;
                }

                .price {
                  color: #F20A0A;
                  font-size: 14px;
                  font-weight: bold;
                  cursor: pointer;

                  span {
                    position: relative;

                    img {
                      position: absolute;
                      left: 50px;
                      top: -5px;
                      width: 22px;
                      height: 22px;
                      margin-left: 5px;
                      vertical-align: middle;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
