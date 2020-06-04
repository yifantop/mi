<template>
  <div class="product">
    <product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
    <div class="h"></div>
    <div class="h"></div>
    <div class="h"></div>
    <div class="h"></div>
    <div class="h"></div>
    <div class="h"></div>
    <div class="h"></div>
    <div class="h"></div>
  </div>
</template>

<script>
  import ProductParam from "../components/ProductParam";

  export default {
    name: "product",
    data() {
      return {}
    },
    components: {
      ProductParam,
    }
  };
</script>

<style lang="scss">
  @import "../assets/scss/config";
  @import "../assets/scss/button";
  .product {
    .btn {
      margin-left: 10px;
    }
    .h {
      height: 150px;
    }
  }
</style>
