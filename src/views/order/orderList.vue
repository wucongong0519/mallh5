<template>
    <div class="orderlistbox">
         <mt-navbar class="page-part" v-model="selected">
           <mt-tab-item id="1">全部</mt-tab-item>
           <mt-tab-item id="2">待付款</mt-tab-item>
           <mt-tab-item id="3">待发货</mt-tab-item>
           <mt-tab-item id="4">待收货</mt-tab-item>
           <mt-tab-item id="5">已完成</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" class="unpay">
               <ul>
                   <li v-for="(item,index) in recommendList" :key="index" class="item">
                       <div class="topmessage" @click="$router.push('/orderdetail')">
                            <img :src="item.icon" alt="">
                            <div class="orderdetail">
                                <p class="title">{{item.name}}</p>
                                <p class="spec">
                                    250g/盒
                                </p>
                                <p class="price">
                                    ￥ {{item.price}}
                                </p>
                            </div>
                        </div>
                        <div class="number">
                            共{{item.count}}件商品
                            <span>合计 ￥{{item.price}}</span>
                        </div>
                        <div class="btn">
                           <button class="cancelbtn">取消订单</button>
                           <button class="paybtn">付款</button>
                        </div>
                    </li>
               </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'content ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'content ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';  //导航栏
import { TabContainer, TabContainerItem } from 'mint-ui';//Item
import carControl from '@/components/carControl/carControl';
import {mapState} from 'vuex'
export default {
  name: 'orderList',
  data() {
      return {
          nav:[
              {'text':'全部'},
              {'text':'待付款'},
              {'text':'待发货'},
              {'text':'待收货'},
              {'text':'已完成'},
          ],
           selected:'1'
      }
  },
   computed: {
     ...mapState('indexItem',[
         'recommendList'
     ])
 }
}
</script>

<style lang="css" scoped>
.orderlistbox{
    width:100%;
    height:100%;
    background: #f5f5f5;
}
.unpay{
    background: #fff;
}
.unpay .item{
    padding:20px 4%;
}
.unpay .item img{
    width:100px;
    height:100px;
    margin-right:2%;
}
.topmessage{
    display: flex;
}
.topmessage .orderdetail{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.topmessage .orderdetail .title{
    line-height: 20px;
}
.number,.btn{
    text-align: right;
    line-height: 30px;
}
.btn .cancelbtn,.paybtn{
    outline: none;
    border:none;
    background: none;
    padding:5px 30px;
    border-radius: 5px;
}
.btn .cancelbtn{
    border:1px solid #333;
    margin-right: 2%;
}
.paybtn{
     background: #fa8a0f;
     color:#fff;
}
</style>
