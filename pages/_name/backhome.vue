<template>
  <div id="backhome">
    <header id="hh">
      <img class="back" src="~/assets/goback.png" alt @click="back" />
      <span class="txt">返乡置业</span>
      <img src="~/assets/mapcai.png" alt class="list" @click="btns" />
      <ul class="cailist" v-if="list">
        <li class="cmn">
          <router-link :to="'/' + jkl">
            <span></span>
            <img src="~/assets/barhome.png" />
            <p>首 页</p>
          </router-link>
        </li>
        <li>
          <router-link :to="'/' + jkl + '/search'">
            <img src="~/assets/barsearch.png" />
            <p>楼盘查询</p>
          </router-link>
        </li>
        <li>
          <router-link :to="'/' + jkl + '/join'">
            <img src="~/assets/tegother.png" />
            <p>平台合作</p>
          </router-link>
        </li>
        <li>
          <router-link :to="'/' + jkl + '/weike/before/56'">
            <img src="~/assets/barke.png" />
            <p>买房百科</p>
          </router-link>
        </li>
        <li>
          <router-link :to="'/' + jkl + '/infos/46'">
            <img src="~/assets/barxun.png" />
            <p>房产资讯</p>
          </router-link>
        </li>
      </ul>
    </header>
    <div class="topbox">
      <img src="~/assets/backhome-top.png" alt="" class="topimg" />
      <div class="white">
        <ul class="lists">
          <li>
            <img src="~/assets/backhome-la.png" alt="" />
            <span>用户4875成功领取禹洲宋都望林府购房补贴</span>
          </li>
        </ul>
        <div class="num">
          — 共<span>1</span><span>2</span><span>9</span
          ><span class="last">3</span>位用户已领取 —
        </div>
        <p class="txt">累计领取购房补贴金<span>1878.7</span>万元</p>
      </div>
    </div>
    <ul class="nav">
      <li :class="type == 0 ? 'active' : ''">
        大额补贴
        <p></p>
      </li>
      <li :class="type == 1 ? 'active' : ''">
        好房特价
        <p></p>
      </li>
      <li :class="type == 2 ? 'active' : ''">
        精选好盘
        <p></p>
      </li>
      <li :class="type == 3 ? 'active' : ''">
        猜你喜欢
        <p></p>
      </li>
    </ul>
    <div class="bu">
      <img src="~/assets/backhome-butit.png" alt="" class="tit" />
      <div class="bu-box">
        <div class="box-box">
          <div class="box">
            <div class="ti">
              <p class="name">北樾府</p>
            </div>
            <p class="city">杭州-临安</p>
            <p class="price">¥18000</p>
            <p class="btn">立即领</p>
            <p class="text">已有47人领取</p>
          </div>
          <div class="box">
            <div class="ti">
              <p class="name">北樾府</p>
            </div>
            <p class="city">杭州-临安</p>
            <p class="price">¥18000</p>
            <p class="btn">立即领</p>
            <p class="text">已有47人领取</p>
          </div>
          <div class="box">
            <div class="ti">
              <p class="name">北樾府</p>
            </div>
            <p class="city">杭州-临安</p>
            <p class="price">¥18000</p>
            <p class="btn">立即领</p>
            <p class="text">已有47人领取</p>
          </div>
          <div class="box">
            <div class="ti">
              <p class="name">北樾府</p>
            </div>
            <p class="city">杭州-临安</p>
            <p class="price">¥18000</p>
            <p class="btn">立即领</p>
            <p class="text">已有47人领取</p>
          </div>
        </div>
        <p class="button">
          更多补贴<img src="~/assets/backhome-down1.png" alt="" />
        </p>
      </div>
    </div>
    <h3>—— 好房特价 ——</h3>
    <ul class="ll">
      <li>
        <div class="top">
          <div class="left">
            <img src="~/assets/lun02.jpg" alt="" />
          </div>
          <div class="right">
            <h4>
              武林ONE
              <p>立省5万</p>
            </h4>
            <div class="pri">
              <p class="old">原价<span>217</span>万元</p>
              <p class="new">原价<span>217</span>万元</p>
            </div>
            <p class="msg">住宅 | 杭州-江干 | 80-140m²</p>
            <p class="icons">
              <span class="zhuang">精装</span>
              <span>精装</span>
              <span>精装</span>
            </p>
          </div>
        </div>
        <div class="bom">
          <van-notice-bar
            left-icon="volume-o"
            color="#646566"
            background="#F7F7F7"
            text="特价房页+领取优惠特价房页+领取优惠"
          />
          <button>马上抢</button>
        </div>
      </li>
      <li>
        <div class="top">
          <div class="left">
            <img src="~/assets/lun02.jpg" alt="" />
          </div>
          <div class="right">
            <h4>
              武林ONE
              <p>立省5万</p>
            </h4>
            <div class="pri">
              <p class="old">原价<span>217</span>万元</p>
              <p class="new">原价<span>217</span>万元</p>
            </div>
            <p class="msg">住宅 | 杭州-江干 | 80-140m²</p>
            <p class="icons">
              <span class="zhuang">精装</span>
              <span>精装</span>
              <span>精装</span>
            </p>
          </div>
        </div>
        <div class="bom">
          <van-notice-bar
            left-icon="volume-o"
            color="#646566"
            background="#F7F7F7"
            text="特价房页+领取优惠特价房页+领取优惠"
          />
          <button>马上抢</button>
        </div>
      </li>
      <li>
        <div class="top">
          <div class="left">
            <img src="~/assets/lun02.jpg" alt="" />
          </div>
          <div class="right">
            <h4>
              武林ONE
              <p>立省5万</p>
            </h4>
            <div class="pri">
              <p class="old">原价<span>217</span>万元</p>
              <p class="new">原价<span>217</span>万元</p>
            </div>
            <p class="msg">住宅 | 杭州-江干 | 80-140m²</p>
            <p class="icons">
              <span class="zhuang">精装</span>
              <span>精装</span>
              <span>精装</span>
            </p>
          </div>
        </div>
        <div class="bom">
          <van-notice-bar
            left-icon="volume-o"
            color="#646566"
            background="#F7F7F7"
            text="特价房页+领取优惠特价房页+领取优惠"
          />
          <button>马上抢</button>
        </div>
      </li>
    </ul>
    <p class="btn1">展开更多<img src="~/assets/backhome-down1.png" alt="" /></p>
    <div class="kk">
      <div class="xuan">
        <h4>
          精选好盘<img src="~/assets/backhome-question.png" alt="" />
          <p>更多楼盘<img src="~/assets/backhome-more.png" alt="" /></p>
        </h4>
        <div class="swiper-strict">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="top">
                <img src="~/assets/lun02.jpg" alt />
                <p class="city">临安</p>
                <p class="name">中天雅境</p>
                <p class="zhao"></p>
              </div>
              <div class="strict-bom">
                <p class="btn">领优惠</p>
                <p class="num">56人已领取</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="top">
                <img src="~/assets/lun02.jpg" alt />
                <p class="city">临安</p>
                <p class="name">中天雅境</p>
                <p class="zhao"></p>
              </div>
              <div class="strict-bom">
                <p class="btn">领优惠</p>
                <p class="num">56人已领取</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="top">
                <img src="~/assets/lun02.jpg" alt />
                <p class="city">临安</p>
                <p class="name">中天雅境</p>
                <p class="zhao"></p>
              </div>
              <div class="strict-bom">
                <p class="btn">领优惠</p>
                <p class="num">56人已领取</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="guess">
        <h4>
          猜你喜欢
          <span>更多楼盘<img src="~/assets/backhome-more1.png" alt="" /></span>
        </h4>
        <div class="box">
          <div class="li">
            <div class="top">
              <img src="~/assets/lun02.jpg" alt="" />
              <p class="zhao"></p>
              <p class="city">杭州-江干区</p>
            </div>
            <div class="bom">
              <h5>锦云澜天里</h5>
              <p class="price"><span>17500</span>元/m²</p>
              <p class="btn">查底价</p>
            </div>
          </div>
          <div class="li">
            <div class="top">
              <img src="~/assets/lun02.jpg" alt="" />
              <p class="zhao"></p>
              <p class="city">杭州-江干区</p>
            </div>
            <div class="bom">
              <h5>锦云澜天里</h5>
              <p class="price"><span>17500</span>元/m²</p>
              <p class="btn">查底价</p>
            </div>
          </div>
          <div class="li">
            <div class="top">
              <img src="~/assets/lun02.jpg" alt="" />
              <p class="zhao"></p>
              <p class="city">杭州-江干区</p>
            </div>
            <div class="bom">
              <h5>锦云澜天里</h5>
              <p class="price"><span>17500</span>元/m²</p>
              <p class="btn">查底价</p>
            </div>
          </div>
          <div class="li">
            <div class="top">
              <img src="~/assets/lun02.jpg" alt="" />
              <p class="zhao"></p>
              <p class="city">杭州-江干区</p>
            </div>
            <div class="bom">
              <h5>锦云澜天里</h5>
              <p class="price"><span>17500</span>元/m²</p>
              <p class="btn">查底价</p>
            </div>
          </div>
        </div>
      </div>
      <div class="rule">
        <h4>活动说明：</h4>
        <p>活动时间：2020年10月8日00:00-2020年11月7日23：59</p>
        <p>
          适用对象：中奖者由开发商或代理公司判定为家园平台客户即可享受这个优惠。
        </p>
        <p>
          结算方式：提供已实名的支付宝账户给与您对接的家园咨询师，规定时间内会将优惠费用打至该账户
          最终解释权归家园所有
        </p>
      </div>
    </div>
    <van-popup v-model="show" :style="{ background: 'rgba(0,0,0,0)' }">
      <hong @close="close"></hong>
    </van-popup>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import hong from "@/components/hong.vue"
