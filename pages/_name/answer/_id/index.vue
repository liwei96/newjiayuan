<template>
  <div id="answer">
    <top-view></top-view>
    <div class="topmsg">
      <p class="tit">
        <span>问</span> 本项目厨房管道的排风原理和方式是什么？会不会出 现油烟倒灌情况?
      </p>
      <div class="ject-top">
        <div class="top-left">
          <img src="~/assets/lun02.jpg" alt />
        </div>
        <div class="top-right">
          <h4>
            荣盛檀越府
            <span>在售</span>
          </h4>
          <p class="pri">
            <span>17000</span>元/m²
          </p>
          <p class="typemsg">住宅 | 杭州-江干 | 地铁楼盘</p>
          <p class="icon">
            <span class="zu">精装</span>
            <span>刚需楼盘</span>
          </p>
        </div>
      </div>
    </div>
    <div class="answer" v-if="false">
      <div class="top">
        <img src="~/assets/people.png" alt />
        <div class="promsg">
          <h5>
            李聪然
            <span>专业解答</span>
          </h5>
          <p>
            最近咨询
            <span>147</span>人
          </p>
        </div>
        <button>免费咨询</button>
      </div>
      <p class="msg">厨房排气道采用等截面变压式排气道，并在进气口设置可调变压防火止回阀，在管道内部，气...</p>
      <p class="time">
        2019-06-08
        <span>
          <img src="~/assets/noclick.png" />有用(12)
        </span>
      </p>
    </div>
    <div class="answer" v-if="false">
      <div class="top">
        <img src="~/assets/jiapeo.png" alt />
        <div class="promsg">
          <h5>138****3845</h5>
          <p>家园房友</p>
        </div>
      </div>
      <p class="msg">厨房排气道采用等截面变压式排气道，并在进气口设置可调变压防火止回阀，在管道内部，气...</p>
      <p class="time">
        2019-06-08
        <span>
          <img src="~/assets/noclick.png" />有用(12)
        </span>
      </p>
    </div>
    <div class="btn">
      <button>我来回答</button>
    </div>
    <div class="line"></div>
    <div class="likes">
      <h4>相关楼盘问答</h4>
      <p class="tit">
        <span>问</span> 本项目厨房管道的排风原理和方式是什么？会不会出 现油烟倒灌情况?
      </p>
      <p class="tit">
        <span>问</span> 本项目厨房管道的排风原理和方式是什么？会不会出 现油烟倒灌情况?
      </p>
      <button>查看杭州全部楼盘问答</button>
    </div>
    <div class="line"></div>
    <div class="other">
      <h3>猜你喜欢</h3>
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
.topmsg {
  padding: 0 4%;
  padding-top: 4rem;
  padding-bottom: 1.25rem;
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
  .ject-top {
    display: flex;
    box-shadow: 0px 0px 1.1875rem 0.09375rem rgba(0, 0, 0, 0.03);
    border-radius: 0.5rem;
    padding: 0.9375rem 0.75rem;
    .top-left {
      img {
        width: 6.875rem;
        height: 5rem;
        border-radius: 0.1875rem;
        margin-right: 0.625rem;
      }
    }
    .top-right {
      flex: 1;
      h4 {
        color: #474a4e;
        font-size: 0.9375rem;
        margin-bottom: 0.3rem;
        span {
          float: right;
          display: block;
          width: 2.25rem;
          height: 1.0625rem;
          border-radius: 0.125rem;
          background-color: #e9f7ea;
          font-weight: 400;
          text-align: center;
          line-height: 1.0625rem;
          color: #20c658;
          font-size: 0.6875rem;
        }
      }
      .pri {
        color: #ff5454;
        font-size: 0.75rem;
        margin-bottom: 0.2rem;
        span {
          font-size: 0.875rem;
        }
      }
      .typemsg {
        color: #7d7f80;
        font-size: 0.75rem;
        margin-bottom: 0.2rem;
      }
      .icon {
        span {
          color: #7d7f80;
          font-size: 0.75rem;
          padding: 0.1875rem 0.3125rem;
          background-color: #f5f5f5;
          border-radius: 0.125rem;
          margin-right: 0.375rem;
        }
        .zu {
          background-color: #f1f6f9;
          color: #4aabf2;
        }
      }
    }
  }
}
.answer {
  border-top: 0.03125rem solid #f3f3f3;
  padding: 0 4%;
  .top {
    display: flex;
    align-items: center;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
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
        span {
          color: #ff6a48;
        }
      }
    }
    button {
      color: #fff;
      font-size: 0.75rem;
      background: linear-gradient(270deg, #20c466, #3fd6a7);
      box-shadow: 0.03125rem 0.15625rem 0.3125rem 0px rgba(44, 204, 128, 0.2);
      width: 4.375rem;
      height: 1.625rem;
      border-radius: 0.8125rem;
      text-align: center;
      line-height: 1.625rem;
      border: 0;
      margin-left: auto;
    }
  }
  .msg {
    color: #646566;
    font-size: 0.875rem;
    margin-top: 0.875rem;
    background-color: #f7f7f7;
    padding: 0.875rem;
    margin-bottom: 1.25rem;
  }
  .time {
    color: #96989a;
    font-size: 0.75rem;
    margin-bottom: 1.25rem;
    span {
      float: right;
      color: #ff761a;
      font-size: 0.6875rem;
      img {
        width: 0.875rem;
        margin-right: 0.125rem;
        margin-bottom: -0.125rem;
      }
    }
  }
}
.btn {
  padding: 0 4%;
  button {
    width: 100%;
    height: 2.25rem;
    border-radius: 0.125rem;
    background-color: #f1f8f4;
    border: 0;
    text-align: center;
    line-height: 2.25rem;
    color: #2ac66e;
    font-size: 0.9375rem;
    margin-bottom: 1.25rem;
  }
}
.line {
  width: 100%;
  height: 0.625rem;
  background-color: #f7f7f7;
}
.likes {
  padding: 0 4%;
  h4 {
    color: #323333;
    font-size: 1.0625rem;
    font-weight: 400;
    margin-top: 1.125rem;
    margin-bottom: 1.25rem;
  }
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
  button {
    width: 100%;
    height: 2.25rem;
    border-radius: 0.125rem;
    background-color: #f1f8f4;
    border: 0;
    text-align: center;
    line-height: 2.25rem;
    color: #2ac66e;
    font-size: 0.9375rem;
    margin-bottom: 1.25rem;
  }
}
.other {
  padding: 0 4%;
  padding-bottom: 3.75rem;
  h3 {
    color: rgba(50, 51, 51, 1);
    font-size: 1rem;
    margin-bottom: 1.25rem;
    margin-top: 1.125rem;
  }
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
</style>