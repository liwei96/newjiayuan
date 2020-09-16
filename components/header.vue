<template>
  <header>
    <img class="back" src="~/assets/goback.png" alt @click="back"/>
    <img class="logo" src="~/assets/logo.png" alt />
    <div class="zixuns">
      <img src="~/assets/zixun.png" alt />
      <p>3</p>
    </div>
    <img src="~/assets/mapcai.png" alt class="list" />
  </header>
</template>
<script>
export default {
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
};
</script>
<style lang="less" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2.75rem;
  z-index: 1;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 10;
  .back {
    width: 1.25rem;
    margin-left: 1rem;
  }
  .logo {
    width: 3.125rem;
  }
  .home {
    width: 1.25rem;
    margin-right: 1rem;
  }
  .zixuns {
    margin-right: 1.25rem;
    position: absolute;
    right: 9%;
    top: 0.68rem;
    img {
      width: 1.5rem;
    }
    p {
      position: absolute;
      width: 0.8125rem;
      height: 0.8125rem;
      border-radius: 50%;
      text-align: center;
      line-height: 0.8125rem;
      background-color: #ff4040;
      color: #fff;
      font-size: 0.625rem;
      top: -0.40625rem;
      right: -0.1875rem;
    }
  }
  .list {
    width: 1.25rem;
    margin-right: 4%;
  }
}
</style>