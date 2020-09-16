<template>
  <div id="home">
    <header>
      <img src="~/assets/logo.png" alt class="logo" />
      <div class="input">
        <p>
          杭州
          <img src="~/assets/downsan.png" alt />
          <span>|</span>
          <img class="sou" src="~/assets/search.png" alt />
        </p>
        <input type="text" placeholder="请输入楼盘名" />
      </div>
      <img src="~/assets/index-peo.png" alt class="peo" />
    </header>
    <div class="topnav">
      <img src="~/assets/banner.png" alt class="topimg" />
      <ul>
        <li>
          <nuxt-link :to="'/'+jkl+'/search/1'">
            <img src="~/assets/index-xin.png" alt />
          </nuxt-link>
          <p>新房</p>
        </li>
        <li>
          <img src="~/assets/index-te.png" alt />
          <p>特价房</p>
          <span>优惠</span>
        </li>
        <li>
          <img src="~/assets/index-weiki.png" alt />
          <p>百科</p>
        </li>
        <li>
          <img src="~/assets/index-zixun.png" alt />
          <p>资讯</p>
        </li>
        <li>
          <img src="~/assets/index-map.png" alt />
          <p>地图</p>
        </li>
      </ul>
    </div>
    <div class="swipe">
      <img src="~/assets/index-tit.png" alt />
      <notice-bar :scrollable="false" background="#fff" color="#646566">
        <swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
          <swipe-item v-for="(item,key) in tops" :key="key">{{item.title}}</swipe-item>
        </swipe>
      </notice-bar>
    </div>
    <div class="help">
      <button>帮我找房</button>
    </div>
    <div class="te">
      <div class="top">
        <img class="topimg" src="~/assets/index-jinte.png" alt />
        <span>
          查看全部
          <img src="~/assets/index-round.png" alt />
        </span>
      </div>
      <ul>
        <li v-for="(item,key) in discounts" :key="key">
          <div class="li-top">
            <p class="top-area">{{item.country.substr(0,2)}}</p>
            <img :src="item.img" alt />
            <p class="top-name">{{item.name}}</p>
          </div>
          <div class="li-bom">
            <p class="xx">原价: {{item.original/1000}}万</p>
            <div class="pri">
              <p>省￥{{Number(item.diff)}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="dynamic">
      <h3>
        楼盘动态
        <p>hot</p>
        <span>
          全部动态
          <img src="~/assets/j-more.png" alt />
        </span>
      </h3>
      <div class="swiper-dynamic">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,key) in dynamics" :key="key">
            <img :src="item.img" alt />
            <div class="swper-con">
              <h5>{{item.title}}</h5>
              <p>
                {{item.content.substr(0,34)}}...
                <span>详细</span>
              </p>
              <span>{{item.time}}</span>
            </div>
          </div>
          
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="strict">
      <h3>
        家园严选
        <span class="n">必看好房</span>
        <span class="more">
          全部楼盘
          <img src="~/assets/j-more.png" alt />
        </span>
      </h3>
      <div class="swiper-strict">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,key) in stricts" :key="key">
            <img :src="item.img" alt />
            <div class="strict-bom">
              <h6>{{item.name}}</h6>
              <p>
                {{item.price}}
                <span>元/m²</span>
              </p>
              <i>{{item.country}}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="success">
      <h3>
        成交案例
        <span class="n">成交故事</span>
        <span class="more">
          全部案例
          <img src="~/assets/j-more.png" alt />
        </span>
      </h3>
      <div class="swiper-success">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,key) in finishes" :key="key">
            <div class="top">
              <h5>客户：{{item.customer}}</h5>
              <p class="time">时间：{{item.time}}</p>
              <p class="name">购买{{item.project}}</p>
              <img :src="item.img" alt />
            </div>
            <div class="bom">
              <p>{{item.content}}</p>
              <div class="btn">
                查看详细
                <img src="~/assets/index-round.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="guide">
      <h3>
        楼盘导购
        <span class="more">
          更多资讯
          <img src="~/assets/j-more.png" alt />
        </span>
      </h3>
      <ul>
        <template v-for="(item,key) in articles">
          <li :key="key" v-if="key<3">
            <div class="left">
              <p class="tit">{{item.title}}</p>
              <p class="time">
                <span>{{item.source}}</span>
                {{item.time}}
              </p>
            </div>
            <img :src="item.img" alt />
          </li>
        </template>
      </ul>
    </div>
    <div class="other">
      <h3>为你推荐</h3>
      <div class="pro" v-for="(item,key) in recommends" :key="key">
        <img :src="item.img" alt />
        <div class="pro-msg">
          <h5>
            {{item.name}}
            <span>{{item.state}}</span>
          </h5>
          <p class="pro-price">
            <span>{{item.price}}</span>
            <i>元/m²</i>
          </p>
          <p class="attr">{{item.type}} | {{item.city}}-{{item.country.substr(0,2)}} | {{item.area}}m²</p>
          <p class="pro-icon">
            <span class="pro-icon-zhuang">{{item.decorate}}</span>
            <span class="pro-icon-type" v-for="(val,k) in item.feature" :key="k">{{val}}</span>
          </p>
        </div>
      </div>
    </div>
    <button class="morebtn">更多楼盘</button>
  </div>
