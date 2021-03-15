<template>
  <div id="weiki">
    <top-view :jkl="jkl"></top-view>
    <div class="all">
      <div class="input">
        <nuxt-link :to="'/' + jkl + '/searcharitype'">
          <input
            type="text"
            placeholder="搜搜你想要了解的房产知识吧"
            @click="gos"
            disabled
          />
          <img src="~/assets/search.png" alt />
        </nuxt-link>
      </div>
      <div class="nav">
        <ul>
          <li :class="navnum == 0 ? 'active' : ''" @click="setnavnum(0)">
            <div class="nav-top">买房前</div>
            <p>相关政策、买房流程</p>
          </li>
          <li :class="navnum == 1 ? 'active1' : ''" @click="setnavnum(1)">
            <div class="nav-top">买房中</div>
            <p>新房签约、贷款政策</p>
          </li>
          <li :class="navnum == 2 ? 'active2' : ''" @click="setnavnum(2)">
            <div class="nav-top">买房后</div>
            <p>新房验房、还款落户</p>
          </li>
        </ul>
      </div>
      <div class="con">
        <div class="left">
          <ul>
            <li
              :class="item.id == position ? 'active' : ''"
              @click="setleftnum(key, item.id)"
              v-for="(item, key) in navs"
              :key="key"
            >
              <span>{{ item.name }}</span>
              <i></i>
            </li>
            <!-- <li :class="leftnum == 1?'active':''" @click="setleftnum(1)">
              <span>买房能力</span>
            </li>
            <li :class="leftnum == 2?'active':''" @click="setleftnum(2)">
              <span>买房政策</span>
            </li>
            <li :class="leftnum == 3?'active':''" @click="setleftnum(3)">
              <span>买房流程</span>
            </li>-->
          </ul>
        </div>
        <div class="right" id="list">
          <ul id="all">
            <template v-for="(item, key) in lists">
              <nuxt-link :key="key" :to="'/' + jkl + '/aritle/' + item.id">
                <li>
                  <h6>{{ item.title }}</h6>
                  <p>
                    {{ item.begin }}
                  </p>
                  <p>
                    <span v-for="(val, k) in item.tags" :key="k">{{
                      val
                    }}</span>
                  </p>
                </li>
              </nuxt-link>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import top from "@/components/header.vue";
