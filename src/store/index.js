import Vue from 'vue'
import Vuex from 'vuex'
import indexItem from './modules/indexItem'
import category from './modules/category'
import cart from './modules/cart'
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
 modules: {
    indexItem,
    category,
    user,
    cart
 }
})
