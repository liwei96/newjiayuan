<template>
  <div id="help">
    <header>
      <img class="back" src="~/assets/goback.png" alt />
      <img class="logo" src="~/assets/logo.png" alt />
      <div class="zixuns">
        <img src="~/assets/zixun.png" alt />
        <p>3</p>
      </div>
      <img src="~/assets/mapcai.png" alt class="list" />
    </header>
    <img src="~/assets/lun02.jpg" alt class="topimg" />
    <div class="con">
      <p class="tit">您能接受的总价范围是多少？</p>
      <div class="sliderbox">
        <p class="start">300万</p>
        <p class="end">300万</p>
        <input
          id="ex2"
          type="text"
          class="span2"
          value
          data-slider-min="10"
          data-slider-max="1000"
          data-slider-step="10"
          data-slider-value="[200,800]"
          tooltip="show"
          :tooltip_split="true"
          tooltip_position="top"
        />
      </div>
      <p class="tit">您意向购买哪种户型？</p>
      <div class="type">
        <span class="active">一室</span>
        <span>二室</span>
        <span>三室</span>
        <span>四室</span>
        <span>五室及以上</span>
      </div>
      <p class="tit">您意向购买的区域是？</p>
      <div class="area" @click="show = true">
        <span>不限</span>
        <img src="~/assets/j-more.png" alt />
      </div>
      <p class="tit">您意向购买多大面积？</p>
      <div class="type">
        <span class="active">50m²以下</span>
        <span>50-70m²</span>
        <span>70-100m²</span>
        <span>100m²以上</span>
      </div>
      <p class="tit">您还有其它要求吗？</p>
      <textarea placeholder="说说您的想法，让我们更好的服务您"></textarea>
      <button>提交</button>
    </div>
    <popup v-model="show" position="bottom" :style="{ height: '14.375rem' }">
      <div class="bomm">
        <div class="top">
          <span class="no">取消</span>
          <span class="yes">确定</span>
        </div>
        <div class="bom">
          <span class="active">不限</span>
          <span>西湖区</span>
          <span>西湖区</span>
          <span>西湖区</span>
          <span>西湖区</span>
        </div>
      </div>
    </popup>
  </div>
