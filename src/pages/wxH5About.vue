<template>
  <div class="about">
    <div class="banner"></div>
    <div class="about-text">
      <p class="about-ch">关于尚洁</p>
      <p class="about-eg">ABOUT US</p>
    </div>
    <div class="about-content">
      <div class="content-left"></div>
      <div class="content-right"></div>
      <div class="about-contentAll">
        <p>四川尚洁网络科技有限公司简称“尚洁科技”，成立于2018年，位于四川省成都市高新区美年广场，是一家以高新技术为主导的科技公司。</p>
        <p>
          旗下项目“懒猪到家”是本公司基于传统业务模式向更高频次商品服务领域延伸发展出的全新商业模式，
          是基于传统模式向高频领域的重要提升；在O2O模式风行的推动下依托“互联网+”技术大力发展线上经营，
          整合各类O2O生活类目，上门洗衣，家政保洁，钟点工，耗材销售，社区服务等。</p>
        <p>
          公司秉承“务实进取 · 追求卓越”的思想理念，坚持用专注的精神做专业的事，在继续加强移动互联网领域发展的同时，
          逐步涉足旅游、文化、金融等领域，致力将“尚洁科技 ”打造成集科技、教育、旅游、文化、金融为一体的综合型企业。
        </p>
      </div>
    </div>
    <div class="banner1"></div>
    <div class="map">
      <div class="map-child" id="container"></div>
      <div class="address">
        <div class="img">
           <img class="imgqt" src="../../static/images/weizhi2@2x.png" alt="">
           <img src="../../static/images/dianhua2@2x.png" alt="">
           <img src='../../static/images/youxiang2@2x.png' alt="">
        </div>
        <div class="address-text">
          <p>四川省成都市高新区<br>美年广场D座496室</p>
          <p>400-028-6889</p>
          <p>cya@pigcome.com</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './footer.vue'
import BMap from 'BMap'
export default {
  data () {
    return {
    }
  },
  components: {
    Footer
  },
  created () {
     
  },
  mounted () {
    this.baiduMap();
  },
  methods:{
    baiduMap () {
      var map = new BMap.Map('container')//创建地图实列
      var point  = new BMap.Point(104.074841, 30.540294)//创建坐标
      map.centerAndZoom(point,15);
      var marker = new BMap.marker(point);
      map.addOverlay(marker);
      map.enableSrcllWheelzoom(true)
    }
  }
}
</script>
<style scoped>
  .about {
    width: 100%;
    min-height: 100%; 
  }
  .banner {
    width: 100%;
    height: 370px;
    background-image: url('../../static/images/banner1@2x.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .about-text{
    width: 100%;
    height: 138px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .about-ch {
    font-size:24px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .about-eg{
    font-size:22px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(197,197,197,1);
  }
  .about-content {
    width: 100%;
    height: 766px;
    position: relative;
    overflow: hidden;
  }
  .content-left {
    width: 684px;
    height:746px;
    position: absolute;
    left: 11px;
    right: 20px;
    border:1px solid rgba(217,255,250,1);
  }
  .content-right {
    width: 695px;
    height: 740px;
    position: absolute;
    right: 10px;
    top: 26px;
    border:1px solid rgba(184,245,237,1);
  }
  .about-contentAll{
    width: 486px;
    height: 670px;
    margin:50px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

  }
  .about-contentAll p {
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:35px;
    text-align: center;
  }
  .banner1{
    background-image: url('../../static/images/banner2@2x.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height:274px;
    margin-top: 50px;
  }
  .map{
    width: 100%;
    height:347px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .map-child{
    width:470px;
    height: 243px;
    background-color: red;
  }
  .address{
    width: 250px;
    height: 163px;
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .address-text{
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .img{
    height:90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .imgqt{
    margin-top: 20px;
  }
  
  img{
    width: 22px;
    max-height:24;

  }
</style>

