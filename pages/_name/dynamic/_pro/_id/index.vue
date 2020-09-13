<template>
  <div id="Dyna">
    <header>
      <img class="back" src="~/assets/goback.png" alt />
      <img class="logo" src="~/assets/logo.png" alt />
      <img src="~/assets/searchtop.png" alt class="search" />
      <img src="~/assets/mapcai.png" alt class="list" />
    </header>
    <div class="con">
      <h5>吴女士于 2019-05-01 购买群升万国天地</h5>
      <p class="name">客户：吴女士</p>
      <p
        class="txt"
      >本人看房半年有余，从去年年底到今年五月，萧山、滨江、之江转塘的楼盘基本上都看过了，要么价格太高，要么配套不好，一直没有看好，那段时间看房子看的非常的累。偶然的一次机会，在网上寻找新楼盘的时候看到了家园新房网，上面写着杭州新房攻略大全，抱着试一试的想法，我点了进去，区域依然是选择的萧山、滨江、之江转塘这三个地方，一个新的楼盘出现在首页上——群升万国天地。当时心里想的是，这个楼盘怎么没听说过，会不会是假的，如果是真的，那这个家园新房网确实称得上杭州新房大全了，楼盘信息这么及时。于是第一时间打了电话过去，对方告知楼盘是刚刚首开没多久，很多人确实都还不知道，一番交流下来，觉得还不错，所以很快约好时间实地去看。五月一号当天，置业顾问小陈开车到城西这边来接的我，看完给我的感觉很不错，户型南北通透，又是6号线地铁上盖，商业综合体上盖，距离千年古城宋城旅游度假区也就5分钟左右路程，平时休闲度假购物都非常便利。但是价格一直谈不下来。这个时候小陈也看出了我的为难，他跟我确定一下房子是否满意，说价格他来想办法。后面他给他经理打了个电话，经理过来之后直接去找了售楼处的负责人，原来他们之间是有推广协议和团购优惠的，可以争取到2个点的折扣，但是距离我的预期还差了一万多，将近1个点的差距。最后还是通过小陈他们经理给公司老总打电话，请他们公司老板出面，售楼处卖了个人情把最后的差价给优惠了下来。虽然过程比较曲折，但是结果是比较完美的。感谢！</p>
      <p class="time">2019-06-07</p>
      <button class="btn">订阅实时动态</button>
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
      <div class="peo">
        <img src="~/assets/people.png" alt />
        <div class="peomsg">
          <h6>
            李聪然
            <span>满意度5分</span>
          </h6>
          <p>为客户提供专业的购房建议</p>
        </div>
        <button>免费咨询</button>
      </div>
    </div>
    <div class="line"></div>
    <div class="other">
      <h3>本楼盘户型</h3>
      <ul>
        <li>
          <div class="left">
            <img src="~/assets/hu.png" alt />
          </div>
          <div class="right">
            <h5>
              3室2厅2卫
              <span>在售</span>
            </h5>
            <p>
              建面：
              <span>89m²</span>
            </p>
            <p class="type">
              类型：
              <span>loft</span>
            </p>
            <p>
              总价：
              <span class="pri">
                约
                <i>290</i>万/套
              </span>
            </p>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="~/assets/hu.png" alt />
          </div>
          <div class="right">
            <h5>
              3室2厅2卫
              <span>在售</span>
            </h5>
            <p>
              建面：
              <span>89m²</span>
            </p>
            <p class="type">
              类型：
              <span>loft</span>
            </p>
            <p>
              总价：
              <span class="pri">
                约
                <i>290</i>万/套
              </span>
            </p>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="~/assets/hu.png" alt />
          </div>
          <div class="right">
            <h5>
              3室2厅2卫
              <span>在售</span>
            </h5>
            <p>
              建面：
              <span>89m²</span>
            </p>
            <p class="type">
              类型：
              <span>loft</span>
            </p>
            <p>
              总价：
              <span class="pri">
                约
                <i>290</i>万/套
              </span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="nav">
      <div class="nav-peo">
        <img src="~/assets/ke_h.png" alt />
        <span v-if="btn">1</span>
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
export default {
  data() {
    return {
      btn: true,
    };
  },
};
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
  .search {
    width: 1.25rem;
    position: absolute;
    right: 3.5625rem;
    top: 0.75rem;
  }
  .list {
    width: 1.25rem;
    margin-right: 4%;
  }
}
.con {
  padding: 0 4%;
  margin-top: 2.75rem;
  h5 {
    color: #323233;
    font-size: 0.9375rem;
    padding-top: 0.75rem;
    margin-bottom: 0.6rem;
  }
  .name {
    color: #646566;
    font-size: 0.75rem;
    margin-bottom: 0.7rem;
  }
  .txt {
    color: #646566;
    font-size: 0.875rem;
    line-height: 1.5rem;
    margin-bottom: 0.6rem;
  }
  .time {
    color: #969799;
    font-size: 0.75rem;
    margin-bottom: 1.125rem;
  }
  .btn {
    width: 100%;
    height: 2.5rem;
    border: 0;
    border-radius: 0.25rem;
    background-color: #f1f7f3;
    text-align: center;
    line-height: 2.5rem;
    color: #1fc365;
    font-size: 0.9375rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  .ject-top {
    display: flex;
    box-shadow: 0px 0px 1.1875rem 0.09375rem rgba(0, 0, 0, 0.03);
    border-radius: 0.5rem;
    padding: 0.9375rem 0.75rem;
    margin-bottom: 1.25rem;
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
          font-weight: 400;
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
  .peo {
    display: flex;
    align-items: center;
    margin-bottom: 0.625rem;
    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
    .peomsg {
      h6 {
        color: #131313;
        font-size: 0.9375rem;
        margin-bottom: 0.1rem;
        position: relative;
        top: -0.125rem;
        span {
          padding: 0.125rem;
          color: #fff;
          font-size: 0.625rem;
          background-color: #ff761a;
          border-radius: 0.125rem;
          margin-left: 0.1875rem;
          font-weight: 400;
        }
      }
      p {
        color: #96989a;
        font-size: 0.75rem;
      }
    }
    button {
      margin-left: auto;
      background: linear-gradient(270deg, #20c466, #3fd6a7);
      box-shadow: 0.03125rem 0.15625rem 0.3125rem 0px rgba(44, 204, 128, 0.2);
      border-radius: 0.8125rem;
      text-align: center;
      line-height: 1.625rem;
      width: 4.375rem;
      height: 1.625rem;
      color: #fff;
      font-size: 0.75rem;
      border: 0;
      font-weight: 400;
    }
  }
}
.line {
  width: 100%;
  height: 0.625rem;
  background-color: #f8f8f8;
}
.other {
  padding: 0 4%;
  h3 {
    color: #121212;
    font-size: 1.0625rem;
    padding-top: 1.125rem;
    margin-bottom: 1.375rem;
  }
  ul {
    margin-bottom: 3.75rem;
    li {
      display: flex;
      padding-bottom: 0.875rem;
      border-bottom: 0.03125rem solid #f2f2f2;
      margin-bottom: 0.875rem;
      .left {
        width: 6.875rem;
        height: 5rem;
        border-radius: 0.1875rem;
        background-color: #f5f5f5;
        text-align: center;
        img {
          width: 3.5rem;
          height: 100%;
        }
      }
      .right {
        margin-left: 0.75rem;
        flex: 1;
        h5 {
          color: #323233;
          font-size: 1rem;
          font-weight: 400;
          margin-bottom: 0.375rem;
          span {
            float: right;
            width: 2.125rem;
            height: 1rem;
            text-align: center;
            line-height: 1rem;
            border-radius: 0.125rem;
            background-color: #2cd264;
            color: #fff;
            font-size: 0.6875rem;
          }
        }
        p {
          color: #7d7e80;
          font-size: 0.75rem;
          span {
            color: #323233;
            font-size: 0.8125rem;
          }
          .pri {
            color: #fe582f;
            font-size: 0.625rem;
            i {
              font-style: normal;
              font-size: 1rem;
            }
          }
        }
        .type {
          margin-top: 0.125rem;
        }
      }
    }
    li:nth-last-of-type(1) {
      border: 0;
      margin-bottom: 0;
    }
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