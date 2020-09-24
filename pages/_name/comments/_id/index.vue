<template>
  <div id="comments">
    <top-view></top-view>
    <ul class="con">
      <li v-for="(item,key) in lists" :key="key">
        <div class="top">
          <img src="~/assets/jiapeo.png" alt />
          <div class="topright">
            <h5>154****3787</h5>
            <van-rate
              v-model="item.score"
              :size="12"
              color="#FF761A"
              void-icon="star"
              void-color="#E9ECEE"
            />
          </div>
        </div>
        <div class="bom">
          <p class="txt">{{item.content}}</p>
          <div class="type">
            <span class="time">{{item.time}}</span>
            <span class="del" v-if="item.min==1">删除</span>
            <p class="btn">
              <span class="active">
                <img src="~/assets/noclick.png" alt />
                {{item.like_num}}
              </span>
              <span>
                <img src="~/assets/zixun.png" alt />
                {{item.children.length}}
              </span>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <nuxt-link :to="'/'+jkl+'/comment/'+id">
      <img src="~/assets/comments-fixed.png" alt class="fixed" />
    </nuxt-link>
    <nav-view></nav-view>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import nav from "@/components/nav.vue";
import { comments } from "@/api/api";
export default {
  components: {
    "top-view": topView,
    "nav-view": nav,
  },
  async asyncData(context) {
    let other = context.query.other;
    let jkl = context.params.name;
    let id = context.params.id;
    let city = context.store.state.city;
    let token = context.store.state.cookie.token;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/comments/phone", {
          params: {
            id: id,
            page: 1,
            limit: 10,
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
      lists: res.data,
      id: id,
    };
  },
  data() {
    return {
      value: 3,
      phone: "",
      lists: [],
      id: 0,
      page: 2,
      isok: true,
    };
  },
  methods: {
    getmore() {
      let that = this;
      var scrollTop = window.scrollY;
      var scrollHeight = window.screen.availHeight;
      var windowHeight = document.body.scrollHeight;
      if (scrollTop + scrollHeight >= windowHeight) {
        if (that.isok) {
          that.isok = false;
          comments({ id: id, page: that.page, limit: 10 }).then((res) => {
            that.isok = true;
            that.lists = that.lists.concat(res.data.data)
          });
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.getmore);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.getmore);
  },
};
</script>
<style lang="less" scoped>
.con {
  padding: 3.6875rem 4% 3.75rem 4%;
  li {
    .top {
      display: flex;
      margin-bottom: 0.625rem;
      img {
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 50%;
        margin-right: 0.625rem;
      }
      .topright {
        h5 {
          color: #323333;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }
      }
    }
    .bom {
      .txt {
        color: #333333;
        font-size: 0.875rem;
        line-height: 1.3125rem;
        margin-bottom: 0.875rem;
      }
      .type {
        color: #92949a;
        font-size: 0.8125rem;
        .time {
          margin-right: 0.5rem;
        }
        .btn {
          float: right;
          color: #96989e;
          font-size: 0.75rem;
          img {
            width: 0.875rem;
            margin-bottom: -0.125rem;
          }
          .active {
            color: #ff761a;
          }
        }
      }
    }
  }
}
.fixed {
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  position: fixed;
  right: 0.9375rem;
  bottom: 8.125rem;
}
</style>