<template>
  <div id="account">
    <div class="container-fluid m">
      <top-view :jkl="jkl"></top-view>
      <p>关注公众号了解更多新房资讯</p>
      <img src="~/assets/serve.jpg" alt class="two" />
      <button @click="down">保存二维码图片</button>
      <div class="line"></div>
    </div>
    <div class="di">
      <img src="~/assets/server.jpg" alt />
    </div>
  </div>
</template>
<script>
import '@/static/css/foot.css'
import topView from "@/components/header.vue";
export default {
  async asyncData(context) {
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
      keywords:res.common.header.keywords
    };
  },
  head() {
    return {
      title: this.title || "家园新房-关注公众号",
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
    };
  },
  components: {
    "top-view": topView,
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    down() {
      var alink = document.createElement("a");
      alink.href = this.imgs;
      alink.download = "pic"; //图片名
      alink.click();
    },
  },
};
</script>
<style scoped>


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