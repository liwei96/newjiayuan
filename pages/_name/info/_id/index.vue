<template>
  <div id="aritle">
    <header>
      <img class="back" src="~/assets/goback.png" alt />
      <img class="logo" src="~/assets/logo.png" alt />
      <img src="~/assets/mapcai.png" alt class="list" />
    </header>
    <div class="con">
      <h3>无法使用住房公积金贷款买房？一定要 注意这几种情况！</h3>
      <p class="time">
        发布： 2019-05-24
        <span>来源：允家</span>
        <i>浏览： 167</i>
      </p>
      <div class="pop">
        <span>摘要：</span>
        我们都知道公积金贷款利率远低于商业贷款，提前还贷也没有违约金等，是贷款买房的首选。但是，公积金贷款买房并非易事，一旦遇到以下这几种情况
      </div>
      <div class="ari"></div>
      <div class="type">
        标签：
        <span>买房</span>
        <span>买房</span>
        <span>买房</span>
      </div>
      <div class="project">
        <div class="ject-top">
          <div class="top-left">
            <img src="~/assets/lun02.jpg" alt />
          </div>
          <div class="top-right">
            <h4>
              荣盛檀越府
              <span>在售</span>
            </h4>
            <p class="pri">
              <span>17000</span>元/m²
            </p>
            <p class="typemsg">住宅 | 杭州-江干 | 地铁楼盘</p>
            <p class="icon">
              <span class="zu">精装</span>
              <span>刚需楼盘</span>
            </p>
          </div>
        </div>
        <div class="bom">
          <button>电话咨询</button>
          <button class="wen">在线问</button>
        </div>
      </div>
      <p class="icon">
        <img src="~/assets/typeicon.png" alt />
        买房资格
      </p>
      <div class="agre">
        <img src="~/assets/noclick.png" alt />
        <p>45</p>
      </div>
      <p class="free">
        <span>免责声明：</span>
        凡本站注明 “来自：XXX(非家园网)”的资讯稿件和图片作品，系本站转载自其它媒体，转载目的在于信息传递，并不代表本站赞同其观点和对其真实性负责。如有资讯稿件和图片作品的内容、版权以及其它问题的，请联系本站，电话：400-966-9995
      </p>
      <div class="other">
        <h4>大家都在看</h4>
        <div class="pro">
          <div class="left">
            <h5>学区房可不是那么好买的！这篇防坑 指南请收好</h5>
            <p>
              家园新房
              <span>2019-05-24</span>
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
              家园新房
              <span>2019-05-24</span>
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
              家园新房
              <span>2019-05-24</span>
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
              家园新房
              <span>2019-05-24</span>
            </p>
          </div>
          <div class="right">
            <img src="~/assets/lun02.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
header {
  position: fixed;
  top: 0;
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
  .list {
    width: 1.25rem;
    margin-right: 4%;
  }
}
.con {
  margin-top: 2.75rem;
  padding: 0 4%;
  h3 {
    color: rgba(50, 50, 51, 1);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.8125rem;
    padding-top: 0.625rem;
    margin-bottom: 1rem;
  }
  .time {
    color: rgba(150, 151, 153, 1);
    font-size: 0.8125rem;
    margin-bottom: 1.125rem;
    span {
      margin-left: 1rem;
    }
    i {
      font-style: normal;
      float: right;
    }
  }
  .pop {
    background: rgba(247, 247, 247, 1);
    border-radius: 0.25rem;
    padding: 0.9375rem 0.875rem;
    color: rgba(98, 100, 102, 1);
    font-size: 0.875rem;
    line-height: 1.5rem;
    span {
      color: rgba(64, 162, 244, 1);
    }
  }
  .type {
    color: rgba(47, 49, 51, 1);
    font-size: 0.9375rem;
    margin-top: 1.25rem;
    margin-bottom: 1.125rem;
    span {
      color: rgba(150, 151, 153, 1);
      margin-right: 0.6875rem;
    }
  }
  .project {
    margin: 0 4%;
    height: 9.375rem;
    padding: 0.75rem;
    padding-bottom: 0;
    box-shadow: 0px 0px 1.1875rem 0.09375rem rgba(0, 0, 0, 0.03);
    border-radius: 0.25rem;
    margin-bottom: 1.25rem;
    .ject-top {
      display: flex;
      .top-left {
        img {
          width: 6.875rem;
          height: 5rem;
          border-radius: 0.1875rem;
          margin-right: 0.625rem;
        }
      }
      .top-right {
        flex: 1;
        h4 {
          color: #474a4e;
          font-size: 0.9375rem;
          margin-bottom: 0.3rem;
          span {
            float: right;
            display: block;
            width: 2.25rem;
            height: 1.0625rem;
            border-radius: 0.125rem;
            background-color: #e9f7ea;
            text-align: center;
            line-height: 1.0625rem;
            color: #20c658;
            font-size: 0.6875rem;
          }
        }
        .pri {
          color: #ff5454;
          font-size: 0.75rem;
          margin-bottom: 0.2rem;
          span {
            font-size: 0.875rem;
          }
        }
        .typemsg {
          color: #7d7f80;
          font-size: 0.75rem;
          margin-bottom: 0.2rem;
        }
        .icon {
          span {
            color: #7d7f80;
            font-size: 0.75rem;
            padding: 0.1875rem 0.3125rem;
            background-color: #f5f5f5;
            border-radius: 0.125rem;
            margin-right: 0.375rem;
          }
          .zu {
            background-color: #f1f6f9;
            color: #4aabf2;
          }
        }
      }
    }
    .bom {
      text-align: right;
      button {
        width: 4.375rem;
        height: 1.5rem;
        border-radius: 0.25rem;
        background: linear-gradient(270deg, #348aff, #6acdff);
        box-shadow: 0.03125rem 0.15625rem 0.3125rem 0px rgba(78, 170, 255, 0.2);
        text-align: center;
        line-height: 1.5rem;
        color: #fff;
        border: 0;
      }
      .wen {
        background: linear-gradient(270deg, #20c466, #3fd6a7);
        box-shadow: 0.03125rem 0.15625rem 0.3125rem 0px rgba(44, 204, 128, 0.2);
        margin-left: 0.75rem;
      }
    }
  }
  .icon {
    color: #2f3133;
    font-size: 0.9375rem;
    margin-bottom: 1.25rem;
    img {
      width: 1rem;
    }
  }
  .agre {
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    border: 0.03125rem solid #e8e9ed;
    text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1.25rem;
    img {
      width: 1.125rem;
      margin-top: 0.75rem;
    }
    p {
      color: #797e86;
      font-size: 0.75rem;
    }
  }
  .free {
    border: 0.0625rem dashed #ededed;
    padding: 0.625rem 0.875rem;
    border-radius: 0.375rem;
    color: #969799;
    font-size: 0.75rem;
    line-height: 1.25rem;
    margin-bottom: 1.75rem;
    span {
      color: #2f3133;
    }
  }
  .other {
    h4 {
      color: #2f3133;
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
          color: #96989a;
          font-size: 0.6875rem;
          span {
            color: #96989a;
            margin-left: 0.625rem;
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
}
</style>