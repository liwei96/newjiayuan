<template>
  <div id="Dynamic">
    <header>
      <img class="back" src="~/assets/goback.png" alt @click="back" />
      <img class="logo" src="~/assets/logo.png" alt />
      <img src="~/assets/searchtop.png" alt class="search" @click="search" />
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
          <router-link :to="'/' + jkl + '/home'">
            <img src="~/assets/barsearch.png" />
            <p>个人中心</p>
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
    <img src="~/assets/dynamics.png" alt class="topimg" />
    <div class="con">
      <div class="con-li" v-for="(item, key) in lists" :key="key">
        <nuxt-link :to="'/' + jkl + '/dynamic/' + item.id">
          <div class="con-li-top">
            <img :src="item.img" alt />
            <h6>{{ item.name }}</h6>
            <p>
              {{ item.country.substr(0, 2) }}
              <span>面积 {{ item.area }}m²</span>
              <span>均价：{{ item.price }}元/m²</span>
            </p>
            <i v-if="key == 0">最新</i>
            <div class="zhe"></div>
          </div>
        </nuxt-link>
        <div class="con-li-bom">
          <h6>{{ item.title }}</h6>
          <p class="txt">{{ item.content }}</p>
          <p class="time">{{ item.time }}</p>
          <button
            @click="pop('订阅实时动态', 98, '动态页+订阅实时动态', item.bid)"
          >
            订阅此楼盘动态
          </button>
        </div>
      </div>
    </div>
    <van-popup
      v-model="tan"
      :style="{ background: 'rgba(0,0,0,0)' }"
      @click-overlay="typebtn = 0"
    >
      <tan-view
        :txt="remark"
        :typenum="typenum"
        :id="id"
        :name="name"
        @close="cli($event)"
        :typebtn="typebtn"
      ></tan-view>
    </van-popup>
    <nav-view :phone="phone" @fot="chang($event)"></nav-view>
  </div>
