<template>
    <div class="loginbox">
        <p class="title">登录</p>
        <i class="iconfont icon-weibiaoti-"></i>
        <div class="inputbox">
            <input type="text" placeholder="手机号码" v-model="phone">
            <span></span>
        </div>
        <div class="inputbox">
            <input :type="openEye?'text':'password'" placeholder="密码" v-model="password">
            <i class="iconfont icon-yanjing" :class="{openEye:openEye}" @click="openEye=!openEye"></i>
        </div>
        <div class="login_btn">
            <button :disabled="isClick" @click="handleLogin">登录</button>
        </div>
        <div class="selector">
            <button @click="$router.push('/loginByPhone')">短信登录</button>
            <button>注册</button>
        </div>
        <div class="loginweixin">
            <i class="iconfont icon-weixin"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            phone: '',
            password: '123',
            openEye: false,
            disabled: false
        }
    },
    computed: {
        isClick () {
            if(!this.phone||!this.password){
                return true
            }else {
                return false
            }
        }
    },
    methods: {
        handleLogin () {
            this.$router.push('/')
        }
    }

}
</script>

<style lang="css" scoped>
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
input{
    /* display: inline-block; */
    /* margin:0 auto; */
    outline: none;
    width: 60%;
    max-width: 440px;
    height: 98%;
    max-height: 40px;
    border:none;
    font-size:14px;
    margin-left: 10%
}
.icon-yanjing{
    font-size:30px;
}
.openEye{
    color: #ff6700;
}
.login_btn button {
  width: 85%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
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
    font-size:14px;
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
