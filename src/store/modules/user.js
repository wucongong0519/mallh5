import {getAuthInfo,saveToken,setAuthInfo, removeAuthInfo} from '../../untils/localStorage'
import {Login,getVerificationCode,getMemberInfoByMobile} from '../../server/user'
import router from 'vue-router'
import { Toast } from 'mint-ui'
import _ from 'lodash'

const LOGIN_MOBILE = 'mobile'
const LOGIN_NAME = 'username'
const state = {
   login: false,
   info: {},
   token: {}
 }

const actions = {
    init ({dispatch}) {
        const authInfo  = getAuthInfo()
        if(!_.isEmpty(authInfo)) {
            dispatch('fetchMemberInfo',{type: authInfo.type, value:authInfo.value})
        } else {
          dispatch('cart/loadLocalCart', {}, {root:true})
        }
    },
    // 登录
    async login ({commit,dispatch}, payload) {
        const {mobile, verifyCode, self} = payload
        let result 
        await Login(mobile,verifyCode).then(res=> {
            result = res.data
        })
        if(result && result['access_token']) {
           saveToken(result)
           commit('saveToken',{result})
           dispatch('fetchMemberInfo',{type: LOGIN_MOBILE, value:mobile})
           setAuthInfo({type: LOGIN_MOBILE, value:mobile})
           self.$router.push({path: '/'})
        }else {
            Toast({
                message: '验证码输入不正确',
                iconClass: 'icon icon-error'
            })
        }
    },
    async fetchMemberInfo ({commit,dispatch,rootState}, payload) {
        const {type, value} = payload
        let result 
        await getMemberInfoByMobile(value).then(res => {
            result = res.data
        })
        const memberInfo = _.get(result,'data',{})
        if(!_.isEmpty(memberInfo)) {
            commit('saveMember',{
                login:true,
                info:memberInfo
            })
        } else {
            Toast({
                message: '获取用户信息失败',
                iconClass: 'icon icon-error'
            })
        }
    },
    // 退出登录
    logout ({commit},payload) {
        const {self} = payload
        removeAuthInfo()
        commit('saveMember',{
            login: false,
            info: {}
        })
        self.$router.push({path: '/'})
    }
}
const mutations ={
   saveToken(state, payload) {
       console.log(payload)
       state.token = payload
   },
   saveMember (state, payload) {
       const {login,info} = payload
       state.login = login
       state.info = info
   }
}
 export default {
     namespaced:true,
     state,
     actions,
     mutations
 }