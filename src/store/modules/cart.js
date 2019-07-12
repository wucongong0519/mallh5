import { getCartList, saveCartList, removeCartList } from '@/untils/localStorage'
import _ from 'lodash'
const state ={  
    cartList: [], // 购物车数据
    openCartDrawers: false,
    skuSetting: {
      product: null,
      type: null,
      number: 1,
      skuId: null,
    }
  //   cartlist:[{
  //   icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  //   price: '98',
  //   sold: 100,
  //   name: '欣禾力（通用型）补充营养强壮体质改善体弱者',
  //   count: 0,
  //   id:1
  // }, {
  //   icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  //   price: '98',
  //   sold: 100,
  //   name: '欣禾力（通用型）补充营养强壮体质改善体弱者',
  //   count: 0,
  //   id:2
  // }, {
  //   icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  //   price: '98',
  //   sold: 100,
  //   name: '欣禾力（通用型）补充营养强壮体质改善体弱者',
  //   count: 0,
  //   id:3
  // }, {
  //   icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  //   price: '98',
  //   sold: 100,
  //   count: 0,
  //   name: '欣禾力（通用型）补充营养强壮体质改善体弱者',
  //   id:4
  // }]
}
const actions = {
  loadLocalCart ({commit,dispatch}, payload) {
    const cartList = getCartList()
    if(!_.isEmpty(cartList)) {
      dispatch('saveCartAndLoadProducts',{cartList})
    }
  },
  saveCartAndLoadProducts ({commit,dispatch}, payload) {
    const {cartList} = payload
    commit('saveCart',{cartList})
  }
  
}
const mutations = {
  saveCart(state, payload) {
    const {cartList} = payload
    state.cartList = cartList
  },
  openCartDrawer (state) {
    state.openCartDrawers = true
  },
  closeCartDrawer (state) {
    state.openCartDrawers = false
  },
  saveSkuSetting(state, payload) {
    // state.skuSetting = 
  },
  changeSkuSetting(state, payload) {
    state.skuSetting = {...state.skuSetting, ...payload}
  }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}