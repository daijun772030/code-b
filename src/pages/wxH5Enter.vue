<template>
  <div class="enter">
    <div class="banner"></div>
    <div class="content">
      <p>Six advantages of entering business</p>
      <div class="content-child">
        <div class="center">
          <div class="text">
            <p>入驻懒猪</p>
            <p>六大优势</p>
          </div>
        </div>
        <div class="left">
          <div class="left-center">
            <p class="top1">线上代替线下，走企业新路线。</p>
            <p  class="top">消费市场空白，占领市场先机。</p>
          </div>
          <p class="bootm">全面技术支持，疑难专业处理。</p>
        </div>
        <div class="right">
          <p class="p">全面技术支持，疑难专业处理。</p>
          <div class="right-center">
            <p class="p2">特惠设备耗材，价格优口碑好。</p>
            <p class="p3">Boss技术交流，提升洗护质量。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="adress">
      <div class="adress-call">
        <div class="address-left">
          <div class="item itemTwo">
            <img  src="" alt="">
            <span>联系我们</span>
          </div>
          <div class="item">
            <img src="../../static/images/weizhi2@2x.png" alt="">
            <span>四川省成都市高新区美年广场D座496室</span>
          </div>
          <div class="item itemSp">
            <img src="../../static/images/dianhua2@2x.png" alt="">
            <span >400-028-6889</span>
          </div>
          <div class="item">
            <img src="../../static/images/youxiang2@2x.png" alt="">
            <span>cya@pigcome.com</span>
          </div>
        </div>
        <div class="address-right">
            <p>关于我们</p>
            <p><img src="../../static/images/erweima@2x.png" alt=""></p>
            <p>扫一扫</p>
            <p>关注微信公众号</p>
        </div>
      </div>
      <div class="adress-com">
        <div class="com-header">加入我们</div>
        <div class="com-content">
          <div>
            <img src="../../static/images/jiaruwomeniconh5@2x.png" alt="">
            <span>成为懒猪会员</span>
          </div>
          <div>
            <img src="../../static/images/jiaruwomeniconh5@2x.png" alt="">
            <span>成为合作商家</span>
          </div>
          <div>
            <img src="../../static/images/jiaruwomeniconh5@2x.png" alt="">
            <span>成为公司员工</span>
          </div>
        </div>
      </div>
    </div>
    <div class="non"></div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './footer'
export default {
  data () {
    return {

    }
  },
  components: {
    Footer
  }
}
</script>
<style scoped>
  .enter {
    width: 100%;
    height:100%;
  }
  .banner {
    width: 100%;
    height: 418px;
    background-image: url('../../static/images/enterBanner.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .content {
    width:100%;
    height:600px;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
  }
  .content>p{
    font-size:18px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(197,197,197,1);
    line-height:33px;
  }
  .content-child{
    width: 100%;
    height:400px;
    position: relative;
    overflow: hidden;
  }
  .center {
    width:207px;
    height: 207px;
    background-image: url('../../static/images/yuanxianjiehe@2x.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    left:50%;
    top: 50%;
    margin-top: -103px;
    margin-left: -103px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size:22px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:30px;
  }
  .left{
    width: 50%;
    height:100%;
    /* border: 1px solid red; */
    position: absolute;
    left:0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
  }
  .right{
    width: 50%;
    height:100%;
    /* border: 1px solid red; */
    position: absolute;
    right:0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top{
    margin-top: 26px;
    width: 300px;
  }
  .top1 {
    width: 327px;
    margin-left: 48px;
  }
  .bootm{
    margin:0 0 26px 10px;
    width: 327px;
  }
  .right>.p {
    margin: 56px 0 0 56px;
    width: 327px;
  }
  .right-center>.p2 {
    margin-bottom: 26px;
    margin-left: 80px;
    width: 300px;
  }
  .right-center>.p3{
    width: 327px;
  }
  .left p,.right p{
    border:1px solid rgba(222,222,222,1);
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:53px;
    text-align: center;
  }
  .adress{
    width:750px;
    height:536px;
    background:rgba(250,250,250,1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .adress-call{
    width: 702px;
    height:268px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .address-left{
    width: 430px;
    height: 100%;
    background:rgba(255,255,255,1);
  }
  .item {
    box-sizing: border-box;
  }
  .item img {
    width:24px;
    height:auto;
    padding: 0 5px;
    vertical-align: middle;
  }
  .item span {
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .itemSp>span{
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(48,197,160,1);
  }
  .itemTwo span{
    font-size:26px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .address-right {
    width:252px;
    height: 100%;
    background:rgba(255,255,255,1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .address-right p img {
    width: 124px;
    height: 124px;
    margin-right: -10px;
  }
  .address-right p {
    font-size:20px;
    font-family:MicrosoftYaHei;
    width: 141px;
    padding-right: 20px;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:30px;
    text-align: end;
  }
  .adress-com{
    width:702px;
    height:172px;
    font-size:26px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    background:rgba(255,255,255,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .com-content{
    width: 100%;
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    box-sizing: border-box;
    color:rgba(102,102,102,1);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .com-content div img{
    vertical-align: middle;
    padding: 0 5px;
  }
  .non{
    width: 100%;
    height: 52px;
  }
</style>


