<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
export default {
  name: "App",
  components: {},
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    this.getUser();
    this.getCartCount();
  },
  methods: {
    ...mapActions({
      saveUserName: 'saveUserName',
      saveCartCount: 'saveCartCount'
    }),
    getUser() {
      this.axios.get('/user').then((res) => {
        this.saveUserName(res.username);
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res) => {
        this.saveCartCount(res);
      })
    }
  }
};
</script>

<style>
  @import "./assets/scss/reset.scss";
  @import "./assets/scss/button.scss";
</style>
