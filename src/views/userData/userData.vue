<template>
    <div class="userData">
        <mt-header title="个人资料">
             <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <mt-cell title="头像">
            <img  src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" alt="">
        </mt-cell>
        <section class="profile">
            <mt-cell title="昵称" value="张三" is-link @click.native="showPop"></mt-cell>
            <mt-cell title="手机号" value="11111112324" ></mt-cell>
            <mt-cell title="性别" value="请选择" is-link></mt-cell>
            <mt-cell title="生日" value="请选择" is-link></mt-cell>
        </section>
        <!-- 修改昵称弹窗 -->
        <mt-popup
        v-model="popupVisible"
        position="right"
        modal="false"
       >
       <div class="popcontet">
           <mt-header title="设置昵称">
                <router-link to="" slot="left" @click.native="popupVisible=false">
                    <mt-button >取消</mt-button>
                </router-link>
                <router-link to="" slot="right" @click.native="popupVisible=false"> 
                    <mt-button >完成</mt-button>
                </router-link>
           </mt-header>
           <mt-field label="V"></mt-field>
       </div>
        </mt-popup>
    </div>
</template>

<script>
export default {
  name: 'userData',
  data () {
      return {
          popupVisible: false
      }
  },
  methods: {
      showPop () {
          this.popupVisible = true
      }
  }
}
</script>

<style lang="css" scoped>
.mint-header{
   background: #f5f5f5;
   color:#333; 
}
img{
    width:80px;
    height:80px;
    padding:20px 0;
}
.userData{
    height:100%;
    background: #f5f5f5;
}
.profile{
    margin-top:20px
}
.mint-popup{
     width:100%;
    height: 100%;
    background: #f5f5f5
}
.popcontet{
    width:100%;
    height: 100%;
}
</style>    
