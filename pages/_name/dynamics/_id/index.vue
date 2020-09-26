<template>
  <div id="Dynamic">
    <header>
      <img class="back" src="~/assets/goback.png" alt />
      <img class="logo" src="~/assets/logo.png" alt />
      <img src="~/assets/searchtop.png" alt class="search" />
      <img src="~/assets/mapcai.png" alt class="list" @click="btns"/>
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
    <img src="~/assets/lun02.jpg" alt class="topimg" />
    <div class="con">
      <div class="con-li">
        <div class="con-li-top">
          <img src="~/assets/lun02.jpg" alt />
          <h6>群升万国天地</h6>
          <p>
            余杭
            <span>面积 42-60m²</span>
            <span>均价：13500元/m²</span>
          </p>
          <div class="zhe"></div>
        </div>
        <div class="con-li-bom">
          <h6>吴女士于 2019-05-01 购买群升万国天地</h6>
          <p
            class="txt"
          >本人看房半年有余，从去年年底到今年五月，萧山、滨江、之江转塘的楼盘基本上都看过了，要么价格太高从去年年底到今年五月，萧山、滨江、之江转塘的楼盘基本上都看过了，要么价格太高，要么配套不好，一直没有看好...</p>
          <p class="time">2019-05-01</p>
          <button>查看详细</button>
        </div>
      </div>
      <div class="con-li">
        <div class="con-li-top">
          <img src="~/assets/lun02.jpg" alt />
          <h6>群升万国天地</h6>
          <p>
            余杭
            <span>面积 42-60m²</span>
            <span>均价：13500元/m²</span>
          </p>
          <div class="zhe"></div>
        </div>
        <div class="con-li-bom">
          <h6>吴女士于 2019-05-01 购买群升万国天地</h6>
          <p class="txt">本人看房半年有余，从去年年底到今年五月，萧山、滨江、之江转塘的楼盘基本上都看过了，要么价格太高，要么配套不好，一直没有看好...</p>
          <p class="time">2019-05-01</p>
          <button>查看详细</button>
        </div>
      </div>
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
  async asyncData(context) {
    let jkl = context.params.name;
    return {
      jkl: jkl,
    };
  },
  data() {
    return {
        btn:true,
        list:false
    };
  },
  methods:{
    btns(){
      if(this.list){
        this.list=false
      }else{
        this.list= true
      }
    }
  }
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
  .cailist {
    width: 9.375rem;
    background: rgba(41, 41, 41, 0.9);
    position: absolute;
    top: 2.5rem;
    border-radius: 0.375rem;
    z-index: 20000;
    right: 4%;
    li {
      position: relative;
      color: #e6e6e6;
      font-size: 0.9375rem;
      line-height: 3.125rem;
      a {
        width: 100%;
        display: flex;
        align-items: center;
      }
      p {
        border-bottom: 0.5px solid #545454;
        flex: 1;
        color: #e6e6e6;
      }
      img {
        width: 1.125rem;
        margin: 0;
        margin-left: 1.625rem;
        margin-right: 0.875rem;
        height: 1.125rem;
      }
    }
    .cmn {
      span {
        display: block;
        border: 0.4375rem solid transparent;
        border-bottom-color: rgba(41, 41, 41, 0.9);
        position: absolute;
        top: -0.875rem;
        right: 0.625rem;
      }
    }
  }
}
.topimg {
  width: 100%;
  height: 6.25rem;
  margin-top: 2.75rem;
}
.con {
  padding: 1.5625rem 1.5625rem 3.75rem 1.5625rem;
  .con-li {
    width: 100%;
    height: 19.0625rem;
    border-radius: 0.5rem;
    margin-bottom: 1.875rem;
    box-shadow: 0px 0px 1.1875rem 0.09375rem rgba(0, 0, 0, 0.04);
    overflow: hidden;
    .con-li-top {
      height: 7.5rem;
      position: relative;
      img {
        width: 100%;
        height: 7.5rem;
      }
      h6 {
        color: #ffffff;
        font-size: 1rem;
        position: absolute;
        left: 0.875rem;
        bottom: 2.5rem;
        z-index: 1;
      }
      p {
        color: #ffffff;
        font-size: 0.8125rem;
        bottom: 0.625rem;
        left: 0.875rem;
        position: absolute;
        z-index: 1;
        span {
            margin-left: 0.625rem;
        }
      }
      .zhe {
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.4)
        );
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .con-li-bom {
      height: 23.3125rem;
      padding: 0 4%;
      h6 {
        color: #323333;
        font-size: 0.9375rem;
        margin-top: 0.6rem;
        margin-bottom: 0.4rem;
      }
      .txt {
        color: #646566;
        font-size: 0.8125rem;
        line-height: 1.1875rem;
        margin-bottom: 0.375rem;
        height: 3.5625rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .time {
        color: #96989a;
        font-size: 0.75rem;
        margin-bottom: 1rem;
      }
      button {
        width: 15.625rem;
        height: 2.25rem;
        border-radius: 0.25rem;
        text-align: center;
        line-height: 2.25rem;
        border: 0.03125rem solid #30c66e;
        color: #20c466;
        font-size: 0.9375rem;
        background-color: #fff;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }
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