import { aritles } from "@/api/api";
import '@/static/css/foot.css'
export default {
  components: {
    "top-view": top,
  },
  async asyncData(context) {
    let other = context.query.other;
    let city = context.store.state.city;
    let jkl = context.params.name;
    let position = context.params.id;
    let type = context.params.type;
    let [res] = await Promise.all([
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
          //   console.log(data)
          return data;
        }),
    ]);
    return {
      jkl: jkl,
      lists: res.data,
      type: type,
      position: position,
      title:res.common.header.title,
      description:res.common.header.description,
      keywords:res.common.header.keywords
    };
  },
  head() {
    return {
      title: this.title || "家园新房-楼盘百科",
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
      navnum: 0,
      leftnum: 0,
      lists: [],
      num: 56,
      before: [
        {
          name: "买房资格",
          id: 56,
        },
        {
          name: "买房能力",
          id: 57,
        },
        {
          name: "买房政策",
          id: 58,
        },
        {
          name: "买房流程",
          id: 59,
        },
      ],
      going: [
        {
          name: "新房签约",
          id: 60,
        },
        {
          name: "缴纳定金",
          id: 61,
        },
        {
          name: "贷款政策",
          id: 62,
        },
        {
          name: "商业贷款",
          id: 63,
        },
        {
          name: "公积金贷款",
          id: 64,
        },
      ],
      after: [
        {
          name: "还款",
          id: 65,
        },
        {
          name: "全款",
          id: 66,
        },
        {
          name: "新房验房",
          id: 67,
        },
        {
          name: "物业",
          id: 68,
        },
        {
          name: "退房流程",
          id: 69,
        },
        {
          name: "落户",
          id: 70,
        },
      ],
      type: "before",
      navs: [],
      page: 2,
      isok: true,
    };
  },
  methods: {
    setnavnum(n) {
      this.navnum = n;
      if (n == 0) {
        this.$router.push("/" + this.jkl + "/weike/before/56");
      } else if (n == 1) {
        this.$router.push("/" + this.jkl + "/weike/going/60");
      } else {
        this.$router.push("/" + this.jkl + "/weike/after/65");
      }
    },
    setleftnum(n, id) {
      this.leftnum = n;
      this.$router.push("/" + this.jkl + "/weike/" + this.type + "/" + id);
    },
    gos() {
      this.$router.push("/" + this.jkl + "/searcharitype");
    },
  },
  mounted() {
    if (this.type == "before") {
      this.navnum = 0;
      this.navs = this.before;
    } else if (this.type == "going") {
      this.navnum = 1;
      this.navs = this.going;
    } else {
      this.navnum = 2;
      this.navs = this.after;
    }
    let that = this;
    let city = $cookies.get("city");
    $("#list").on("scroll", function () {
      console.log($(this).scrollTop(), $("#list").height(), $("#all").height());
      if ($(this).scrollTop() + $("#list").height() >= $("#all").height()) {
        if (that.isok) {
          that.isok = false;
          aritles({
            position: that.position,
            page: that.page,
            limit: 10,
            city: city,
          }).then((res) => {
            console.log(res);
            that.lists = that.lists.concat(res.data.data);
            that.page = that.page + 1;
            that.isok = true;
          });
        }
      }
    });
    document.getElementById('foott').style.display = 'none'
  },
  beforeDestroy() {
    document.getElementById('foott').style.display = 'block'
  },
};
</script>
<style lang="less" scoped>
li {
  list-style: none;
}
.all {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.input {
  height: 2.5rem;
  padding: 0.25rem 4%;
  position: relative;
  padding-top: 3rem;
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
.nav {
  padding: 1rem 4% 1.0625rem 4%;
  ul {
    display: flex;
    li {
      width: 6.6875rem;
      height: 4rem;
      margin-right: 0.75rem;
      .nav-top {
        height: 2.6rem;
        border: 0.0625rem solid rgba(242, 242, 242, 1);
        text-align: center;
        line-height: 2.6rem;
        color: rgba(98, 100, 102, 1);
        font-size: 1rem;
        border-radius: 0.34375rem 0.34375rem 0 0;
        font-weight: bold;
      }
      p {
        background-color: rgba(42, 198, 109, 1);
        height: 1.125rem;
        text-align: center;
        line-height: 1.125rem;
        border-radius: 0 0 0.25rem 0.25rem;
        color: #fff;
        font-size: 0.625rem;
      }
    }
    .active {
      .nav-top {
        border: 0.0625rem solid rgba(42, 198, 109, 1);
        color: rgba(47, 49, 51, 1);
      }
    }
    .active1 {
      .nav-top {
        border: 0.0625rem solid rgba(64, 162, 244, 1);
        color: rgba(47, 49, 51, 1);
      }
    }
    .active2 {
      .nav-top {
        border: 0.0625rem solid rgba(255, 125, 38, 1);
        color: rgba(47, 49, 51, 1);
      }
    }
    li:nth-of-type(2) {
      p {
        background-color: rgba(64, 162, 244, 1);
      }
    }
    li:nth-of-type(3) {
      margin: 0;
      p {
        background-color: rgba(255, 125, 38, 1);
      }
    }
  }
}
.con {
  display: flex;
  border-top: 0.03125rem solid rgba(242, 242, 242, 1);
  flex: 1;
  overflow: auto;
  .left {
    width: 5rem;
    background-color: rgba(242, 242, 242, 1);
    ul {
      li {
        text-align: center;
        height: 3.125rem;
        color: rgba(98, 100, 102, 1);
        font-size: 0.8125rem;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .active {
        background-color: #fff;
        color: rgba(42, 198, 109, 1);
        font-weight: bold;
        span {
          display: inline-block;
          width: 100%;
          // border-left: 0.1875rem solid rgba(42, 198, 109, 1);
          height: 0.9375rem;
        }
        i {
          position: absolute;
          display: block;
          width: 0.1875rem;
          height: 0.9375rem;
          background-color: #2AC66E;
          left:0
        }
      }
    }
  }
  .right {
    flex: 1;
    padding-left: 0.875rem;
    overflow: auto;
    ul {
      li {
        position: relative;
        border-bottom: 0.03125rem solid rgba(245, 245, 245, 1);
        padding-right: 0.9375rem;
        h6 {
          color: rgba(50, 50, 51, 1);
          font-size: 0.875rem;
          font-weight: 400;
          padding-top: 0.6875rem;
          margin-bottom: 0.625rem;
        }
        p {
          color: rgba(98, 100, 102, 1);
          font-size: 0.625rem;
          margin-bottom: 0.875rem;
          span {
            color: rgba(98, 100, 102, 1);
            font-size: 0.625rem;
            padding: 0.1875rem 0.3125rem;
            background-color: rgba(245, 245, 245, 1);
            border-radius: 0.125rem;
            margin-right: 0.375rem;
          }
        }
      }
    }
  }
}
</style>