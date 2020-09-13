<template>
  <div id="PK">
    <header>
      <img class="back" src="~/assets/goback.png" alt />
      <img class="logo" src="~/assets/logo.png" alt />
      <div class="zixuns">
        <img src="~/assets/zixun.png" alt />
        <p>3</p>
      </div>
      <img src="~/assets/mapcai.png" alt class="list" />
    </header>
    <div class="pks">
      <van-checkbox-group v-model="result" :max="2">
        <van-checkbox name="a" checked-color="#1FC365" class="new">
          <div class="pro">
            <div class="left">
              <img src="~/assets/lun02.jpg" alt />
            </div>
            <div class="right">
              <h6>锦云澜天里</h6>
              <p class="pri">
                <span>17000</span>元/m²
              </p>
              <p class="msg">住宅 | 杭州-江干 | 80-140m²</p>
              <p class="type">
                <span class="zhuang">精装</span>
                <span>地铁楼盘</span>
              </p>
            </div>
          </div>
        </van-checkbox>
        <div class="line"></div>
        <van-checkbox name="b" checked-color="#1FC365">
          <div class="pro">
            <div class="left">
              <img src="~/assets/lun02.jpg" alt />
            </div>
            <div class="right">
              <h6>锦云澜天里</h6>
              <p class="pri">
                <span>17000</span>元/m²
              </p>
              <p class="msg">住宅 | 杭州-江干 | 80-140m²</p>
              <p class="type">
                <span class="zhuang">精装</span>
                <span>地铁楼盘</span>
              </p>
            </div>
          </div>
        </van-checkbox>
        <div class="slid"></div>
        <h3>浏览足迹</h3>
        <van-checkbox name="c" checked-color="#1FC365">
          <div class="pro">
            <div class="left">
              <img src="~/assets/lun02.jpg" alt />
            </div>
            <div class="right">
              <h6>锦云澜天里</h6>
              <p class="pri">
                <span>17000</span>元/m²
              </p>
              <p class="msg">住宅 | 杭州-江干 | 80-140m²</p>
              <p class="type">
                <span class="zhuang">精装</span>
                <span>地铁楼盘</span>
              </p>
            </div>
          </div>
        </van-checkbox>
      </van-checkbox-group>
    </div>
    <div class="bombtn">
      <button class="pkbtn">添加楼盘</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      result: [],
      isadd: false,
    };
  },
  watch: {
    result(val, old) {
      if (val.length > old.length) {
        this.isadd = true;
        let that = this;
        setTimeout(() => {
          that.isadd = false;
        }, 1000);
      }
    },
  },
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
.pks {
  padding-top: 4rem;
  /deep/.van-checkbox-group {
    position: relative;
    .van-checkbox {
      margin-bottom: 1.5rem;
      .van-checkbox__icon {
        margin-left: 0.9375rem;
        margin-right: 1.3125rem;
      }
    }
  }
  .line {
    width: 20rem;
    height: 0.0625rem;
    background-color: #f2f2f2;
    position: absolute;
    right: 0;
    top: 6.375rem;
  }
  /deep/.new {
    padding-bottom: 1.25rem;
  }
  .delete-button {
    height: 100%;
  }
  .pro {
    display: flex;
    position: relative;
    height: 5rem;
    .left {
      img {
        width: 6.875rem;
        height: 5rem;
        border-radius: 0.1875rem;
        margin-right: 0.875rem;
      }
    }
    .right {
      h6 {
        color: #46494d;
        font-size: 0.9375rem;
        position: relative;
        top: -2px;
      }
      .pri {
        color: #ff5454;
        font-size: 0.75rem;
        span {
          color: #ff5454;
          font-size: 0.875rem;
          font-weight: bold;
        }
      }
      .msg {
        color: #7d7e80;
        font-size: 0.75rem;
        margin-bottom: 0.125rem;
      }
      .type {
        span {
          padding: 0.1875rem 0.3125rem;
          background-color: #f5f5f5;
          border-radius: 0.125rem;
          color: #7d7e80;
          font-size: 0.75rem;
          margin-right: 0.375rem;
        }
        .zhuang {
          background-color: #f0f5f9;
          color: #49abf1;
        }
      }
    }
  }
  h3 {
        color: #323233;
        font-size: 1rem;
        margin-top: 1.25rem;
        padding: 0 4%;
        margin-bottom: 1.125rem;
        font-weight: bold;
    }
    .slid {
  width: 100%;
  height: 0.625rem;
  background-color: #f7f7f7;
}
}
.bombtn {
  width: 100%;
  height: 3.75rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .pkbtn {
    width: 92%;
    height: 2.5rem;
    border-radius: 0.25rem;
    background-color: #1fc365;
    text-align: center;
    line-height: 2.5rem;
    position: fixed;
    left: 4%;
    bottom: 0.625rem;
    color: #fff;
    font-size: 0.9375rem;
    border: 0;
    font-weight: bold;
  }
}
</style>