<template>
    <div class="mine">
        <mt-header fixed title="我的"></mt-header>
        <section class="headbox">
            <router-link to="/userdata" class="headbox">
                <div class="profile">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" alt="">
                </div>
                <div class="proinfo">
                    <p>登录名</p>
                </div>
            </router-link>
        </section>
        <section class="order">
            <span>我的订单</span>
            <span @click="$router.push('/orderlist')">全部订单<i class="iconfont icon-arrowright"></i></span>
        </section>
        <section class="list">
            <div>
                <p><i class="iconfont icon-daifukuan"></i><mt-badge size="small" color="#fa8a00">1</mt-badge></p>
                <p>待付款</p>
            </div>
            <div>
                <p><i class="iconfont icon-daifahuo"></i><mt-badge size="small" color="#fa8a00">1</mt-badge></p>
                <p>待发货</p>
            </div>
            <div>
                <p><i class="iconfont icon-daishouhuo"></i><mt-badge size="small" color="#fa8a00">1</mt-badge></p>
                <p>待收货</p>
            </div>
            <div>
                <p><i class="iconfont icon-yiwancheng"></i><mt-badge size="small" color="#fa8a00">1</mt-badge></p>
                <p>已完成</p>
            </div>
            <div>
                <p><i class="iconfont icon-tuikuan-shouhou"></i><mt-badge size="small" color="#fa8a00">1</mt-badge></p>
                <p>退款/售后</p>
            </div>
        </section>
        <ul class="Linklist">
            <li v-for="(item,index) in tab" :key="index">
                <router-link :to="item.toLink">
                    <div>
                        <i :class="' iconfont ' + item.icon"></i>
                        <span>{{item.name}}</span>
                    </div>
                    <i class="iconfont icon-arrowright"></i>
                </router-linK>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'my',
  data() {
      return {
         tab:[
            {
                icon:'icon-dizhi',
                name:'收货地址',
                bgColor:'#818c99',
                toLink:'/addresslist'
            },
            {
                icon:'icon-guanyuwomen',
                name:'关于我们',
                bgColor:'#818c99',
                toLink:''
            },
            {
                icon:'icon-guanyuwomen',
                name:'设置',
                bgColor:'#818c99',
                toLink:'/setting'
            }
        ]
      }
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>
.mint-header{
     background: #f5f5f5;
     color:#333;
}
.mine{
    background: #f5f5f5;
}
.headbox{
    width:100%;
    height:200px;
    background: #fa8a00;
    padding:0 4%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
}
.headbox .profile{
    width:100px;
    height:100px;
    border-radius: 50%;
    margin-right:20px;
}
.headbox .profile img{
    width:100%;
    height: 100%;
    border-radius: 50%;
}
.headbox .proinfo{
    color:#fff;
}
.order{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,.15);
    border-top: 1px solid rgba(0,0,0,.15);
    line-height:50px;
    padding:0 4%;
    background: #fff;
}
.list{
    display: flex;
    justify-content: space-around;
    height: 80px;
    align-items: center;
    background: #fff;
}
.list i{
    font-size:24px;
    color: #fa8a00;
}
.list .mint-badge{
    position: relative;
    top:-16px;
    left:-5px;
}
.Linklist{
    margin-top:20px;
    
    background: #fff;
    width:100%;
    box-sizing:border-box
}
.Linklist li,.Linklist li router-link{
    display: flex;
    justify-content: space-between;
    /* line-height: 50px;
    border-top:1px solid rgba(0,0,0,.15); */
    /* padding:0 4%; */
    width: 100%;
}
.Linklist li a{
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    box-sizing: border-box;
    padding: 0 4%;
    width: 100%;
    text-decoration: none;
    color:#333;
}
</style>
