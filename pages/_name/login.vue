<template>
  <div id="login">
    <header>
      <img class="back" src="~/assets/goback.png" alt @click="back"/>
      <img class="logo" src="~/assets/logo.png" alt />
    </header>
    <div class="con">
      <img src="~/assets/login.png" alt />
      <div class="input">
        <input type="text" placeholder="输入手机号" v-model="tel" />
        <p @click="getcode">{{msg}}</p>
      </div>
      <input type="text" placeholder="输入验证码" v-model="code" />
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
import { put, send, check } from "@/api/api";
export default {
  async asyncData(context) {
    let jkl = context.params.name;
    return {
      jkl: jkl,
    };
  },
  data() {
    return {
      code: "",
      tel: "",
      msg:'验证码',
      isnull:true,
      jkl:''
    };
  },
  methods: {
    getcode() {
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
      if(!this.isnull){
        return
      }
      let ip = ip_arr["ip"];
      let city = $cookies.get("city");
      let other = $cookies.get('other');
      let kid = $cookies.get('kid');
      put({
        ip: ip,
        page: 4,
        city: city,
        position: 106,
        remark: "家园会员",
        source: "线上推广1",
        other: other,
        kid: kid,
        tel: that.tel,
      }).then((res) => {
        console.log(res);
      });
      send({ phone: that.tel, source: 3,ip:ip }).then((res) => {
        if(res.data.code == 200){
          that.isnull = false
          let num = 60
          let time = setInterval(()=>{
            num--
            if(num<=0){
              clearInterval(time)
              that.msg = '验证码'
              that.isnull=true
            }else{
              that.msg= num+'秒后'
            }
          },1000)
        }
        console.log(res);
      });
    },
    login() {
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
      if(!this.code){
        this.toast('验证码不能为空')
        return
      }
      let ip = ip_arr["ip"];
      check({ phone: that.tel, code: that.code, channel: 4,ip:ip }).then(res=>{
        if(res.data.code == 200){
          console.log(res)
          // localStorage.setItem('token',res.data.token)
          $cookies.set('phone',that.tel)
          $cookies.set('token',res.data.token)
          
          // localStorage.setItem('phone',that.tel)
          let tel = that.tel.substr(0,3)+'****'+that.tel.substr(8)
          $cookies.set('username',tel)
          // localStorage.setItem('username',tel)
          that.$router.push('/'+that.jkl+'/home')
        }
      })
    },
    back(){
      this.$router.go(-1)
    }
  },
};
</script>
<style lang="less" scoped>
header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.75rem;
  z-index: 1;
  background-color: #fff;
  .back {
    width: 1.25rem;
    margin-left: 1rem;
    margin-right: 8.25rem;
  }
  .logo {
    width: 3.125rem;
  }
}
.con {
  padding: 0 2.5rem;
  img {
    width: 12.5rem;
    margin-top: 3.375rem;
    margin-bottom: 4.5rem;
  }
  input {
    width: 100%;
    height: 3.0625rem;
    border: 0;
    outline: none;
    border-bottom: 0.03125rem solid #eeeeee;
    margin-bottom: 1.125rem;
  }
  input::-webkit-input-placeholder {
    color: #969899;
    font-size: 0.9375rem;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #969899;
    font-size: 0.9375rem;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #969899;
    font-size: 0.9375rem;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #969899;
    font-size: 0.9375rem;
  }
  .input {
    position: relative;
    p {
      padding: 0.4375rem 0.75rem;
      color: #2ac66e;
      font-size: 0.75rem;
      border: 0.03125rem solid #2ac66e;
      position: absolute;
      right: 0;
      border-radius: 0.125rem;
      bottom: 1.875rem;
    }
  }
  button {
    width: 100%;
    height: 2.75rem;
    text-align: center;
    line-height: 2.75rem;
    border-radius: 0.25rem;
    border: 0;
    background: linear-gradient(-270deg, #20c466, #3fd6a7);
    margin-top: 2.625rem;
    color: #fff;
    font-size: 0.9375rem;
  }
}
</style>