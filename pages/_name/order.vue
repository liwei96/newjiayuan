<template>
  <div id="order">
    <top-view></top-view>
    <div class="topimg">
      <img src="~/assets/order.jpg" alt />
    </div>
    <p class="tit">
      已有
      <span>781</span>人成功预约免费专车看房
    </p>
    <div class="con">
      <p class="name">您的称呼:</p>
      <div class="radio">
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio name="男">
            先生
            <template #icon="props">
              <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
            </template>
          </van-radio>
          <van-radio name="女">
            女士
            <template #icon="props">
              <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
            </template>
          </van-radio>
        </van-radio-group>
      </div>
      <div class="time">
        <p class="name">预约看房时间:</p>
        <div class="txt" @click="show=true">
          <input type="text" placeholder="请选择您要预约的看房时间" disabled  v-model="date"/>
          <img src="~/assets/j-more.png" alt />
        </div>
      </div>
      <div class="time">
        <p class="name">
          想看的楼盘
          <span>（非必填）</span>
        </p>
        <div class="txt" @click="gosou">
          <input type="text" placeholder="选择楼盘" disabled v-model="name"/>
          <img src="~/assets/j-more.png" alt />
        </div>
      </div>
      <button @click="show1 = true">确定</button>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="show=false"
        item-height="1.875rem"
        @confirm ="time"
      />
    </van-popup>
    <van-popup v-model="show1" position="center" :style="{ background: 'rgba(0,0,0,0)' }">
      <div class="telbox">
        <div class="top">
          <img src="~/assets/w-del.png" alt class="close" @click="ll" />
          <h5>预约看房</h5>
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
          <p class="msg">验证码已发送到187****4376 请注意查看</p>
          <input class="txt" type="text" placeholder="请输入验证码" v-model="code" />
          <span @click="sendmsg">{{msg}}</span>
          <button @click="sure">确定</button>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import { send , check , put } from '@/api/api'
export default {
  components: {
    "top-view": topView,
  },
  async asyncData(context) {
    let id = context.params.id;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let other = context.query.other;
    return {
      jkl: jkl,
    };
  },
  data() {
    return {
      radio: "男",
      activeIcon: require('~/assets/order-checked.png'),
      inactiveIcon: require('~/assets/order-check.png'),
      minDate: new Date(),
      maxDate: new Date(2025, 10, 1),
      show: false,
      currentDate: "",
      jkl:'',
      name:'',
      date:'',
      tel:'',
      check:true,
      code:'',
      isok:false,
      show1:false,
      isnull:true,
      msg:'获取验证码'
    };
  },
  methods:{
    gosou(){
      sessionStorage.setItem('order',1)
      this.$router.push('/'+this.jkl+'/searchname')
    },
    time(val){
      console.log(val)
      let d = new Date(val)
      let str = d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日'
      this.date = str
      this.show=false
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
      let city = $cookies.get("city");
      let other = $cookies.get("other");
      let kid = $cookies.get("kid");
      let txt = `客户性别为：${that.radio}`;
      if(that.date){
        txt+=`；看房时间为：${that.date}`
      }
      if(that.name){
        txt+=`；想看楼盘为：${that.name}`
      }
      put({
        ip: ip,
        page: 4,
        city: city,
        position: 103,
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
  },
  mounted(){
    this.name = sessionStorage.getItem('ordername')
  }
};
</script>
<style lang="less" scoped>
.topimg {
  padding-top: 2.75rem;
  img {
    width: 100%;
    height: 6.25rem;
    margin-bottom: 1.375rem;
  }
}
.tit {
  text-align: center;
  color: #333333;
  font-size: 0.9375rem;
  margin-bottom: 2.75rem;
  span {
    color: #ff5454;
    font-weight: bold;
  }
}
.con {
  padding: 0 4%;
  .name {
    color: #121212;
    font-size: 0.8125rem;
    margin-bottom: 0.875rem;
    span {
      color: #969899;
      font-size: 0.625rem;
    }
  }
  .radio {
    margin-bottom: 1.75rem;
    .van-radio {
      margin-right: 2.5rem;
    }
    .img-icon {
      height: 1rem;
      margin-right: 0.625rem;
    }
  }
  .time {
    margin-bottom: 1.75rem;
    .txt {
      position: relative;
      input {
        width: 20.6875rem;
        height: 2.75rem;
        border-radius: 0.25rem;
        border: 0.0625rem solid #d0d2d4;
        padding-left: 0.875rem;
        font-size: 0.875rem;
        background-color: #fafafa;
      }
      input::-webkit-input-placeholder {
        color: #969899;
        font-size: 0.875rem;
      }
      input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #969899;
        font-size: 0.875rem;
      }
      input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #969899;
        font-size: 0.875rem;
      }
      input:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #969899;
        font-size: 0.875rem;
      }
      img {
        width: 1rem;
        position: absolute;
        right: 0.75rem;
        top: 0.875rem;
      }
    }
  }
  button {
    margin-top: 1.875rem;
    width: 100%;
    height: 2.75rem;
    border-radius: 0.375rem;
    background: linear-gradient(-270deg, #20c466, #3fd6a7);
    text-align: center;
    line-height: 2.75rem;
    border: 0;
    color: #fff;
    font-size: 1rem;
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