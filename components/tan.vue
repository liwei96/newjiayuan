<template>
  <div id="Popup">
    <img src="~/assets/w-del.png" alt class="close" @click="close" />
    <h3>{{name}}</h3>
    <p class="type">{{str}}</p>
    <div class="one" v-show="!type">
      <input type="tel" placeholder="请输入手机号" v-model="baoming" />
      <p class="xiyi">
        <input type="checkbox" v-model="check" />我已阅读并同意
        <router-link :to="'/'">《家有用户协议》</router-link>
      </p>
      <button @click="send">立即订阅</button>
      <p class="bomm">获取后会有置业顾问致电联系您并提供服务</p>
    </div>
    <div class="two" v-show="type">
      <p>
        验证码已发送到
        <i id="ytel">187****4376</i> 请注意查看
      </p>
      <input type="number" placeholder="输入验证码" v-model="ma" />
      <span class="t-b-scode">57秒后重发</span>
      <button @click="put">确定</button>
    </div>
    <p class="tishimsg" v-if="show">{{msg}}</p>
  </div>
</template>
<script>
// import { putmsg, logsure, sendmsg } from "~/api/api";
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    typenum: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    typebtn: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
        show:false,
      baoming: "",
      ma: "",
      check: true,
      tishi: "",
      type: false,
      str: "领取成功后优惠编码将与您手机号绑定，此优惠不与参团优惠叠加使用",
      msg:'请输入正确手机号'
    };
  },
  methods: {
    send() {
      let check = this.check;
      if (!check) {
        this.$toast("请勾选用户协议");
        return;
      }
      var phone = this.baoming;
      var pattern_phone = /^1[3-9][0-9]{9}$/;
      if (phone == "") {
        this.$toast("手机号不能为空");
        return;
      } else if (!pattern_phone.test(phone)) {
        this.$toast("手机号码不合法");
        return;
      }
      let id = this.$route.params.id;
      let typenum = this.typenum;
      let ip = ip_arr["ip"];
      putmsg({
        ip: ip,
        tel: phone,
        page: 9,
        project: id,
        remark: "",
        source: "线上推广3",
        name: "未知",
        position: typenum,
      }).then((res) => {});

      sendmsg({ ip: ip, phone: phone, source: 3 }).then((res) => {
        if (res.data.code == 200) {
          this.type = true;
          var time = 60;
          var tel = phone.substr(0, 3) + "****" + phone.substr(7, 11);
          var fn = function () {
            time--;
            if (time > 0) {
              $(".t-b-scode").html("重新发送" + time + "s");
              $(".t-b-scode").attr("disabled", true);
            } else {
              clearInterval(interval);
              $(".t-b-scode").html("获取验证码");
              $(".t-b-scode").attr("disabled", false);
            }
          };
          fn();
          var interval = setInterval(fn, 1000);
          $("#ytel").html(tel);
        } else {
          this.$toast.fail(res.data.message);
        }
      });
    },
    put() {
      let check = this.check;
      if (!check) {
        this.$toast("请勾选用户协议");
        return;
      }
      var phone = this.baoming;
      var pattern_phone = /^1[3-9][0-9]{9}$/;
      if (phone == "") {
        this.$toast("手机号不能为空");
        return;
      } else if (!pattern_phone.test(phone)) {
        this.$toast("手机号码不合法");
        return;
      }
      if (!this.ma) {
        this.$toast("请输入验证码");
        return;
      }
      let ma = this.ma;
      let ip = ip_arr["ip"];
      logsure({ phone: phone, code: ma, source: 3, ip: ip }).then((res) => {
        if (res.data.code == 200) {
          this.$toast.success("提交成功");
          if (!this.$cookies.get("token")) {
            this.$cookies.set("token", res.data.token, 21600);
            this.$cookies.set("tel", phone, 21600);
          }
        } else {
          this.$toast(res.data.message);
        }
        this.type = false;
        this.$emit("close", false);
      });
    },
    close() {
      this.type = false;
      this.$emit("close", false);
    },
  },
  mounted() {
    // this.baoming = this.$cookies.get("tel");
  },
  updated() {
    let type = this.name;
    if (type == "变价通知我") {
      this.str =
        "价格变动这么快？订阅楼盘变价通知，楼盘变价我们将第一时间通知您";
    } else if (type == "开盘提醒我") {
      this.str = "一键订阅最新开盘通知，我们会第一时间通知,不再错过开盘时间";
    } else if (type == "预约看房") {
      this.str = "提前预约看房，我们将提供免费专车接送和专业楼盘讲解";
    } else if (type == "订阅最新动态") {
      this.str = "订阅最新动态，楼盘最新情报抢先知道，帮您找准买房好时机";
    } else if (type == "获取详细周边配套") {
      this.str =
        "附近有学区或商业街吗？想了解更多周边配套信息？立即获取全面周边配套详解";
    } else if (type == "获取最新成交价") {
      this.str = "获取最新成交价格，看看房友都是什么价格买的房";
    } else if (type == "咨询详细户型") {
      this.str = "好楼盘户型是关键，咨询详细户型信息，安安心心买房";
    } else if (type == "领取分析资料") {
      this.str = "最新楼盘分析资料，看看房产专家对楼盘的投资分析和宜居分析解读";
    }
  },
  watch: {
    typebtn(curVal, oldVal) {
      console.log(curVal, oldVal);
      if (curVal == 0) {
        this.type = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
#Popup {
  width: 20.3125rem;
  height: 23.4375rem;
  background-color: #fff;
  border-radius: 0.75rem;
  position: relative;
  .close {
    width: 1rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  h3 {
    padding-top: 2.375rem;
    margin-bottom: 1.25rem;
    color: #323233;
    font-size: 1.375rem;
    text-align: center;
  }
  .type {
    padding: 0 1.25rem;
    color: #3e3e3e;
    line-height: 1.5rem;
    font-size: 1rem;
  }
  .one {
    margin-top: 1.75rem;
    padding: 0 1.25rem;
    input[type="tel"] {
      height: 3.4375rem;
      border-radius: 0.375rem;
      border: 0.09375rem solid #b3b3b3;
      padding-left: 0.9375rem;
      width: 16.625rem;
    }
    .xiyi {
      color: #626466;
      font-size: 0.6875rem;
      margin-top: 0.625rem;
      margin-bottom: 2.125rem;
      input {
        width: 0.6875rem;
        height: 0.6875rem;
        -webkit-appearance: none;
        border: 0.03125rem solid #e6e6e6;
        margin-right: 0.3125rem;
      }
      input:checked {
        background: url("~assets/checkbox_icon.png") no-repeat 50%;
        background-size: 90%;
      }
      a {
        color: #7495bd;
      }
    }
    button {
      width: 100%;
      height: 2.75rem;
      border-radius: 0.375rem;
      text-align: center;
      line-height: 2.75rem;
      color: #fff;
      font-size: 1rem;
      border: 0;
      background: #2ac66d;
      margin-bottom: 0.625rem;
    }
    .bomm {
      color: #adadad;
      font-size: 0.6875rem;
    }
  }
  .two {
    padding: 0 1.25rem;
    margin-top: 1.75rem;
    position: relative;
    p {
      color: #999999;
      font-size: 0.75rem;
      margin-bottom: 0.75rem;
      i {
        font-style: normal;
      }
    }
    input[type="number"] {
      height: 3.4375rem;
      border-radius: 0.375rem;
      border: 0.09375rem solid #b3b3b3;
      padding-left: 0.9375rem;
      width: 16.625rem;
      margin-bottom: 2.75rem;
    }
    span {
      color: #7496be;
      font-size: 1rem;
      position: absolute;
      right: 2.25rem;
      top: 2.875rem;
    }
    button {
      width: 100%;
      height: 2.75rem;
      border-radius: 0.375rem;
      text-align: center;
      line-height: 2.75rem;
      color: #fff;
      font-size: 1rem;
      border: 0;
      background: #2ac66e;
      margin-bottom: 0.625rem;
    }
  }
  .tishimsg {
    width: 11.25rem;
    height: 3.75rem;
    border-radius: 0.375rem;
    background: rgba(0, 0, 0, 0.8);
    color: #cdcdcd;
    font-size: 1rem;
    position: absolute;
    text-align: center;
    line-height: 3.75rem;
    top: 46%;
    left: 50%;
    margin-left: -5.625rem;
  }
}
</style>