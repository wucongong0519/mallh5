<template>
    <div class="search-bar">
        <nav>
            <section class="logo"><i class="iconfont icon-weibiaoti-"></i></section>
            <section class="search">
                <i class="iconfont icon-novigo_search"></i>
                <input type="text" placeholder="请输入搜索内容">
            </section>
            <section v-if="login===false" class="i" @click="$router.push('/loginByPhone')"><i class="iconfont icon-login"></i></section>
            <section v-if="login===true" class="i" @click="$router.push('/my')"><i class="iconfont icon-denglu"></i></section>
        </nav>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'headerSearchBar',
   computed: {
     ...mapState('user',[
         'login',
         'info'
     ])
 }
}
</script>

<style lang="css" scoped>
.search-bar{
    /* position: fixed; */
    top:0;
    left:0;
    width:100%;
    background-color: #f5f5f5;
}
nav{
    width:100%;
    display:flex; 
    justify-content:space-around;
    padding:10px 0;
}
.logo i{
    /* width:30px;
    height:30px; */
    color:#ff6b00;
    font-size:32px;
    position: relative;
    top:5px
}
.search{
    height:35px;
    border:1px solid #e5e5e5;
    position: relative;
    width:78%;
}
.search i{
    position: absolute;
    font-size:25px;
    top:10px;
    left:10px;
}
.search input{
   width:100%;
   height:100%;
   text-indent:50px; 
}
.i i{
    position: relative;
    top:5px;
    font-size:32px;
}
</style>
