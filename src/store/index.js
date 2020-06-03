import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import action from "./action";
Vue.use(Vuex);

const state = {
  // 登录用户名
  userName: '',
  // 购物车商品数量
  cartCount: 0,
};

export default new Vuex.Store({
  state,
  mutations,
  action
})