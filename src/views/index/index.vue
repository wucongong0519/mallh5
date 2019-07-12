<template>
    <div>
        <headerSearchBar/>
        <transition>
            <div class=indexbox>
                <!-- 轮播图 -->
                <div class="swiper">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
                            <img :src="item.link" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div> 
                <!-- 九宫格 -->
                <div class="grid">
                    <ul class="grid-box">
                        <li v-for="(item,index) in gridlist" :key="index" class="item">
                            <img :src="item.icon" alt="">
                            <div>
                                <span>{{item.text}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 热门推荐 -->
                <div class="recommendbox">
                    <div class="title">——— 热门推荐 ———</div>
                    <ul class="recommendList">
                        <li v-for="(item,index) in recommendList" :key="index" class="recommendItem">
                            <img :src="item.icon" alt="">
                            <p class="name">{{item.name}}</p>
                            <p class="sales">销量{{item.sold}}</p>
                            <div class="price">
                                <span>{{item.price}}</span>
                                <carControl :food="item"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>  
        <foot-tab></foot-tab>
    </div>
</template>

<script>
import footTab from '@/components/footTab/footTab';
import headerSearchBar from '@/components/headerSearchBar/headerSearchBar';
import carControl from '@/components/carControl/carControl';
import { Swipe, SwipeItem } from 'mint-ui';
import {mapState} from 'vuex'
export default {
 name:'Index',
 components: {
     footTab,
     headerSearchBar,
     'mt-swipe': Swipe,
     'mt-swipe-item': SwipeItem,
     carControl
 },
 data () {
     return {
         gridlist:[]
     }
 },
 mounted(){
    const titleList = ["全营养", "益生菌", "肿瘤", "肾病", "短肽", "肠胃", "蛋白粉", "术前口服液", "膳食纤维", "所有产品"]
    const data = Array.from(new Array(10)).map((_val, i) => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: titleList[i],
    }));
    this.gridlist = data
 },
 computed: {
     ...mapState('indexItem',[
         'bannerList',
         'recommendList'
     ])
 }
}
</script>

<style lang="css" scoped>
.mint-swipe{
    height:218px;
}
.mint-swipe-item{
    width:100%
}
img{
    width:100%;
    height:100%
}
.indexbox{
    text-align: center;
}
.grid{
    text-align: center;
}
.grid-box{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    /* flex:5; */
    box-sizing: border-box; 
    justify-content: space-around;  
    margin:5px 0;
}
.grid-box .item{
    width:19%;
    margin: 10px 0
}
.grid-box .item img{
    width:48px;
    height:50px;
    margin-bottom: 5px;
}
.recommendbox{
    background: #f5f5f5;
    padding:10px;
}
.recommendbox .title{
    margin: 20px 0;
}
.recommendbox .recommendList{
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-between; 
}
.recommendbox .recommendList .recommendItem{
    width:48%;
    box-sizing: border-box; 
}
.recommendbox .recommendList .recommendItem img{
    width:100%;
    height:180px;
}
.recommendItem .name,.recommendItem .sales{
    text-align: left;
    color:#999;
    line-height: 20px;
    margin-top:5px;
}
.recommendItem .price{
    display: flex;
    justify-content: space-between;
}
</style>
