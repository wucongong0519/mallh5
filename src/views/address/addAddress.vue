<template>
    <div class="addAddress">
        <mt-header title="添加地址">
            <router-link to="/" slot="left">
              <mt-button icon="back"></mt-button>
            </router-link>
            <router-link to="addaddress" slot="right">
                <mt-button>保存</mt-button>
            </router-link>
        </mt-header>
        <mt-field label="收货人"></mt-field>
        <mt-field label="手机号码"></mt-field>
        <mt-field label="所在地区"  @click.native="popupVisible=true" v-model="address"></mt-field>
        <mt-field label="详细地址" type='textarea' rows='2'></mt-field>
        <mt-popup v-model="popupVisible" position="bottom">
          <div class="picker-toolbar-title">
            <div class="usi-btn-cancel" @click="popupVisible=!popupVisible">取消</div>
            <div class="">请选择</div>
            <div class="usi-btn-sure" @click="popupVisible=!popupVisible">确定</div>
          </div>
            <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
        </mt-popup>
        <!-- 默认地址设置 -->
        <mt-cell title="设置为默认地址">
          <mt-switch></mt-switch>
        </mt-cell>
    </div>
</template>

<script>
import {myaddress } from './data.js'
export default {
  name: 'addAddress',
  data() {
      return {
       address: '',
       popupVisible: false,
        myAddressSlots: [
          {
            flex: 1,
            defaultIndex: 1,    
            values: Object.keys(myaddress),  //省份数组
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'center'
          },
          {
            divider: true,
            content: '-',
            className: 'slot4'
          },
          {
            flex: 1,
            values: [],
            className: 'slot5',
            textAlign: 'center'
          }
        ],
        myAddressProvince:'省',
        myAddressCity:'市',
        myAddresscounty:'区/县',
      }
  },
  methods: {
      onMyAddressChange(picker, values) {
        // console.log(values)
       if(myaddress[values[0]]){  //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
          picker.setSlotValues(1,Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
          picker.setSlotValues(2,myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
          this.myAddressProvince = values[0];
          this.myAddressCity = values[1];
          this.myAddresscounty = values[2];
          this.address=values[0]+'-'+values[1]+'-'+values[2];
        }
      },
  },
  mounted(){
    this.myAddressSlots[0].defaultIndex = 0
  }
}
</script>

<style lang="css" scoped>
.mint-header{
  background: #f5f5f5;
  color:#333;
}
.addAddress{
  background: #f5f5f5;
  height: 100%;
}
.mint-popup-bottom{
  width:100%;
}
.picker-toolbar-title {
  display: flex;
  height: 40px;
  justify-content: space-around;
  align-items: center;
}
.usi-btn-cancel,
.usi-btn-sure {
  color: #FF6600
}

</style>
