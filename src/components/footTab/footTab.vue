<template>
    <div class="footerTabs">
         <router-link
            tag="div"
            :to="item.toLink"
            v-for="(item,index) in footTabs"
            :class="{item:true,active:item.active==footTabIndex}"
            :key="index"
         >
             <p>
                 <i :class="item.icon + ' iconfont '"></i>
             </p>
             <p>{{item.name}}</p>
         </router-link>
    </div>
</template>

<script>
import { footTabs } from './option.js';
export default {
   name: 'footTab',
   data() {
       return {
           footTabs:footTabs,
           footTabIndex: ''
       }
   },
   mounted() {
    //    console.log(this.$route)
       this.footTabIndex = this.$route.name;
   }
}

</script>

<style lang="css" scoped>
.footerTabs{
    height:60px;
    width:100%;
    position:fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
    background-color:#fff;
    color: #999;
}
.footerTabs .item{
  width:25%;
  font-size:14px;
  text-align: center;
  padding-top:5px;
}
.iconfont{
  font-size:28px;
}
.footerTabs .active{
    color: #ff6700;
}
</style>
