<template>
   
    <div class="loginbox">
        <mt-header title="登录">
            <router-link to="" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- <p class="title">登录</p> -->
        <i class="iconfont icon-weibiaoti-"></i>
        <div class="inputbox">
            <input type="text" placeholder="手机号码" v-model="form.phone">
            <span></span>
        </div>
        <div class="inputbox">
           <mt-field type="text" placeholder="验证码" v-model="form.code"> </mt-field>
           <button :disabled="codedisabled" @click="getVerifyCode">{{btnTitle}}</button>
        </div>
        <div class="login_btn">
            <button :disabled="isClick" @click="handleLogin">登录</button>
        </div>
        <div class="selector">
            <button @click="$router.push('/login')">账号密码登录</button>
            <button >注册</button>
        </div>
        <div class="loginweixin">
            <i class="iconfont icon-weixin"></i>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import {Login,getVerificationCode} from '@/server/user'
import { mapActions} from 'vuex'
export default {
    name: 'loginByPhone',
    data() {
        return {
            form:{
              phone: '',
              code: '',
            },
            openEye: false,
            disabled: false,
            btnTitle: '获取验证码',
            codedisabled: false
        }
    },
    computed: {
        isClick () {
            if(!this.form.phone||!this.form.code){
                return true
            }else {
                return false
            }
        }
    },
    methods: {
        ...mapActions('user',[
            'login'
        ]),
        handleLogin () {   
            this.login({mobile:this.form.phone,verifyCode: this.form.code,self:this})
        },
        getVerifyCode () {
            if(this.validatePhone()){
               this.validateBtn()
            }
           getVerificationCode(this.form.phone.trim())
        },
        validatePhone () {
           if(!this.form.phone){
               Toast({
                message: '手机号不能为空',
                position: 'top',
                duration: 2000
                });
               return false
           }else if(!/^1[345678]\d{9}$/.test(this.form.phone)){
               Toast({
                message: '手机号格式不正确',
                position: 'top',
                duration: 2000
                });
               return false
           }else {
               return true
           }
        },
        validateBtn() {
            let time = 60
            let timer = setInterval(() => {
                if (time == 0) {
                clearInterval(timer)
                this.btnTitle = "获取验证码"
                this.codedisabled = false
                } else {
                // 倒计时
                this.btnTitle = time + "秒后重试"
                this.codedisabled = true
                time--
                }
            }, 1000)
        },
    }

}
</script>

<style lang="css" scoped>
.mint-header{
    background: none;
    color:#333;
    font-size:18px;
}
.loginbox{
    text-align: center;
}
.title{
    text-align: center;
    font-size: 18px;
    margin-bottom: .533333rem;
}
.icon-weibiaoti-{
    font-size:70px;
    color: #ff6700;
}
.inputbox{
    width: 85%;
    margin:20px auto;
    /* position: relative; */
    border: 1px solid #d3d3d3;
    height: 50px;
    display:flex;
    align-items: center;
    font-size:18px;
    flex-direction: row;
    justify-content: space-between;
}

input,.mint-cell{
    /* display: inline-block; */
    /* margin:0 auto; */
    outline: none;
    width: 60%;
    max-width: 440px;
    height: 98%;
    max-height: 40px;
    border:none;
    font-size:16px;
    margin-left: 10%
}
.mint-cell .mint-cell-wrapper{
    padding:0 !important;
}
.inputbox button{
  font-size: 16px;
  border: none;
  outline: none; 
  background: #fff
}
.login_btn button {
  width: 85%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  border: none;
  outline: none;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}
.selector{
    display: flex;
    justify-content: space-between;
    width:85%;
    color:#999;
    margin:10px auto;
}
.selector button{
    border:none;
    outline:none;
    background: #fff;
    color:#999;
    font-size:16px;
}
.loginweixin{
    position: absolute;
    bottom:30px;
    margin:0 auto;
    text-align: center;
    left:50%;
    margin-left:-15px;
}
.loginweixin i{
    font-size:40px;
    margin:0 auto;
    color:#48ca38;
}
</style>
