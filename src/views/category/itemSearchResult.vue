<template>
    <div class="itemSearchResult">
        <!-- 左侧菜单 -->
        <header>
            <span>
                <i class="iconfont icon-fanhui"></i>
            </span>
            <searchBar class="searchBar" />
            <span>
                <i class="iconfont icon-qicheqianlian-"></i>
            </span>
            <span>
                <i class="iconfont icon-sandian"></i>
            </span>
        </header>
        <!-- 筛选条 -->
        <section class="filterBar">
            <div class="sold " :class="{'active':searchParam.key==='sold'}" @click="selectKey(soldKey)">
                销量
                <span>
                    <i class="iconfont icon-sanjiaoxing1" :class="{'active':searchParam.key==='sold'&&searchParam.direction ===this.ASC}"></i>
                    <i class="iconfont icon-sanjiaoxing" :class="{'active':searchParam.key==='sold'&&searchParam.direction ===this.DESC}"></i>
                </span>
            </div>
            <div class="price"  @click="selectKey(priceKey)" :class="{'active':searchParam.key==='price'}">
                价格
                <span>
                    <i class="iconfont icon-sanjiaoxing1" :class="{'active':searchParam.key==='price'&&searchParam.direction ===this.ASC}"></i>
                    <i class="iconfont icon-sanjiaoxing" :class="{'active':searchParam.key==='price'&&searchParam.direction ===this.DESC}"></i>
                </span>
            </div>
        </section>
    </div>
</template>

<script>
const menulist = require('./mock.json')
import carControl from '@/components/carControl/carControl';
import searchBar from '@/components/searchBar/searchBar.vue'
import BScroll from 'better-scroll'
import { Header } from 'mint-ui'
import get from 'lodash/get'
export default {
  name: 'category',
  components:{carControl,searchBar},
  data() {
      return {
        soldKey:'sold',
        priceKey: 'price',
        ASC: 'ASC',
        DESC: 'DESC'
      }
  },
  computed:{
      searchParam () {
          return this.$store.state.itemSearch.searchParam
      }
  },
  mounted() {
  },
  methods: {
      selectKey (key) {
          const prevKey = get(this.searchParam, 'key', null)
          const prevDirection = get(this.searchParam, 'direction', null)
          let direction = ''
          if (prevKey === key) {
            direction = prevDirection === this.ASC ? this.DESC : this.ASC
          } else {
              direction = this.ASC
          }
          this.$store.commit({
            type: 'setSearchParam',
            payload: {
                key,
                direction
            }
        })
      }
  }
}
</script>

<style lang="css" scoped>
header{
    /* margin-bottom: 50px; */
    width:100%;
    display: flex; 
    justify-content: space-between;
    background: #f5f5f5;
    height: 60px;
    padding: 0 4%;
    box-sizing: border-box;
    vertical-align: middle;
    align-items: center;
}
header span{
    display: inline-block;
}
header span i{
    font-size:26px;
    color:#333
}
header .searchBar{
    width:70%;
 /* margin:5px auto; */
}
.itemSearchResult{
    height: 100%;
    background: #f5f5f5
}
.filterBar{
    height:50px;
    background: #fff;
    padding: 10px 4%;
    display: flex;
}
.filterBar .sold,.filterBar .price{
    width:50%;
    text-align: center;
    color:#333;
    display: flex;
    align-items: center;
    justify-content: center;
}
.filterBar .active ,.filterBar .active{
    color:#fa8a00;
}
.filterBar .sold span ,.filterBar .price span{
    display: inline-flex;
    flex-direction: column;
    margin-left:5px;
    font-size:20px
}
.filterBar .sold span i,.filterBar .price span i{
    font-size:12px;
    color:#999;
}
.filterBar .sold span i.active,.filterBar .price span i.active{
    color:#fa8a00;
}
</style>
