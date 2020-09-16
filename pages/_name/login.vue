<template>
  <div id="login">
    <header>
      <img class="back" src="~/assets/goback.png" alt />
      <img class="logo" src="~/assets/logo.png" alt />
    </header>
    <div class="con">
      <img src="~/assets/login.png" alt />
      <div class="input">
        <input type="text" placeholder="输入手机号" />
        <p>验证码</p>
      </div>
      <input type="text" placeholder="输入验证码" />
      <button>登录</button>
    </div>
  </div>
</template>
<script>
export default {};
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