</template>
<script>
import { Popup } from "vant";
export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    Popup,
  },
  mounted() {
    var slider = new Slider("#ex2", {});
    let that = this;
    $("#ex2").on("slide", function () {
      var start = $(".min-slider-handle").attr("aria-valuenow");
      var end = $(".max-slider-handle").attr("aria-valuenow");
      console.log(start, end);
      // console.log(that.starts);
      // console.log(end);
    });
  },
};
</script>
<style lang="less" scoped>
@import url("https://cdn.bootcss.com/bootstrap-slider/10.6.1/css/bootstrap-slider.min.css");
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2.75rem;
  z-index: 1;
  background-color: #fff;
  // position: relative;
  .back {
    width: 1.25rem;
    margin-left: 1rem;
  }
  .logo {
    width: 3.125rem;
  }
  .home {
    width: 1.25rem;
    margin-right: 1rem;
  }
  .zixuns {
    margin-right: 1.25rem;
    position: absolute;
    right: 9%;
    top: 0.68rem;
    img {
      width: 1.5rem;
    }
    p {
      position: absolute;
      width: 0.8125rem;
      height: 0.8125rem;
      border-radius: 50%;
      text-align: center;
      line-height: 0.8125rem;
      background-color: #ff4040;
      color: #fff;
      font-size: 0.625rem;
      top: -0.40625rem;
      right: -0.1875rem;
    }
  }
  .list {
    width: 1.25rem;
    margin-right: 4%;
  }
}
.topimg {
  width: 100%;
  height: 6.25rem;
  margin-bottom: 1.25rem;
}
.con {
  padding: 0 4%;
  .tit {
    color: #333333;
    font-size: 1rem;
    margin-bottom: 1.375rem;
  }
  .sliderbox {
    padding-top: 3rem;
    margin-bottom: 2.25rem;
    position: relative;
    /deep/.slider.slider-horizontal {
      width: 21.5625rem;
      .slider-track {
        height: 0.1875rem;
        border-radius: 0.0625rem;
        .slider-selection {
          background-color: #20c466;
          background-image: none;
        }
        .slider-track-low,
        .slider-track-high {
          background-color: #eee;
        }
      }
      .slider-handle {
        background-color: #fff;
        background-image: none;
        top: -0.25rem;
        box-shadow: 0.03125rem 0.0625rem 0.15625rem 0px rgba(6, 0, 1, 0.12);
        border-radius: 0.1875rem;
      }
    }
    p {
      position: absolute;
      top: 0;
      width: 3.75rem;
      height: 1.75rem;
      border-radius: 0.125rem;
      border: 0.03125rem solid #f5f5f5;
      box-shadow: 0.03125rem 0.09375rem 0.3125rem 0px rgba(0, 0, 0, 0.03);
      text-align: center;
      line-height: 1.75rem;
      color: #30cb72;
      font-size: 0.9375rem;
      font-weight: bold;
    }
    .start {
      left: 5.5rem;
    }
    .end {
      right: 4.75rem;
    }
  }
  .type {
    margin-bottom: 1.5rem;
    span {
      display: inline-block;
      width: 4.6875rem;
      height: 1.625rem;
      border-radius: 0.1875rem;
      border: 0.03125rem solid #f3f4f5;
      box-shadow: 0.03125rem 0.09375rem 0.3125rem 0px rgba(0, 0, 0, 0.03);
      text-align: center;
      line-height: 1.625rem;
      color: #4b4c4d;
      font-size: 0.75rem;
      margin-right: 0.55rem;
      margin-bottom: 0.75rem;
    }
    span:nth-of-type(4n) {
      margin-right: 0;
    }
    .active {
      background: linear-gradient(-270deg, #20c466, #3fd6a7);
      color: #fff;
    }
  }
  .area {
    width: 21.5625rem;
    height: 2.5rem;
    border-radius: 0.375rem;
    border: 0.0625rem solid #ccc;
    line-height: 2.5rem;
    color: #646566;
    font-size: 0.9375rem;
    background-color: #fafafa;
    margin-bottom: 2.25rem;
    img {
      width: 1rem;
      float: right;
      margin-right: 0.875rem;
      margin-top: 0.6875rem;
    }
    span {
      margin-left: 1.125rem;
    }
  }
  textarea {
    height: 5.625rem;
    width: 21rem;
    border-radius: 0.375rem;
    border: 0.03125rem solid #ccc;
    background-color: #fafafa;
    padding-left: 0.625rem;
    padding-top: 0.625rem;
    margin-bottom: 2.125rem;
  }
  button {
    background: linear-gradient(270deg, #20c466, #3fd6a7);
    width: 100%;
    height: 2.75rem;
    text-align: center;
    line-height: 2.75rem;
    border-radius: 0.375rem;
    border: 0;
    color: #fff;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
}
/deep/.bomm {
  .top {
    padding: 0 1.125rem;
    height: 3.125rem;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .yes {
      color: #2ac66d;
      font-size: 1rem;
    }
    .no {
      color: #7f7f7f;
      font-size: 1rem;
    }
  }
  .bom {
    height: 11.25rem;
    overflow: auto;
    padding: 0 4%;
    padding-top: 2rem;
    span {
      display: inline-block;
      width: 4.6875rem;
      height: 1.5rem;
      border-radius: 0.125rem;
      text-align: center;
      line-height: 1.5rem;
      background-color: #f5f6f7;
      color: #646566;
      font-size: 0.8125rem;
      margin-right: 0.66rem;
      margin-bottom: 1.375rem;
    }
    span:nth-of-type(4n) {
      margin-right: 0;
    }
    .active {
      background-color: #f1f8f4;
      color: #2ac66d;
    }
  }
}
</style>