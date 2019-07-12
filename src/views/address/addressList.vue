<template>
    <div class="addresslist">
        <mt-header title="收货地址" >
           <router-link to="/" slot="left">
              <mt-button icon="back"></mt-button>
            </router-link>
           <router-link to="addaddress" slot="right">
                <mt-button>添加收货地址</mt-button>
          </router-link>
        </mt-header>
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
          <ul class="list-wrapper">
            <li v-for="(item,index) in list" :key="index" class="list-item">
              <div class="detail">
                <div><i class="iconfont icon-moren"></i></div>
                <div class="ad">
                  <p class="ad-1">
                    <span class="name">{{item.name}}</span>
                    <span class="phone">{{item.phone}}</span>
                  </p>
                  <p class='ad-2'>{{item.address}}</p>
                </div>
              </div>
              <div class="edit">编辑</div>
            </li>
          </ul>
        </mt-loadmore>
    </div>
</template>

<script>
export default {
  name: 'addressList',
  data() {
    return {
      list: [
        {
          name: '张三',
          phone: '111111111111',
          address: '中国广东省深圳市龙岗区坂田街道华为基地1111111',
          id:1,
          isMo: true
        },
        {
          name: '张三',
          phone: '111111111111',
          address: '中国广东省深圳市龙岗区坂田街道华为基地',
          id:2,
          isMo: false
        },
        {
          name: '张三',
          phone: '111111111111',
          address: '中国广东省深圳市龙岗区坂田街道华为基地',
          id:3,
          isMo: false
        },
        {
          name: '张三',
          phone: '111111111111',
          address: '中国广东省深圳市龙岗区坂田街道华为基地',
          id:4,
          isMo: false
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.mint-header{
  background: #f5f5f5;
  color:#333;
}
.addresslist{
  background: #f5f5f5;
  width:100%;
  height: 100%;
}
.list-wrapper{
  padding: 20px 4%;
  background: #fff;
}
.list-wrapper .list-item{
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  padding:20px 0;
  align-items: center

}
.list-wrapper .list-item .detail{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:#333;
  width:80%;
}
.list-wrapper .list-item .detail .phone{
  color:#999;
  margin-left:10px
}
.list-wrapper .list-item .detail .ad-2{
  line-height:25px;
  margin-top:5px;
}
.list-wrapper .list-item .detail .iconfont{
  margin-right:20px;
  font-size:30px;
}
.list-wrapper .list-item  .edit{
  color:#999;
  display: flex;
  flex-wrap: nowrap
}
</style>
