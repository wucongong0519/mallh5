<template>
    <div class="searchBar">
      <router-link to="/itemSearch">
        <i class="iconfont icon-novigo_search"></i>
        <input type="text" placeholder="搜索商品" v-model="searchParam.searchVal">
      </router-link>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'searchBar',
  computed:{
      ...mapState('category', [
          'searchParam'
      ]),
    //   searchParam () {
    //       return this.$store.state.itemSearch.searchParam
    //   }
  },
}
</script>

<style>
.searchBar{
    width:100%;
    background:#fff;
    /* position:fixed; */
    height:40px;
    border:1px solid #333;
    line-height: 40px;
    font-size:26px;
    padding:0 4%;
    box-sizing: border-box
}
.searchBar input,.searchBar a{
    display: inline-block;
    outline: none;
    border:none;
    width:90%;
    font-size:16px;
    text-decoration: none;
}
.searchBar input{
    display: inline-block;
    outline: none;
    border:none;
    width:80%;
    font-size:16px;
    text-decoration: none;
}
.searchBar i{
    font-size:20px;
    margin-right: 2%;
}
</style>
