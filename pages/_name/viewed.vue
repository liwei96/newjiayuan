<template>
  <div id="collection">
    <top-view></top-view>
    <div class="other" v-if="false">
      <div class="pro">
        <img src="~/assets/lun02.jpg" alt />
        <div class="pro-msg">
          <h5>
            上课的龙卷风
            <span>在售</span>
          </h5>
          <p class="pro-price">
            <span>53000</span>
            <i>元/m²</i>起
          </p>
          <p class="attr">住宅 | 杭州-临安 | 256m²</p>
          <p class="pro-icon">
            <span class="pro-icon-zhuang">两个</span>
            <span class="pro-icon-type">我的</span>
          </p>
        </div>
      </div>
    </div>
    <div class="isnull">
        <img src="~/assets/viewed.jpg" alt="">
        <p>您暂无浏览记录，快去逛逛吧</p>
        <button>去看楼盘</button>
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
.other {
  padding: 0 4%;
  padding-top: 3.5rem;
  .pro {
    margin-bottom: 1.875rem;
    width: 100%;
    display: flex;
    text-decoration: none;
    img {
      width: 6.875rem;
      height: 5rem;
      margin-right: 0.75rem;
      border-radius: 0.1875rem;
    }
    .pro-msg {
      flex: 1;
      h5 {
        color: #5c5c5c;
        font-size: 1rem;
        font-weight: bold;
        margin-top: -0.25rem;
        margin-bottom: 0.125rem;
        span {
          color: #1fc365;
          font-size: 0.6875rem;
          float: right;
          padding: 0.1875rem 0.375rem;
          background-color: #f0faf1;
          border-radius: 0.125rem;
          font-weight: 400;
        }
      }
      .pro-price {
        color: #7a7a7a;
        font-size: 0.75rem;
        margin-bottom: 0.1875rem;
        span {
          color: #fe582f;
          font-size: 0.9375rem;
        }
        i {
          font-style: normal;
          color: #fe582f;
        }
      }
      .attr {
        color: #7a7a7a;
        font-size: 0.75rem;
        margin-bottom: 0.1875rem;
      }
      .pro-icon {
        .pro-icon-zhuang {
          color: #5aabe5;
          font-size: 0.6875rem;
          padding: 0.1875rem 0.375rem;
          background-color: #f0f5f9;
          margin-right: 0.375rem;
          border-radius: 0.125rem;
        }
        .pro-icon-type {
          color: #888a8f;
          font-size: 0.6875rem;
          padding: 0.1875rem 0.375rem;
          border-radius: 0.125rem;
          background-color: #f7f8fa;
          margin-right: 0.375rem;
        }
      }
    }
  }
}
.isnull {
  position: relative;
  img {
    width: 12.5rem;
    position: absolute;
    top: 10.625rem;
    left: 50%;
    margin-left: -6.25rem;
  }
  p {
    color: #7D7E80;
    font-size: 0.8125rem;
    position: relative;
    text-align: center;
    top: 22.5rem;
    margin-bottom: 1.5rem;
  }
  button {
    background: linear-gradient(270deg, #1FC365, #3FD6A6);
    box-shadow: 0px 0.15625rem 0.3125rem 0px rgba(44, 203, 128, 0.2);
    width: 10rem;
    height: 2.25rem;
    border-radius: 0.25rem;
    text-align: center;
    line-height: 2.25rem;
    color: #fff;
    font-size: 0.875rem;
    border: 0;
    position: relative;
    top: 23.4375rem;
    left: 50%;
    margin-left: -5rem;
  }
}
</style>