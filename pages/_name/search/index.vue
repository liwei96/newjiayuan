<template>
  <div id="search">
    <header>
      <img class="back" src="~/assets/goback.png" alt />
      <p class="city">
        杭州
        <img src="~/assets/downsan.png" alt />
      </p>
      <img class="logo" src="~/assets/logo.png" alt />
      <div class="zixuns">
        <img src="~/assets/zixun.png" alt />
        <p>3</p>
      </div>
    </header>
    <div class="input">
      <input type="text" placeholder="请输入楼盘名称" />
      <span>
        <img src="~/assets/dian.png" />地图
      </span>
      <img src="~/assets/search.png" alt class="sea" />
    </div>
    <div class="nav">
      <ul class="nn">
        <li @click="showarea">
          区域
          <img src="~/assets/down1.png" alt />
        </li>
        <li @click="showpri">
          价格
          <img src="~/assets/down1.png" alt />
        </li>
        <li @click="showhu">
          户型
          <img src="~/assets/down1.png" alt />
        </li>
        <li @click="showmore">
          更多
          <img src="~/assets/down1.png" alt />
        </li>
        <li @click="showorder">
          排序
          <img src="~/assets/down1.png" alt />
        </li>
      </ul>
      <div class="area">
        <div class="area-con">
          <div class="area-top">
            <div class="area-left">
              <ul>
                <li :class="areanum == 0 ?'active':''" @click="setarea(0)">
                  <span>区域</span>
                </li>
                <li :class="areanum == 1 ?'active':''" @click="setarea(1)">
                  <span>地铁</span>
                </li>
              </ul>
            </div>
            <div class="area-right">
              <ul v-if="areanum == 0">
                <li
                  v-for="(item,key) in citys"
                  :key="key"
                  :class="citynum == key ?'active':''"
                >{{item}}</li>
              </ul>
              <ul v-if="areanum == 1">
                <li
                  v-for="(item,key) in ties"
                  :key="key"
                  :class="tienum == key ?'active':''"
                >{{item}}</li>
              </ul>
            </div>
          </div>
          <div class="area-bom">
            <button>重置</button>
            <button class="yes">确定</button>
          </div>
        </div>
      </div>
      <div class="pri">
        <div class="pri-con">
          <div class="area-top">
            <div class="area-left">
              <ul>
                <li :class="areanum == 0 ?'active':''" @click="setarea(0)">
                  <span>总价</span>
                </li>
                <li :class="areanum == 1 ?'active':''" @click="setarea(1)">
                  <span>单价</span>
                </li>
              </ul>
            </div>
            <div class="area-right">
              <ul v-if="areanum == 0">
                <li
                  v-for="(item,key) in citys"
                  :key="key"
                  :class="citynum == key ?'active':''"
                >{{item}}</li>
              </ul>
              <ul v-if="areanum == 1">
                <li
                  v-for="(item,key) in ties"
                  :key="key"
                  :class="tienum == key ?'active':''"
                >{{item}}</li>
              </ul>
            </div>
          </div>
          <div class="area-bom">
            <button>重置</button>
            <button class="yes">确定</button>
          </div>
        </div>
      </div>
      <div class="hu">
        <ul>
          <li v-for="(item,key) in hus" :key="key">
            <p>不限</p>
            <input type="checkbox" name="hu" v-model="husid" :value="key" />
          </li>
        </ul>
        <div class="hubtn">
          <button>重置</button>
          <button class="yes">确定</button>
        </div>
      </div>
      <div class="type">
        <div class="type-top">
          <div class="type-li">
            <h6>面积</h6>
            <p>
              <span>50m²以下</span>
              <span>50m²以下</span>
              <span>50m²以下</span>
              <span>50m²以下</span>
            </p>
          </div>
          <div class="type-li">
            <h6>类型</h6>
            <p>
              <span>50m²以下</span>
              <span>50m²以下</span>
              <span>50m²以下</span>
              <span>50m²以下</span>
            </p>
          </div>
          <div class="type-li">
            <h6>特色</h6>
            <p>
              <span>50m²以下</span>
              <span>50m²以下</span>
              <span>50m²以下</span>
              <span>50m²以下</span>
              <span>50m²以下</span>
              <span>50m²以下</span>
              <span>50m²以下</span>
            </p>
          </div>
          <div class="type-li">
            <h6>装修</h6>
            <p>
              <span>50m²以下</span>
              <span>50m²以下</span>
              <span>50m²以下</span>
              <span>50m²以下</span>
            </p>
          </div>
        </div>
        <div class="typebtn">
          <button>重置</button>
          <button class="yes">确定</button>
        </div>
      </div>
      <div class="order">
        <ul>
          <li>默认排序</li>
          <li>默认排序</li>
          <li>默认排序</li>
          <li>默认排序</li>
          <li>默认排序</li>
          <li>默认排序</li>
        </ul>
      </div>
      <div class="zhe" v-if="showtype" @click="cloase"></div>
    </div>
    <div class="icon">
      <p>住宅</p>
      <p>特价房</p>
      <p>刚需</p>
      <p>近地铁</p>
    </div>
    <div class="con">
      <div class="pro">
        <img src="~/assets/lun02.jpg" alt />
        <div class="pro-msg">
          <h5>
            上课的龙卷风
            <span>在售</span>
          </h5>
          <p class="pro-price">
            <span>53000</span>
            <i>元/m²</i>起
          </p>
          <p class="attr">住宅 | 杭州-临安 | 256m²</p>
          <p class="pro-icon">
            <span class="pro-icon-zhuang">两个</span>
            <span class="pro-icon-type">我的</span>
          </p>
        </div>
      </div>
      <div class="pro">
        <img src="~/assets/lun02.jpg" alt />
        <div class="pro-msg">
          <h5>
            上课的龙卷风
            <span>在售</span>
          </h5>
          <p class="pro-price">
            <span>53000</span>
            <i>元/m²</i>起
          </p>
          <p class="attr">住宅 | 杭州-临安 | 256m²</p>
          <p class="pro-icon">
            <span class="pro-icon-zhuang">两个</span>
            <span class="pro-icon-type">我的</span>
          </p>
        </div>
      </div>
      <div class="pro">
        <img src="~/assets/lun02.jpg" alt />
        <div class="pro-msg">
          <h5>
            上课的龙卷风
            <span>在售</span>
          </h5>
          <p class="pro-price">
            <span>53000</span>
            <i>元/m²</i>起
          </p>
          <p class="attr">住宅 | 杭州-临安 | 256m²</p>
          <p class="pro-icon">
            <span class="pro-icon-zhuang">两个</span>
            <span class="pro-icon-type">我的</span>
          </p>
        </div>
      </div>
      <div class="pro">
        <img src="~/assets/lun02.jpg" alt />
        <div class="pro-msg">
          <h5>
            上课的龙卷风
            <span>在售</span>
          </h5>
          <p class="pro-price">
            <span>53000</span>
            <i>元/m²</i>起
          </p>
          <p class="attr">住宅 | 杭州-临安 | 256m²</p>
          <p class="pro-icon">
            <span class="pro-icon-zhuang">两个</span>
            <span class="pro-icon-type">我的</span>
          </p>
        </div>
      </div>
      <div class="pro">
        <img src="~/assets/lun02.jpg" alt />
        <div class="pro-msg">
          <h5>
            上课的龙卷风
            <span>在售</span>
          </h5>
          <p class="pro-price">
            <span>53000</span>
            <i>元/m²</i>起
          </p>
          <p class="attr">住宅 | 杭州-临安 | 256m²</p>
          <p class="pro-icon">
            <span class="pro-icon-zhuang">两个</span>
            <span class="pro-icon-type">我的</span>
          </p>
        </div>
      </div>
      <div class="pro">
        <img src="~/assets/lun02.jpg" alt />
        <div class="pro-msg">
          <h5>
            上课的龙卷风
            <span>在售</span>
          </h5>
          <p class="pro-price">
            <span>53000</span>
            <i>元/m²</i>起
          </p>
          <p class="attr">住宅 | 杭州-临安 | 256m²</p>
          <p class="pro-icon">
            <span class="pro-icon-zhuang">两个</span>
            <span class="pro-icon-type">我的</span>
          </p>
        </div>
      </div>
      <div class="pro">
        <img src="~/assets/lun02.jpg" alt />
        <div class="pro-msg">
          <h5>
            上课的龙卷风
            <span>在售</span>
          </h5>
          <p class="pro-price">
            <span>53000</span>
            <i>元/m²</i>起
          </p>
          <p class="attr">住宅 | 杭州-临安 | 256m²</p>
          <p class="pro-icon">
            <span class="pro-icon-zhuang">两个</span>
            <span class="pro-icon-type">我的</span>
          </p>
        </div>
      </div>
    </div>
    <div class="isnull">
      <div class="nulltopimg">
        <img src="~/assets/m-success.png" alt />
      </div>
      <p class="nullmsg">
        没有找到相关内容，
        <span>清空条件</span>再次搜索 或者让我们来为您推荐寻找合适的楼盘
      </p>
      <button>帮我找房</button>
      <div class="other">
        <h3>猜你喜欢</h3>
        <div class="pro">
          <img src="~/assets/lun02.jpg" alt />
          <div class="pro-msg">
            <h5>
              上课的龙卷风
              <span>在售</span>
            </h5>
            <p class="pro-price">
              <span>53000</span>
              <i>元/m²</i>起
            </p>
            <p class="attr">住宅 | 杭州-临安 | 256m²</p>
            <p class="pro-icon">
              <span class="pro-icon-zhuang">两个</span>
              <span class="pro-icon-type">我的</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="load" v-if="load">
      <loading type="spinner" size="16px">加载中...</loading>
    </div>
  </div>
