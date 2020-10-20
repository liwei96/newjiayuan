<template>
  <div>
    <Nuxt class="allbox" />
    <footer v-if="home" id="foott">
      <ul>
        <li>
          <nuxt-link :to="'/' + jkl + '/weike/before/56'">买房百科</nuxt-link>
        </li>
        <li><nuxt-link :to="'/' + jkl + '/infos/46'">房产资讯</nuxt-link></li>
        <li><nuxt-link :to="'/' + jkl + '/join'">城市加盟</nuxt-link></li>
        <li><nuxt-link :to="'/' + jkl + '/privacy'">隐私政策</nuxt-link></li>
      </ul>
      <p>杭州亚汉网络科技有限公司版权所有 &nbsp;&nbsp;电话：400-718-6686</p>
      <p>
        网络经营许可证：<a href="http://www.beian.gov.cn/portal/index.do"
          >浙ICP备19015909号-1</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "家园新房",
      meta: [
        {
          name: "description",
          content: "家园新房",
        },
        {
          name: "keywords",
          content: "家园新房",
        },
      ],
    };
  },
  data() {
    return {
      jkl: "",
      home: true,
      url: "",
    };
  },
  mounted() {
    if(localStorage.getItem('uuid')){
      $cookies.set('uuid',localStorage.getItem('uuid'))
      this.$store.dispatch("setuuid", localStorage.getItem('uuid'));
    }else{
      $cookies.set('uuid',this.$route.query.uuid)
      this.$store.dispatch("setuuid", this.$route.query.uuid);
      localStorage.setItem('uuid',this.$route.query.uuid)
    }
    
    this.jkl = this.$route.params.name;
    // console.log(this.$route.path) RPa7YGmBjxbX1602733863000
    this.url = this.$route.path;
    // if(this.$route.path.indexOf('home') !==-1){
    //   this.home = false
    // } ?uuid=mFycFkMNE5by1602557156000
    var _hmt = _hmt || [];
    (function () {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?230bc6d42c4b990e03d4981911da5ffe";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
    resetrem();
    //切换屏幕 （横屏竖屏）
    window.addEventListener("orientationchange", resetrem);
    //resize：屏幕的大小发生改变就触发监听事件resetrem
    window.addEventListener("resize", resetrem);
    function resetrem() {
      var html = document.querySelector("html"); //获取到html元素
      var width = html.getBoundingClientRect().width; //获取屏幕的宽度
      html.style.fontSize = width / 23.5 + "px";
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to);
  },
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
body,
html {
  max-width: 33.75rem;
  margin: 0 auto;
}
.allbox {
  min-height: 100vh;
}
footer {
  height: 6.25rem;
  background-color: #f0f4f5;
  color: #88a1ae;
  font-size: 0.75rem;
  margin-bottom: 50px;
  z-index: 1000;
  position: relative;
  ul {
    display: flex;
    justify-content: center;
    padding-top: 0.9375rem;
    margin-bottom: 0.75rem;
    li {
      margin-left: 1.5rem;
      a {
        color: #88a1ae;
      }
    }
    li:nth-of-type(1) {
      margin-left: 0;
    }
  }
  p {
    text-align: center;
    margin-bottom: 0.5rem;
    a {
      color: #88a1ae;
      text-decoration: underline;
    }
  }
}
</style>
