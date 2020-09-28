<template>
    <div id="privacy">
        <top-view :jkl="jkl"></top-view>
        <div class="con">
            <h2>欢迎您使用家园新房的服务</h2>
            <p>为使用家园新房的服务，您应当阅读并遵守本《家有新房用户服务协议》（以下简称“本协议”）。本协议是用户与家有新房之间的法律协议，是用户注册家园新房账号并使用家园新房平台服务或非经注册程序直接使用家园新房平台服务时的通用条款。请您务必审慎阅读、充分理解本协议各条款内容，特别是免除或者限制责任的条款、管辖与法律适用条款。限制、免责条款可能以黑体加粗或加下划线的形式提示您重点注意。除非您已阅读并接受本协议所有条款，否则您无权使用家园新房提供的服务。您使用家园新房的服务即视为您已阅读并同意本协议的约束</p>
            <h2>一、定义</h2>
            <p>家园新房平台，是指杭州易得房科技有限公司旗下运营的家园新房（www.jy1980.com)、家园新房无线站点（m.jy1980.com）用户，包含注册用户和非注册用户，以下亦称为“您”。注册用户是指通过家园新房平台完成全部注册程序后，使用家园新房平台服务或家有新房网站资料的用户。非注册用户是指未进行注册、直接登录家园新房平台或通过其他家园新房平台允许的方式进入家园新房平台直接或间接</p>
        </div>
    </div>
</template>
<script>
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
      title: "家园新房-家园服务",
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
    padding-top: 3.875rem;
    h2 {
        color: #323233;
        font-size: 0.9375rem;
        margin-bottom: 0.75rem;
    }
    p {
        color: #4B4C4D;
        font-size: 0.8125rem;
        line-height: 1.4375rem;
        margin-bottom: 0.75rem;
    }
}
</style>