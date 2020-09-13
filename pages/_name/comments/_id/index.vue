<template>
  <div id="comments">
    <top-view></top-view>
    <ul class="con">
      <li>
        <div class="top">
          <img src="~/assets/jiapeo.png" alt />
          <div class="topright">
            <h5>154****3787</h5>
            <van-rate
              v-model="value"
              :size="12"
              color="#FF761A"
              void-icon="star"
              void-color="#E9ECEE"
            />
          </div>
        </div>
        <div class="bom">
          <p class="txt">马上要推出小户型了吧，感觉买个89平的楼盘就可以了，不知道公摊要多少</p>
          <div class="type">
            <span class="time">2020-06-09</span>
            <span class="del">删除</span>
            <p class="btn">
              <span class="active">
                <img src="~/assets/noclick.png" alt />
                2
              </span>
              <span>
                <img src="~/assets/zixun.png" alt />
                0
              </span>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <nav-view></nav-view>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import nav from "@/components/nav.vue";
export default {
  components: {
    "top-view": topView,
    "nav-view": nav,
  },
  data() {
    return {
      value: 3,
    };
  },
};
</script>
<style lang="less" scoped>
.con {
  padding: 3.6875rem 4% 3.75rem 4%;
  li {
    .top {
      display: flex;
      margin-bottom: 0.625rem;
      img {
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 50%;
        margin-right: 0.625rem;
      }
      .topright {
        h5 {
          color: #323333;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }
      }
    }
    .bom {
      .txt {
        color: #333333;
        font-size: 0.875rem;
        line-height: 1.3125rem;
        margin-bottom: 0.875rem;
      }
      .type {
        color: #92949a;
        font-size: 0.8125rem;
        .time {
          margin-right: 0.5rem;
        }
        .btn {
          float: right;
          color: #96989e;
          font-size: 0.75rem;
          img {
            width: 0.875rem;
            margin-bottom: -0.125rem;
          }
          .active {
              color: #FF761A;
          }
        }
      }
    }
  }
}
</style>