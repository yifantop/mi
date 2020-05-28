<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>七天无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ServiceBar"
  }
</script>

<style lang="scss">
  @import "../assets/scss/config.scss";

  .service {
    padding: 33px 0;
    color: $colorC;
    font-size: 16px;

    li {
      display: inline-block;
      width: 24.9%;
      text-align: center;
      border-right: 1px solid $colorH;

      &:last-child {
        border-right: none;
      }

      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 8px;
      }

      .icon-setting {
        background: url("./../../public/imgs/icon-setting.png") no-repeat center;
        background-size: contain;
      }

      .icon-7day {
        background: url("./../../public/imgs/icon-7day.png") no-repeat center;
        background-size: contain;
      }

      .icon-15day {
        background: url("./../../public/imgs/icon-15day.png") no-repeat center;
        background-size: contain;
      }

      .icon-post {
        background: url("./../../public/imgs/icon-post.png") no-repeat center;
        background-size: contain;
      }
    }
  }
</style>