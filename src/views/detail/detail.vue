<template>
    <div class="detailbox">
        <div class="pic">
            <header >
                <router-link to="/">
                   <i class="iconfont icon-fanhui"></i>
                </router-link>
                <div class="car-share-btn">
                    <router-link to="/" >
                        <i class="iconfont icon-qicheqianlian-"></i>
                    </router-link>
                    <router-link to="/">
                        <i class="iconfont icon-sandian"></i>
                    </router-link>
                </div>
            </header>
            <div class="img">
                <img :src="productDetail.logo" alt="">
            </div>
        </div>
        <section class="name-desc">
            <p class="price">￥{{skuItem.price}}</p>
            <b class="name">{{productDetail.name}}</b>
            <p class="flex">
                <span>包邮</span>
                <span>销量{{skuItem.sold}}</span>
                <span>{{productDetail.warehouse_place?productDetail.warehouse_place:'暂无'}}</span>
            </p>
        </section>
        <section class="security">
            <!-- <p>配送：{{detail.delivery_price}}</p>
            <p class="guarantee">保障: {{detail.guarantee}}</p> -->
            <p>选择: {{skuItem.specification}}</p>
        </section>
        <section class="item-detail">
            <h4>———— 商品详情 ————</h4>
            <div  v-html="productDetail.detail"></div>
        </section>
        <section class="fixed-bar">
            <div class="font-box">
            <i class="iconfont icon-home"></i>
            <i class="iconfont icon-kefu"></i>
            </div>
            <div class="addcart" @click="showDrawer">加入购物车</div>
            <div class="purchase">立即购买</div>
        </section>
        <!-- 商品属性弹框 -->
        <!-- <mt-popup
        v-model="popupVisible"
        position="bottom">
            <section>
                <div class="product">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" alt="">
                    <div class="price-info">
                        <p class="price">￥ 288</p>
                        <p class="notion">请选择：规格 数量</p>
                    </div>
                    
                </div>
                <div class="specification">
                        <p class="title">规格</p>
                        <ul class="content1">
                            <li v-for="(d,index) in detail.specification" :key="index" @click="selectItem(index)" :class="{'active':index==selectIndex}">{{d}}</li>
                        </ul>
                    </div>
                    <div class="number">
                        <p class="title">数量</p>
                        <p class="content">
                            <span>库存 500件</span>
                            <carControl :food="pro"/>
                        </p>
                    </div>
            </section>
            <section class="confirmbtn" @click="popupVisible=false">确定</section>
        </mt-popup>  -->
        <productPopup/>
    </div>
</template>

<script>
import productPopup from '@/components/productPopup/productPopup.vue'
import carControl from '@/components/carControl/carControl'
import {mapActions,mapMutations,mapState} from 'vuex'
import _ from 'lodash'
export default {
    name: 'detail',
    components: {
       carControl,
       productPopup
    },
    data() {
        return {
        }
    },
    computed : {
        ...mapState('category', [
           'productDetail'
        ]),
        skuItem() {
          return  _.find(this.productDetail.productInventoryList, {id:this.productDetail.skuId}) 
        }
    },
    mounted () {
        console.log(this.$route.params)
        this.fetchProductDetail({productId: this.$route.params.productId})
        console.log(this.productDetail)
    },
    methods:{
        ...mapActions('category', [
            'fetchProductDetail'
        ]),
        ...mapMutations('cart',[
            'openCartDrawer'
        ]),
        showDrawer() {
            this.openCartDrawer()
        },
        addCartDetail() {
            this.openCartDrawer()
        }
    }
}
</script>

<style lang="css" scoped>
.detailbox{
    height:100%;
    background: #f5f5f5;
    text-align: center;
}
.pic header{
    background: transparent;
    position: fixed;
    width:100%;
    height:50px;
    display: flex;
    padding: 0 4%;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
}
header a{
    display: inline-block;
    width:30px;
    height:30px;
    border-radius: 50%;
    background: rgba(0,0,0,0.6);
    text-decoration:none;
    color:#fff;
    font-size:30px;
    line-height: 25px;
    text-align: center;
}
header a i{
    font-size:20px;
}
.pic .img{
    width:100%;
    height:300px;
    background: #fa8a00;
}
.pic .img img{
    width:100%;
    height:100%
}
.name-desc{
    text-align: left;
    background: #fff;
    padding:0 4%;
    line-height: 30px;
}
.name-desc .price{
    color:#fa8a00;
    font-size:18px;
}

.name-desc .flex{
    display: flex;
    justify-content: space-between;
    background: #fff;
}
.security{
    background: #fff;
    text-align: left;
    padding:0 4%;
    line-height: 30px;
}
.guarantee{
    width:100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.fixed-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    width:100%;
    background: #fff;
    height:60px;
    box-sizing: border-box;
}
.fixed-bar .font-box{
     width:40%;
     display: flex;
     justify-content: space-around;
     font-size:26px;
     padding-right: 10%;
}
.fixed-bar .font-box i{
     font-size:26px;
}
.fixed-bar .addcart,.purchase{
    width:30%;
    height:100%;
    background: #fa8a00;
    line-height: 60px;
    text-align: center;
    color:#fff;
}
.purchase{
     background: #ff6700
}
.mint-popup-bottom{
  width:100%;
  /* position: relative; */
}
.confirmbtn{
    height:50px;
    position: absolute;
    bottom:0;
    width:100%;
    background:#ff6700;
    color:#fff;
    line-height: 50px
}
.product{
    display: flex;
    padding: 20px 4% 0 4%;
}
.product img{
    width:80px;
    height:80px;
}
.price-info{
    text-align: left;
    line-height: 30px;
    margin-left:20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.price-info .price{
    font-size:26px;
    color:#ff6700;
}
.specification,.number{
    text-align: left;
    padding:20px 4%;
    margin-top:10px;
    height: auto;
}
.number .content{
    display: flex;
    justify-content: space-between;
}
.specification .content1{
    float:left
}
.specification .title,.number .title{
    line-height: 30px;
}
.number{
    margin-bottom: 60px
}
.specification ul{
    display: flex;
}
.specification ul li{
    float:left;
    margin-right: 20px;
    background: #ccc;
    display: inline-block;
    border-radius: 10px;
    padding:5px 10px;
    box-sizing: border-box;
}
.specification ul li.active{
    border:1px solid #ff6700;
    box-sizing: border-box;
}
</style>
