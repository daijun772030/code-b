<template>
  <div class="liupeijia">
    <div class="item1 item"></div>
    <div class="item2 item"></div>
    <div class="item3 item"></div>
    <div class="item4 item"></div>
    <div class="item5 item"></div>
    <div class="item6 item"></div>
    <audio src="/static/vidio/anywn.mp3" autoplay="autoplay"  loop="loop" :id="music" hidden></audio>
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
  .liupeijia {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .item {
    width: 30%;
    border: 1px solid yellow;
    height:300x;
  }
  .item1 {
    background-image: url('../../static/images/wx1.jpg');
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center;
  }
  .item2 {
    background-image: url('../../static/images/wx2.jpg');
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center;
  }
  .item3 {
    background-image: url('../../static/images/wx3.jpg');
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center;
  }
  .item3 {
    background-image: url('../../static/images/wx3.jpg');
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center;
  }
  .item4 {
    background-image: url('../../static/images/wx4.jpg');
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center;
  }
  .item5 {
    background-image: url('../../static/images/wx5.jpg');
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center;
  }
  .item6 {
    background-image: url('../../static/images/wx6.jpg');
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center;
  }
</style>
