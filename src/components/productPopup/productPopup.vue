<template>
     <mt-popup
        v-model="openCartDrawers"
        v-if="openCartDrawers"
        :closeOnClickModal="false"
        position="bottom">
            <section v-if="productDetail">
                <div class="product">
                    <img :src="productDetail.logo" alt="">
                    <div class="price-info" v-if="skuItem">
                        <p class="price">￥ {{skuItem.price?skuItem.price:null}}</p>
                        <p class="notion">请选择：规格 数量</p>
                    </div>
                    
                </div>
                <div class="specification">
                        <p class="title">规格</p>
                        <ul class="content1">
                            <li v-for="(d,index) in productDetail.productInventoryList" :key="index" @click="selectItem(index,d.id)" :class="{'active':index==selectIndex}">{{d.specification}}</li>
                        </ul>
                    </div>
                    <div class="number">
                        <p class="title">数量</p>
                        <p class="content">
                            <span v-if="skuItem.remainder">库存 {{skuItem.remainder?skuItem.remainder:0}}件</span>
                            <carControl  :showMinus="true"/>
                        </p>
                    </div>
            </section>
            <div class="confirmbtn" @click.stop="closeCartD()">确定</div>
        </mt-popup> 
</template>

<script>
import carControl from '@/components/carControl/carControl';
import {mapState,mapMutations} from 'vuex'
export default {
    name: 'detail',
    components: {
        carControl
    },
    data() {
        return {
            skuid: null
        }
    },
    computed: {
        ...mapState('cart',[
            'openCartDrawers',
            'skuSetting'
        ]),
         ...mapState('category', [
           'productDetail'
        ]),
        skuItem() {
          return  _.find(this.productDetail.productInventoryList, {id:this.productDetail.skuId}) 
        }
    },
    data() {
        return {
            selectIndex: 0
        }
    },
    methods:{
        ...mapMutations('cart',[
            'closeCartDrawer',
            'changeSkuSetting'
        ]),
         ...mapMutations('category',[
            'updateProductDetailSkuId'
        ]),
        selectItem(index,id) {
            this.selectIndex = index
            let prevselect = this.selectIndex
            if(this.index === prevselect) {
                return
            }
            this.changeSkuSetting({skuId: id, number: 1})
        },
        closeCartD () {
            this.closeCartDrawer()
            this.updateSkuId()
        },
        updateSkuId() {
            this.updateProductDetailSkuId({skuId: this.skuSetting.skuId})
        }
    }
}
</script>

<style lang="css" scoped>
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
    line-height: 50px;
    text-align: center;
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
