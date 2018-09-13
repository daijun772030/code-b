<template>
  <div class="footer">
    <div class="footer-header">
      尚洁科技 共创简单生活
    </div>
    <div class="footer-address">
      <p>©2018 尚洁科技 蜀ICP备18026253号-1</p>
      <p>四川尚洁网络科技有限公司联系地址：四川省成都市高新区美年广场D座496室</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scoped>
  .footer {
    width: 100%;
    height:317px;
    background:rgba(46,227,182,1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .footer-header {
    font-size:34px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1)
  }
  .footer-address {
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
</style>