export default {
    components:{
        hong
    },
  data() {
    return {
      list: false,
      type: 0,
      show: true
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    btns() {
      this.list = !this.list;
    },
    setnav() {
      let that = this;
      var scrollTop = window.scrollY;
      if(scrollTop>=288) {
          $(".nav").css({ position: "fixed", top: "2.75rem",width: "100%",marginTop: '0',zIndex: 10 });
          $('.bu').css({ marginTop: '5.9375rem' })
      }
      if(scrollTop >=288 && scrollTop<=660) {
          this.type = 0
      }else if(scrollTop >=660 && scrollTop<=1200) {
          this.type = 1
      }else if(scrollTop >=1200 && scrollTop<=1400) {
          this.type = 2
      }else if (scrollTop>1400) {
          this.type = 3
      }
      if(scrollTop<288) {
           $(".nav").css({ position: "relative", top: "0",width: "100%",marginTop: '2.125rem',zIndex: 10 });
           $('.bu').css({ marginTop: '0.75rem' })
      }
    },
    close() {
        this.show = false
    }
  },
  mounted() {
    var swiper08 = new Swiper(".swiper-strict", {
      slidesPerView: 2.5,
      spaceBetween: 15,
      slidesOffsetAfter: 14,
      slidesOffsetBefore: 14,
    });
    window.addEventListener("scroll", this.setnav);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.setnav);
  },
};
</script>
<style lang="less" scoped>
#backhome {
  background-color: #e6222f;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2.75rem;
  z-index: 10;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 1000;
  border-bottom: 0.03125rem solid #f7f7f7;
  .back {
    width: 1.5rem;
    margin-left: 1rem;
  }
  .logo {
    width: 2.625rem;
  }
  .txt {
    color: #111112;
    font-size: 1.125rem;
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
    width: 1.5rem;
    margin-right: 4%;
  }
  .cailist {
    width: 9.375rem;
    background: rgba(41, 41, 41, 0.9);
    position: absolute;
    top: 2.5rem;
    border-radius: 0.375rem;
    z-index: 20000;
    right: 4%;
    li {
      position: relative;
      color: #e6e6e6;
      font-size: 0.9375rem;
      line-height: 3.125rem;
      a {
        width: 100%;
        display: flex;
        align-items: center;
      }
      p {
        border-bottom: 0.5px solid #545454;
        flex: 1;
        color: #e6e6e6;
      }
      img {
        width: 1.125rem;
        margin: 0;
        margin-left: 1.625rem;
        margin-right: 0.875rem;
        height: 1.125rem;
      }
    }
    .cmn {
      span {
        display: block;
        border: 0.4375rem solid transparent;
        border-bottom-color: rgba(41, 41, 41, 0.9);
        position: absolute;
        top: -0.875rem;
        right: 0.625rem;
      }
    }
  }
}
.topbox {
  position: relative;
}
.topimg {
  margin-top: 2.75rem;
  width: 100%;
}
.white {
  width: 92%;
  height: 5rem;
  background-color: #fffbe0;
  border-radius: 0.625rem;
  margin-left: 4%;
  position: absolute;
  bottom: -1.375rem;
  .num {
    text-align: center;
    color: #502e25;
    font-size: 1rem;
    padding-top: 1.4rem;
    span {
      background-color: #ff4b28;
      padding: 0.1875rem 0.1875rem;
      border-radius: 0.09375rem;
      font-size: 0.8125rem;
      font-weight: bold;
      color: #fff;
      margin-right: 0.15625rem;
    }
    span:nth-of-type(1) {
      margin-left: 0.3125rem;
    }
    .last {
      margin-right: 0.3125rem;
    }
  }
  .txt {
    margin-top: 0.5rem;
    color: #7a5a51;
    font-size: 0.75rem;
    text-align: center;
    span {
      font-weight: bold;
    }
  }
  .lists {
    li {
      background-color: #ffc75c;
      width: 16.25rem;
      height: 1.5rem;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      img {
        width: 1rem;
        height: 1rem;
        margin-right: 0.125rem;
      }
      span {
        font-size: 0.75rem;
        color: #fff;
      }
    }
  }
}
.nav {
  height: 3.125rem;
  display: flex;
  justify-content: space-around;
  background-color: #ff952e;
  margin-top: 2.125rem;
  line-height: 3.125rem;
  li {
    color: #fff;
    font-size: 0.9375rem;
  }
  .active {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    position: relative;
    p {
      width: 1.5625rem;
      height: 0.12rem;
      border-radius: 0.09375rem;
      background-color: #fff;
      position: absolute;
      bottom: 0.375rem;
      left: 50%;
      margin-left: -0.78125rem;
    }
  }
}
.bu {
  width: 92%;
  margin-left: 4%;
  margin-top: 0.75rem;
  height: 22.375rem;
  background-color: #fff;
  border-radius: 0.625rem;
  .tit {
    width: 100%;
  }
  .bu-box {
    .box-box {
      overflow: hidden;
      padding: 0 0.625rem;
      padding-top: 0.625rem;
      .box {
        position: relative;
        width: 6.4375rem;
        height: 7rem;
        background: url("~assets/backhome-bao.png");
        background-size: contain;
        float: left;
        margin-right: 0.5rem;
        margin-bottom: 0.625rem;
        .ti {
          display: flex;
          justify-content: center;
        }
        .name {
          color: #b11a1a;
          font-size: 0.6875rem;
          font-weight: bold;
          text-align: center;
          max-width: 4.6875rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-top: 0.25rem;
        }
        .city {
          color: #b11a1a;
          font-size: 0.625rem;
          text-align: center;
          margin-bottom: 0.6rem;
        }
        .price {
          color: #fff;
          font-size: 1.0625rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 0.2rem;
        }
        .btn {
          background: linear-gradient(130deg, #fce4c5, #f0b27f);
          border-radius: 0.6875rem;
          width: 4.625rem;
          height: 1.375rem;
          text-align: center;
          line-height: 1.375rem;
          color: #5d0808;
          font-size: 0.75rem;
          position: relative;
          left: 50%;
          margin-left: -2.3125rem;
          margin-bottom: 0.25rem;
        }
        .text {
          color: #ffb1b5;
          font-size: 0.625rem;
          text-align: center;
        }
      }
      .box:nth-of-type(3n) {
        margin-right: 0;
      }
    }
    .button {
      width: 8.125rem;
      height: 2.125rem;
      border-radius: 1.0625rem;
      background: linear-gradient(130deg, #fce4c5, #f0b27f);
      text-align: center;
      line-height: 2.125rem;
      color: #5d0808;
      font-size: 0.875rem;
      position: relative;
      left: 50%;
      margin-left: -4.0625rem;
      img {
        width: 1rem;
        margin-bottom: -0.125rem;
        margin-left: 0.25rem;
      }
    }
  }
}
h3 {
  color: #fff;
  font-size: 1.125rem;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 0.875rem;
}
.ll {
  padding: 0 0.9375rem;
  li {
    background-color: #fff;
    padding: 0.9375rem 0.625rem;
    border-radius: 0.625rem;
    margin-bottom: 0.9375rem;
    .top {
      display: flex;
      margin-bottom: 0.75rem;
      .left {
        margin-right: 0.875rem;
        img {
          width: 6.875rem;
          height: 5rem;
          border-radius: 0.375rem;
        }
      }
      .right {
        flex: 1;
        h4 {
          color: #323233;
          font-size: 0.9375rem;
          position: relative;
          top: -0.2rem;
          p {
            background: url(~assets/te-bg.png);
            background-size: 100%;
            width: 3.375rem;
            height: 1.125rem;
            color: #f83d44;
            font-size: 0.625rem;
            font-weight: 400;
            float: right;
            text-align: center;
          }
        }
        .pri {
          display: flex;
          margin-top: 0.125rem;
          p {
            font-size: 0.625rem;
            span {
              font-size: 0.875rem;
              font-weight: bold;
            }
          }
          .old {
            color: #7d7e80;
            text-decoration: line-through;
            margin-right: 0.25rem;
          }
          .new {
            color: #ff4040;
          }
        }
        .msg {
          color: #7d7e80;
          font-size: 0.75rem;
          margin-bottom: 0.3125rem;
          margin-top: 0.3125rem;
        }
        .icons {
          .zhuang {
            background-color: #ebf8ff;
            color: #3eacf0;
          }
          span {
            color: #7d7e80;
            font-size: 0.75rem;
            padding: 0.1875rem 0.3125rem;
            border-radius: 0.1875rem;
            background-color: #f5f5f5;
            margin-right: 0.375rem;
          }
        }
      }
    }
    .bom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .van-notice-bar {
        padding: 0 0.625rem 0 0.25rem;
        width: 14.625rem;
        height: 1.125rem;
        font-size: 0.625rem;
      }
      button {
        color: #fff;
        font-size: 0.75rem;
        width: 3.75rem;
        height: 1.5rem;
        border-radius: 0.75rem;
        text-align: center;
        line-height: 1.5rem;
        border: 0;
        background-color: #ff5751;
      }
    }
  }
}
.btn1 {
  width: 92%;
  margin-left: 4%;
  height: 2.25rem;
  border-radius: 0.625rem;
  background: linear-gradient(130deg, #fce4c5, #f0b27f);
  text-align: center;
  line-height: 2.25rem;
  color: #5d0808;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  img {
    width: 1rem;
    margin-bottom: -0.125rem;
    margin-left: 0.25rem;
  }
}
.kk {
  padding: 0 4%;
}
.xuan {
  border-radius: 0.625rem;
  background-color: #fff;
  padding-top: 1.25rem;
  margin-bottom: 1.5rem;
  h4 {
    color: #313233;
    font-size: 1.0625rem;
    padding-left: 0.625rem;
    padding-right: 0.375rem;
    img {
      width: 1rem;
      margin-bottom: -0.125rem;
      margin-left: 0.25rem;
    }
    p {
      float: right;
      color: #969799;
      font-size: 0.8125rem;
      font-weight: 400;
      img {
        width: 0.75rem;
        margin-left: 0.125rem;
      }
    }
  }
  .swiper-strict {
    padding: 1.25rem 0;
    overflow: hidden;
    .swiper-slide {
      box-shadow: 0px 0px 0.84375rem 0.09375rem rgba(0, 0, 0, 0.08);
      border-radius: 0.375rem;
      overflow: hidden;
      height: 8.75rem;
      .top {
        position: relative;
        img {
          width: 100%;
          height: 4.6875rem;
        }
        .city {
          width: 2.5rem;
          height: 1rem;
          text-align: center;
          line-height: 1rem;
          background-color: #f83d44;
          color: #fff;
          border-radius: 0.375rem 0px 0.375rem 0px;
          position: absolute;
          left: 0;
          top: 0;
          font-size: 0.625rem;
        }
        .name {
          color: #ffffff;
          font-size: 0.875rem;
          position: absolute;
          left: 0.625rem;
          bottom: 0.5rem;
          z-index: 1;
        }
        .zhao {
          width: 100%;
          height: 2.5rem;
          position: absolute;
          bottom: 0;
          left: 0;
          background: linear-gradient(0deg, #000000, rgba(0, 0, 0, 0));
        }
      }
      .strict-bom {
        .btn {
          width: 4.625rem;
          height: 1.5rem;
          border-radius: 0.75rem;
          text-align: center;
          line-height: 1.5rem;
          color: #fff;
          position: relative;
          left: 50%;
          margin-left: -2.46875rem;
          margin-bottom: 0.3rem;
          margin-top: 0.7rem;
          background-color: #f83d44;
        }
        .num {
          color: #f83d44;
          font-size: 0.75rem;
          text-align: center;
        }
      }
    }
  }
}
.guess {
  margin-bottom: 0.625rem;
  h4 {
    color: #ffffff;
    font-size: 1.0625rem;
    margin-bottom: 1.125rem;
    span {
      float: right;
      font-size: 0.8125rem;
      font-weight: 400;
      img {
        width: 0.75rem;
        margin-left: 0.125rem;
      }
    }
  }
  .box {
    overflow: hidden;
    .li {
      width: 6.8125rem;
      height: 8.75rem;
      border-radius: 0.625rem;
      background-color: #fff;
      overflow: hidden;
      margin-right: 0.5625rem;
      float: left;
      margin-bottom: 0.9375rem;
      .top {
        position: relative;
        img {
          width: 100%;
          height: 3.75rem;
        }
        .zhao {
          width: 100%;
          height: 1.5625rem;
          position: absolute;
          bottom: 0;
          left: 0;
          background: linear-gradient(0deg, #000000, rgba(0, 0, 0, 0));
        }
        .city {
          color: #fff;
          font-size: 0.625rem;
          position: absolute;
          left: 0.625rem;
          bottom: 0.25rem;
        }
      }
      .bom {
        padding-left: 0.625rem;
        h5 {
          color: #323233;
          font-size: 0.8125rem;
          margin-top: 0.375rem;
          margin-bottom: 0.25rem;
        }
        .price {
          color: #f83d44;
          font-size: 0.625rem;
          span {
            font-size: 0.9375rem;
            font-weight: bold;
          }
        }
        .btn {
          width: 5.5625rem;
          height: 1.375rem;
          border-radius: 0.6875rem;
          text-align: center;
          line-height: 1.375rem;
          background-color: #f83d44;
          color: #fff;
          font-size: 0.75rem;
          margin-top: 0.375rem;
        }
      }
    }
    .li:nth-of-type(3n) {
      margin-right: 0;
    }
  }
}
.rule {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  padding: 0.9375rem 1.25rem;
  padding-bottom: 0.375rem;
  h4 {
    color: #ffa6ac;
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
  }
  p {
    color: #ffa6ac;
    font-size: 0.75rem;
    line-height: 1.25rem;
    margin-bottom: 0.75rem;
  }
}
</style>