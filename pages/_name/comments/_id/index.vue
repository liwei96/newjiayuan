<template>
  <div id="comments">
    <top-view :jkl="jkl"></top-view>
    <ul class="con">
      <li v-for="(item, key) in lists" :key="key">
        <div class="top">
          <img src="~/assets/jiapeo.png" alt />
          <div class="topright">
            <h5>{{ item.name }}</h5>
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
          <p class="txt">{{ item.content }}</p>
          <div class="type">
            <span class="time">{{ item.time }}</span>
            <span class="del" v-if="item.mine == 1" @click="del(item.id,key)">删除</span>
            <p class="btn">
              <span :class="item.my_like==1?'active':''" @click="like(item.id)">
                <img :src="item.my_like == 1? img1:img" alt />
                {{ item.like_num }}
              </span>
              <span>
                <img src="~/assets/zixun.png" alt />
                {{ item.children.length }}
              </span>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <nuxt-link :to="'/' + jkl + '/comment/' + id">
      <img src="~/assets/comments-fixed.png" alt class="fixed" />
    </nuxt-link>
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
      ></tan-view>
    </van-popup>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import nav from "@/components/nav.vue";
import tan from "@/components/tan.vue";
import { comments,delcomm,likecomm } from "@/api/api";
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
    let token = context.store.state.cookie.token;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/comments/phone", {
          params: {
            id: id,
            page: 1,
            limit: 10,
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
      tan: false,
      typenum: 0,
      typebtn: 1,
      name: "",
      remark: "",
      img:require('~/assets/noclick.png'),
      img1:require('~/assets/checked.png')
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
      this.remark = "评论页+预约看房";
    },
    del(id,key){
      let token = $cookies.get('token')
      delcomm({token:token,id:id}).then(res=>{
        if(res.data.code==200){
          this.lists.slice(key,1)
          this.toast('删除成功')
          this.$router.go(0)
        }
      })
    },
    like(id){
      let token = $cookies.get('token')
      likecomm({token:token,id:id}).then(res=>{
        if(res.data.code==200){
          this.toast('点赞成功')
          this.$router.go(0)
        }
      })
    }
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