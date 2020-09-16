<template>
  <div id="order">
    <div class="topimg">
      <img src="~/assets/order.jpg" alt />
    </div>
    <p class="tit">
      已有
      <span>781</span>人成功预约免费专车看房
    </p>
    <div class="con">
      <p class="name">您的称呼:</p>
      <div class="radio">
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio name="1">
            先生
            <template #icon="props">
              <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
            </template>
          </van-radio>
          <van-radio name="2">
            女士
            <template #icon="props">
              <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
            </template>
          </van-radio>
        </van-radio-group>
      </div>
      <div class="time">
        <p class="name">预约看房时间:</p>
        <div class="txt" @click="show=true">
          <input type="text" placeholder="请选择您要预约的看房时间" disabled  />
          <img src="~/assets/j-more.png" alt />
        </div>
      </div>
      <div class="time">
        <p class="name">
          想看的楼盘
          <span>（非必填）</span>
        </p>
        <div class="txt">
          <input type="text" placeholder="选择楼盘" disabled />
          <img src="~/assets/j-more.png" alt />
        </div>
      </div>
      <button>确定</button>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="show=false"
        item-height="1.875rem"
      />
    </van-popup>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
export default {
  components: {
    "top-view": topView,
  },
  data() {
    return {
      radio: "1",
      activeIcon: "https://img.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img.yzcdn.cn/vant/user-inactive.png",
      minDate: new Date(),
      maxDate: new Date(2025, 10, 1),
      show: false,
      currentDate: "",
    };
  },
};
</script>
<style lang="less" scoped>
.topimg {
  img {
    width: 100%;
    height: 6.25rem;
    margin-bottom: 1.375rem;
  }
}
.tit {
  text-align: center;
  color: #333333;
  font-size: 0.9375rem;
  margin-bottom: 2.75rem;
  span {
    color: #ff5454;
    font-weight: bold;
  }
}
.con {
  padding: 0 4%;
  .name {
    color: #121212;
    font-size: 0.8125rem;
    margin-bottom: 0.875rem;
    span {
      color: #969899;
      font-size: 0.625rem;
    }
  }
  .radio {
    margin-bottom: 1.75rem;
    .van-radio {
      margin-right: 2.5rem;
    }
    .img-icon {
      height: 1rem;
      margin-right: 0.625rem;
    }
  }
  .time {
    margin-bottom: 1.75rem;
    .txt {
      position: relative;
      input {
        width: 20.6875rem;
        height: 2.75rem;
        border-radius: 0.25rem;
        border: 0.0625rem solid #d0d2d4;
        padding-left: 0.875rem;
        font-size: 0.875rem;
        background-color: #fafafa;
      }
      input::-webkit-input-placeholder {
        color: #969899;
        font-size: 0.875rem;
      }
      input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #969899;
        font-size: 0.875rem;
      }
      input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #969899;
        font-size: 0.875rem;
      }
      input:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #969899;
        font-size: 0.875rem;
      }
      img {
        width: 1rem;
        position: absolute;
        right: 0.75rem;
        top: 0.875rem;
      }
    }
  }
  button {
    margin-top: 1.875rem;
    width: 100%;
    height: 2.75rem;
    border-radius: 0.375rem;
    background: linear-gradient(-270deg, #20c466, #3fd6a7);
    text-align: center;
    line-height: 2.75rem;
    border: 0;
    color: #fff;
    font-size: 1rem;
  }

}
</style>