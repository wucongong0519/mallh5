<template>
    <div class="cartcontroll">
        <span @click.stop="decreaseCount" class="cartbutton button-minus" v-if="showMinus">
          <i class="iconfont icon-jianshao"></i>
        </span>
        <span class="cartcount" v-if="showMinus">{{skuSetting.number}}</span>
        <span @click.stop="increaseCount" class="cartbutton">
          <i class="iconfont icon-tianjia"></i>
        </span>
   </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
import {Toast} from 'mint-ui'
export default {
  name: 'carControl',
  props: {
      // food:Object,
      id: Number,
      showMinus: {
        default: false
      }
  },
  components: {Toast},
  computed: {
    ...mapState('cart',[
          'skuSetting'
      ]),
      ...mapState('category', [
          'productDetail'
      ]),
    skuItem() {
      return  _.find(this.productDetail.productInventoryList, {id:this.productDetail.skuId}) 
    }
  },
  methods: {
      ...mapMutations('cart',[
          'openCartDrawer',
          'saveSkuSetting',
          'changeSkuSetting'
      ]),
       ...mapActions('category', [
            'fetchProductDetail'
        ]),
      increaseCount() {
          
          let {number: prevNum} = this.skuSetting
          if(prevNum >= this.skuItem.remainder) {
            Toast({
              message: '没有更多啦',
              position: 'top',
              duration: 2000
            })
            return
          }
          this.$nextTick(() => {
           this.changeSkuSetting({number:prevNum + 1})
           this.openCartDrawer()
          })
          
      },
      decreaseCount () {
          // this.food.count--
          let {number: prevNum} = this.skuSetting
          if(prevNum <= 1) {
            Toast({
              message: '不能再减啦',
              position: 'top',
              duration: 2000
            })
            return
          }
          this.changeSkuSetting({number:prevNum - 1})
      }
  }
}
</script>

<style scoped>
.cartcontroll {
  display: inline-flex;
  align-items: center;
}
.cartbutton {
  display: inline-block;
  vertical-align: middle;
}
.cartbutton i {
  color:#ff6700;
  vertical-align: middle;
  font-size: 1.5rem;
}
.button-minus {
  /* width: 4.866667vw;
  height: 4.866667vw;
  /* border: 1px solid #ff6700; */
  /* border-radius: 50%;
  text-align: center; */ 
}
/* .button-minus i {
  font-size: 1rem;
  color:#ff6700;
} */
.cartcount {
  display: inline-block;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  vertical-align: middle;
  font-size: 0.8rem;
  width: 6.933333vw;
  overflow: hidden;
}
</style>
