<template>
  <div id="questions">
    <top-view></top-view>
    <div class="topimg">
      <img src="~/assets/lun02.jpg" alt />
    </div>
    <ul>
      <li>
        <p class="tit">
          <span>问</span> 本项目厨房管道的排风原理和方式是什么？会不会出 现油烟倒灌情况?
        </p>
        <div class="answer" v-if="false">
          <div class="top">
            <img src="~/assets/people.png" alt />
            <div class="promsg">
              <h5>
                李聪然
                <span>专业解答</span>
              </h5>
              <p>咨询师帮您在线解答</p>
            </div>
          </div>
          <p class="msg">
            厨房排气道采用等截面变压式排气道，并在进气口设置可调变压防火止回阀，在管道内部，气...
            <span>[全文]</span>
          </p>
        </div>
        <div class="btn" v-if="false">
          <button>我来回答</button>
        </div>
        <div class="answer">
          <div class="top">
            <img src="~/assets/jiapeo.png" alt />
            <div class="promsg">
              <h5>
                167****4567
              </h5>
              <p>家园房友</p>
            </div>
          </div>
          <p class="msg">
            厨房排气道采用等截面变压式排气道，并在进气口设置可调变压防火止回阀，在道内部，气...
            <span>[全文]</span>
          </p>
        </div>
      </li>
    </ul>
    <div class="fix"><img src="~/assets/lun02.jpg" alt=""></div>
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
      navnum: 0,
    };
  },
};
</script>
<style lang="less" scoped>
.topimg {
  padding-top: 2.75rem;
  margin-bottom: 0.875rem;
  img {
    width: 100%;
    height: 6.25rem;
  }
}
ul {
  padding: 0 4%;
  padding-bottom: 4.375rem;
  li {
    .tit {
      color: #323333;
      font-size: 0.875rem;
      line-height: 1.40625rem;
      margin-bottom: 1rem;
      span {
        padding: 0.1875rem;
        border-radius: 0.125rem;
        background-color: #ff5454;
        color: #fff;
        font-size: 0.625rem;
      }
    }
    .answer {
      background-color: #f7f7f7;
      padding: 0.875rem;
      .top {
        display: flex;
        img {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          margin-right: 0.5rem;
        }
        .promsg {
          h5 {
            color: #131313;
            font-size: 0.9375rem;
            font-weight: 400;
            margin-bottom: 0.125rem;
            span {
              padding: 0.125rem 0.1875rem;
              color: #fff;
              font-size: 0.625rem;
              background-color: #ffc755;
              border-radius: 0.125rem;
              margin-left: 0.125rem;
            }
          }
          p {
            color: #96989a;
            font-size: 0.75rem;
          }
        }
      }
      .msg {
        color: #646566;
        font-size: 0.875rem;
        margin-top: 0.875rem;
        span {
          color: #628bb9;
          font-size: 0.875rem;
        }
      }
    }
    .btn {
      overflow: hidden;
      button {
        width: 4.375rem;
        height: 1.625rem;
        border-radius: 0.8125rem;
        text-align: center;
        line-height: 1.625rem;
        border: 0.03125rem solid #afb1b3;
        color: #646566;
        font-size: 0.75rem;
        float: right;
        background-color: #fff;
      }
    }
  }
}
.fix {
    width: 3.125rem;
    height: 3.125rem;
    position: fixed;
    right: 0.9375rem;
    bottom: 8.125rem;
    img {
        border-radius: 50%;
        width:100%;
        height: 100%;
    }
}
</style>