<template>
  <div id="help">
    <top-view :jkl="jkl"></top-view>
    <img src="~/assets/healp-top.jpg" alt class="topimg" />
    <div class="con">
      <p class="tit">您能接受的总价范围是多少？</p>
      <div class="sliderbox">
        <p class="start">{{start}}万</p>
        <p class="end">{{end}}万</p>
        <input
          id="ex2"
          type="text"
          class="span2"
          value
          data-slider-min="10"
          data-slider-max="1000"
          data-slider-step="10"
          data-slider-value="[200,800]"
          tooltip="show"
          :tooltip_split="true"
          tooltip_position="top"
        />
      </div>
      <p class="tit tit1">您意向购买哪种户型？</p>
      <div class="type">
        <span
          :class="huid==item.name?'active':''"
          v-for="(item,key) in house_types"
          :key="key"
          @click="huid=item.name"
        >{{item.name}}</span>
      </div>
      <p class="tit tit1">您意向购买的区域是？</p>
      <div class="area" @click="show = true">
        <span>{{areaid}}</span>
        <img src="~/assets/j-more.png" alt />
      </div>
      <p class="tit">您意向购买多大面积？</p>
      <div class="type">
        <span
          :class="qid == item.name?'active':''"
          v-for="(item,key) in areas"
          :key="key"
          @click="qid=item.name"
        >{{item.name}}</span>
      </div>
      <p class="tit">您还有其它要求吗？</p>
      <textarea placeholder="说说您的想法，让我们更好的服务您" v-model="txt"></textarea>
      <button @click="btn">提交</button>
    </div>
    <popup v-model="show" position="bottom" :style="{ height: '14.375rem' }">
      <div class="bomm">
        <div class="top">
          <span class="no" @click="areano">取消</span>
          <span class="yes" @click="show = false">确定</span>
        </div>
        <div class="bom">
          <span
            :class="areaid == item.name ? 'active':''"
            v-for="(item,key) in countries"
            :key="key"
            @click="areaid = item.name"
          >{{item.name}}</span>
        </div>
      </div>
    </popup>
    <popup v-model="show1" position="center" :style="{ background: 'rgba(0,0,0,0)' }">
      <div class="telbox">
        <div class="top">
          <img src="~/assets/w-del.png" alt class="close" @click="ll" />
          <h5>帮我找房</h5>
        </div>
        <div class="one" v-if="!isok">
          <input class="txt" type="text" placeholder="请输入手机号" v-model="tel" />
          <p class="xiyi">
            <input type="checkbox" v-model="check" />我已阅读并同意
            <nuxt-link :to="'/'">《家有用户协议》</nuxt-link>
          </p>
          <button @click="sendmsg">确定</button>
        </div>
        <div class="two" v-if="isok">
          <p class="msg">验证码已发送到{{telmsg}} 请注意查看</p>
          <input class="txt" type="text" placeholder="请输入验证码" v-model="code" />
          <span @click="sendmsg">{{msg}}</span>
          <button @click="sure">确定</button>
        </div>
      </div>
    </popup>
  </div>
