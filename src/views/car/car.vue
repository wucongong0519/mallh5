<template>
   <div class="carbox">
       <mt-header fixed title="购物车"></mt-header>
       <section v-if="logined">
           <section class="empty" v-if="recommendList.length<=0">
               <i class="iconfont icon-gouwuchekongkongruye-"></i>
               <router-link tag="span" to="/category">空空如也，去逛逛</router-link> 
           </section>
           <ul v-else class="carlist">
               <li v-for="(item,index) in recommendList" :key="index">
                   <div class="check-container">
                        <label class="input-checkbox">
                            <input type="checkbox" class="goodRadio" @click="goodsCheck($event,recommendList)" :value="item.id">
                            <i class="iconfont icon-duigou"></i>
                        </label>
                   </div>
                   <div>
                    <router-link tag="a" to="detail"><img :src="item.icon" alt=""></router-link>
                   </div>
                   <div class="desc-container">
                       <p class="name">{{item.name}}</p>
                       <p>销量：{{item.sold}}</p>
                       <p class="price">
                           <span>￥{{item.price}}</span>
                           <carControl :food="item"/>
                       </p> 
                   </div>
               </li>
           </ul>
       </section>
       <section v-else class="unlogin-info">
           <i class="iconfont icon-tishibaoqian"></i>
           <router-link tag="span" to="/loginByPhone">请登录</router-link>
       </section>
       <section class="carbtn">
           <div class="all">
               <label class="input-checkbox">
               <input type="checkbox" name="allRadio" @click="AllCheck" >
               <i class="iconfont icon-duigou"></i>
                 
               </label>
               <span>全选</span>
           </div>
           <div class="right">
               <span>合计 <strong>￥ 0</strong></span>
               <button :disabled="true">结算</button>
           </div>
       </section>
   </div>
</template>

<script>
import {mapState} from 'vuex'
import carControl from '@/components/carControl/carControl';
export default {
  name:'car',
  components: {
      carControl
  },
  data () {
      return {
          logined:true,
          totalprice: 0,
          totalnum:0,
          goodslist:[]
      }
  },
  methods:{
      AllCheck(e){
        //   console.log(e.target.checked) //全选
          let input =  document.getElementsByClassName('goodRadio')
        //   console.log(input)
          if(e.target.checked){
              for(var i=0;i<input.length;i++){
                  if(input[i].checked==false) {
                      input[i].checked=true
                  }
              }
          }else{
              for(var j=0;j<input.length;j++){
                    input[j].checked=false
              }
          }
      },
      goodsCheck(e,recommendList){
    //    console.log(e.target.checked)
       let input = document.getElementsByTagName('input')
       if(e.target.checked){
           this.goodslist.push(e.target.value)
          
       }else{
           this.goodslist.splice(this.goodslist.indexOf(String(e.target.value),1))
       }
        if(this.goodslist.length===recommendList.length){
                for(var i = 0;i<input.length;i++){
                    if(input[i].name == 'allRadio'){
                        input[i].checked = true;
                    }
                }
           }else{
               for(var j = 0;j<input.length;j++){
                    if(input[j].name == 'allRadio'){
                        input[j].checked = false;
                    }
                }
           }
      }
  },
  computed: {
    ...mapState('indexItem',['recommendList'])
  }
}
</script>

<style lang="css" scoped>
.carbox{
    padding:10px 2%;
}
.mint-header{
    background:#ff6b00;
}
.empty{
    padding:50px
}
.empty i{
    font-size:40px;
    color:#ff6b00;
}
.empty i{
    margin:10px
}
.carlist li{
    display: flex;
    position: relative;
    margin:20px 0;
}
.desc-container{
   display: flex;
   flex-direction: column;
  justify-content: space-between;
  text-align: left;
  line-height: 25px;
  margin-left:10px
}
.desc-container .price{
    display: flex;
    justify-content: space-between;
}
.unlogin-info {
    min-height: calc(100%-100px);
    margin:100px;
}
.unlogin-info i{
    font-size:40px;
    color:#ff6b00;
}
.unlogin-info span{
    font-size:20px;
    margin:10px;
}
.check-container{
    display: flex;
    align-items: center;
}
.input-checkbox{
    width:20px;
    height:20px;
    border-radius: 50%;
    border:2px solid #ccc;
    display: block;
    margin:0 10px;
   
   /* position: absolute;
   top:48%; */
}
.input-checkbox input{
    display:none
}
.input-checkbox input+i {
    font-size: 26px; 
    display: none;
    color: #ff5722;
} 
.input-checkbox input:checked+i { 
    display: block;
}   
.carbtn{
    position:fixed;
    bottom:0px;
    width:100%;
    background: #fff;
    z-index:1;
    height:60px;
   line-height: 50px;
   display: flex;
   justify-content: space-between;

}
.carbtn .all{
    display: flex;
    align-items: center;
}
.carbtn .right{
    display: flex;
    width:50%;
    font-size:18px;
}
.carbtn .right button{
  width:50%;
  height:100%;
  outline:none;
  border:none;
  background:#fa8a00;
  margin:0 0 0 15px;
  color:#fff;
  font-size:18px;
}
</style>
