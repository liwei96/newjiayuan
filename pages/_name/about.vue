<template>
  <div id="about">
    <top-view :jkl="jkl"></top-view>
    <div class="con">
      <h2>
        关于我们
        <span>ABOUT US</span>
      </h2>
      <p>家园新房是杭州易得房科技有限公司打造的一手房信息平台，集房源展示、实时咨询、房产动态跟踪、价格对比等功能于一体。</p>
      <p>www.jy1980.com是我们专属的网站域名，其中“jy”是家园的缩写，“1980”则是为了纪念1980年6月我国开始正式实施住房商品化政策，这两个简写也是家园的初衷，为让更多购房者买到属于自己的家园而努力。</p>
      <p>家园正在打造一个全面的房产信息库，让购房这件事更透明、更简单。目前平台内汇集了碧桂园，恒大，融创，融信、绿城等众多知名房企开发的优质项目。这些楼盘的近期动态和房价变化也都能够做到第一时间更新，为购房者分享着新鲜、全面的房产资讯。而且这些项目信息全部存放在项目数据库中，通过平台的智能搜索便能快速直达。</p>
      <p>我们欢迎有想法有资源的人士以任意方式加入我们平台，你可以选择以分站合作运营、媒体合作，开发商直接推广合作等方式加入我们，古人云“海内存知己，天涯若比邻”，希望我们能有这个机会一起努力，共创房产新时代</p>
      <p>公司位于：浙江省杭州市萧山区宁围街道杭州国际办公中心嘉润铭座7幢2单元1303室-1</p>
      <p class="tel">联系电话：400-718-6686</p>
    </div>
  </div>
</template>
<script>
import '@/static/css/foot.css'
import topView from "@/components/header.vue";
export default {
  components: {
    "top-view": topView,
  },
  async asyncData(context) {
    let jkl = context.params.name;
    return {
      jkl: jkl,
    };
  },
  head() {
    return {
      title: "家园新房-关于我们",
      meta: [
        {
          name: "description",
          content:
            "家园新房"
        },
        {
          name: "keywords",
          content: "家园新房"
        }
      ]
    };
  },
};
</script>
<style lang="less" scoped>
.con {
  padding: 0 4%;
  padding-top: 4.75rem;
  h2 {
    color: #323232;
    font-size: 1.125rem;
    text-align: center;
    position: relative;
    margin-bottom: 1.25rem;
    span {
      color: #f2f2f2;
      font-size: 1.5rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
      top: -0.625rem;
    }
  }
  p {
    color: #626466;
    font-size: 0.8125rem;
    line-height: 1.4375rem;
    margin-bottom: 0.75rem;
    text-indent: 1.625rem;
  }
  .tel {
    text-indent: 0;
  }
}
</style>