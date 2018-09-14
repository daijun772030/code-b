<template>
  <div class="dowm">
  </div>
</template>
<script>
export default {
  data () {
   return {

   } 
  },
  created () {
  },
  beforeCreate () {
    var u = navigator.userAgent;
    var url = ""
    var url1 = ''
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
    var webKit = u.indexOf('AppleWebKit') > -1; /*苹果、谷歌内核*/
    var mobile = !!u.match(/AppleWebKit.*Mobile.*/); /*是否为移动终端*/
    var weixin= u.toLowerCase().indexOf('micromessenger') > -1 /*是否是微信*/
    if (isAndroid) {
      window.location.href="https://www.wandoujia.com/apps/com.example.sjkj?utm_source=share_intent&utm_campaign=app&utm_medium=p4";
    }else if (isiOS) {
      window.location.href="https://itunes.apple.com/us/app/懒猪到家/id1435420262?l=zh&ls=1&mt=8";
    }else {
        window.location.href="https://www.baidu.com/";
    }
  },
  methods: {
    
  }
}
</script>
<style>

</style>


