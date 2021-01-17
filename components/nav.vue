<template>
  <div class="nav">
    <div class="nav-peo" @click="gotalk">
      <img src="~/assets/ke_h.png" alt v-if="totalnum <= 0 || !totalnum" />
      <img src="~/assets/talking.gif" alt v-if="totalnum > 0" />
      <span v-if="totalnum <= 0 || !totalnum">1</span>
      <span v-if="totalnum > 0">{{ totalnum }}</span>
      <p v-if="totalnum <= 0 || !totalnum">在线咨询</p>
      <p v-if="totalnum > 0" class="org">有新消息</p>
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
    totalnum: {
      type: Number,
    },
    jkl: {
      type: String,
    },
  },
  data() {
    return {
      url: "",
      btn: false,
      type: false,
      ws: "",
    };
  },
  methods: {
    show(id, name) {
      this.$emit("fot", { position: id, name: name });
    },
    gotalk() {
      let urlid = sessionStorage.getItem("proid");
      let id = sessionStorage.getItem(urlid);
      if (id) {
        sessionStorage.setItem("staffid", id);
        let n = parseInt(sessionStorage.getItem(id));
        let total = parseInt(sessionStorage.getItem("total"));
        total = total - n;
        if (total != 0) {
          sessionStorage.setItem("total", total);
        } else {
          sessionStorage.removeItem("total");
        }
        sessionStorage.removeItem(id);
      }
      this.$router.push("/" + this.jkl + "/talk/" + urlid);
    },
  },
  mounted() {
    if (this.totalnum == "NaN") {
      this.totalnum = 0;
    }
    let that = this
    console.log(this.totalnum);
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
    let city = localStorage.getItem("city");
    let ip = ip_arr["ip"];
    console.log(url);
    let pro = 0;
    url = window.location.href;
    if (url.indexOf("content") !== -1) {
      pro = this.$route.params.id;
    } else {
      pro = 0;
    }
    
    let pp = {
      controller: "Info",
      action: "register",
      params: {
        city: city,
        project: pro,
        ip: ip,
        url: url,
        uuid: localStorage.getItem("uuid"),
        host: that.$store.state.hostname
      },
    };
    if (sessionStorage.getItem("url") !== url) {
      this.$store.state.ws.send(JSON.stringify(pp));
      sessionStorage.setItem("url", url);
    }
    this.$store.state.ws.onmessage = function (event) {
      let data = JSON.parse(event.data);
      if (data.action == 302) {
        sessionStorage.setItem('currentid',data.sid)
      }
    };
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
    .org {
      color: #ff9a26;
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