</template>
<script>
import { send, check, put } from "@/api/api";
import { Popup } from "vant";
import top from '@/components/header'
import '@/static/css/foot.css'
export default {
  components: {
    Popup,
    'top-view':top
  },
  async asyncData(context) {
    //   console.log(context.$axios)
    let city = context.store.state.city;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let [res,res1] = await Promise.all([
      context.$axios
        .get("/jy/help/condition", {
          params: {
            city: city,
            token: token,
          },
        })
        .then((resp) => {
          let data = resp.data;
          return data;
        }),
      context.$axios
        .get("/jy/phone/head/foot", {
          params: {
            city: city,
            token: token,
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
      countries: res.countries,
      areas: res.areas,
      house_types: res.house_types,
      title:res1.common.header.title,
      description:res1.common.header.description,
      keywords:res1.common.header.keywords
    };
  },
  head() {
    return {
      title: this.title || "家园新房-帮我找房",
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
      start: 200,
      end: 800,
      show: false,
      show1: false,
      house_types: [],
      areas: [],
      countries: [],
      huid: 0,
      areaid: "不限",
      qid: 0,
      txt: "",
      isok: false,
      check: true,
      msg: "获取验证码",
      tel: "",
      code: "",
      isnull: true,
      telmsg: ''
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    btn() {
      this.show1 = true;
    },
    ll() {
      this.show1 = false;
      this.isok = false;
    },
    sendmsg() {
      if (!this.tel) {
        this.toast("手机号不能为空");
        return;
      }
      let that = this;
      let pattern_phone = /^1[3-9][0-9]{9}$/;
      if (!pattern_phone.test(that.tel)) {
        this.toast("手机号不正确");
        return;
      }
      if(!that.check){
        this.toast("请勾选用户协议");
        return;
      }
      if (!that.isnull) {
        return;
      }
      let ip = ip_arr["ip"];
      let city = $cookies.get("city") || '';
      let other = $cookies.get("other") || '';
      let kid = $cookies.get("kid");
      let txt = `客户想找总价为：${that.start}万到${that.end}万`;
      if (that.huid) {
        txt = txt + `；户型为：${that.huid}`;
      }
      if (that.areaid) {
        txt += `；区域为：${that.areaid}`;
      }
      if (that.qid) {
        txt += `；面积为：${that.qid}`;
      }
      txt += "的房子";
      if (that.txt) {
        txt += `；客户留言：${that.txt}`;
      }
      put({
        ip: ip,
        page: 4,
        city: city,
        position: 110,
        remark: txt,
        source: "线上推广1",
        other: other,
        kid: kid,
        tel: that.tel,
      }).then((res) => {
        console.log(res);
      });
      send({ phone: that.tel, source: 3, ip: ip }).then((res) => {
        if (res.data.code == 200) {
          that.telmsg = that.tel.substr(0,3)+'****'+that.tel.substr(7)
          that.isok = true;
          let num = 60;
          that.isnull = false;
          let time = setInterval(() => {
            num--;
            if (num <= 0) {
              clearInterval(time);
              that.msg = "获取验证码";
              that.isnull = true;
            } else {
              that.msg = num + "秒后重发";
            }
          }, 1000);
        }
        console.log(res);
      });
    },
    sure() {
      if (!this.tel) {
        this.toast("手机号不能为空");
        return;
      }
      let that = this;
      let pattern_phone = /^1[3-9][0-9]{9}$/;
      if (!pattern_phone.test(that.tel)) {
        this.toast("手机号不正确");
        return;
      }
      if (!this.code) {
        this.toast("验证码不能为空");
        return;
      }
      let ip = ip_arr["ip"];
      check({ phone: that.tel, code: that.code, channel: 4, ip: ip }).then(
        (res) => {
          if (res.data.code == 200) {
            if (!$cookies.get("token")) {
              $cookies.set("phone", that.tel);
              $cookies.set("token", res.data.token);
              let tel = that.tel.substr(0, 3) + "****" + that.tel.substr(8);
              $cookies.set("username", tel);
            }
            that.toast("提交成功");
            that.show1 = false;
            that.isok = false;
          }
        }
      );
    },
    areano() {
      this.show = false;
      this.areaid = "不限";
    },
  },
  mounted() {
    var slider = new Slider("#ex2", {});
    let that = this;
    $("#ex2").on("slide", function () {
      var start = $(".min-slider-handle").attr("aria-valuenow");
      var end = $(".max-slider-handle").attr("aria-valuenow");
      // console.log(start, end);
      that.start = start;
      that.end = end;
      // console.log(that.start);
      // console.log(end);
    });

    
  },
};
</script>
<style lang="less" scoped>
@import url("https://cdn.bootcss.com/bootstrap-slider/10.6.1/css/bootstrap-slider.min.css");
.topimg {
  width: 100%;
  height: 6.25rem;
  margin-bottom: 1.125rem;
  padding-top:2.75rem
}
.con {
  padding: 0 4%;
  .tit {
    color: #333333;
    font-size: 1rem;
    margin-bottom: 1.4375rem;
  }
  .tit1 {
    margin-bottom: 1.1875rem;
  }
  .sliderbox {
    padding-top: 2.6875rem;
    margin-bottom: 1.8125rem;
    position: relative;
    /deep/.slider.slider-horizontal {
      width: 21.5625rem;
      .slider-track {
        height: 0.1875rem;
        border-radius: 0.0625rem;
        .slider-selection {
          background-color: #20c466;
          background-image: none;
        }
        .slider-track-low,
        .slider-track-high {
          background-color: #eee;
        }
      }
      .slider-handle {
        background-color: #fff;
        background-image: none;
        top: -0.25rem;
        box-shadow: 0.03125rem 0.0625rem 0.15625rem 0px rgba(6, 0, 1, 0.12);
        border-radius: 0.1875rem;
      }
    }
    p {
      position: absolute;
      top: 0;
      width: 3.75rem;
      height: 1.5rem;
      border-radius: 0.125rem;
      border: 0.03125rem solid #f5f5f5;
      box-shadow: 0.03125rem 0.09375rem 0.3125rem 0px rgba(0, 0, 0, 0.03);
      text-align: center;
      line-height: 1.5rem;
      color: #30cb72;
      font-size: 0.9375rem;
      font-weight: bold;
    }
    .start {
      left: 5.5rem;
    }
    .end {
      right: 4.75rem;
    }
  }
  .type {
    margin-bottom: 1.3125rem;
    span {
      display: inline-block;
      width: 4.6875rem;
      height: 1.625rem;
      border-radius: 0.1875rem;
      border: 0.03125rem solid #f3f4f5;
      box-shadow: 0.03125rem 0.09375rem 0.3125rem 0px rgba(0, 0, 0, 0.03);
      text-align: center;
      line-height: 1.625rem;
      color: #4b4c4d;
      font-size: 0.75rem;
      margin-right: 0.55rem;
      margin-bottom: 0.75rem;
    }
    span:nth-of-type(4n) {
      margin-right: 0;
    }
    .active {
      background: linear-gradient(-270deg, #20c466, #3fd6a7);
      color: #fff;
    }
  }
  .area {
    width: 21.5625rem;
    height: 2.375rem;
    border-radius: 0.375rem;
    border: 0.0625rem solid #ccc;
    line-height: 2.375rem;
    color: #646566;
    font-size: 0.9375rem;
    background-color: #fafafa;
    margin-bottom: 2.125rem;
    img {
      width: 1rem;
      float: right;
      margin-right: 0.875rem;
      margin-top: 0.6875rem;
    }
    span {
      margin-left: 1.125rem;
    }
  }
  textarea {
    height: 5.5rem;
    width: 21rem;
    border-radius: 0.375rem;
    border: 0.03125rem solid #ccc;
    background-color: #fafafa;
    padding-left: 0.625rem;
    padding-top: 0.625rem;
    margin-bottom: 2rem;
  }
  button {
    background: linear-gradient(270deg, #20c466, #3fd6a7);
    width: 100%;
    height: 2.75rem;
    text-align: center;
    line-height: 2.75rem;
    border-radius: 0.375rem;
    border: 0;
    color: #fff;
    font-size: 1rem;
    margin-bottom: 1.875rem;
  }
}
/deep/.bomm {
  .top {
    padding: 0 1.125rem;
    height: 3.125rem;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .yes {
      color: #2ac66d;
      font-size: 1rem;
    }
    .no {
      color: #7f7f7f;
      font-size: 1rem;
    }
  }
  .bom {
    height: 11.25rem;
    overflow: auto;
    padding: 0 4%;
    padding-top: 2rem;
    span {
      display: inline-block;
      width: 4.6875rem;
      height: 1.5rem;
      border-radius: 0.125rem;
      text-align: center;
      line-height: 1.5rem;
      background-color: #f5f6f7;
      color: #646566;
      font-size: 0.8125rem;
      margin-right: 0.66rem;
      margin-bottom: 1.375rem;
    }
    span:nth-of-type(4n) {
      margin-right: 0;
    }
    .active {
      background-color: #f1f8f4;
      color: #2ac66d;
    }
  }
}
.telbox {
  width: 18.125rem;
  height: 13.75rem;
  border-radius: 0.25rem;
  background-color: #fff;
  text-align: center;
  position: relative;
  .close {
    width: 0.875rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  h5 {
    color: #333333;
    font-size: 1.375rem;
    padding-top: 1.125rem;
    margin-bottom: 1.125rem;
  }
  .txt {
    width: 15rem;
    height: 3.125rem;
    border-radius: 0.25rem;
    border: 0;
    outline: none;
    background-color: #f7f7f7;
    margin-bottom: 0.625rem;
    padding-left: 0.625rem;
  }
  .xiyi {
    color: #626466;
    font-size: 0.6875rem;
    margin-bottom: 1.5rem;
    text-align: left;
    padding-left: 1.25rem;
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
    width: 15.625rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    text-align: center;
    line-height: 2.5rem;
    border: 0;
    background-color: #2ac66d;
    color: #fff;
    font-size: 0.875rem;
    font-weight: bold;
  }
  .msg {
    color: #999999;
    font-size: 0.6875rem;
    text-align: left;
    padding-left: 1.25rem;
    margin-bottom: 0.75rem;
  }
  .two {
    position: relative;
    .txt {
      margin-bottom: 1.3rem;
    }
    span {
      color: #7495bd;
      font-size: 1rem;
      position: absolute;
      right: 2rem;
      top: 2.5625rem;
    }
  }
}
</style>