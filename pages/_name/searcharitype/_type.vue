<template>
  <div id="searchari">
    <div class="input">
      <img src="~/assets/goback.png" alt class="back" />
      <input type="text" placeholder="搜搜你想要了解的房产知识吧" />
      <img class="search" src="~/assets/search.png" alt />
    </div>
    <div class="type">
      <h3>热门关键词</h3>
      <p>
        <span>新房</span>
        <span>买房能力</span>
        <span>新房</span>
        <span>买房能力</span>
        <span>新房</span>
        <span>买房能力</span>
        <span>新房</span>
        <span>买房能力</span>
        <span>新房</span>
        <span>买房能力</span>
      </p>
    </div>
    <div class="con">
        <h3>猜你喜欢</h3>
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
.input {
  height: 2.5rem;
  padding: 0.25rem 4%;
  position: relative;
  margin-bottom: 1.75rem;
  input {
    border: 0;
    outline: none;
    width: 82%;
    height: 2rem;
    margin-top: 0.25rem;
    border-radius: 0.25rem;
    background-color: rgba(245, 245, 245, 1);
    padding-left: 10%;
  }
  .search {
    width: 1rem;
    position: absolute;
    top: 0.9rem;
    left: 3.4rem;
  }
  .back {
    width: 1rem;
    margin-right: 0.25rem;
  }
}
.type {
  padding: 0 4%;
  margin-bottom: 1.4rem;
  h3 {
    color: #101314;
    font-size: 0.9375rem;
    margin-bottom: 1.375rem;
  }
  p {
    span {
      color: #626466;
      font-size: 0.8125rem;
      padding: 0.4375rem 1rem;
      background-color: #f7f7f7;
      border-radius: 0.1875rem;
      margin-right: 0.75rem;
      margin-bottom: 0.75rem;
      display: inline-block;
    }
    span:nth-of-type(4n) {
      margin-right: 0;
    }
  }
}
.con {
  padding: 0 4%;
  h3 {
      color: #101314;
      font-size: 1rem;
      margin-bottom: 1.375rem;
  }
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