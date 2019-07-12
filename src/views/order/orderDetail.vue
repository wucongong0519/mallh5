<template>
    <div class="orderDetail">
        <mt-header fixed title="订单详情">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="ordercontent">
            <div class="status">
                <p>等待买家付款</p>
                <p>剩2小时22分自动关闭</p>
            </div>
            <div class="buyerinfo">
                <div class="imgbg">
                   <i class="iconfont icon-dingwei"></i>
                </div>
                <div class="info">
                    <p>
                        <span>张安</span>
                        <span class="phone">1888888888</span>
                    </p>
                    <p>浙江省杭州市余杭区</p>
                </div>
            </div>
            <div class="sellerinfo">
                <p class="sellername">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" alt="">
                    <span>禾健生商城</span>
                </p>
                <div class="detail">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" alt="">
                    <div class="right-content">
                        <p class="title">膳食纤维</p>
                        <p class="specification">
                            <span>250g/盒</span>
                            <span>x1</span>
                        </p>
                        <p class="price">￥288</p>
                    </div>
                </div>
            </div>
            <!-- 配送方式 -->
            <div class="dis-remark">
                <div class="disrit">
                    <div class="label">
                        <span class="name">配送方式</span>
                        <span class="value">普通配送</span>
                    </div>
                    <div class="value-dis">
                        快递￥8.0
                    </div>
                </div>
                <div class="remark">
                    <div class="label">
                        <span class="name">订单备注</span>
                        <span class="value">无</span>
                    </div>
                </div>
            </div>
            <!-- 积分优惠 -->
            <div class="point-discount">
               <mt-cell title="商品金额" value="￥288.00"></mt-cell>
               <mt-cell title="运费" value="￥288.00"></mt-cell>
               <mt-cell title="优惠" value="￥288.00"></mt-cell>
               <mt-cell title="积分" value="￥288.00"></mt-cell>
            </div>
            <div class="totalpay">
                需付款： <span>￥288.00</span>
            </div>
            <!-- 订单信息 -->
            <div class="orderinfo"> 
                <p class="title">订单信息</p>
                <p class="time">
                    <span>创建时间</span>
                    <span class="value">2019-4-5</span>
                </p>
                <p class="ordernumber">
                    <span>订单编号</span>
                    <span class="value">2019-4-5</span>
                </p>
                 <p class="time-deal">
                    <span>付款时间</span>
                    <span class="value">2019-4-5</span>
                </p>
                 <p class="time-delivery">
                    <span>发货时间</span>
                    <span class="value">2019-4-5</span>
                </p>
            </div>
            <!-- 按钮区 -->
            <div class="btn-group">
                <button class="cancel">取消订单</button>
                <button class="pay">付款</button>
                <button class="check">查看物流</button>
                <button class="confirm">确认收货</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'orderDetail'
}
</script>

<style lang="css" scoped>
.mint-header{
     background: #f5f5f5;
     color:#333;
}
.orderDetail{
    height:100%;
    background: #f5f5f5;
    padding-top:50px;
}
.ordercontent .status{
     background: #fa8a0f;
     color:#fff;
     padding:30px;
     line-height: 25px;
}
.ordercontent .buyerinfo{
  padding: 20px 4%;
  display: flex;
  align-items: center;
  line-height: 25px;
  background: #fff;
}
.ordercontent .buyerinfo .imgbg{
    background: #fa8a0f;
    border-radius: 50%;
    color:#fff;
    width:40px;
    height:40px;
    text-align: center;
    line-height: 40px;
    margin-right: 2%;
}
.ordercontent .buyerinfo .imgbg i{
    font-size:26px;
}
.ordercontent .buyerinfo .phone{
    color:#999;
    font-size:14px;
    margin-left:3%;
}
.sellerinfo,.dis-remark,.point-discount,.orderinfo{
    padding: 20px 4%;
    background: #fff;
    margin-top:20px;
}
.sellerinfo .sellername{
  display: flex;
  align-items: center;
  line-height: 50px;
}
.sellerinfo .sellername img{
    width:20px;
    height:20px;
    margin-right: 10px
}
.sellerinfo .detail{
    display: flex;
}
.sellerinfo .detail img{
    margin-right: 3%;
    width:100px;
    height:100px;
}
.sellerinfo .detail .right-content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.sellerinfo .detail .right-content .specification{
    display: flex;
    justify-content: center;
}
.dis-remark .disrit,.dis-remark .remark{
   display: flex;
   line-height: 30px;
   justify-content: space-between;
   box-sizing: border-box;
   flex:1
}
.dis-remark .disrit .label,.dis-remark .remark .label{
  flex:1
}
.dis-remark .disrit .value,.dis-remark .remark .value{
  margin-left:16%;
  color:#999;
}
.point-discount{
    border-bottom: 1px solid #999;
}
.totalpay{
    line-height:0px;
    text-align: right;
    padding: 20px 4%;
    background: #fff;
}
.totalpay span{
    color:#fa8a00;
}
.orderinfo p{
    display: flex;
    line-height: 30px
}
.orderinfo p .value{
    color:#999;
    margin-left:16%;
}
.btn-group{
    text-align: right;
    position: fixed;
    bottom: 0;
    width:100%;
    border-top:1px solid #999;
    line-height: 60px;
    background: #fff;
    padding: 0 4%;
    box-sizing: border-box;
}
.btn-group button{
    margin-left:2%;
    background: none;
    padding:8px 20px;
    outline: none;
    border:none;
    border:1px solid #999;
    border-radius: 5px;
}
.btn-group button.pay,.btn-group button.confirm{
    background: #fa8a00;
    color:#fff;
    border:1px solid #fa8a00;
}
</style>
