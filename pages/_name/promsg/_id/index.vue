<template>
  <div id="promsg">
    <top-view></top-view>
    <div class="topnav">
      <ul>
        <li :class="navnum == 0?'active':''" @click="navnum = 0">
          实时动态
          <p></p>
        </li>
        <li :class="navnum == 1?'active':''" @click="navnum = 1">
          加推时间
          <p></p>
        </li>
        <li :class="navnum == 2?'active':''" @click="navnum = 2">
          交房时间
          <p></p>
        </li>
        <li :class="navnum == 3?'active':''" @click="navnum = 3">
          五证信息
          <p></p>
        </li>
      </ul>
    </div>
    <div class="dynamic" v-if="navnum == 0">
      <ul>
        <li v-for="(item,key) in dynamics" :key="key">
          <p class="time">{{item.time}}</p>
          <div class="con">
            <nuxt-link :to="'/'+jkl+'/dynamic/'+item.id">
            <h4>{{item.title}}</h4>
            <p>{{item.content}}</p>
            </nuxt-link>
            <div class="imgbox">
              <img v-lazy="item.img" alt @click="big(item.img)"/>
            </div>
            <span></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="push" v-if="navnum == 1">
      <ul>
        <li v-for="(item,key) in push_times" :key="key">
          <p></p>加推时间：{{item.time}}
        </li>
      </ul>
    </div>
    <div class="push" v-if="navnum == 2">
      <ul>
        <li v-if="info.give_time">
          <p></p>交房时间：{{info.give_time}}
        </li>
      </ul>
    </div>
    <div class="push" v-if="navnum == 3">
      <ul>
        <li v-if="info.license">
          <p></p>{{info.license}}
        </li>
      </ul>
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
      ></tan-view>
    </van-popup>
  </div>
</template>
<script>
import { ImagePreview } from 'vant';
import topView from "@/components/header.vue";
import nav from "@/components/nav.vue";
import tan from "@/components/tan.vue";
import { dynamics } from '@/api/api'
export default {
  components: {
    "top-view": topView,
    "nav-view": nav,
    'tan-view':tan
  },
  async asyncData(context) {
    let id = context.params.id;
    let other = context.query.other;
    let jkl = context.params.name;
    let token = context.store.state.cookie.token;
    let [res,res1] = await Promise.all([
      context.$axios
        .get("/jy/dynamic/info/phone", {
          params: {
            id: id,
            page: 1,
            limit: 10,
          },
        })
        .then((resp) => {
          let data = resp.data;
          // console.log(data)
          return data;
        }),
        context.$axios
        .get("/jy/dynamic/condition/phone", {
          params: {
            id: id,
            token: token,
            other: other,
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
      dynamics:res.data,
      push_times:res1.push_times,
      phone:res1.common.phone,
      info:res1.info,
      id:id
    };
  },
  data() {
    return {
      navnum: 0,
      dynamics:[],
      push_times:[],
      phone:'',
      info:{},
      isok:true,
      page:2,
      id:0,
      tan: false,
      typenum: 0,
      typebtn: 1,
      name: "",
      remark: "",
    };
  },
  methods:{
    getmore() {
      let that = this;
      var scrollTop = window.scrollY;
      var scrollHeight = window.screen.availHeight;
      var windowHeight = document.body.scrollHeight;
      if (scrollTop + scrollHeight >= windowHeight) {
        if (that.isok) {
          that.isok = false;
          let city = $cookies.get("city");
          dynamics({
            id: that.id,
            page: that.page,
            limit: 10,
          }).then((res) => {
            that.dynamics = that.dynamics.concat(res.data.data);
            that.page = that.page + 1;
            that.isok = true;
          });
        }
      }
    },
    big(arr) {
      ImagePreview({
        images: [arr]
      });
    },
    chang(data) {
      this.typenum = data.position;
      this.name = data.name;
      this.typebtn = 1;
      this.tan = true;
      this.remark = "动态页+预约看房";
    },
    cli(e) {
      this.tan = e;
    },
  },
  mounted(){
    window.addEventListener("scroll", this.getmore);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.getmore);
  },
};
</script>
<style lang="less" scoped>
.topnav {
  padding-top: 3.5rem;
  margin-bottom: 0.875rem;
  padding-bottom: 0.875rem;
  border-bottom: 0.03125rem solid #f5f5f5;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      color: #323333;
      font-size: 0.875rem;
    }
    .active {
      color: #2ac66e;
      font-size: 0.875rem;
      font-weight: bold;
      position: relative;
      p {
        background-color: #2ac66e;
        width: 1.5625rem;
        height: 0.125rem;
        border-radius: 0.0625rem;
        left: 50%;
        position: absolute;
        margin-left: -0.78125rem;
        bottom: -0.25rem;
      }
    }
  }
}
.dynamic {
  padding: 0 4%;
  padding-bottom: 4.375rem;
  .time {
    color: #96989a;
    font-size: 0.75rem;
    margin-bottom: 0.8rem;
  }
  .con {
    padding-left: 1.125rem;
    border-left: 0.03125rem solid #eeeeee;
    position: relative;
    margin-bottom: 1.875rem;
    h4 {
      color: #474a4d;
      font-size: 0.9375rem;
      margin-bottom: 0.375rem;
      position: relative;
      top: -0.375rem;
    }
    p {
      color: #646566;
      font-size: 0.8125rem;
      line-height: 1.1875rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      margin-bottom: 0.625rem;
    }
    img {
      width: 6.3125rem;
      height: 4.375rem;
      border-radius: 0.125rem;
      margin-right: 0.45rem;
    }
    img:nth-of-type(3) {
      margin-right: 0;
    }
    span {
      display: block;
      position: absolute;
      width: 0.375rem;
      height: 0.375rem;
      border: 0.125rem solid #2ac66e;
      border-radius: 50%;
      background-color: #fff;
      top: 0;
      left: -0.3125rem;
    }
  }
}
.push {
  padding: 0 4%;
  ul {
    li {
      display: flex;
      color: #333334;
      font-size: 0.9375rem;
      align-items: center;
      margin-bottom: 0.625rem;
      p {
        width: 0.375rem;
        height: 0.375rem;
        border: 0.125rem solid #2ac66e;
        border-radius: 50%;
        background-color: #fff;
        margin-right: 0.375rem;
      }
    }
  }
  
}
</style>