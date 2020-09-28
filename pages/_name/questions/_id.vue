<template>
  <div id="questions">
    <top-view :jkl="jkl"></top-view>
    <div class="topimg">
      <img src="~/assets/questions.jpg" alt />
    </div>
    <ul>
      <li v-for="(item, key) in lists" :key="key">
        <p class="tit">
          <span>问</span>
          {{ item.question }}
        </p>
        <div class="answer" v-if="item.answer">
          <div class="top">
            <img :src="item.staff.head_img" alt />
            <div class="promsg">
              <h5>
                {{ item.staff.name }}
                <span>专业解答</span>
              </h5>
              <p>咨询师帮您在线解答</p>
            </div>
          </div>
          <nuxt-link
            :to="
              id
                ? '/' + jkl + '/answer/' + item.id + '/' + id
                : '/' + jkl + '/answer/' + item.id
            "
          >
            <p class="msg">
              {{ item.answer.substr(0, 40) }}
              <i v-if="item.answer.length > 40">...</i>
              <span v-if="item.answer.length > 40">[全文]</span>
            </p>
          </nuxt-link>
        </div>
        <div class="btn" v-if="!item.answer">
          <nuxt-link :to="'/' + jkl + '/response/' + item.id">
            <button>我来回答</button>
          </nuxt-link>
        </div>
        <div class="answer" v-if="false">
          <div class="top">
            <img src="~/assets/jiapeo.png" alt />
            <div class="promsg">
              <h5>167****4567</h5>
              <p>家园房友</p>
            </div>
          </div>
          <p class="msg">
            {{ item.answer }}
            <span>[全文]</span>
          </p>
        </div>
      </li>
    </ul>
    <div class="fix">
      <img src="~/assets/questions-fixed.png" alt @click="click" />
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
        :proname="proname"
      ></tan-view>
    </van-popup>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import nav from "@/components/nav.vue";
import tan from "@/components/tan.vue";
import { questions } from "@/api/api";
export default {
  components: {
    "top-view": topView,
    "nav-view": nav,
    "tan-view": tan,
  },
  async asyncData(context) {
    let other = context.query.other;
    let jkl = context.params.name;
    let id = context.params.id;
    let city = context.store.state.city;
    let dd;
    let token = context.store.state.cookie.token;
    if (id) {
      dd = {
        other: other,
        project: id,
        page: 1,
        limit: 10,
        token: token,
      };
    } else {
      dd = {
        other: other,
        city: city,
        page: 1,
        limit: 10,
        token: token,
      };
    }
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/question/list/phone", {
          params: dd,
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
      lists: res.data,
      id: id,
    };
  },
  head() {
    return {
      title: "家园新房-楼盘问答",
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
      lists: [],
      jkl: "",
      phone: "",
      id: 0,
      page: 2,
      isok: true,
      tan: false,
      typenum: 0,
      typebtn: 1,
      name: "",
      remark: "",
      proname:''
    };
  },
  methods: {
    getmore() {
      var scrollTop = window.scrollY;
      var scrollHeight = window.screen.availHeight;
      var windowHeight = document.body.scrollHeight;
      if (scrollTop + scrollHeight >= windowHeight) {
        if (this.isok) {
          this.isok = false;
          let that = this;
          let token = $cookies.get("token");
          questions({
            project: that.id,
            page: that.page,
            limit: 10,
            other: that.$route.query.other,
            token: token,
          }).then((res) => {
            that.isok = true;
            that.page = that.page + 1;
            that.lists = that.lists.concat(res.data.data);
          });
        }
      }
    },
    cli(e) {
      this.tan = e;
    },
    chang(data) {
      this.typenum = data.position;
      this.name = data.name;

      this.typebtn = 1;
      this.tan = true;
      this.remark = "问答页+预约看房";
    },
    click() {
      if (this.id) {
        this.$router.push("/" + this.jkl + "/quiz/" + this.id);
      } else {
        this.$router.push("/" + this.jkl + "/quiz");
      }
    },
  },
  mounted() {
    this.proname = $cookies.get('proname')
    window.addEventListener("scroll", this.getmore);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.getmore);
  },
};
</script>
<style lang="less" scoped>
.topimg {
  padding-top: 2.75rem;
  margin-bottom: 0.875rem;
  img {
    width: 100%;
    height: 6.25rem;
  }
}
ul {
  padding: 0 4%;
  padding-bottom: 4.375rem;
  li {
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
    .answer {
      background-color: #f7f7f7;
      padding: 0.875rem;
      margin-bottom: 1.875rem;
      .top {
        display: flex;
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
            margin-bottom: 0.125rem;
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
          }
        }
      }
      .msg {
        color: #646566;
        font-size: 0.875rem;
        margin-top: 0.875rem;
        span {
          color: #628bb9;
          font-size: 0.875rem;
        }
      }
    }
    .btn {
      overflow: hidden;
      button {
        width: 4.375rem;
        height: 1.625rem;
        border-radius: 0.8125rem;
        text-align: center;
        line-height: 1.625rem;
        border: 0.03125rem solid #afb1b3;
        color: #646566;
        font-size: 0.75rem;
        float: right;
        background-color: #fff;
      }
    }
  }
}
.fix {
  width: 3.125rem;
  height: 3.125rem;
  position: fixed;
  right: 0.9375rem;
  bottom: 8.125rem;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
}
</style>