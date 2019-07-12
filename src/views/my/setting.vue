<template>
    <div class="setting-container">
        <mt-header fixed title="设置"></mt-header>
        <mt-button @click="handleClose">退出登录</mt-button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'setting',
  methods: {
      ...mapActions('user',[
          'logout'
      ]),
      handleClose () {
         this.logout({self:this})  
      }
  }
}
</script>

<style lang="css" scoped>
.mint-header{
     background: #f5f5f5;
     color:#333;
}
.setting-container{
    background: #f5f5f5;
    padding-top:60px;
}
</style>
