<template>
  <div class="nav">
    <div class="nav-peo" @click="gotalk">
      <img src="~/assets/ke_h.png" alt v-if="!type" />
      <img src="~/assets/talking.gif" alt v-if="type" />
      <span v-if="true">1</span>
      <p>在线咨询</p>
    </div>
    <a :href="'tel:' + phone">
      <button class="nav-tel">
        <img src="~/assets/nav-tel.png" />电话咨询
      </button>
    </a>
    <button @click="show(103, '预约看房')">
      <img src="~/assets/nav-yue.png" />预约看房
    </button>
  </div>
</template>
<script>
export default {
  props: {
    phone: {
      type: String,
      // required: true,
    },
  },
  data() {
    return {
      url: "",
      btn: false,
      type: false,
    };
  },
  methods: {
    show(id, name) {
      this.$emit("fot", { position: id, name: name });
    },
    gotalk() {
      window.location.href =
        "http://www.jy1980.com:9191/hangzhou/talk?reconnect=" + this.url;
    },
  },
  mounted() {
    let url = window.location.href;
    let newurl = url.split("?")[0];
    let id = this.$route.params.id;
    let name = sessionStorage.getItem("buildname");
    newurl += `?proid=${id}&name=${name}`;
    newurl = encodeURIComponent(newurl);
    this.url = newurl;
    setTimeout(() => {
      this.btn = true;
    }, 2000);
    url = url.split("?")[1];
    if (url && url.indexOf("token") != -1) {
      localStorage.setItem("wstoken", url.split("=")[1]);
    }
  },
};
</script>
<style lang="less" scoped>
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
  border-top: 0.03125rem solid #f7f7f7;
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
    color: #fff;
    margin-right: 0.625rem;
    background: linear-gradient(270deg, #1fc365, #3fd6a6);
  }
}
</style>