import axios from 'axios'
import QS from 'qs'
import {Toast,Indicator} from 'mint-ui'
import router from '@/router'
import store from '@/store/index'
import isEmpty from 'lodash/isEmpty'
import * as base64 from 'base-64';

const basicAuthHeader = (username, password, headers = {}) => {
    const auth = base64.encode(`${username}:${password}`);
    // headers.append('Authorization', `Basic ${auth}`);
    // eslint-disable-next-line
   const header = `Basic ${auth}`;
    return header;
  };
  
const defaultAuthHeader = () => {
   return basicAuthHeader('client', '123456');
};
// post请求
axios.defaults.headers['credentials'] = 'include'
axios.defaults.headers['Authorization'] = defaultAuthHeader()
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求超时时间
axios.defaults.timeout = 30000;
let service = axios.create({
    // baseURL: 'https://api.example.com',
    timeout: 30000
})
//请求拦截器
service.interceptors.request.use(
    config =>{
        //在发送请求之前做点什么
        Indicator.open();
        if(isEmpty(config.params)){
            config.params ={} 
        }
        const uToken = sessionStorage.getItem('uToken')
        if(!isEmpty(uToken)){
            config.param.uToken = uToken 
        }
        return config
    },
    error => {
        return  Promise.reject(error)
    }
)
//相应拦截器
service.interceptors.response.use(
    response => {
        //对响应数据做点什么
        if(response){
            Indicator.close();
        }
        return response
    },
    error => {
        return Promise.reject(error)
    }
)
export default service