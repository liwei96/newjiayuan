<template>
  <div id="hus">
    <header>
      <img class="back" src="~/assets/goback.png" alt />
      <img class="logo" src="~/assets/logo.png" alt />
      <div class="zixuns">
        <img src="~/assets/zixun.png" alt />
        <p>3</p>
      </div>
      <img src="~/assets/mapcai.png" alt class="list" />
    </header>
    <div class="con">
        <div class="li">
            <div class="left">
                <img src="~/assets/hu.png" alt="">
            </div>
            <div class="right">
                <h4>3室2厅2卫<span>在售</span></h4>
                <p>建面：<span>89m²</span></p>
                <p>类型：<span>loft</span></p>
                <p class="total">总价：<span>约<i>290</i>万/套</span></p>
            </div>
        </div>
        <div class="li">
            <div class="left">
                <img src="~/assets/hu.png" alt="">
            </div>
            <div class="right">
                <h4>3室2厅2卫<span>在售</span></h4>
                <p>建面：<span>89m²</span></p>
                <p>类型：<span>loft</span></p>
                <p class="total">总价：<span>约<i>290</i>万/套</span></p>
            </div>
        </div>
    </div>
    <div class="nav">
      <div class="nav-peo">
        <img src="~/assets/ke_h.png" alt />
        <span v-if="true">1</span>
        <p>在线咨询</p>
      </div>
      <button>
        <img src="~/assets/time.png" />预约看房
      </button>
      <a href="tel:400">
        <button class="nav-tel">
          <img src="~/assets/bartel.png" />电话咨询
        </button>
      </a>
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
  justify-content: space-between;
  width: 100%;
  height: 2.75rem;
  z-index: 1;
  background-color: #fff;
  position: fixed;
  top: 0;
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
.con {
    padding-top: 3.5625rem;
    .li {
        display: flex;
        margin: 0 4%;
        padding-bottom: 0.875rem;
        border-bottom: 0.03125rem solid #F3F3F3;
        margin-bottom: 0.9375rem;
        .left {
            width: 6.875rem;
            height: 5rem;
            margin-right: 0.75rem;
            background-color: #F5F5F5;
            text-align: center;
            img {
                height: 100%;
                max-width: 100%;
            }
        }
        .right {
            flex: 1;
            h4 {
                color: #323333;
                font-size: 1rem;
                font-weight: 400;
                margin-bottom: 0.46rem;
                span {
                    float: right;
                    padding: 0.1875rem 0.375rem;
                    border-radius: 0.125rem;
                    background-color: #2CD264;
                    color: #fff;
                    font-size: 0.6875rem;
                }
            }
            p {
                color: #7D7F80;
                font-size: 0.75rem;
                margin-bottom: 0.125rem;
                span {
                    color: #333334;
                    font-size: 0.8125rem;
                }
            }
            .total {
                span {
                    color: #FE5830;
                    font-size: 0.625rem;
                    i {
                        font-style: normal;
                        font-size: 1rem;
                    }
                }
            }
        }
    }
    .li:last-child{
        border: 0
    }
}
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
    margin-left: 0.625rem;
    color: #fff;
    background: linear-gradient(270deg, #1fc365, #3fd6a6);
  }
}
</style>