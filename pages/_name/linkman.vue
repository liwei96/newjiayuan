<template>
    <div id="linkman">
        <top-view :jkl="jkl"></top-view>
        <div class="con">
            <img src="~/assets/linkman.png" alt="">
            <p>您还没有联系人</p>
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
    let jkl = context.params.name;
    return {
      jkl: jkl,
    };
  },
  head() {
    return {
      title: "家园新房-我的联系人",
      meta: [
        {
          name: "description",
          content:
            "家园新房"
        },
        {
          name: "Keywords",
          content: "家园新房"
        }
      ]
    };
  },
};
</script>
<style lang="less" scoped>
.con {
    padding-top: 2.75rem;
    text-align: center;
    img {
        width: 10.875rem;
        margin-top: 9.25rem;
        // margin-bottom: 2.5rem;
    }
    p {
        color: #7D7F80;
        font-size: 0.8125rem;
    }
}
</style>