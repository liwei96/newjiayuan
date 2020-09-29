<template>
  <div id="cancel">
    <top-view :jkl="jkl"></top-view>
    <div class="con">
      <div class="hui-con" v-if="have">
        <div class="hui-left">
          <h6>
            最高
            <span>5000</span>元购房优惠
            <i>（{{time}}截止）</i>
          </h6>
          <p>家园新房专供平台客户</p>
        </div>
        <div class="hui-right">
          <button>已领取</button>
          <p><span>123人</span>已领取</p>
        </div>
      </div>
      <div class="isnull" v-if="!have">
        <img src="~/assets/cancel.png" alt="" />
        <p>您还没有领取的优惠券</p>
      </div>
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
      title: "家园新房-个人优惠券",
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
  data() {
    return {
      time: "",
      have:false
    };
  },
  mounted() {
    var date1 = new Date();
    var date2 = new Date(date1);
    date2.setDate(date1.getDate() + 7);
    var time2 = date2.getMonth() + 1 + "月" + date2.getDate() + "日";
    this.time = time2;
    if($cookies.get('have')){
      this.have = true
    }
  },
};
</script>
<style lang="less" scoped>
.con {
  padding: 0 4%;
  padding-top: 3.625rem;
  .hui-con {
    width: 100%;
    height: 4.375rem;
    border-radius: 0.0625rem;
    margin-top: 1.25rem;
    background: url("~assets/b1.png") no-repeat;
    background-size: 100%;
    justify-content: space-between;
    display: flex;
    .hui-left {
      padding-left: 1rem;
      padding-top: 0.625rem;
      float: left;
      h6 {
        color: #ff7519;
        font-size: 0.625rem;
        margin-bottom: 0.4rem;
        span {
          font-size: 1.25rem;
          font-weight: bold;
        }
        i {
          font-style: normal;
          color: #211c19;
          font-size: 0.625rem;
          font-weight: 400;
        }
      }
      p {
        color: #af917d;
        font-size: 0.75rem;
      }
    }
    .hui-right {
      padding-top: 0.7rem;
      float: right;
      margin-right: 0.9375rem;
      button {
        width: 4.6875rem;
        height: 1.625rem;
        text-align: center;
        line-height: 1.625rem;
        color: #fff;
        font-size: 0.75rem;
        border: 0;
        background-color: #ff7519;
        border-radius: 0.1875rem;
      }
      p {
        color: #ff7519;
        font-size: 0.75rem;
        margin-top: 0.2rem;
      }
    }
  }
  .isnull {
    text-align: center;
    img {
      width: 12.5rem;
      margin-top: 6.25rem;
    }
    p {
      color: #7d7f80;
      font-size: 0.8125rem;
    }
  }
}
</style>