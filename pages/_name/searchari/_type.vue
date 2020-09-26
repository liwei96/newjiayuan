<template>
  <div id="searchari">
    <header>
      <img class="back" src="~/assets/goback.png" alt />
      <img class="logo" src="~/assets/logo.png" alt />
      <div class="zixuns">
        <img src="~/assets/zixun.png" alt />
        <p>3</p>
      </div>
      <img src="~/assets/mapcai.png" alt class="list" @click="btn"/>
      <ul class="cailist" v-if="list">
      <li class="cmn">
        <router-link :to="'/' + jkl">
          <span></span>
          <img src="~/assets/barhome.png" />
          <p>首 页</p>
        </router-link>
      </li>
      <li>
        <router-link :to="'/' + jkl + '/search'">
          <img src="~/assets/barsearch.png" />
          <p>楼盘查询</p>
        </router-link>
      </li>
      <li>
        <router-link :to="'/' + jkl + '/home'">
          <img src="~/assets/barsearch.png" />
          <p>个人中心</p>
        </router-link>
      </li>
      <li>
        <router-link :to="'/' + jkl + '/weike/before/56'">
          <img src="~/assets/barke.png" />
          <p>买房百科</p>
        </router-link>
      </li>
      <li>
        <router-link :to="'/' + jkl + '/infos/46'">
          <img src="~/assets/barxun.png" />
          <p>房产资讯</p>
        </router-link>
      </li>
    </ul>
    </header>
    <div class="input">
      <input type="text" placeholder="搜搜你想要了解的房产知识吧" />
      <img src="~/assets/search.png" alt />
    </div>
    <p class="seamsg">
      关键词：
      <span>楼盘签约</span>
    </p>
    <div class="con">
      <div class="pro">
        <div class="left">
          <h5>学区房可不是那么好买的！这篇防坑 指南请收好</h5>
          <p>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
          </p>
        </div>
        <div class="right">
          <img src="~/assets/lun02.jpg" alt />
        </div>
      </div>
      <div class="pro">
        <div class="left">
          <h5>学区房可不是那么好买的！这篇防坑 指南请收好</h5>
          <p>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
          </p>
        </div>
        <div class="right">
          <img src="~/assets/lun02.jpg" alt />
        </div>
      </div>
      <div class="pro">
        <div class="left">
          <h5>学区房可不是那么好买的！这篇防坑 指南请收好</h5>
          <p>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
          </p>
        </div>
        <div class="right">
          <img src="~/assets/lun02.jpg" alt />
        </div>
      </div>
      <div class="pro">
        <div class="left">
          <h5>学区房可不是那么好买的！这篇防坑 指南请收好</h5>
          <p>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
          </p>
        </div>
        <div class="right">
          <img src="~/assets/lun02.jpg" alt />
        </div>
      </div>
      <div class="pro">
        <div class="left">
          <h5>学区房可不是那么好买的！这篇防坑 指南请收好</h5>
          <p>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
          </p>
        </div>
        <div class="right">
          <img src="~/assets/lun02.jpg" alt />
        </div>
      </div>
      <div class="pro">
        <div class="left">
          <h5>学区房可不是那么好买的！这篇防坑 指南请收好</h5>
          <p>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
          </p>
        </div>
        <div class="right">
          <img src="~/assets/lun02.jpg" alt />
        </div>
      </div>
      <div class="pro">
        <div class="left">
          <h5>学区房可不是那么好买的！这篇防坑 指南请收好</h5>
          <p>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
          </p>
        </div>
        <div class="right">
          <img src="~/assets/lun02.jpg" alt />
        </div>
      </div>
      <div class="pro">
        <div class="left">
          <h5>学区房可不是那么好买的！这篇防坑 指南请收好</h5>
          <p>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
            <span>楼盘签约</span>
          </p>
        </div>
        <div class="right">
          <img src="~/assets/lun02.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
.seamsg {
  color: #2f3133;
  font-size: 0.875rem;
  padding: 0 4%;
  margin-top: 0.625rem;
  margin-bottom: 0.875rem;
  span {
    color: #ff4040;
  }
}
.con {
  padding: 0 4%;
  .pro {
    display: flex;
    height: 4.375rem;
    margin-bottom: 0.625rem;
    .left {
      position: relative;
      margin-right: 1.25rem;
      h5 {
        color: #2f3133;
        font-size: 0.875rem;
        line-height: 1.3125rem;
        font-weight: 400;
        position: relative;
        top: -0.25rem;
      }
      p {
        position: absolute;
        bottom: 0.4375rem;
        span {
          padding: 0.15625rem 0.3125rem 0.1875rem 0.3125rem;
          border-radius: 0.125rem;
          background-color: #f5f5f5;
          color: #626466;
          font-size: 0.625rem;
          margin-right: 0.5rem;
        }
      }
    }
    .right {
      img {
        width: 6.25rem;
        height: 4.375rem;
        border-radius: 0.1875rem;
      }
    }
  }
}
</style>