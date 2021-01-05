<template>
  <div id="hong">
      <div class="box">
          <p class="price">￥15000</p>
            <p class="txt">返乡置业购房补贴金</p>
            <div class="inu">
            <input type="text" placeholder="请输入您手机号" v-model="tel"/>
            <button @click="ling">立即领取</button>
            </div>
            <p class="msg">
            活动说明：领取成功后优惠编码将与您手机号<br />
            绑定，会有工作人员与您联系
            </p>
            <p class="msg p">注：活动最终解释权归家园所有</p>
      </div>
    <img src="~/assets/backhome-close.png" alt="" class="close" @click="close">
  </div>
</template>
<script>
export default {
    data() {
        return {
            tel: ''
        }
    },
    methods:{
        close() {
            this.$emit("close", false);
        },
        ling() {
            var phone = this.tel;
            var pattern_phone = /^1[3-9][0-9]{9}$/;
            if (phone == "") {
                this.toast("手机号不能为空");
                return;
            } else if (!pattern_phone.test(phone)) {
                this.toast("手机号码不合法");
                return;
            }
        }
    }
};
</script>
<style lang="less" scoped>
#hong {
  width: 18.4375rem;
  .box {
      height: 25.875rem;
        background: url(~assets/backhome-hong.png);
        background-size: 100%;
  }
  .price {
    color: #ffea03;
    font-size: 2.8125rem;
    font-weight: bold;
    text-align: center;
    padding-top: 3.6rem;
  }
  .txt {
    color: #fff;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 8.8rem;
  }
  .inu {
    margin-bottom: 1.5625rem;
    display: flex;
    justify-content: center;
    input {
      width: 9.6875rem;
      height: 2.875rem;
      border-radius: 0.25rem 0 0 0.25rem;
      border: 0;
      outline: none;
      padding-left: .875rem;
    }
    button {
      width: 5.3125rem;
      height: 2.875rem;
      text-align: center;
      background: linear-gradient(0deg, #ffc616, #ffeb53);
      box-shadow: 0px 0.03125rem 0.03125rem 0px rgba(6, 0, 1, 0.1);
      border-radius: 0px 0.25rem 0.25rem 0px;
      color: #ff3922;
      font-size: 0.875rem;
      border: 0;
      outline: none;
    }
  }
  .msg {
    text-align: center;
    color: #ffb2be;
    font-size: 0.625rem;
    line-height: 0.875rem;
  }
  .p {
    margin-top: 0.875rem;
  }
  .close {
      width: 1.75rem;
      position: relative;
      margin-top: 1.875rem;
      left: 50%;
      transform: translateX(-50%);
  }
}
</style>