<template>
    <div class="category-container">
        <!-- 左侧菜单 -->
        <header>
            <searchBar class="searchBar"/>
        </header>
        
        <!-- <mt-search placeholder="搜索商品"></mt-search> -->
   
        <div class="menuview">
            <div class="menuWrap" ref="menuScroll">
                <ul>
                    <li  
                    :class="{'current':currentId===menu.id}"
                    @click="selectMenu(menu.id)"
                    v-show="menulist" v-for="(menu,index) in categoryList" :key="index">{{menu.name}}</li>
                </ul>
            </div>
            <!-- 右侧商品内容 -->
            <div class="productsWrap" ref="listScroll">
                <ul>
                    <li  class="list-hook">
                        <!-- <header>
                            <section>
                                <strong>{{menu.name}}</strong>
                            </section>
                        </header> -->
                        <ul>
                            <li v-show="currentList" v-for="(pro,findex) in currentList" :key="findex" class="item-list" @click="toDetail(pro.id)">
                                <!-- left -->
                                <section class="pro-img">
                                    <img v-if="pro.logo" alt="" :src="pro.logo" />
                                    <img v-if="!pro.logo" alt="" src="http://pt81v1yz7.bkt.clouddn.com/7be84d02-9c36-43e6-9534-d45c87b7ffc8" />
                                </section>
                                <!-- right -->
                                <section class="pro-info">
                                    <h4>{{pro.name}}</h4>
                                    <p>销量{{pro.totalSold}}</p>
                                    <div class="price">
                                        <span>￥{{pro.minPrice}}</span>
                                        <carControl :id="pro.id" :showMinus="false"/>
                                    </div>
                                </section>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div> 
        </div>
        <productPopup/>
    </div>
</template>

<script>
const menulist = require('./mock.json')
import carControl from '@/components/carControl/carControl'
import searchBar from '@/components/searchBar/searchBar.vue'
import productPopup from '@/components/productPopup/productPopup.vue'
import BScroll from 'better-scroll'
import { Header } from 'mint-ui'
import {mapActions, mapState} from 'vuex'
export default {
  name: 'category',
  components:{carControl,searchBar,productPopup},
  data() {
      return {
          menuScroll: {},
          listScroll: {}, //右侧滚动对象
          scrollY: 0,  //右侧滚动Y值
          listHeight: [],
          seleectdFood: null,
          menulist:menulist,
          carControl
      }
  },
  computed:{
      ...mapState('category', [
          'categoryList',
          'currentList',
          'currentId'
      ]),
      currentIndex() {
          for(var i = 0; i<this.listHeight.length;i++) {
              let height1 = this.listHeight[i]
              let height2 = this.listHeight[i+1]
              if(this.scrollY>=height1&&this.scrollY<height2){
                  return i
              }
          }
          return 0
      }
  },
  mounted() {
      this.fetchCategories()
      this.initScroll()
      this.calculateHeight()
  },
  methods: {
    //   初始化滚动区域
    ...mapActions('category',[
        'fetchCategories',
        'fetchProductById'
    ]),
    initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuScroll,{
        click:true
        })
        this.listScroll = new BScroll(this.$refs.listScroll,{
        probeType: 3,
        click: true
        })
        this.listScroll.on('scroll',pos => {
        //  console.log(pos.y)
            this.scrollY = Math.abs(Math.round(pos.y))
            
        })
    },
    selectMenu(index) {
        this.fetchProductById({productCategoryId: index})
    //     let list = this.$refs.listScroll.getElementsByClassName('list-hook')
    // //   console.log(list)
    //     let el = list[index]
    //     this.listScroll.scrollToElement(el,300)
    },
    calculateHeight() {
        let prolist = this.$refs.listScroll.getElementsByClassName('list-hook')
        let height = 0
        this.listHeight.push(height)
        for(var i=0;i<prolist.length-1;i++){
            let item = prolist[i]
            height += item.clientHeight
            this.listHeight.push(height)
        }
    },
    toDetail(id){
        this.$router.push({name: 'detail', params:{productId: id}})
    }
  }
}
</script>

<style lang="css" scoped>
header{
    position: fixed;
    margin-bottom: 50px;
    width:100%;
    text-align: center;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    background: #f5f5f5;
}
header .searchBar{
 width:80%;
 margin:5px auto;
}
.mint-search{
    height:auto;

}
.category-container{
     height: calc(100% - 60px);
     position: relative;
     
}
.menuview {
  padding-top:50px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  background-color: #fff;
}
.menuWrap{
  height: 100%;
  overflow-y:hidden;
  width:20%;
  background: #f5f5f5;
  box-sizing: border-box;
}
.menuWrap li{
  line-height: 4;
  font-size:14px;
  text-align: center;
}
.productsWrap{
    width:80%;
    height: 100%;
    overflow-y:hidden;
    margin-left:2%;
}
.list-hook header{
    background: #f5f5f5;
    width:100%;
    text-align: left;
    line-height: 50px;
}
.list-hook .item-list{
    display: flex;
    margin-bottom: 10px;
}
.list-hook .item-list .pro-img{
    width:80px;
    height:80px;
}
.list-hook .item-list .pro-img img{
    width:100%;
    height:100%;
}
.list-hook .item-list .pro-info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding:5px 20px;
    text-align: left;
    width:60%;
    font-size:14px;
}
.list-hook .item-list .pro-info .price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:14px;
}
.menuWrap .current {
  background-color: #fa8a00 !important;
  color: #333 !important;
}
</style>