</template>
<script>
import { dynamics } from "@/api/api";
import nav from "@/components/nav.vue";
import tan from "@/components/tan.vue";
export default {
  components: {
    "nav-view": nav,
    "tan-view": tan,
  },
  async asyncData(context) {
    try {
      let city = context.store.state.city;
      let jkl = context.params.name;
      let token = context.store.state.cookie.token;
      let other = context.store.state.cookie.other;
      let [res, res1] = await Promise.all([
        context.$axios
          .get("/jy/dynamic/info/phone", {
            params: {
              city: city,
              page: 1,
              limit: 10,
            },
          })
          .then((resp) => {
            let data = resp.data;
            //   console.log(data)
            return data;
          }),
        context.$axios
          .get("/jy/phone/head/foot", {
            params: {
              city: city,
              token: token,
              other: other,
            },
          })
          .then((resp) => {
            let data = resp.data;
            //   console.log(data)
            return data;
          }),
      ]);
      return {
        jkl: jkl,
        lists: res.data,
        ting: true,
        phone: res1.common.phone,
        title: res.common.header.title,
        description: res.common.header.description,
        keywords: res.common.header.keywords,
      };
    } catch (err) {
      console.log("errConsole========:", err);
      context.error({ statusCode: 404, message: "页面未找到或无数据" });
    }
  },
  head() {
    return {
      title: this.title || "家园新房-楼盘动态",
      meta: [
        {
          name: "description",
          content: this.description || "家园新房",
        },
        {
          name: "Keywords",
          content: this.keywords || "家园新房",
        },
      ],
    };
  },
  data() {
    return {
      btn: true,
      jkl: "",
      lists: [],
      ting: true,
      page: 2,
      phone: "",
      tan: false,
      typenum: 0,
      typebtn: 1,
      name: "",
      remark: "",
      id: "0",
      list: false,
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getmore() {
      let that = this;
      let city = $cookies.get("city");
      dynamics({ city: city, page: that.page, limit: 10 }).then((res) => {
        // console.log(res);
        that.lists = that.lists.concat(res.data.data);
        that.ting = true;
        that.page++;
      });
    },
    cli(e) {
      this.tan = e;
    },
    chang(data) {
      this.typenum = data.position;
      this.name = data.name;
      this.typebtn = 1;
      this.tan = true;
      this.remark = "动态列表页+预约看房";
    },
    btns() {
      if (this.list) {
        this.list = false;
      } else {
        this.list = true;
      }
    },
    search() {
      this.$router.push("/" + this.jkl + "/search");
    },
    pop(name, position, txt, id) {
      this.name = name;
      this.typebtn = 1;
      this.typenum = position;
      this.tan = true;
      this.remark = txt;
      this.id = id;
    },
  },
  mounted() {
    let that = this;
    $(document).on("scroll", function () {
      var scrollTop = window.scrollY;
      var scrollHeight = window.screen.availHeight;
      var windowHeight = document.body.scrollHeight;
      // console.log(scrollTop,scrollHeight,windowHeight);
      if (scrollTop + scrollHeight >= windowHeight) {
        if (that.ting) {
          // console.log(888)
          that.ting = false;
          that.getmore();
        }
      }
    });
  },
};
</script>
<style lang="less" scoped>
header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2.75rem;
  z-index: 1;
  background-color: #fff;
  // position: relative;
  .back {
    width: 1.5rem;
    margin-left: 1rem;
  }
  .logo {
    width: 3.125rem;
  }
  .search {
    width: 1.25rem;
    position: absolute;
    right: 3.5625rem;
    top: 0.75rem;
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
.topimg {
  width: 100%;
  height: 6.25rem;
  margin-top: 2.75rem;
}
.con {
  padding: 1.3125rem 1.5625rem 0 1.5625rem;
  .con-li {
    width: 100%;
    height: 19.0625rem;
    border-radius: 0.5rem;
    margin-bottom: 1.5625rem;
    box-shadow: 0px 0px 1.1875rem 0.09375rem rgba(0, 0, 0, 0.04);
    overflow: hidden;
    .con-li-top {
      height: 7.5rem;
      position: relative;
      img {
        width: 100%;
        height: 7.5rem;
      }
      h6 {
        color: #ffffff;
        font-size: 1rem;
        position: absolute;
        left: 0.875rem;
        bottom: 2.75rem;
        z-index: 1;
      }
      p {
        color: #ffffff;
        font-size: 0.8125rem;
        bottom: 1rem;
        left: 0.875rem;
        position: absolute;
        z-index: 1;
        span {
          margin-left: 0.625rem;
        }
      }
      i {
        display: block;
        position: absolute;
        width: 2.5rem;
        height: 1.125rem;
        border-radius: 0.5rem 0 0.5rem 0;
        text-align: center;
        line-height: 1.125rem;
        background: linear-gradient(270deg, #ff7c48, #ff4234);
        color: #fff2f2;
        font-size: 0.75rem;
        font-style: normal;
        left: 0;
        top: 0;
      }
      .zhe {
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.4)
        );
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .con-li-bom {
      padding: 0 4%;
      h6 {
        color: #323333;
        font-size: 0.9375rem;
        margin-top: 0.75rem;
        margin-bottom: 0.5rem;
        height: 1.25rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .txt {
        color: #646566;
        font-size: 0.8125rem;
        line-height: 1.1875rem;
        margin-bottom: 0.375rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .time {
        color: #96989a;
        font-size: 0.75rem;
        margin-bottom: 1rem;
      }
      button {
        width: 15.625rem;
        height: 2.25rem;
        border-radius: 0.25rem;
        text-align: center;
        line-height: 2.25rem;
        border: 0.03125rem solid #30c66e;
        color: #20c466;
        font-size: 0.9375rem;
        background-color: #fff;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
.nav {
  position: fixed;
  width: 92%;
  height: 3.75rem;
  background-color: #fff;
  padding: 0 4%;
  bottom: 0;
  display: flex;
  z-index: 1000;
  align-items: center;
  .nav-peo {
    position: relative;
    margin-right: 1.25rem;
    margin-left: 0.625rem;
    text-align: center;
    img {
      width: 1.5rem;
    }
    span {
      display: block;
      width: 0.8125rem;
      height: 0.8125rem;
      border-radius: 50%;
      text-align: center;
      line-height: 0.8125rem;
      font-size: 0.625rem;
      color: #fff;
      position: absolute;
      top: 0;
      right: 0;
      background-color: #f34f4f;
    }
    p {
      color: #626466;
      font-size: 0.75rem;
    }
  }
  .nav-msg {
    margin-right: 1.25rem;
    h5 {
      color: #222324;
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 0.25rem;
    }
    p {
      color: #696a6d;
      font-size: 0.75rem;
    }
  }
  button {
    width: 8rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    background: linear-gradient(270deg, #348aff, #6accff);
    text-align: center;
    line-height: 2.5rem;
    color: #fff;
    font-size: 0.9375rem;
    border: 0;
    img {
      width: 0.9375rem;
      margin-bottom: -0.125rem;
      margin-right: 0.25rem;
    }
  }
  .nav-tel {
    margin-left: 0.625rem;
    color: #fff;
    background: linear-gradient(270deg, #1fc365, #3fd6a6);
  }
}
</style>