</template>
<script>
import { NoticeBar, Swipe, SwipeItem } from "vant";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  components: {
    NoticeBar,
    Swipe,
    SwipeItem,
  },
  async asyncData(context) {
    //   console.log(context.$axios)
    let city = context.store.state.city;
    // let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/phone/first", {
          params: {
            city: city,
          },
        })
        .then((resp) => {
          let data = resp.data;
          //   console.log(data)
          return data;
        }),
    ]);
    return {
      tops: res.tops,
      stricts: res.stricts,
      finishes: res.finishes,
      articles: res.articles,
      recommends:res.recommends,
      discounts:res.discounts,
      dynamics:res.dynamics,
      jkl: jkl,
    };
  },
  data() {
    return {
      jkl: "",
      tops: [],
      stricts: [],
      finishes: [],
      articles: [],
      recommends:[],
      discounts:[],
      dynamics:[]
    };
  },
  mounted() {
    var swiper08 = new Swiper(".swiper-dynamic", {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 0,
      pagination: {
        el: ".swiper-pagination",
      },
    });
    var swiper08 = new Swiper(".swiper-strict", {
      slidesPerView: 2.4,
      spaceBetween: 15,
      slidesOffsetAfter: 14,
      slidesOffsetBefore: 14,
    });
    var swiper08 = new Swiper(".swiper-success", {
      slidesPerView: 1.7,
      spaceBetween: 20,
      slidesOffsetAfter: 80,
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
  height: 3.4375rem;
  background-color: #fff;
  padding: 0 4%;
  line-height: 3.4375rem;
  display: flex;
  .logo {
    width: 2.5rem;
    margin-right: 0.875rem;
    height: 1.3125rem;
    margin-top: 1rem;
  }
  .input {
    width: 15.625rem;
    height: 2.125rem;
    border-radius: 1.0625rem;
    background-color: #f5f5f5;
    margin-top: 0.625rem;
    margin-right: 0.9375rem;
    line-height: 2.125rem;
    display: flex;
    p {
      color: #303234;
      font-size: 0.875rem;
      padding-left: 0.625rem;
      img {
        width: 0.75rem;
      }
      span {
        color: #d5d6df;
      }
      .sou {
        width: 1rem;
        height: 1rem;
        margin-left: 0.25rem;
        margin-bottom: -0.125rem;
      }
    }
  }
  input {
    width: 6.25rem;
    border: 0;
    outline: none;
    background-color: #f5f5f5;
    margin-left: 0.375rem;
  }
  .peo {
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.875rem;
  }
}
.topnav {
  padding: 0 4%;
  .topimg {
    width: 100%;
    height: 6.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.9375rem;
  }
  ul {
    display: flex;
    li {
      width: 20%;
      text-align: center;
      position: relative;
      img {
        width: 3.5rem;
        height: 3.5rem;
      }
      p {
        color: #313233;
        font-size: 0.75rem;
      }
      span {
        display: block;
        position: absolute;
        width: 1.75rem;
        height: 0.875rem;
        background: #ff4040;
        border-radius: 0.4375rem 0.4375rem 0.4375rem 0px;
        color: #fef2f2;
        font-size: 0.625rem;
        text-align: center;
        line-height: 0.875rem;
        right: 0;
        top: 0;
      }
    }
  }
}
.swipe {
  display: flex;
  margin: 0 4%;
  margin-top: 0.9375rem;
  border-radius: 0.375rem;
  box-shadow: 0.5px 1px 15px 0px rgba(0, 0, 0, 0.05);
  height: 3.25rem;
  border: 0.09375rem solid #ffffff;
  align-items: center;
  margin-bottom: 0.875rem;
  /deep/.van-notice-bar__wrap {
    width: 100%;
  }
  .van-swipe {
    width: 100%;
  }
  .van-notice-bar {
    width: 100%;
  }
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
  .van-swipe-item {
    width: 16.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  img {
    margin-left: 1.25rem;
    width: 1.625rem;
  }
}
.help {
  margin: 0 4%;
  height: 4.375rem;
  position: relative;
  margin-bottom: 1.5625rem;
  background: url(~assets/index-help.jpg) no-repeat;
  background-size: 100%;
  button {
    position: absolute;
    width: 4.625rem;
    height: 1.625rem;
    border-radius: 0.8125rem;
    text-align: center;
    line-height: 1.625rem;
    background-color: #2ac66e;
    border: 0;
    color: #fff;
    font-size: 0.8125rem;
    top: 1.40625rem;
    right: 0.9375rem;
    box-shadow: -1.5px 2px 5px 0px rgba(75, 211, 182, 0.2);
  }
}
.te {
  margin: 0 4%;
  height: 9.375rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    0deg,
    rgba(255, 254, 250, 0.96),
    rgba(255, 255, 255, 0.96)
  );
  box-shadow: 0.5px 1px 10px 0px rgba(0, 0, 0, 0.05);
  border-radius: 0.375rem;
  padding: 0 0.6875rem;
  .top {
    padding-top: 0.9375rem;
    margin-bottom: 0.75rem;
    .topimg {
      height: 1rem;
    }
    span {
      color: #7d7f80;
      font-size: 0.75rem;
      float: right;
      img {
        width: 0.75rem;
        height: 0.75rem;
        margin-left: 0.25rem;
      }
    }
  }
  ul {
    display: flex;
    li {
      width: 6.4375rem;
      height: 5.625rem;
      border-radius: 0.25rem;
      overflow: hidden;
      border: 0.03125rem solid #f0f1f5;
      box-shadow: 0.03125rem 0.09375rem 0.15625rem 0px rgba(0, 0, 0, 0.03);
      margin-right: 0.3125rem;
      .li-top {
        height: 2.8125rem;
        position: relative;
        .top-area {
          position: absolute;
          width: 1.6875rem;
          height: 0.8125rem;
          text-align: center;
          line-height: 0.8125rem;
          background-color: #ff5454;
          border-radius: 0.1875rem 0px 0.1875rem 0px;
          top: 0;
          left: 0;
          color: #fff;
          font-size: 0.625rem;
        }
        img {
          width: 100%;
          height: 2.8125rem;
        }
        .top-name {
          position: absolute;
          color: #fff;
          font-size: 0.6875rem;
          font-weight: bold;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0.375rem;
          width: 5.4375rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .li-bom {
        padding-left: 0.625rem;
        .xx {
          color: #969899;
          font-size: 0.625rem;
          margin-top: 0.25rem;
          margin-bottom: 0.3125rem;
          text-decoration: line-through;
        }
        .pri {
          width: 5.1875rem;
          height: 1rem;
          border-radius: 0.125rem;
          overflow: hidden;
          background: #ff5454;
          position: relative;
          line-height: 1rem;
          background: url(~assets/index-teimg.png) no-repeat;
          background-size: contain;
          p {
            color: #fff8f8;
            font-size: 0.625rem;
            position: absolute;
            right: 0.25rem;
          }
        }
      }
    }
    li:nth-of-type(3) {
      margin: 0;
    }
  }
}
.dynamic {
  padding: 0 4%;
  margin-bottom: 1.5625rem;
  h3 {
    color: #323333;
    font-size: 1rem;
    position: relative;
    line-height: 1.3125rem;
    margin-bottom: 1rem;
    span {
      color: #7d7f80;
      font-size: 0.75rem;
      float: right;
      img {
        width: 0.75rem;
        height: 0.75rem;
        margin-left: 0.25rem;
      }
    }
    p {
      position: absolute;
      border-radius: 0.3125rem 0.3125rem 0.3125rem 0px;
      width: 1.375rem;
      height: 0.6875rem;
      text-align: center;
      line-height: 0.6875rem;
      background-color: #ff4040;
      color: #fff;
      font-size: 0.5625rem;
      top: 0;
      left: 4.0625rem;
    }
  }
  .swiper-dynamic {
    overflow: hidden;
    padding: 0 0.125rem;
    padding-bottom: 0.625rem;
    position: relative;
    .swiper-slide {
      padding-bottom: 0.5rem;
      border-radius: 0.375rem;
      padding-top: 0.75rem;
      border: 0.03125rem solid #f2f4f7;
      box-shadow: 0.03125rem 0.15625rem 0.625rem 0px rgba(0, 0, 0, 0.05);
      display: flex;
      img {
        width: 5rem;
        height: 3.75rem;
        border-radius: 0.125rem;
        margin-right: 0.75rem;
        margin-left: 0.625rem;
      }
      .swper-con {
        width: 67%;
        h5 {
          color: #2e3034;
          font-size: 0.875rem;
          margin-bottom: 0.2rem;
          position: relative;
          top: -0.25rem;
        }
        p {
          color: #646566;
          font-size: 0.8125rem;
          line-height: 1.1875rem;
          span {
            color: #60d0b0;
            font-size: 0.8125rem;
          }
        }
        span {
          color: #92949a;
          font-size: 0.75rem;
          margin-top: 0.25rem;
        }
      }
    }
    .swiper-pagination {
      bottom: -0.25rem;
      left: 50%;
      transform: translateX(-50%);
      /deep/.swiper-pagination-bullet {
        width: 0.375rem;
        height: 0.125rem;
        border-radius: 0.0625rem;
        background-color: #f0f0f2;
      }
      /deep/.swiper-pagination-bullet-active {
        width: 0.75rem;
        height: 0.125rem;
        border-radius: 0.0625rem;
        background-color: #2ac66e;
      }
    }
  }
}
.strict {
  // padding: 0 4%;
  h3 {
    color: #323333;
    font-size: 1rem;
    margin-bottom: 0.875rem;
    padding: 0 4%;
    .n {
      color: #60d0b0;
      font-size: 0.75rem;
      font-weight: 400;
    }
    .more {
      float: right;
      color: #7d7f80;
      font-weight: 400;
      font-size: 0.75rem;
      img {
        width: 0.75rem;
        margin-left: 0.25rem;
        margin-bottom: -0.0625rem;
      }
    }
  }
  .swiper-strict {
    overflow: hidden;
    padding-bottom: 1.75rem;
    .swiper-slide {
      border: 0.03125rem solid #f0f1f5;
      box-shadow: 0.03125rem 0.15625rem 0.625rem 0px rgba(0, 0, 0, 0.05);
      border-radius: 0.375rem;
      height: 8.75rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 5.375rem;
      }
      .strict-bom {
        padding-left: 0.625rem;
        h6 {
          color: #4b4b4d;
          font-size: 0.875rem;
          margin-top: 0.2rem;
          margin-bottom: 0.2rem;
        }
        p {
          color: #ff5454;
          font-size: 0.75rem;
          display: inline-block;
          span {
            font-size: 0.625rem;
          }
        }
        i {
          float: right;
          font-style: normal;
          color: #96989a;
          font-size: 0.6875rem;
          margin-right: 0.625rem;
        }
      }
    }
  }
}
.success {
  margin-bottom: 1.875rem;
  h3 {
    color: #323333;
    font-size: 1rem;
    padding: 0 4%;
    .n {
      color: #60d0b0;
      font-size: 0.75rem;
      font-weight: 400;
    }
    .more {
      float: right;
      color: #7d7f80;
      font-weight: 400;
      font-size: 0.75rem;
      img {
        width: 0.75rem;
        margin-left: 0.25rem;
        margin-bottom: -0.0625rem;
      }
    }
  }
  .swiper-success {
    padding-top: 0.98rem;
    overflow: hidden;
    .swiper-slide {
      background-color: #f8f9fa;
      border-radius: 0.375rem;
      padding: 0 0.75rem;
      height: 11.875rem;
      .top {
        padding-top: 0.75rem;
        position: relative;
        margin-bottom: 0.8rem;
        h5 {
          color: #383e45;
          font-size: 0.8125rem;
          margin-bottom: 0.5rem;
        }
        .time {
          color: #909599;
          font-size: 0.625rem;
          margin-bottom: 0.3125rem;
        }
        .name {
          color: #90949a;
          font-size: 0.75rem;
        }
        img {
          width: 6.25rem;
          height: 4.375rem;
          border-radius: 0.1875rem;
          position: absolute;
          top: -0.375rem;
          right: -1.125rem;
        }
      }
      .bom {
        p {
          color: #737a80;
          font-size: 0.8125rem;
          line-height: 1.375rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          height: 4.125rem;
          margin-bottom: 0.5rem;
        }
        .btn {
          text-align: center;
          color: #747a80;
          font-size: 0.75rem;
          img {
            width: 0.75rem;
            margin-left: 0.25rem;
            margin-bottom: -0.0625rem;
          }
        }
      }
    }
  }
}
.guide {
  padding: 0 4%;
  h3 {
    color: #323333;
    font-size: 1rem;
    margin-bottom: 0.875rem;
    .more {
      float: right;
      color: #7d7f80;
      font-weight: 400;
      font-size: 0.75rem;
      img {
        width: 0.75rem;
        margin-left: 0.25rem;
        margin-bottom: -0.0625rem;
      }
    }
  }
  ul {
    li {
      display: flex;
      margin-bottom: 0.625rem;
      .left {
        width: 14.0625rem;
        .tit {
          color: #323333;
          font-size: 0.875rem;
          line-height: 1.25rem;
          margin-bottom: 0.75rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .time {
          color: #969899;
          font-size: 0.6875rem;
          span {
            margin-right: 0.25rem;
          }
        }
      }
      img {
        width: 6.25rem;
        height: 4.375rem;
        border: 0.1875rem;
        margin-left: 1.25rem;
      }
    }
  }
}
.other {
  padding: 1.25rem 4% 0 4%;
  h3 {
    color: #1f1f1f;
    font-size: 1.0625rem;
    margin-bottom: 1.375rem;
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
.morebtn {
  width: 92%;
  margin-left: 4%;
  height: 2.75rem;
  border-radius: 0.1875rem;
  text-align: center;
  line-height: 2.75rem;
  background-color: #ebf7f0;
  border: 0;
  margin-bottom: 1.625rem;
  color: #36c964;
  font-size: 0.875rem;
}
</style>