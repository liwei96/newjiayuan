<template>
  <div id="set">
    <header>
      设置
      <img src="~/assets/goback.png" alt @click="back" />
    </header>
    <ul>
      <li @click="serve">
        <p>关注客服</p>
        <img src="~/assets/j-more.png" alt />
      </li>
      <li @click="follow">
        <p>官方公众号</p>
        <img src="~/assets/j-more.png" alt />
      </li>
      <li class="tel">
        <img src="~/assets/j-more.png" alt />
        <span>400-966-9995</span>
        <p>举报电话</p>
      </li>
    </ul>
    <button @click="show=true">退出登录</button>
    <van-popup v-model="show" position="center" :style="{ background: 'rgba(0,0,0,0)' }">
      <div class="box">
        <h4>确定退出</h4>
        <p class="tit">确定退出当前账户吗？</p>
        <div class="btn">
          <p @click="show=false">取消</p>
          <p class="yes">确定</p>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      jkl: "",
    };
  },
  methods: {
    follow() {
      this.$router.push("/" + this.jkl + "/account");
    },
    serve() {
      this.$router.push("/" + this.jkl + "/service");
    },
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.jkl = this.$route.params.name;
  },
};
</script>
<style lang="less" scoped>
#set {
  background-color: #f7f7f7;
  height: 100vh;
  header {
    height: 2.75rem;
    background-color: #fff;
    position: relative;
    line-height: 2.75rem;
    color: #101214;
    font-size: 1.125rem;
    text-align: center;
    img {
      width: 1.125rem;
      position: absolute;
      left: 1rem;
      top: 0.68rem;
    }
  }
  ul {
    padding-left: 4%;
    padding-top: 0.5rem;
    background-color: #fff;
    li {
      display: flex;
      height: 3.125rem;
      align-items: center;
      padding-right: 4%;
      position: relative;
      p {
        color: #101214;
        font-size: 0.9375rem;
      }
      img {
        margin-left: auto;
        height: 0.875rem;
      }
      span {
        color: #969799;
        font-size: 0.9375rem;
        position: absolute;
        right: 2.375rem;
      }
    }
    .tel {
      flex-direction: row-reverse;
    }
  }
  button {
    width: 100%;
    height: 3.125rem;
    margin-top: 0.625rem;
    text-align: center;
    line-height: 3.125rem;
    background-color: #fff;
    border: 0;
    color: #2ac66d;
    font-size: 0.9375rem;
  }
  .box {
    width: 17.8125rem;
    height: 9.875rem;
    border-radius: 0.625rem;
    background-color: #fff;
    h4 {
      color: #333333;
      font-size: 1.125rem;
      padding-top: 1.25rem;
      margin-bottom: 1rem;
      text-align: center;
      font-weight: 400;
    }
    .tit {
      color: #7d7e80;
      font-size: 1rem;
      text-align: center;
      margin-bottom: 1.75rem;
    }
    .btn {
      border-top: 0.03125rem solid #f7f7f7;
      display: flex;
      padding-top: 0.5rem;
      p {
        color: #7d7e80;
        font-size: 1rem;
        width: 50%;
        text-align: center;
        line-height: 2rem;
      }
      .yes {
        color: #2ac66d;
        border-left: 0.03125rem solid #f2f2f2;
      }
    }
  }
}
</style>