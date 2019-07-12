<template>
    <div class="itemsearch">
        <form action="" v-on:submit.prevent="">
        <mt-search
        v-model="searchVal"
        cancel-text="取消"
        @keyup.native.enter="search(searchVal.trim())"
        placeholder="搜索商品">
        </mt-search>
        </form>
        <section class="history-wrapper">
            <div class="title">
                <span>搜索历史</span>
                <i class="iconfont icon-icon-shanchu" @click="removeHistory"></i>
            </div>
            <ul class="his-item">
                <li v-for="(item,index) in historyList" :key="index" @click="selectRecord(item,index)" :class="{'active':selectIndex===index}">{{item}}</li>
            </ul>
        </section>
    </div>
</template>

<script>
import { Header,Search } from 'mint-ui';
import { mapState } from 'vuex'
export default {
  name: 'itemSearch',
  data () {
      return {
          searchVal: '',
          selectIndex: ''
        //   historyList:[]
      }
  },
  computed: {
       historyList () {
           return this.$store.state.itemSearch.historyList
       }
  },
  methods: {
      search(searchVal) {
            if(!searchVal) return
            if(this.historyList.length>0){
                if(this.historyList.indexOf(searchVal)!==-1){
                    this.historyList.splice(this.historyList.indexOf(searchVal),1)
                    this.historyList.unshift(searchVal)
                }else{
                    this.historyList.unshift(searchVal)
                }
            }else{
                this.historyList.unshift(searchVal)
            }
            if(this.historyList.length>6){
                this.historyList.pop()
            }
           this.$store.commit({
                type: 'addHistory',
                payload: JSON.stringify(this.historyList)
           })
           this.$store.commit({
                type: 'setSearchParam',
                payload: {
                  searchVal
                }
           })
            this.$router.push('/itemsearchresult')
        //   localStorage.setItem('historylist',JSON.stringify(this.historyList))
      },
    //   删除历史记录
    removeHistory () {
      localStorage.removeItem('historylist')
      this.$store.commit({
        type: 'removeHis'
      })
    },
    selectRecord (searchVal, index) {
        this.$store.commit({
            type: 'setSearchParam',
            payload: {
                searchVal
            }
        })
        this.selectIndex = index
        this.$router.push('/itemsearchresult')
    }
  },
  mounted() {
      let his = localStorage.getItem('historylist') ?localStorage.getItem('historylist'):[]
      this.$store.dispatch({
        type: 'getHistory',
        payload: his
       })
  }
}
</script>

<style lang="css" scoped>
.itemsearch{
    height: 100%;
    background: #f5f5f5
}  
.mint-search{
    height:auto;

}
.history-wrapper{
    padding: 10px 0%;
}
.history-wrapper .title{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #999;
    padding: 10px 4%;
}
.his-item{
    display: flex;
    padding: 20px 4%;
    flex-wrap: wrap;
    line-height: 30px;
}
.his-item li{
    margin-right: 2%;
    padding:5px 4%;
    background: #ccc;
    border-radius: 10px;
    margin-top:10px
}
.his-item li.active{
    background: #fa8a00;
    color:#fff;
}
</style>
