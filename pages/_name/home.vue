<template>
  <div id="home">
    <div class="top">
      <div class="tops">
        <img src="~/assets/home-back.png" alt class="back" @click="back" />
        <img src="~/assets/set.png" alt class="set" @click="set" />
      </div>
      <div class="name" @click="login">
        <img src="~/assets/loginpeo.png" alt />
        <h4>{{ username }}</h4>
      </div>
      <ul class="li">
        <li @click="viewed">
          <div>
            <p class="num">{{ list.length }}</p>
            <p class="msg">浏览足迹</p>
          </div>
        </li>
        <li @click="collection">
          <div>
            <p class="num">{{ colls.length }}</p>
            <p class="msg">我的收藏</p>
          </div>
        </li>
        <li @click="cancel">
          <div>
            <p class="num">{{ cardnum }}</p>
            <p class="msg">优惠卡券</p>
          </div>
        </li>
        <!-- <li @click="linkman">
            <div>
              <p class="num">
                0
                <span>0</span>
              </p>
              <p class="msg">我的联系</p>
            </div>
        </li> -->
      </ul>
      <ul class="ll">
        <li>
          <nuxt-link :to="'/' + jkl + '/help'">
            <div>
              <img src="~/assets/login-search.png" alt />
              <p>帮我找房</p>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/' + jkl + '/order'">
            <div>
              <img src="~/assets/login-yue.png" alt />
              <p>预约看房</p>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/' + jkl + '/map'">
            <img src="~/assets/home-map.png" alt />
            <p>地图找房</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/' + jkl + '/join'">
            <img src="~/assets/home-jia.png" alt />
            <p>城市加盟</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="con">
      <ul class="col">
        <li>
          <nuxt-link :to="'/' + jkl + '/about'">
            <div>
              <img class="pp" src="~/assets/home-about.png" alt />
              <p>关于家园</p>
              <img class="more" src="~/assets/home-more.png" alt />
            </div>
          </nuxt-link>
        </li>
        <li @click="show = true">
          <img class="pp" src="~/assets/home-tel.png" alt />
          <p>联系我们</p>
          <img class="more" src="~/assets/home-more.png" alt />
        </li>
        <li>
          <div @click="jian">
            <img class="pp" src="~/assets/home-comment.png" alt />
            <p>投诉建议</p>
            <img class="more" src="~/assets/home-more.png" alt />
          </div>
        </li>
      </ul>
      <ul class="col">
        <li>
          <nuxt-link :to="'/' + jkl + '/statement'">
            <div>
              <img class="pp" src="~/assets/home-vesion.png" alt />
              <p>版权声明</p>
              <img class="more" src="~/assets/home-more.png" alt />
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/' + jkl + '/disclaimer'">
            <div>
              <img class="pp" src="~/assets/home-mian.png" alt />
              <p>免责协议</p>
              <img class="more" src="~/assets/home-more.png" alt />
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/' + jkl + '/privacy'">
            <div>
              <img class="pp" src="~/assets/home-yin.png" alt />
              <p>隐私政策</p>
              <img class="more" src="~/assets/home-more.png" alt />
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/' + jkl + '/protocol'">
            <div>
              <img class="pp" src="~/assets/home-xie.png" alt />
              <p>服务协议</p>
              <img class="more" src="~/assets/home-more.png" alt />
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <!-- <van-popup v-model="show" position="center" :style="{ background: 'rgba(0,0,0,0)' }">
      <tan-view :id=45 :name="'士大夫'" :typenum="5" :typebtn="5"></tan-view>
    </van-popup>-->
    <van-popup
      v-model="show"
      position="center"
      :style="{ background: 'rgba(0,0,0,0)' }"
    >
      <div class="box">
        <h4>拨打电话</h4>
        <p class="tit">400-718-6686</p>
        <div class="btn">
          <p @click="show = false">取消</p>
          <a :href="'tel:' + tel">
            <p class="yes">确定</p>
          </a>
        </div>
      </div>
    </van-popup>
    <div class="footer">
      <p>
        杭州亚汉网络科技有限公司版权所有 &nbsp;&nbsp;&nbsp;电话：400-718-6686
      </p>
      <p>网络经营许可证：<a href="http://www.beian.miit.gov.cn/">浙ICP备19015909号-1</a></p>
    </div>
  </div>
</template>
<script>

