<template>
    <div class="indexcategory">
        <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
          <li v-for="(item,index) in list" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
 name: 'indexCategory',
 data() {
     return {
       cateList: [], 
       loading: false,
       list:[1,2,3,4,5,6,7,8,9,0] 
     }
 },
 methods:{
    loadMore() {
        this.loading = true;
        setTimeout(() => {
            let last = this.list[this.list.length - 1];
            for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
            }
            this.loading = false;
        }, 2500);
    }
 }
}
</script>

<style scoped>
li{
    line-height: 3
}
</style>
