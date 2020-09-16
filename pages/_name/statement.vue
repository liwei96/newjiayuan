<template>
    <div id="privacy">
        <top-view></top-view>
        <div class="con">
            <h2>家园新房版权声明</h2>
            <p>1、家园新房转载的或者任何信息发布人通过家园新房平台发布的信息或内容，并不代表家有新房的意见及观点，也不意味着本网赞同其观点或证实其内容的真实性。</p>
            <p>2、家园新房转载的或者任何通过家园新房平台发布的信息、文字、图片、音视频等资料均由本网站用户提供，其真实性、准确性和合法性由信息发布人负责。家有新房不提供任何保证，并不承担任何法律责任。</p>
            <p>3、家园新房所转载的或者任何通过家园新房平台发布的信息、文字、图片、音视频等资料，如果侵犯了第三方的知识产权或其他权利，责任由信息发布者或转载者本人承担，本网站对此不承担责任。 </p>
            <p>4、对本网版权所有之内容，已经本网书面许可的单位或个人，在使用时必须注明“稿件来源：家有新房”，并标明本网网址www.jy1980 .com，违者本网将依法追究其相关法律责任。 </p>
            <p>5、转载或引用本网内容必须是以新闻性或资料性公共免费信息服务为目的的合理、善意使用，不得对本网内容原意进行曲解、修改，同时必须保留本网注明的“稿件来源”，并自负版权等法律责任。 </p>
            <p>6、凡本网注明“来源：XXX ”的文/图等资料，本网转载出于传递更多信息之目的，并不意味着赞同其观点或证实其内容的真实性。 </p>
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