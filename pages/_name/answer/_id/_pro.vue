<template>
  <div id="answer">
    <top-view :jkl="jkl"></top-view>
    <div class="topmsg">
      <p class="tit">
        <span>问</span>
        {{ answer.question }}
      </p>
      <nuxt-link :to="'/' + jkl + '/content/' + building.id">
        <div class="ject-top">
          <div class="top-left">
            <img :src="building.img" alt />
          </div>
          <div class="top-right">
            <h4>
              {{ building.name }}
              <span>{{ building.state }}</span>
            </h4>
            <p class="pri">
              <span>{{ building.price }}</span
              >元/m²
            </p>
            <p class="typemsg">
              {{ building.type }} | {{ building.city_name }}-{{
                building.country.substr(0, 2)
              }}
              | {{ building.area }}m²
            </p>
            <p class="icon">
              <span class="zu">{{ building.decorate }}</span>
              <span v-for="(item, key) in building.feature" :key="key">{{
                item
              }}</span>
            </p>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="answer">
      <div class="top">
        <img src="~/assets/people.png" alt />
        <div class="promsg">
          <h5>
            {{ staff.name }}
            <span>专业解答</span>
          </h5>
          <p>
            最近咨询
            <span>{{ staff.ServeNum }}</span
            >人
          </p>
        </div>
        <button @click="pop('免费咨询', 104, '问答详情页+免费咨询')">
          免费咨询
        </button>
      </div>
      <p class="msg">{{ answer.answer }}</p>
      <p class="time">
        {{ answer.time }}
        <span
          :class="answer.my_like == 1 ? 'active' : ''"
          @click="like(answer.id)"
        >
          <img :src="answer.my_like == 1 ? img1 : img" alt />
          有用({{ answer.like_num }})
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
      <p class="msg">
        厨房排气道采用等截面变压式排气道，并在进气口设置可调变压防火止回阀，在管道内部，气...
      </p>
      <p class="time">
        2019-06-08
        <span> <img src="~/assets/noclick.png" />有用(12) </span>
      </p>
    </div>
    <div class="btn" v-if="false">
      <button>我来回答</button>
    </div>
    <div class="line"></div>
    <div class="likes">
      <h4>相关楼盘问答</h4>
      <template v-for="(item, key) in relevant">
        <nuxt-link :key="key" :to="'/' + jkl + '/answer/' + item.id">
          <p class="tit">
            <span>问</span>
            {{ item.question }}
          </p>
        </nuxt-link>
      </template>
      <nuxt-link :to="'/' + jkl + '/questions'">
        <button>查看{{ cityname.substr(0, 2) }}全部楼盘问答</button>
      </nuxt-link>
    </div>
    <div class="line"></div>
    <div class="other">
      <h3>猜你喜欢</h3>
      <template v-for="(item, key) in other">
        <nuxt-link :to="'/' + jkl + '/content/' + item.id" :key="key">
          <div class="pro">
            <img :src="item.img" alt />
            <div class="pro-msg">
              <h5>
                {{ item.name }}
                <span>{{ item.status }}</span>
              </h5>
              <p class="pro-price">
                <span>{{ item.single_price }}</span>
                <i>元/m²</i>起
              </p>
              <p class="attr">
                {{ item.type }} | {{ item.city }}-{{
                  item.country.substr(0, 2)
                }}
                | {{ item.area }}m²
              </p>
              <p class="pro-icon">
                <span class="pro-icon-zhuang">{{ item.decorate }}</span>
                <span
                  class="pro-icon-type"
                  v-for="(val, k) in item.features"
                  :key="k"
                  >{{ val }}</span
                >
              </p>
            </div>
          </div>
        </nuxt-link>
      </template>
    </div>
    <nav-view :phone="phone" @fot="chang($event)"></nav-view>
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
        :proname="building.name"
      ></tan-view>
    </van-popup>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import nav from "@/components/nav.vue";
import tan from "@/components/tan.vue";
import { agreeanswer } from "@/api/api";
export default {
  components: {
    "top-view": topView,
    "nav-view": nav,
    "tan-view": tan,
  },
  async asyncData(context) {
    let other = context.store.state.cookie.other;
    let jkl = context.params.name;
    let id = context.params.id;
    let token = context.store.state.cookie.token;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/question/detail/phone", {
          params: {
            other: other,
            id: id,
            token: token,
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
      phone: res.common.phone,
      answer: res.data,
      building: res.building,
      other: res.recommends,
      relevant: res.relevant,
      staff: res.common.staff.staff,
      cityname: res.common.city_info.current.city,
      phone: res.common.phone,
    };
  },
  head() {
    return {
      title: "家园新房-" + this.answer.question,
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
      navnum: 0,
      relevant: [],
      other: [],
      building: {},
      answer: {},
      cityname: "",
      phone: "",
      tan: false,
      typenum: 0,
      typebtn: 1,
      name: "",
      remark: "",
      id: "0",
      img: require("~/assets/noclick.png"),
      img1: require("~/assets/checked.png"),
    };
  },
  methods: {
    cli(e) {
      this.tan = e;
    },
    chang(data) {
      this.typenum = data.position;
      this.name = data.name;
      this.typebtn = 1;
      this.tan = true;
      this.remark = "问答详情页+预约看房";
      this.id = this.building.id;
    },
    pop(name, position, txt) {
      this.name = name;
      this.typebtn = 1;
      this.typenum = position;
      this.tan = true;
      this.remark = txt;
      this.id = this.building.id;
    },
    like(id) {
      let token = $cookies.get("token");
      if (token) {
        agreeanswer({ token: token, id: id }).then((res) => {
          if (res.data.code == 200) {
            this.toast(res.data.message);
            this.$router.go(0);
          } else {
            let url = this.$route.path;
            sessionStorage.setItem("path", url);
            this.$router.push("/" + this.jkl + "/login");
          }
        });
      } else {
        let url = this.$route.path;
        sessionStorage.setItem("path", url);
        this.$router.push("/" + this.jkl + "/login");
      }
    },
  },
};
</script>
<style lang="less" scoped>
.topmsg {
  padding: 0 4%;
  padding-top: 3.75rem;
  padding-bottom: 1.25rem;
  .tit {
    color: #323333;
    font-size: 0.875rem;
    line-height: 1.40625rem;
    margin-bottom: 0.875rem;
    span {
      padding: 0.09375rem 0.1875rem;
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
        margin-bottom: 0.175rem;
        position: relative;
        top:-0.1875rem;
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
          font-weight: bold;
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
          padding: 0.125rem 0.3125rem;
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
    margin-top: 1rem;
    margin-bottom: 0.9375rem;
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
        position: relative;
        top: -0.1875rem;
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
    margin-bottom: 1.1875rem;
    border-radius: 0.375rem;
    line-height: 1.625rem;
  }
  .time {
    color: #96989a;
    font-size: 0.75rem;
    margin-bottom: 1.0625rem;
    span {
      float: right;
      color: #96989a;
      font-size: 0.6875rem;
      img {
        width: 0.875rem;
        margin-right: 0.125rem;
        margin-bottom: -0.125rem;
      }
    }
    .active {
      color: #ff761a;
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
          color:#FF5454;
          font-size: 0.9375rem;
        }
        i {
          font-style: normal;
          color:#FF5454;
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