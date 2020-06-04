<template>
  <div class="ProductParam" :class="{'is_fixed': isFixed}">
    <div class="container">
      <div class="pro-title">123</div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProductParam",
    data() {
      return {
        isFixed: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.initHeight);
    },
    methods: {
      initHeight() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.isFixed = scrollTop > 152;
      }
    },
    //销毁事件
    destroyed() {
      window.removeEventListener('scroll', this.initHeight,false);
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/base";
  @import "../assets/scss/config";
  @import "../assets/scss/mixin";

  .ProductParam {
    height: 70px;
    // 定行高的目的是让文字垂直方向居中
    line-height: 70px;
    border-top: 1px solid $colorH;
    background-color: #ffffff;
    box-shadow: 0 5px 5px $colorE;

    &.is_fixed {
      position: fixed;
      top: 0;
      width: 100%;
    }

    .container {
      @include flex();

      .pro-title {
        font-size: $fontH;
        color: $colorB;
        font-weight: bold;
      }

      .pro-param {
        font-size: $fontJ;

        span {
          margin: 0 10px;
        }

        a {
          color: $colorC;
        }
      }
    }
  }
</style>