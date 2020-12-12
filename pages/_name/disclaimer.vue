<template>
  <div id="privacy">
    <top-view :jkl="jkl"></top-view>
    <div class="con">
      <h2>{{txt}}新房免责协议</h2>
      <p>{{txt}}新房对于本网服务包含的或用户经由或从任何与本网服务有关的途径所获得的任何内容、信息或广告，不声明或保证其正确性或可靠性；并且对于用户经本服务上的广告、展示而购买、取得的任何产品、信息或资料，本网不负保证责任。用户自行承担担使用本服务的风险。本网有权但无义务，改善或更正本服务任何部分之任何疏漏、错误。本网不保证以下事项（包括但不限于）：</p>
      <p>
        （1）楼盘信息免责声明
        <br />楼盘信息由开发商提供，最终以政府部门登记备案为准，请谨慎核查，如该楼盘信息有误，您可以拨打我们的投诉电话400-718-6686。
      </p>
      <p>
        （2）新闻内容免责声明
        <br />凡本站注明 “来自：XXX(非{{txt}}新房)”的新闻稿件和图片作品，系本站转载自其它媒体，转载目的在于信息传递，并不代表本站赞同其观点和对其真实性负责。如有新闻稿件和图片作品的内容、版权以及其它问题的，请联系本站新闻中心。
      </p>
      <p>
        （3）用户言论免责声明
        <br />网友问答仅供其表达个人疑惑或见解，并不代表本网立场，对其正确性、合法性、正当性本网不负任何责任
      </p>
    </div>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import '@/static/css/foot.css'
export default {
  components: {
    "top-view": topView,
  },
  async asyncData(context) {
    let host = context.store.state.host
    let jkl = context.params.name;
    let city = context.store.state.city;
    let token = context.store.state.cookie.token;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/phone/head/foot", {
          params: {
            city: city,
            token: token,
          },
        })
        .then((resp) => {
          let data = resp.data;
          // console.log(data)
          return data;
        }),
    ]);
    return {
      jkl: jkl,
      title:res.common.header.title,
      description:res.common.header.description,
      keywords:res.common.header.keywords,
      host: host
    };
  },
  head() {
    return {
      title: this.title || "家园新房-免责协议",
      meta: [
        {
          name: "description",
          content: this.description || 
            "家园新房"
        },
        {
          name: "keywords",
          content: this.keywords || "家园新房"
        }
      ]
    };
  },
  data(){
    return {
      txt: '家园'
    }
  },
  mounted(){
    if(this.host == 0) {
      this.txt = '家园'
    }else {
      this.txt = '易得房'
    }
  }
};
</script>
<style lang="less" scoped>
.con {
  padding: 0 4%;
  padding-top: 3.875rem;
  h2 {
    color: #323233;
    font-size: 0.9375rem;
    margin-bottom: 0.75rem;
  }
  p {
    color: #4b4c4d;
    font-size: 0.8125rem;
    line-height: 1.4375rem;
    margin-bottom: 0.75rem;
  }
}
</style>