import tan from "@/components/tan.vue";
export default {
  async asyncData(context) {
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let other = context.store.state.cookie.other;
    let city = context.store.state.cookie.city;
    let [res, res1, res2] = await Promise.all([
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
          // console.log(data)
          return data;
        }),
      context.$axios
        .get("/jy/mine/foots", {
          params: {
            token: token,
            page: 1,
            limit: 50,
          },
        })
        .then((resp) => {
          let data = resp.data;
          // console.log(data)
          return data;
        }),
      context.$axios
        .get("/jy/mine/collect", {
          params: {
            token: token,
            page: 1,
            limit: 50,
          },
        })
        .then((resp) => {
          let data = resp.data;
          // console.log(data)
          return data;
        }),
    ]);
    return {
      jkl: jkl,
      tel: res.common.phone,
      list: res1.data,
      colls: res2.data,
    };
  },
  head() {
    return {
      title: "家园新房-个人主页",
      meta: [
        {
          name: "description",
          content: "家园新房",
        },
        {
          name: "keywords",
          content: "家园新房",
        },
      ],
    };
  },
  data() {
    return {
      show: false,
      jkl: "",
      tel: "400-688-965",
      username: "点击登录",
      cardnum: 0,
    };
  },
  components: {
    "tan-view": tan,
  },
  methods: {
    back() {
      this.$router.push("/" + this.jkl);
    },
    set() {
      this.$router.push("/" + this.jkl + "/set");
    },
    login() {
      if (!$cookies.get("token")) {
        this.$router.push("/" + this.jkl + "/login");
      }
    },
    jian() {
      if ($cookies.get("token")) {
        this.$router.push("/" + this.jkl + "/complaint");
      } else {
        this.$router.push("/" + this.jkl + "/login");
      }
    },
    viewed() {
      if ($cookies.get("token")) {
        this.$router.push("/" + this.jkl + "/viewed");
      } else {
        this.$router.push("/" + this.jkl + "/login");
      }
    },
    collection() {
      if ($cookies.get("token")) {
        this.$router.push("/" + this.jkl + "/collection");
      } else {
        this.$router.push("/" + this.jkl + "/login");
      }
    },
    cancel() {
      if ($cookies.get("token")) {
        this.$router.push("/" + this.jkl + "/cancel");
      } else {
        this.$router.push("/" + this.jkl + "/login");
      }
    },
    linkman() {
      if ($cookies.get("token")) {
        this.$router.push("/" + this.jkl + "/linkman");
      } else {
        this.$router.push("/" + this.jkl + "/login");
      }
    },
  },
  mounted() {
    if ($cookies.get("token")) {
      this.username = $cookies.get("username");
    }
    if ($cookies.get("have")) {
      this.cardnum = 1;
    }
  },
};
</script>
<style lang="less" scoped>
@import '@/static/css/hide.css';
#home {
  background-color: #f7f7f7;
  height: 100vh;
}
.top {
  padding: 0 4%;
  padding-top: 0.875rem;
  background: url(~assets/home1.png) no-repeat;
  background-size: 100%;
  .tops {
    margin-bottom: 0.75rem;
  }
  .back {
    width: 1.25rem;
  }
  .set {
    width: 1.25rem;
    float: right;
  }
  .name {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    img {
      width: 3.125rem;
      height: 3.125rem;
      border-radius: 50%;
      margin-right: 0.875rem;
    }
    h4 {
      color: #115c31;
      font-size: 1.125rem;
    }
  }
  .li {
    display: flex;
    li {
      width: 25%;
      .num {
        color: #115c31;
        font-size: 1.125rem;
        margin-bottom: 0.375rem;
        text-align: center;
        font-weight: bold;
        position: relative;
        span {
          display: block;
          width: 0.8125rem;
          height: 0.8125rem;
          text-align: center;
          line-height: 0.8125rem;
          border-radius: 50%;
          background-color: #c6fbdd;
          color: #1c8749;
          font-size: 0.625rem;
          position: absolute;
          top: 0;
          right: 1rem;
        }
      }
      .msg {
        color: #115c31;
        font-size: 0.75rem;
        text-align: center;
      }
    }
  }
  .ll {
    width: 100%;
    margin-top: 0.875rem;
    height: 5.5rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 1.0625rem 0.1875rem rgba(6, 0, 1, 0.03);
    background-color: #fff;
    margin-bottom: 0.6875rem;
    li {
      width: 25%;
      text-align: center;
      img {
        width: 2rem;
      }
      p {
        color: #101214;
        font-size: 0.8125rem;
      }
    }
  }
}
.con {
  padding: 0 4%;
  .col {
    width: 100%;
    // height: 9.375rem;
    background-color: #fff;
    border-radius: 0.75rem;
    margin-bottom: 0.9375rem;
    li {
      display: flex;
      align-items: center;
      height: 3.125rem;
      padding: 0 0.9375rem;
      a {
        width: 100%;
      }
      div {
        display: flex;
        align-items: center;
        height: 3.125rem;
        width: 100%;
      }
      .pp {
        height: 1.25rem;
        margin-right: 0.5rem;
      }
      p {
        color: #101214;
        font-size: 0.875rem;
      }
      .more {
        margin-left: auto;
        height: 0.75rem;
      }
    }
  }
}
.box {
  width: 17.8125rem;
  height: 9.875rem;
  border-radius: 0.625rem;
  background-color: #fff;
  h4 {
    color: #666666;
    font-size: 1rem;
    padding-top: 1.25rem;
    margin-bottom: 1rem;
    text-align: center;
    font-weight: 400;
  }
  .tit {
    color: #343434;
    font-size: 1.125rem;
    text-align: center;
    margin-bottom: 1.75rem;
  }
  .btn {
    border-top: 0.03125rem solid #f7f7f7;
    display: flex;
    padding-top: 0.5rem;
    p {
      color: #7d7e80;
      font-size: 1rem;
      width: 50%;
      text-align: center;
      line-height: 2rem;
    }
    a {
      width: 50%;
      p {
        width: 100%;
      }
    }
    .yes {
      color: #2ac66d;
      border-left: 0.03125rem solid #f2f2f2;
    }
  }
}
.footer {
  color: #88a1ae;
  width: 100%;
  font-size: 0.75rem;
  position: fixed;
  bottom: 0;
  text-align: center;
  p {
    margin-bottom: 0.625rem;
  }
  a {
    color: #88a1ae;
    text-decoration: underline;
  }
}
</style>