</template>
<script>
import { Popup, Loading } from "vant";
export default {
  data() {
    return {
      load: false,
      areanum: 0,
      citynum: 0,
      citys: ["不限", "不限", "不限", "不限", "不限", "不限", "不限", "不限"],
      ties: [
        "一号线",
        "一号线",
        "一号线",
        "一号线",
        "一号线",
        "一号线",
        "一号线",
        "一号线",
      ],
      tienum: 0,
      showtype: false,
      type: 0,
      hus: ["不限", "不限", "不限", "不限", "不限", "不限", "不限", "不限"],
      husid: [],
    };
  },
  components: {
    Popup,
    Loading,
  },
  methods: {
    setarea(n) {
      this.areanum = n;
    },
    showarea() {
      if (this.showtype) {
        if (this.type == 1) {
          this.showtype = false;
        }
      } else {
        this.showtype = true;
      }
      this.type = 1;
      $(".pri-con").hide();
      $(".order").hide();
      $(".type").hide();
      $(".hu").hide();
      $(".area-con").slideToggle();
    },
    showpri() {
      if (this.showtype) {
        if (this.type == 2) {
          this.showtype = false;
        }
      } else {
        this.showtype = true;
      }
      this.type = 2;
      $(".area-con").hide();
      $(".order").hide();
      $(".hu").hide();
      $(".type").hide();
      $(".pri-con").slideToggle();
    },
    showhu() {
      if (this.showtype) {
        if (this.type == 3) {
          this.showtype = false;
        }
      } else {
        this.showtype = true;
      }
      this.type = 3;
      $(".area-con").hide();
      $(".order").hide();
      $(".type").hide();
      $(".pri-con").hide();
      $(".hu").slideToggle();
    },
    showmore() {
      if (this.showtype) {
        if (this.type == 4) {
          this.showtype = false;
        }
      } else {
        this.showtype = true;
      }
      this.type = 4;
      $(".area-con").hide();
      $(".pri-con").hide();
      $(".order").hide();
      $(".hu").hide();
      $(".type").slideToggle();
    },
    showorder() {
      if (this.showtype) {
        if (this.type == 4) {
          this.showtype = false;
        }
      } else {
        this.showtype = true;
      }
      this.type = 4;
      $(".area-con").hide();
      $(".pri-con").hide();
      $(".hu").hide();
      $(".type").hide();
      $(".order").slideToggle();
    },
    cloase() {
      console.log("555");
      this.showtype = false;
      $(".area-con").slideUp();
    },
  },
  mounted() {
    // 滑动监控
    $(window).scroll(function () {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 44) {
        $(".nav").css({ position: "fixed", top: "2.75rem" });
      } else {
        $(".nav").css({ position: "relative", top: "0" });
      }
      console.log(scrollTop);
    });
  },
  watch: {
    showtype(val) {},
  },
};
</script>
<style lang="less" scoped>
li {
  list-style: none;
}
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
  .zixuns {
    margin-right: 1.25rem;
    position: relative;
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
  .city {
    position: absolute;
    color: #323233;
    font-size: 0.875rem;
    top: 0.7rem;
    left: 3.3125rem;
    img {
      width: 1rem;
      position: relative;
      top: 0.125rem;
    }
  }
}
.input {
  height: 2.5rem;
  padding: 0 4%;
  position: relative;
  margin-top: 2.75rem;
  input {
    width: 17.8125rem;
    height: 2rem;
    border-radius: 0.25rem;
    background-color: #f5f5f5;
    text-align: center;
    border: 0;
    outline: none;
    margin-top: 0.25rem;
    margin-right: 0.5rem;
  }
  input::-webkit-input-placeholder {
    color: #969899;
  }
  input::-moz-input-placeholder {
    color: #969899;
  }
  input::-ms-input-placeholder {
    color: #969899;
  }
  span {
    color: #333334;
    font-size: 0.875rem;
    img {
      width: 0.875rem;
      margin-right: 0.25rem;
      margin-bottom: -0.125rem;
    }
  }
  .sea {
    position: absolute;
    width: 1rem;
    top: 0.7rem;
    left: 5.3rem;
  }
}
.nav {
  height: 3rem;
  line-height: 3rem;
  padding: 0 4%;
  width: 92%;
  background-color: #fff;
  .nn {
    display: flex;
    li {
      color: #323333;
      font-size: 0.875rem;
      width: 20%;
      // text-align: center;
      img {
        width: 1rem;
        margin-top: 5px;
        position: relative;
        top: 0.1875rem;
      }
    }
  }
  .area {
    position: absolute;
    left: 0;
    width: 100%;
    -webkit-z-index: 2;
    -moz-z-index: 2;
    -ms-z-index: 2;
    -o-z-index: 2;
    z-index: 2;
    .area-con {
      display: none;
      .area-top {
        height: 16.5625rem;
        background-color: #fff;
        display: flex;
        .area-left {
          width: 33.33%;
          background-color: #f8f8f8;
          height: 100%;
          ul {
            padding-top: 1.25rem;
            li {
              height: 3.125rem;
              color: #7d7f80;
              font-size: 1rem;
              line-height: 3.125rem;
              text-align: center;
            }
            .active {
              background-color: #fff;
              color: #2ac66e;
              span {
                border-left: 0.125rem solid #2ac66e;
                padding-left: 0.4375rem;
              }
            }
          }
        }
        .area-right {
          flex: 1;
          overflow: auto;
          ul {
            padding-top: 1.5rem;
            li {
              text-align: center;
              color: #7d7f80;
              font-size: 1rem;
              line-height: 1.125rem;
              margin-bottom: 2.125rem;
            }
            .active {
              color: #2ac66e;
            }
          }
        }
      }
      .area-bom {
        border-top: 0.03125rem solid rgba(238, 238, 238, 0.35);
        background-color: #fff;
        height: 3.4375rem;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          width: 10.46875rem;
          height: 2.25rem;
          border-radius: 0.25rem;
          text-align: center;
          line-height: 2.25rem;
          border: 0;
          background-color: #f3f3f3;
          color: #969899;
          font-size: 0.875rem;
        }
        .yes {
          background-color: #2ac66e;
          margin-left: 0.625rem;
          color: #fff;
        }
      }
    }
  }
  .pri {
    position: absolute;
    left: 0;
    width: 100%;
    -webkit-z-index: 2;
    -moz-z-index: 2;
    -ms-z-index: 2;
    -o-z-index: 2;
    z-index: 2;
    .pri-con {
      display: none;
      .area-top {
        height: 16.5625rem;
        background-color: #fff;
        display: flex;
        .area-left {
          width: 33.33%;
          background-color: #f8f8f8;
          height: 100%;
          ul {
            padding-top: 1.25rem;
            li {
              height: 3.125rem;
              color: #7d7f80;
              font-size: 1rem;
              line-height: 3.125rem;
              text-align: center;
            }
            .active {
              background-color: #fff;
              color: #2ac66e;
              span {
                border-left: 0.125rem solid #2ac66e;
                padding-left: 0.4375rem;
              }
            }
          }
        }
        .area-right {
          flex: 1;
          overflow: auto;
          ul {
            padding-top: 1.5rem;
            li {
              text-align: center;
              color: #7d7f80;
              font-size: 1rem;
              line-height: 1.125rem;
              margin-bottom: 2.125rem;
            }
            .active {
              color: #2ac66e;
            }
          }
        }
      }
      .area-bom {
        border-top: 0.03125rem solid rgba(238, 238, 238, 0.35);
        background-color: #fff;
        height: 3.4375rem;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          width: 10.46875rem;
          height: 2.25rem;
          border-radius: 0.25rem;
          text-align: center;
          line-height: 2.25rem;
          border: 0;
          background-color: #f3f3f3;
          color: #969899;
          font-size: 0.875rem;
        }
        .yes {
          background-color: #2ac66e;
          margin-left: 0.625rem;
          color: #fff;
        }
      }
    }
  }
  .zhe {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    position: absolute;
    left: 0;
  }
  .hu {
    position: absolute;
    width: 100%;
    left: 0;
    display: none;
    background-color: #fff;
    z-index: 2;
    ul {
      height: 16.5625rem;
      overflow: auto;
      padding-top: 1.25rem;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 1.125rem;
        margin-bottom: 2.125rem;
        p {
          margin-left: 2.375rem;
          color: rgba(125, 127, 128, 1);
          font-size: 1rem;
        }
        input {
          margin-right: 1.625rem;
          width: 0.9375rem;
          height: 0.9375rem;
          -webkit-appearance: none;
          border: 0.5px solid #999;
          outline: none;
        }
        input:checked {
          background: url(~assets/checkbox_icon.png) no-repeat 50%;
          background-size: 90%;
        }
      }
    }
    .hubtn {
      width: 100%;
      height: 3.4375rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      button {
        width: 10.46875rem;
        height: 2.25rem;
        border-radius: 0.25rem;
        text-align: center;
        line-height: 2.25rem;
        border: 0;
        background-color: #f3f3f3;
        color: #969899;
        font-size: 0.875rem;
      }
      .yes {
        background-color: #2ac66e;
        margin-left: 0.625rem;
        color: #fff;
      }
    }
  }
  .type {
    position: absolute;
    width: 100%;
    display: none;
    left: 0;
    padding-top: 1.5rem;
    background-color: #fff;
    z-index: 2;
    .type-top {
      height: 21.5625rem;
      overflow: auto;
    }
    .type-li {
      padding: 0 4%;
      margin-bottom: 1.875rem;
      h6 {
        color: rgba(51, 51, 51, 1);
        font-size: 0.9375rem;
        font-weight: 400;
        margin-bottom: 0.9375rem;
        line-height: 1rem;
      }
      p {
        overflow: hidden;
        span {
          float: left;
          display: block;
          width: 4.9375rem;
          height: 1.625rem;
          border-radius: 0.1875rem;
          text-align: center;
          line-height: 1.625rem;
          background-color: rgba(245, 245, 245, 1);
          color: rgba(75, 76, 77, 1);
          font-size: 0.75rem;
          margin-right: 0.6rem;
          margin-bottom: 0.625rem;
        }
        span:nth-of-type(4n) {
          margin: 0;
        }
      }
    }
    .typebtn {
      width: 100%;
      height: 3.4375rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      button {
        width: 10.46875rem;
        height: 2.25rem;
        border-radius: 0.25rem;
        text-align: center;
        line-height: 2.25rem;
        border: 0;
        background-color: #f3f3f3;
        color: #969899;
        font-size: 0.875rem;
      }
      .yes {
        background-color: #2ac66e;
        margin-left: 0.625rem;
        color: #fff;
      }
    }
  }
  .order {
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 2;
    background-color: #fff;
    height: 14.875rem;
    display: none;
    overflow: auto;
    ul {
      padding: 0 4%;
      li {
        line-height: 2.875rem;
        color: rgba(100, 101, 102, 1);
        font-size: 0.875rem;
        border-bottom: 0.03125rem solid rgba(247, 247, 247, 1);
      }
    }
  }
}
.icon {
  padding: 0.6875rem 4%;
  display: flex;
  p {
    background-color: #fff7f2;
    height: 1.75rem;
    width: 5rem;
    border-radius: 0.875rem;
    text-align: center;
    line-height: 1.75rem;
    color: #ff761a;
    font-size: 0.75rem;
    margin-right: 0.5rem;
  }
  p:nth-of-type(4) {
    margin: 0;
  }
}
.con {
  padding: 0 4%;
  margin-top: 0.9375rem;
  .pro {
    margin-bottom: 1.875rem;
    width: 100%;
    display: flex;
    text-decoration: none;
    img {
      width: 6.875rem;
      height: 5rem;
      margin-right: 0.75rem;
      border-radius: 0.1875rem;
    }
    .pro-msg {
      flex: 1;
      h5 {
        color: #5c5c5c;
        font-size: 1rem;
        font-weight: bold;
        margin-top: -0.25rem;
        margin-bottom: 0.125rem;
        span {
          color: #1fc365;
          font-size: 0.6875rem;
          float: right;
          padding: 0.1875rem 0.375rem;
          background-color: #f0faf1;
          border-radius: 0.125rem;
          font-weight: 400;
        }
      }
      .pro-price {
        color: #7a7a7a;
        font-size: 0.75rem;
        margin-bottom: 0.1875rem;
        span {
          color: #fe582f;
          font-size: 0.9375rem;
        }
        i {
          font-style: normal;
          color: #fe582f;
        }
      }
      .attr {
        color: #7a7a7a;
        font-size: 0.75rem;
        margin-bottom: 0.1875rem;
      }
      .pro-icon {
        .pro-icon-zhuang {
          color: #5aabe5;
          font-size: 0.6875rem;
          padding: 0.1875rem 0.375rem;
          background-color: #f0f5f9;
          margin-right: 0.375rem;
          border-radius: 0.125rem;
        }
        .pro-icon-type {
          color: #888a8f;
          font-size: 0.6875rem;
          padding: 0.1875rem 0.375rem;
          border-radius: 0.125rem;
          background-color: #f7f8fa;
          margin-right: 0.375rem;
        }
      }
    }
  }
}
.isnull {
  .nulltopimg {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    img {
      width: 12.5rem;
      height: 12.5rem;
    }
  }
  .nullmsg {
    color: rgba(125, 127, 128, 1);
    font-size: 0.8125rem;
    line-height: 1.375rem;
    width: 13.875rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1.25rem;
    span {
      color: rgba(42, 198, 110, 1);
    }
  }
  button {
    background: linear-gradient(-270deg, #20c466, #3fd6a7);
    box-shadow: 0.03125rem 0.15625rem 0.3125rem 0px rgba(44, 204, 128, 0.2);
    border-radius: 0.25rem;
    width: 10rem;
    height: 2.25rem;
    border: 0;
    text-align: center;
    line-height: 2.25rem;
    color: #fff;
    font-size: 0.875rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1.875rem;
  }
  .other {
    padding: 0 4%;
    h3 {
      color: rgba(50, 51, 51, 1);
      font-size: 1rem;
      margin-bottom: 1.25rem;
    }
    .pro {
      margin-bottom: 1.875rem;
      width: 100%;
      display: flex;
      text-decoration: none;
      img {
        width: 6.875rem;
        height: 5rem;
        margin-right: 0.75rem;
        border-radius: 0.1875rem;
      }
      .pro-msg {
        flex: 1;
        h5 {
          color: #5c5c5c;
          font-size: 1rem;
          font-weight: bold;
          margin-top: -0.25rem;
          margin-bottom: 0.125rem;
          span {
            color: #1fc365;
            font-size: 0.6875rem;
            float: right;
            padding: 0.1875rem 0.375rem;
            background-color: #f0faf1;
            border-radius: 0.125rem;
            font-weight: 400;
          }
        }
        .pro-price {
          color: #7a7a7a;
          font-size: 0.75rem;
          margin-bottom: 0.1875rem;
          span {
            color: #fe582f;
            font-size: 0.9375rem;
          }
          i {
            font-style: normal;
            color: #fe582f;
          }
        }
        .attr {
          color: #7a7a7a;
          font-size: 0.75rem;
          margin-bottom: 0.1875rem;
        }
        .pro-icon {
          .pro-icon-zhuang {
            color: #5aabe5;
            font-size: 0.6875rem;
            padding: 0.1875rem 0.375rem;
            background-color: #f0f5f9;
            margin-right: 0.375rem;
            border-radius: 0.125rem;
          }
          .pro-icon-type {
            color: #888a8f;
            font-size: 0.6875rem;
            padding: 0.1875rem 0.375rem;
            border-radius: 0.125rem;
            background-color: #f7f8fa;
            margin-right: 0.375rem;
          }
        }
      }
    }
  }
}
.load {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.25rem;
}
</style>