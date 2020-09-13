<template>
  <div id="info">
    <header>
      <img class="back" src="~/assets/goback.png" alt />
      <img class="logo" src="~/assets/logo.png" alt />
      <div class="zixuns">
        <img src="~/assets/zixun.png" alt />
        <p>3</p>
      </div>
      <img src="~/assets/mapcai.png" alt class="list" />
    </header>
    <div class="input">
      <input type="text" placeholder="搜搜你想要了解的房产咨询吧" />
      <img src="~/assets/search.png" alt />
    </div>
    <div class="topimgs">
      <div class="swiper-topimg">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="~/assets/lun02.jpg" alt />
            <p>房地产行业集中度进一步提高百强房企市场份百强房企市场份额升...</p>
          </div>
          <div class="swiper-slide">
            <img src="~/assets/lun02.jpg" alt />
            <p>房地产行业集中度进一步提高百强房企市场份百强房企市场份额升...</p>
          </div>
          <div class="swiper-slide">
            <img src="~/assets/lun02.jpg" alt />
            <p>房地产行业集中度进一步提高百强房企市场份百强房企市场份额升...</p>
          </div>
          <div class="swiper-slide">
            <img src="~/assets/lun02.jpg" alt />
            <p>房地产行业集中度进一步提高百强房企市场份百强房企市场份额升...</p>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="swiper-nav">
      <div class="swiper-wrapper">
        <div :class="navnum == 0?'swiper-slide active':'swiper-slide'" @click="setnavnum(0)">
          楼盘导购
          <p></p>
        </div>
        <div :class="navnum == 1?'swiper-slide active':'swiper-slide'" @click="setnavnum(1)">
          本地楼市
          <p></p>
        </div>
        <div :class="navnum == 2?'swiper-slide active':'swiper-slide'" @click="setnavnum(2)">
          房企资讯
          <p></p>
        </div>
        <div :class="navnum == 3?'swiper-slide active':'swiper-slide'" @click="setnavnum(3)">
          热点新闻
          <p></p>
        </div>
        <div :class="navnum == 4?'swiper-slide active':'swiper-slide'" @click="setnavnum(4)">
          日报
          <p></p>
        </div>
        <div :class="navnum == 5?'swiper-slide active':'swiper-slide'" @click="setnavnum(5)">
          周边
          <p></p>
        </div>
        <div :class="navnum == 6?'swiper-slide active':'swiper-slide'" @click="setnavnum(6)">
          月报
          <p></p>
        </div>
        <div :class="navnum == 7?'swiper-slide active':'swiper-slide'" @click="setnavnum(7)">
          土拍成交
          <p></p>
        </div>
        <div :class="navnum == 8?'swiper-slide active':'swiper-slide'" @click="setnavnum(8)">
          楼盘动态
          <p></p>
        </div>
      </div>
    </div>
    <div class="con">
      <div class="li">
        <div class="left">
          <h5>
            <span v-if="isnew==1">新</span>杭州萧山长龙领航城房价，长龙领航城太火了！
          </h5>
          <p>
            家园新房
            <span>2019-05-24</span>
          </p>
        </div>
        <div class="right">
          <img src="~/assets/lun02.jpg" alt />
        </div>
      </div>
      <div class="li">
        <div class="left">
          <h5>
            <span v-if="isnew==1">新</span>杭州萧山长龙领航城房价，长龙领航城太火了！
          </h5>
          <p>
            家园新房
            <span>2019-05-24</span>
          </p>
        </div>
        <div class="right">
          <img src="~/assets/lun02.jpg" alt />
        </div>
      </div>
      <div class="li">
        <div class="left">
          <h5>
            <span v-if="isnew==1">新</span>杭州萧山长龙领航城房价，长龙领航城太火了！
          </h5>
          <p>
            家园新房
            <span>2019-05-24</span>
          </p>
        </div>
        <div class="right">
          <img src="~/assets/lun02.jpg" alt />
        </div>
      </div>
      <div class="li">
        <div class="left">
          <h5>
            <span v-if="isnew==1">新</span>杭州萧山长龙领航城房价，长龙领航城太火了！
          </h5>
          <p>
            家园新房
            <span>2019-05-24</span>
          </p>
        </div>
        <div class="right">
          <img src="~/assets/lun02.jpg" alt />
        </div>
      </div>
      <div class="li">
        <div class="left">
          <h5>
            <span v-if="isnew==1">新</span>杭州萧山长龙领航城房价，长龙领航城太火了！
          </h5>
          <p>
            家园新房
            <span>2019-05-24</span>
          </p>
        </div>
        <div class="right">
          <img src="~/assets/lun02.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      navnum: 0,
      isnew: 1,
    };
  },
  methods: {
    setnavnum(n) {
      this.navnum = n;
    },
  },
  mounted() {
    var mySwiper1 = new Swiper(".swiper-topimg", {
      slidesPerView: 1.3,
      spaceBetween: 15,
      observer: true,
      slidesOffsetAfter: 2,
      resistanceRatio: 0.1,
      slidesOffsetBefore: 44,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
    var mySwiper2 = new Swiper(".swiper-nav", {
      slidesPerView: 4.8,
      spaceBetween: 15,
      observer: true,
      slidesOffsetAfter: 2,
      resistanceRatio: 0.1,
      slidesOffsetBefore: 14,
    });
  },
};
</script>
<style lang="less" scoped>
li {
  list-style: none;
}
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
.input {
  height: 2.5rem;
  padding: 0.25rem 4%;
  position: relative;
  input {
    border: 0;
    outline: none;
    width: 100%;
    height: 2rem;
    margin-top: 0.25rem;
    border-radius: 0.25rem;
    background-color: rgba(245, 245, 245, 1);
    text-align: center;
  }
  img {
    width: 1rem;
    position: absolute;
    top: 0.9rem;
    left: 5rem;
  }
}
.topimgs {
  margin-top: 1.5rem;
  .swiper-topimg {
    overflow: hidden;
    padding-bottom: 1.875rem;
    position: relative;
    .swiper-slide {
      position: relative;
      overflow: hidden;
      height: 8.75rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.375rem;
      }
      p {
        background: rgba(0, 0, 0, 0.4);
        height: 1.625rem;
        color: #fff;
        font-size: 0.8125rem;
        line-height: 1.625rem;
        position: absolute;
        bottom: 0;
        width: 92%;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 4%;
        border-radius: 0 0 0.375rem 0.375rem;
      }
    }
    .swiper-pagination {
      /deep/.swiper-pagination-bullet {
        width: 0.375rem;
        height: 0.125rem;
        border-radius: 0.0625rem;
        background-color: #f0f0f2;
      }
      /deep/.swiper-pagination-bullet-active {
        width: 0.75rem;
        height: 0.125rem;
        background-color: #2ac66e;
      }
    }
  }
}
.swiper-nav {
  overflow: hidden;
  padding-bottom: 2.1875rem;
  .swiper-slide {
    color: #626466;
    font-size: 0.9375rem;
    text-align: center;
  }
  .active {
    color: #2ac66e;
    font-weight: bold;
    position: relative;
    p {
      background-color: #2ac66e;
      width: 1.5625rem;
      height: 0.15625rem;
      border-radius: 0.09375rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -0.375rem;
    }
  }
}
.con {
  padding: 0 4%;
  .li {
    display: flex;
    margin-bottom: 0.625rem;
    height: 4.375rem;
    .left {
      position: relative;
      h5 {
        color: #303234;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 400;
        span {
          padding: 0.0625rem 0.125rem;
          border-radius: 0.125rem;
          font-size: 0.75rem;
          font-weight: 400;
          color: #fff;
          background-color: #ff4040;
          margin-right: 0.125rem;
        }
      }
      p {
        color: #969899;
        font-size: 0.6875rem;
        position: absolute;
        bottom: 0.25rem;
        span {
          margin-left: 0.25rem;
        }
      }
    }
    .right {
      margin-left: 1.25rem;
      img {
        width: 6.25rem;
        height: 4.375rem;
        border-radius: 0.1875rem;
      }
    }
  }
}
</style>