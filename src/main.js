import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueLazyload from "vue-lazyload";
import axios from "axios";
import store from "./store"
import VueAxios from "vue-axios";
// import env from "./env";

// 根据前端跨域方式做调整
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的url地址
// axios.defaults.baseURL = env.baseURL;
// 拦截代码
axios.interceptors.response.use(function(response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = "/#/login";
  } else {
    // 后续会用element改掉
    alert(res.msg);
  }
});
Vue.use(VueAxios, axios);
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
