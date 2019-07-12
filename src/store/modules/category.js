import {getProductsCategories, getProductByCateId, getProductDetail, getProductInfo} from '../../server/category'
import _ from 'lodash'
import { async } from 'q';
const state = {
    historyList: [],
    categoryList: [],
    currentId: null,
    currentList: null,
    productDetail: {},
    searchParam: {
        key: null,
        searchVal: '',
        direction: null, // DESC|ASC
    },
 }
const actions = {
    getHistory ({commit}, opt) {
       commit('setHistory',opt)
    },
    async fetchCategories ({commit, dispatch},payload) {
        let list 
        await getProductsCategories().then( res => {
            list = _.get(res, 'data', [])
        })
        commit('saveCategoryState',{categoryList:list})
        commit('setCurrentId',{currentId:_.get(list, '[0].id', null)})
        if(!_.isEmpty(list)) {
           dispatch('fetchProductById',{productCategoryId: _.get(list, '[0].id', null)})
        }
    },
    async fetchProductById ({commit}, payload) {
        const {productCategoryId} = payload
        let result
        await getProductByCateId(productCategoryId).then( res => {
            result = res.data
        })
        commit('saveCurrentList',{currentList:result})
        commit('setCurrentId',{currentId:productCategoryId})
    },
    async fetchProductDetail({commit}, payload) {
        const {productId, skuId = null} = payload
        let result 
        let response
        await getProductDetail(productId).then( res => {
            console.log(res)
            result = res.data
        })
        await getProductInfo(productId).then( res => {
            console.log(res)
            response = res.data
        })
        const skuList = _.get(response, 'productInventoryList', [])
        let initSkuId = skuId
        if(!_.isEmpty(skuList)) {
            initSkuId = _.get(skuList, '[0].id', null)
        }
        commit('saveProductDetail', {productDetail: {...response,skuId: initSkuId, detail: _.get(result, 'data.detail', '暂无描述')}})
    }
}
const mutations ={
    setHistory (state, status) {
        state.historyList = JSON.parse(status.payload)
    },
    addHistory (state, status) {
     localStorage.setItem('historylist',status.payload)
     state.historyList = JSON.parse(status.payload)
    },
    removeHis (state) {
        state.historyList = []
    },
    setSearchParam (state, {payload}) {
        const obj = {
            ...state.searchParam,
            ...payload
        }
        state.searchParam = obj
    },
    saveCategoryState(state, {categoryList}) {
        // console.log(categoryList)
        state.categoryList = categoryList
    },
    saveCurrentList (state, {currentList}) {
        // console.log(currentList)
        state.currentList = currentList.list
    },
    setCurrentId(state, {currentId}) {
        // console.log(currentId)
        state.currentId = currentId
    },
    saveProductDetail(state, {productDetail}) {
        state.productDetail = productDetail
    }
}
 export default {
     namespaced:true,
     state,
     actions,
     mutations
 }