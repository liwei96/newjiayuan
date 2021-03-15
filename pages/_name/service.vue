<template>
  <div class="Follow">
    <div class="container-fluid m">
      <top-view :jkl="jkl"></top-view>
      <p>关注{{txt}}客服了解更多楼盘资讯</p>
      <img src="~/assets/fllow1.jpg" alt class="two" />
      <button @click="down">点击下载二维码</button>
      <div class="line"></div>
    </div>
    <div class="di">
      <img src="~/assets/follow.png" alt />
    </div>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import '@/static/css/foot.css'
export default {
  async asyncData(context) {
    let host = context.store.state.host
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let other = context.store.state.cookie.other;
    let city = context.store.state.cookie.city;
    let [res] = await Promise.all([
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
    ]);
    return {
      jkl: jkl,
      tel:res.common.phone,
      title:res.common.header.title,
      description:res.common.header.description,
      keywords:res.common.header.keywords,
      host:host
    };
  },
  head() {
    return {
      title: this.title || "家园新房-关注家园客服",
      meta: [
        {
          name: "description",
          content: this.description ||
            "家园新房"
        },
        {
          name: "Keywords",
          content: this.keywords || "家园新房"
        }
      ]
    };
  },
  data() {
    return {
      imgs: "http://test.jy8006.com/_nuxt/img/4525797.png",
      jkl: "",
      txt:'家园'
    };
  },
  components: {
    "top-view": topView,
  },
  methods: {
    down() {
      var alink = document.createElement("a");
      alink.href = this.imgs;
      alink.download = "pic"; //图片名
      alink.click();
    },
  },
  mounted(){
    if(this.host == 0) {
      this.txt = '家园'
    }else {
      this.txt = '易得房'
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: "Microsoft YaHei";
}

a a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
  color: #fff;
}
li {
  list-style-type: none;
}

/* m */

p {
  color: #2ac66e;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 3.875rem;
  margin-bottom: 1.625rem;
}
.two {
  width: 44%;
  margin-left: 28%;
  margin-bottom: 1.625rem;
}

button {
  width: 12.5rem;
  height: 2.25rem;
  background: linear-gradient(-270deg, #20c466, #3fd6a7);
  box-shadow: 0.03125rem 0.15625rem 0.3125rem 0px rgba(44, 204, 128, 0.2);
  border-radius: 0.25rem;
  text-align: center;
  line-height: 2.25rem;
  color: #fff;
  border: 0;
  margin-left: 23.33%;
  margin-bottom: 40px;
}
.di {
  width: 100%;
  height: auto;
}
.di img {
  width: 100%;
  height: auto;
}
</style>