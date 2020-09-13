<template>
  <div id="weiki">
    <header>
      <img class="back" src="~/assets/goback.png" alt />
      <img class="logo" src="~/assets/logo.png" alt />
      <div class="zixuns">
        <img src="~/assets/zixun.png" alt />
        <p>3</p>
      </div>
      <img src="~/assets/mapcai.png" alt class="list" />
    </header>
    <div class="input">
      <input type="text" placeholder="搜搜你想要了解的房产知识吧" />
      <img src="~/assets/search.png" alt />
    </div>
    <div class="nav">
      <ul>
        <li :class="navnum==0?'active':''" @click="setnavnum(0)">
          <div class="nav-top">买房前</div>
          <p>相关政策、买房流程</p>
        </li>
        <li :class="navnum==1?'active1':''" @click="setnavnum(1)">
          <div class="nav-top">买房中</div>
          <p>新房签约、贷款政策</p>
        </li>
        <li :class="navnum==2?'active2':''" @click="setnavnum(2)">
          <div class="nav-top">买房后</div>
          <p>新房验房、还款落户</p>
        </li>
      </ul>
    </div>
    <div class="con">
      <div class="left">
        <ul>
          <li :class="leftnum == 0?'active':''" @click="setleftnum(0)">
            <span>买房资格</span>
          </li>
          <li :class="leftnum == 1?'active':''" @click="setleftnum(1)">
            <span>买房能力</span>
          </li>
          <li :class="leftnum == 2?'active':''" @click="setleftnum(2)">
            <span>买房政策</span>
          </li>
          <li :class="leftnum == 3?'active':''" @click="setleftnum(3)">
            <span>买房流程</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li>
            <h6>杭州外地人买房需要什么条件杭州外地人买房需要什么条件</h6>
            <p>
              <span>楼盘签约</span>
              <span>买房</span>
            </p>
          </li>
          <li>
            <h6>杭州外地人买房需要什么条件杭州外地人买房需要什么条件</h6>
            <p>
              <span>楼盘签约</span>
              <span>买房</span>
            </p>
          </li>
          <li>
            <h6>杭州外地人买房需要什么条件杭州外地人买房需要什么条件</h6>
            <p>
              <span>楼盘签约</span>
              <span>买房</span>
            </p>
          </li>
          <li>
            <h6>杭州外地人买房需要什么条件杭州外地人买房需要什么条件</h6>
            <p>
              <span>楼盘签约</span>
              <span>买房</span>
            </p>
          </li>
          <li>
            <h6>杭州外地人买房需要什么条件杭州外地人买房需要什么条件</h6>
            <p>
              <span>楼盘签约</span>
              <span>买房</span>
            </p>
          </li>
          <li>
            <h6>杭州外地人买房需要什么条件杭州外地人买房需要什么条件</h6>
            <p>
              <span>楼盘签约</span>
              <span>买房</span>
            </p>
          </li>
          <li>
            <h6>杭州外地人买房需要什么条件杭州外地人买房需要什么条件</h6>
            <p>
              <span>楼盘签约</span>
              <span>买房</span>
            </p>
          </li>
          <li>
            <h6>杭州外地人买房需要什么条件杭州外地人买房需要什么条件</h6>
            <p>
              <span>楼盘签约</span>
              <span>买房</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navnum: 0,
      leftnum:0
    };
  },
  methods: {
    setnavnum(n) {
      this.navnum = n;
    },
    setleftnum(n){
        this.leftnum = n
    }
  },
};
</script>
<style lang="less" scoped>
li {
  list-style: none;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2.75rem;
  z-index: 1;
  background-color: #fff;
  // position: relative;
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
.input {
  height: 2.5rem;
  padding: 0.25rem 4%;
  position: relative;
  input {
    border: 0;
    outline: none;
    width: 100%;
    height: 2rem;
    margin-top: 0.25rem;
    border-radius: 0.25rem;
    background-color: rgba(245, 245, 245, 1);
    text-align: center;
  }
  img {
    width: 1rem;
    position: absolute;
    top: 0.9rem;
    left: 5rem;
  }
}
.nav {
  margin-top: 1.25rem;
  padding: 0 4%;
  margin-bottom: 0.875rem;
  ul {
    display: flex;
    li {
      width: 6.6875rem;
      height: 4rem;
      margin-right: 0.75rem;
      .nav-top {
        height: 2.875rem;
        border: 0.0625rem solid rgba(242, 242, 242, 1);
        text-align: center;
        line-height: 2.875rem;
        color: rgba(98, 100, 102, 1);
        font-size: 1rem;
        border-radius: 0.34375rem 0.34375rem 0 0;
        font-weight: bold;
      }
      p {
        background-color: rgba(42, 198, 109, 1);
        height: 1.125rem;
        text-align: center;
        line-height: 1.125rem;
        border-radius: 0 0 0.25rem 0.25rem;
        color: #fff;
        font-size: 0.625rem;
      }
    }
    .active {
      .nav-top {
        border: 0.0625rem solid rgba(42, 198, 109, 1);
        color: rgba(47, 49, 51, 1);
      }
    }
    .active1 {
      .nav-top {
        border: 0.0625rem solid rgba(64, 162, 244, 1);
        color: rgba(47, 49, 51, 1);
      }
    }
    .active2 {
      .nav-top {
        border: 0.0625rem solid rgba(255, 125, 38, 1);
        color: rgba(47, 49, 51, 1);
      }
    }
    li:nth-of-type(2) {
      p {
        background-color: rgba(64, 162, 244, 1);
      }
    }
    li:nth-of-type(3) {
      margin: 0;
      p {
        background-color: rgba(255, 125, 38, 1);
      }
    }
  }
}
.con {
  display: flex;
  border-top: 0.03125rem solid rgba(242, 242, 242, 1);
  .left {
    width: 5rem;
    background-color: rgba(242, 242, 242, 1);
    ul {
      li {
        text-align: center;
        height: 3.125rem;
        color: rgba(98, 100, 102, 1);
        font-size: 0.8125rem;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .active {
        background-color: #fff;
        color: rgba(42, 198, 109, 1);
        font-weight: bold;
        span {
          display: inline-block;
          width: 100%;
          border-left: 0.1875rem solid rgba(42, 198, 109, 1);
          height: 0.9375rem;
        }
      }
    }
  }
  .right {
    flex: 1;
    padding-left: 0.875rem;
    ul {
      li {
        position: relative;
        height: 6rem;
        border-bottom: 0.03125rem solid rgba(245, 245, 245, 1);
        padding-right: 0.9375rem;
        h6 {
          color: rgba(50, 50, 51, 1);
          font-size: 0.875rem;
          font-weight: 400;
          padding-top: 0.875rem;
        }
        p {
          position: absolute;
          bottom: 0.9375rem;
          span {
            color: rgba(98, 100, 102, 1);
            font-size: 0.625rem;
            padding: 0.1875rem 0.3125rem;
            background-color: rgba(245, 245, 245, 1);
            border-radius: 0.125rem;
            margin-right: 0.375rem;
          }
        }
      }
    }
  }
}
</style>