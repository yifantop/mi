<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">zhuoyifan.com</a>
    </div>
    <div class="copyright">Copyright © 2020 <span class="domain">mi.51purse.com</span> All Rights Reserved</div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
};
</script>

<style lang="scss">
  @import "../assets/scss/config.scss";
  .footer {
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    color: $colorD;
    font-size: 16px;
    text-align: center;

    .footer-logo {
      margin-top: 46px;
      margin-bottom: 31px;

      img {
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link {
      margin-bottom: 10px;

      a {
        color: $colorD;
        display: inline-block;
      }
    }
    .copyright {
      .domain {
        color: $colorA;
      }
    }
  }
</style>