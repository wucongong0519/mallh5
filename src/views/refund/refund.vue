<template>
    <div class="refund">
         <mt-header title="申请退款">
            <router-link to="/" slot="left">
              <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <section class="pro-info">
            <div class="img">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" alt="">
            </div>
            <div class="info">
                <p class="title">膳食纤维膳食纤维膳食纤维膳食纤维膳食纤维膳食纤维膳食纤维膳食纤维</p>
                <p class="specifi">
                    <span>250g/盒</span>
                    <span>x1</span>
                </p>
            </div>
        </section>
        <mt-cell
        title="退款原因"
        is-link
        @click.native="popupVisible=true"
        value="请选择">
        </mt-cell>
        <mt-field label="退款金额"></mt-field>
        <mt-field label="退款说明"></mt-field>
        <button class='btn'>提交</button>
        <!-- 退款原因弹框 -->
        <mt-popup
        v-model="popupVisible"
        position="bottom">
       <mt-radio
        align="right"
        v-model="value"
        :options="options">
        </mt-radio>
        <div class="btn-group">
            <button class="cancel" @click="popupVisible=false">暂不取消</button>
            <button class="confirm" @click="popupVisible=false">确定取消</button>
        </div>
        </mt-popup>
    </div>
</template>

<script>
export default {
  name: 'refund',
  data() {
      return {
       popupVisible:false,
       options: [
           {
               label:'我不想买了',
           },
           {
               label:'拍错重拍',
           },
           {
               label:'商家缺货',
           },
           {
               label:'同城交易',
           },
           {
               label:'其他',
           }
       ]
      }
  }
}
</script>

<style lang="css" scoped>
.mint-header{
  background: #fff;
  color:#333;
}
.refund{
  background: #f5f5f5;
  height: 100%;
}
.pro-info{
    padding:20px ;
    background: #fff;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
}
.pro-info .img img{
    width:80px;
    height:80px;
}
.pro-info .info{
    margin-left:20px
}
.pro-info .info .specifi{
    display: flex;
    justify-content: space-between;
    color:#999;
    line-height: 30px
}
.pro-info .info  .title{
    line-height: 20px
}
.btn{
    width:100%;
    background: #fa8a00;
    color:#fff;
    outline: none;
    border:none;
    position: fixed;
    bottom: 0;
    height:50px;
    font-size:16px;
    z-index:1
}
.mint-popup-bottom{
    width:100%;
    z-index:2;
    /* position: relative; */
    bottom: 0;
}
.btn-group{
    position: absolute;
    bottom:0;
    height:50px;
    display: flex;
    justify-content: space-between;
    width:100%;
}
.btn-group button{
    width:50%;
    height: 100%;
    outline: none;
    border:none;
    color:#fff;
    font-size:16px;
}
.btn-group button.cancel{
    background: #fa8a0f
}
.btn-group button.confirm{
     background: #ff6700
}
</style>
