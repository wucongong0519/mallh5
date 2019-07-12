import Vue from 'vue'
import Vuex from 'vuex'
import {loginMobile}
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
       login ({commit},payload) {
         console.log(payload)
       }
  },
  actions: {

  }
})
