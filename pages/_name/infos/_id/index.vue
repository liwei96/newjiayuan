<template>
  <div id="info">
    <top-view :jkl="jkl"></top-view>
    <div class="input">
      <nuxt-link :to="'/'+jkl+'/searchinfo'">
      <input type="text" placeholder="搜搜你想要了解的房产咨询吧" disabled/>
      <img src="~/assets/search.png" alt />
      </nuxt-link>
    </div>
    <div class="topimgs">
      <div class="swiper-topimg">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,key) in tops" :key="key">
            <nuxt-link :to="'/'+jkl+'/info/'+item.id">
            <img :src="item.img" alt />
            <p>{{item.title}}</p>
            </nuxt-link>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="swiper-nav">
      <div class="swiper-wrapper">
        <div
          :class="navnum == item.id?'swiper-slide active':'swiper-slide'"
          @click="setnavnum(item.id)"
          v-for="(item,key) in navs"
          :key="key"
        >
          {{item.name}}
          <p></p>
        </div>
      </div>
    </div>
    <div class="con">
      <template v-for="(item,key) in lists">
        <nuxt-link :to="'/'+jkl+'/info/'+item.id" :key="key">
          <div class="li">
            <div class="left">
              <h5>
                <span v-if="key==0">新</span>
                {{item.title}}
              </h5>
              <p>
                {{item.source}}
                <span>{{item.begin}}</span>
              </p>
            </div>
            <div class="right">
              <img :src="item.img" alt />
            </div>
          </div>
        </nuxt-link>
      </template>
    </div>
  </div>
</template>
<script>
import { aritles } from "@/api/api";
import top from "@/components/header.vue";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import '@/static/css/foot.css'
export default {
  components: {
    "top-view": top,
  },
  async asyncData(context) {
    let other = context.query.other;
    let city = context.store.state.city;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let position = context.params.id;
    let [res,res1] = await Promise.all([
      context.$axios
        .get("/jy/article/info", {
          params: {
            city: city,
            position: position,
            page: 1,
            limit: 10,
          },
        })
        .then((resp) => {
          let data = resp.data;
          //   console.log(data);
          return data;
        }),
        context.$axios
        .get("/jy/article/phone/news", {
          params: {
            city: city,
            token:token
          },
        })
        .then((resp) => {
          let data = resp.data;
          //   console.log(data);
          return data;
        }),
    ]);
    return {
      jkl: jkl,
      lists: res.data,
      position: position,
      navnum: position,
      isok: true,
      tops:res1.tops
    };
  },
  head() {
    return {
      title: "家园新房-咨询列表",
      meta: [
        {
          name: "description",
          content:
            "家园新房"
        },
        {
          name: "keywords",
          content: "家园新房"
        }
      ]
    };
  },
  data() {
    return {
      navnum: 0,
      isnew: 1,
      navs: [
        {
          id: "46",
          name: "楼盘导购",
        },
        {
          id: "48",
          name: "本地楼市",
        },
        {
          id: "49",
          name: "房企资讯",
        },
        {
          id: "50",
          name: "热点新闻",
        },
        {
          id: "54",
          name: "日报",
        },
        {
          id: "75",
          name: "周报",
        },
        {
          id: "55",
          name: "月报",
        },
        {
          id: "52",
          name: "土拍成交",
        },
        {
          id: "52",
          name: "楼盘动态",
        },
      ],
      lists: [],
      page: 2,
      isok: true,
      tops:[],
      position: 0,
    };
  },
  methods: {
    setnavnum(n) {
      this.$router.push("/" + this.jkl + "/infos/" + n);
    },
    getmore() {
      let that = this;
      var scrollTop = window.scrollY;
      var scrollHeight = window.screen.availHeight;
      var windowHeight = document.body.scrollHeight;
      if (scrollTop + scrollHeight >= windowHeight) {
        if (that.isok) {
          that.isok = false;
          let city = $cookies.get("city");
          aritles({
            position: that.position,
            page: that.page,
            limit: 10,
            city: city,
          }).then((res) => {
            that.lists = that.lists.concat(res.data.data);
            that.page = that.page + 1;
            that.isok = true;
          });
        }
      }
    },
  },
  mounted() {
    let that = this;
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
    window.addEventListener("scroll", this.getmore);
    // document.getElementById('foott').style.display = 'none'
    // $(document).on("scroll", function () {
    //   var scrollTop = window.scrollY;
    //   var scrollHeight = window.screen.availHeight;
    //   var windowHeight = document.body.scrollHeight;
    //   if (scrollTop + scrollHeight >= windowHeight) {
    //     if (that.isok) {
    //       that.isok = false;
    //       that.getmore();
    //     }
    //   }
    // });
  },
  beforeDestroy() {
    // document.getElementById('foott').style.display = 'block'
    window.removeEventListener("scroll", this.getmore);
  },
};
</script>
<style lang="less" scoped>
li {
  list-style: none;
}
.input {
  height: 2.5rem;
  padding: 0.25rem 4%;
  padding-top: 2.875rem;
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
  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #969799;
    font-size: 0.875rem;
  }

  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #969799;
    font-size: 0.875rem;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #969799;
    font-size: 0.875rem;
  }
  img {
    width: 1rem;
    position: absolute;
    top: 3.8rem;
    left: 4.8rem;
  }
}
.topimgs {
  margin-top: 1rem;
  .swiper-topimg {
    overflow: hidden;
    padding-bottom: 1.875rem;
    margin-bottom: 0.4375rem;
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
      bottom: 0.75rem;
      /deep/.swiper-pagination-bullet {
        width: 0.375rem;
        height: 0.125rem;
        border-radius: 0.0625rem;
        background-color: #cacacc;
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
  padding-bottom: 1.9375rem;
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
      width: 14.0625rem;
      h5 {
        color: #303234;
        font-size: 0.878rem;
        line-height: 1.25rem;
        font-weight: 400;
        height: 2.5rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        position: relative;
        top: -0.1875rem;
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
        bottom: 0.625rem;
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