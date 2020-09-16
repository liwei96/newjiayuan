<template>
    <div id="privacy">
        <top-view></top-view>
        <div class="con">
            <h2>家园新房隐私保护</h2>
            <p>隐私权是用户的重要权利，对于家园新房的所有用户，我们均会以负责的态度对待您的个人信息，特此制定家园新房对用户相关信息所采取的收</p>
            <p>家园新房隐私保护声明系本网站保护用户个人隐私的公告和承诺，请您务必仔细阅读。</p>
            <h2>一、用户非个人信息</h2>
            <p>我们将通过您的IP地址来收集非个人化的信息，例如用户的浏览器性质、操作系统种类、给您提供接入服务的ISP域名、您访问本网的顺序和链接途径、您访问时所在的地理位置等。通过收集上述信息，我们将优化在您计算机屏幕上显示的页面，同时进行客流量统计、访问者阅读习惯整理等，从而改进本网站的管理和服务。 这些无关个人身份的信息能帮助我们识别家有新房最受欢迎的地区和内容等，并帮助我们确定推广活动的有效性。此外，我们也可能将这些信息披露给我们的广告客户，使他们知道点击他们广告的效果数据。</p>
        </div>
    </div>
</template>
<script>
import topView from "@/components/header.vue";
export default {
  components: {
    "top-view": topView,
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