<template>
  <div id="promsg">
    <top-view></top-view>
    <div class="topnav">
      <ul>
        <li :class="navnum == 0?'active':''" @click="navnum = 0">
          实时动态
          <p></p>
        </li>
        <li :class="navnum == 1?'active':''" @click="navnum = 1">
          加推时间
          <p></p>
        </li>
        <li :class="navnum == 2?'active':''" @click="navnum = 2">
          交房时间
          <p></p>
        </li>
        <li :class="navnum == 3?'active':''" @click="navnum = 3">
          五证信息
          <p></p>
        </li>
      </ul>
    </div>
    <div class="dynamic" v-if="navnum == 0">
      <ul>
        <li>
          <p class="time">2019-04-08</p>
          <div class="con">
            <h4>锦云澜天里最新在售房源</h4>
            <p>住宅产品静待推出，均价18590元/㎡，主要户型为建筑面积80-建筑面积80-建筑面积80-115㎡三居（以上信息仅供参考，具体一房一...</p>
            <div class="imgbox">
              <img src="~/assets/lun02.jpg" alt />
              <img src="~/assets/lun02.jpg" alt />
              <img src="~/assets/lun02.jpg" alt />
            </div>
            <span></span>
          </div>
        </li>
        <li>
          <p class="time">2019-04-08</p>
          <div class="con">
            <h4>锦云澜天里最新在售房源</h4>
            <p>住宅产品静待推出，均价18590元/㎡，主要户型为建筑面积80-建筑面积80-建筑面积80-115㎡三居（以上信息仅供参考，具体一房一...</p>
            <img src="~/assets/lun02.jpg" alt />
            <span></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="push" v-if="navnum == 1">
      <ul>
        <li>
          <p></p>加推时间：2020-06-18
        </li>
        <li>
          <p></p>加推时间：2020-06-18
        </li>
      </ul>
    </div>
    <div class="push" v-if="navnum == 2">
      <ul>
        <li>
          <p></p>交房时间：2020-06-18
        </li>
        <li>
          <p></p>交房时间：2020-06-18
        </li>
      </ul>
    </div>
    <div class="push" v-if="navnum == 3">
      <ul>
        <li>
          <p></p>临售许（2020）第00957-00960号
        </li>
        <li>
          <p></p>临售许（2020）第00957-00960号
        </li>
      </ul>
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
.topnav {
  padding-top: 3.5rem;
  margin-bottom: 0.875rem;
  padding-bottom: 0.875rem;
  border-bottom: 0.03125rem solid #f5f5f5;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      color: #323333;
      font-size: 0.875rem;
    }
    .active {
      color: #2ac66e;
      font-size: 0.875rem;
      font-weight: bold;
      position: relative;
      p {
        background-color: #2ac66e;
        width: 1.5625rem;
        height: 0.125rem;
        border-radius: 0.0625rem;
        left: 50%;
        position: absolute;
        margin-left: -0.78125rem;
        bottom: -0.25rem;
      }
    }
  }
}
.dynamic {
  padding: 0 4%;
  padding-bottom: 4.375rem;
  .time {
    color: #96989a;
    font-size: 0.75rem;
    margin-bottom: 0.8rem;
  }
  .con {
    padding-left: 1.125rem;
    border-left: 0.03125rem solid #eeeeee;
    position: relative;
    margin-bottom: 1.875rem;
    h4 {
      color: #474a4d;
      font-size: 0.9375rem;
      margin-bottom: 0.375rem;
      position: relative;
      top: -0.375rem;
    }
    p {
      color: #646566;
      font-size: 0.8125rem;
      line-height: 1.1875rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      margin-bottom: 0.625rem;
    }
    img {
      width: 6.3125rem;
      height: 4.375rem;
      border-radius: 0.125rem;
      margin-right: 0.45rem;
    }
    img:nth-of-type(3) {
      margin-right: 0;
    }
    span {
      display: block;
      position: absolute;
      width: 0.375rem;
      height: 0.375rem;
      border: 0.125rem solid #2ac66e;
      border-radius: 50%;
      background-color: #fff;
      top: 0;
      left: -0.3125rem;
    }
  }
}
.push {
  padding: 0 4%;
  ul {
    li {
      display: flex;
      color: #333334;
      font-size: 0.9375rem;
      align-items: center;
      margin-bottom: 0.625rem;
      p {
        width: 0.375rem;
        height: 0.375rem;
        border: 0.125rem solid #2ac66e;
        border-radius: 50%;
        background-color: #fff;
        margin-right: 0.375rem;
      }
    }
  }
  
}
</style>