<template>
  <div class="Album">
    <!-- 头部导航 -->
    <p id="allimg" @click="go">全部相册</p>
    <img src="~/assets/wightleft.png" alt id="back" @click="back" />
    <!-- 头部选择导航 -->
    <div id="top">
      <div class="swiper-container" id="nav">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <span class="active">效果图({{ efects.length }})</span>
          </div>
          <div class="swiper-slide">
            <span>实景图({{ reals.length }})</span>
          </div>
          <div class="swiper-slide">
            <span>样板图({{ templates.length }})</span>
          </div>
          <div class="swiper-slide">
            <span>交通图({{ traffics.length }})</span>
          </div>
          <div class="swiper-slide">
            <span>户型图({{ apartments.length }})</span>
          </div>
          <div class="swiper-slide">
            <span>配套图({{ matchings.length }})</span>
          </div>
          <!-- <div class="bar">
        <div class="color"></div>
          </div>-->
        </div>
      </div>
    </div>
    <!-- 滑动主页 -->
    <div class="swiper-container" id="page">
      <div class="swiper-wrapper">
        <!-- 第一页 -->
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">
                <div class="swiper-container banner">
                  <div class="swiper-wrapper">
                    <div
                      class="swiper-slide"
                      v-for="(item, key) in efects"
                      :key="key"
                    >
                      <img v-lazy="item.big" />
                    </div>
                  </div>
                  <div class="swiper-pagination page1"></div>
                </div>

                <!-- 底部咨询-->
              </div>
            </div>
          </div>
        </div>
        <!-- 第二页 -->
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">
                <div class="swiper-container banner">
                  <div class="swiper-wrapper">
                    <div
                      class="swiper-slide"
                      v-for="(item, key) in reals"
                      :key="key"
                    >
                      <img v-lazy="item.big" />
                    </div>
                  </div>
                  <div class="swiper-pagination page2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 第三页 -->
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">
                <div class="swiper-container banner">
                  <div class="swiper-wrapper">
                    <div
                      class="swiper-slide"
                      v-for="(item, key) in templates"
                      :key="key"
                    >
                      <img v-lazy="item.big" />
                    </div>
                  </div>
                  <div class="swiper-pagination page3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 第四页 -->
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">
                <div class="swiper-container banner">
                  <div class="swiper-wrapper">
                    <div
                      class="swiper-slide"
                      v-for="(item, key) in traffics"
                      :key="key"
                    >
                      <img v-lazy="item.big" />
                    </div>
                  </div>
                  <div class="swiper-pagination page4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 第五页 -->
        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">
                <div class="swiper-container banner">
                  <div class="swiper-wrapper">
                    <div
                      class="swiper-slide"
                      v-for="(item, key) in apartments"
                      :key="key"
                    >
                      <img v-lazy="item.big" />
                    </div>
                  </div>
                  <div class="swiper-pagination page5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="swiper-slide slidepage">
          <div class="swiper-container scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide slidescroll">
                <div class="swiper-container banner">
                  <div class="swiper-wrapper">
                    <div
                      class="swiper-slide"
                      v-for="(item, key) in matchings"
                      :key="key"
                    >
                      <img v-lazy="item.big" />
                    </div>
                  </div>
                  <div class="swiper-pagination page5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部悬浮按钮 -->
    <div class="nav">
      <div class="nav-peo" @click="gotalk">
        <img src="~/assets/ke_h.png" alt />
        <span>1</span>
        <p>在线咨询</p>
      </div>

      <a :href="'tel:' + tel">
        <button class="nav-tel">
          <img src="~/assets/nav-tel.png" />电话咨询
        </button>
      </a>
      <button @click="tan = true">
        <img src="~/assets/nav-yue.png" />预约看房
      </button>
    </div>
    <van-popup
      v-model="tan"
      :style="{ background: 'rgba(0,0,0,0)' }"
      @click-overlay="type = false"
    >
      <div id="Popup">
        <img src="~/assets/w-del.png" alt class="close" @click="close" />
        <h3>预约看房</h3>
        <p class="type">提前预约看房，我们将提供免费专车接送和专业楼盘讲解</p>
        <div class="one" v-show="!type">
          <input type="tel" placeholder="请输入手机号" v-model="baoming" />
          <p class="xiyi">
            <input type="checkbox" v-model="check1" />我已阅读并同意
            <router-link :to="'/'">《家园用户协议》</router-link>
          </p>
          <button @click="send">立即订阅</button>
          <p class="bomm">获取后会有置业顾问致电联系您并提供服务</p>
        </div>
        <div class="two" v-show="type">
          <p>
            验证码已发送到
            <i id="ytel">187****4376</i> 请注意查看
          </p>
          <input type="number" placeholder="输入验证码" v-model="ma" />
          <span class="t-b-scode">57秒后重发</span>
          <button @click="put">确定</button>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import { put, check, send } from "~/api/api";
export default {
  name: "Album",
  async asyncData(context) {
    let id = context.params.id;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let other = context.query.other;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/imgs/phone", {
          params: {
            id: id,
            token: token,
            other: other,
          },
        })
        .then((resp) => {
          let data = resp.data;
          // console.log(data)
          return data;
        }),
    ]);
    return {
      efects: res.imgs.effect,
      traffics: res.imgs.traffic,
      matching: res.imgs.matching,
      reals: res.imgs.real,
      templates: res.imgs.example,
      apartments: res.imgs.departments,
      phone: res.common.phone,
      jkl: jkl,
      id: id,
    };
  },
  head() {
    return {
      title: "家园新房-楼盘相册",
      meta: [
        {
          name: "description",
          content:
            "家园新房"
        },
        {
          name: "keywords",
          content: "家园新房"
        }
      ]
    };
  },
  data() {
    return {
      baoming: "",
      ip: "",
      id: "",
      tel: "",
      phone: "",
      efects: {
        imgs: [
          "http://api.jy1980.com/index.php/img/get?img=%2Fuploads%2F20200313%2Fthumb_800_h8z4f17r.jpg",
        ],
      },
      reals: {},
      templates: {},
      traffics: {},
      apartments: {},
      matchings: {},
      call: "",
      checks: "",
      n: "",
      loadi: true,
      title: "",
      description: "",
      keywords: "",
      ma: "",
      check1: true,
      tishi: "",
      type: false,
      str: "领取成功后优惠编码将与您手机号绑定，此优惠不与参团优惠叠加使用",
      id: "",
      name: "",
      typenum: "103",
      typebtn: "",
      tan: false,
      one: true,
      proname: "",
    };
  },
  methods: {
    start() {
      let ip = ip_arr["ip"];
      this.ip = ip;
    },
    send() {
      let check1 = this.check1;
      if (!check1) {
        this.toast("请勾选用户协议");
        return;
      }
      var phone = this.baoming;
      var pattern_phone = /^1[3-9][0-9]{9}$/;
      if (phone == "") {
        this.toast("手机号不能为空");
        return;
      } else if (!pattern_phone.test(phone)) {
        this.toast("手机号码不合法");
        return;
      }
      let id = this.id;
      let typenum = this.typenum;
      let ip = ip_arr["ip"];
      let city = $cookies.get("city");
      put({
        tel: phone,
        page: 4,
        project: id,
        ip: ip,
        remark: "相册页+预约看房",
        source: "线上推广1",
        name: "未知",
        position: typenum,
        city: city,
      }).then((res) => {});

      send({ ip: ip, phone: phone, source: 3 }).then((res) => {
        if (res.data.code == 200) {
          this.type = true;
          var time = 60;
          var tel = phone.substr(0, 3) + "****" + phone.substr(7, 11);
          var fn = function () {
            time--;
            if (time > 0) {
              $(".t-b-scode").html("重新发送" + time + "s");
              $(".t-b-scode").attr("disabled", true);
            } else {
              clearInterval(interval);
              $(".t-b-scode").html("获取验证码");
              $(".t-b-scode").attr("disabled", false);
            }
          };
          fn();
          var interval = setInterval(fn, 1000);
          $("#ytel").html(tel);
        } else {
          this.toast(res.data.message);
        }
      });
    },
    put() {
      let check1 = this.check1;
      if (!check1) {
        this.toast("请勾选用户协议");
        return;
      }
      var phone = this.baoming;
      var pattern_phone = /^1[3-9][0-9]{9}$/;
      if (phone == "") {
        this.toast("手机号不能为空");
        return;
      } else if (!pattern_phone.test(phone)) {
        this.toast("手机号码不合法");
        return;
      }
      if (!this.ma) {
        this.toast("请输入验证码");
        return;
      }
      let ma = this.ma;
      let ip = ip_arr["ip"];
      check({ phone: phone, code: ma, source: 3, ip: ip }).then((res) => {
        if (res.data.code == 200) {
          this.toast("提交成功");
          if (!$cookies.get("token")) {
            $cookies.set("token", res.data.token, 21600);
            $cookies.set("phone", phone, 21600);
            let tel = phone.substr(0, 3) + "****" + phone.substr(8);
            $cookies.set("username", tel);
          }
        } else {
          this.toast(res.data.message);
        }
        this.type = false;
        this.tan = false;
      });
    },
    close() {
      this.type = false;
      this.tan = false;
    },
    back() {
      this.$router.go(-1);
    },
    go() {
      this.$router.push("/" + this.jkl + "/imgs/" + this.$route.params.id);
    },
    gotalk() {
      let url = window.location.href;
      let newurl = url.split("?")[0];
      let id = this.$route.params.id;
      let name = sessionStorage.getItem("buildname");
      newurl += `?proid=${id}&name=${name}`;
      newurl = encodeURIComponent(newurl);
      window.location.href =
        "http://www.jy1980.com:9191/hangzhou/talk?reconnect=" + newurl;
    },
  },
  mounted() {
    let that = this;
    that.baoming = $cookies.get("tel");
    this.start();
  },
  updated() {
    if (this.one) {
      this.one = false;
      this.$nextTick(() => {
        let barwidth = 36; //导航粉色条的长度px
        let tSpeed = 300; //切换速度300ms
        let that = this;
        var navSwiper = new Swiper("#nav", {
          slidesPerView: 4.3,
          // freeMode: true,
          spaceBetween: 10,
          slidesOffsetBefore: 90,
          // slidesOffsetAfter: -80,
          initialSlide: 0,
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
          on: {
            init: function () {
              var navSlideWidth = this.slides.eq(0).css("width"); //导航字数需要统一,每个导航宽度一致
              // console.log(navSlideWidth);
              // console.log(this.slides);
              window.bar = this.$el.find(".bar");
              window.bar.css("width", navSlideWidth);
              window.bar.transition(tSpeed);
              window.navSum = this.slides[this.slides.length - 1].offsetLeft; //最后一个slide的位置

              var clientWidth = parseInt(this.$wrapperEl.css("width")); //Nav的可视宽度
              // console.log(clientWidth);
              var navWidth = 0;
              for (let i = 0; i < this.slides.length; i++) {
                navWidth += parseInt(this.slides.eq(i).css("width"));
              }

              window.topBar = this.$el.parents("body").find("#top"); //页头
              // console.log(topBar);
            },
          },
        });

        var pageSwiper = new Swiper("#page", {
          watchSlidesProgress: true,
          resistanceRatio: 0,
          initialSlide: 0,
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
          on: {
            touchMove: function () {
              window.progress = this.progress;
              // console.log(progress);
              window.bar.transition(0);
              // window.bar.transform(
              //   "translateX(" + window.navSum * window.progress + "px)"
              // );
              //粉色49,49,54灰色157,157,164
              for (let i = 0; i < this.slides.length; i++) {
                var slideProgress = this.slides[i].progress;
                if (Math.abs(slideProgress) < 1) {
                  var r = Math.floor(
                    (49 - 157) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 51
                  );
                  var g = Math.floor(
                    (49 - 157) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 51
                  );
                  var b = Math.floor(
                    (54 - 164) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 51
                  );
                  // navSwiper.slides.eq(i).find('span').css('color', 'rgba(' + r + ',' + g + ',' + b + ',1)')
                }
              }
            },
            transitionStart: function () {
              var activeIndex = this.activeIndex;
              // console.log(activeIndex);
              var activeSlidePosition =
                navSwiper.slides[activeIndex].offsetLeft;
              //释放时导航粉色条移动过渡
              window.bar.transition(tSpeed);
              // window.bar.transform("translateX(" + activeSlidePosition + "px)");
              //释放时文字变色过渡
              navSwiper.slides.eq(activeIndex).find("span").transition(tSpeed);
              navSwiper.slides.eq(activeIndex).find("span").addClass("active"); //黑色
              if (activeIndex > 0) {
                navSwiper.slides
                  .eq(activeIndex - 1)
                  .find("span")
                  .transition(tSpeed);
                navSwiper.slides
                  .eq(activeIndex - 1)
                  .find("span")
                  .removeClass("active"); //灰色
              }
              if (activeIndex < this.slides.length) {
                navSwiper.slides
                  .eq(activeIndex + 1)
                  .find("span")
                  .transition(tSpeed);
                navSwiper.slides
                  .eq(activeIndex + 1)
                  .find("span")
                  .removeClass("active"); //灰色
              }

              //导航居中
              var navActiveSlideLeft = navSwiper.slides[activeIndex].offsetLeft; //activeSlide距左边的距离
            },
          },
        });

        navSwiper.$el.on("touchstart", function (e) {
          e.preventDefault(); //去掉按压阴影
        });
        navSwiper.on("tap", function (e) {
          let clickIndex = this.clickedIndex;
          // console.log(clickIndex);

          let clickSlide = this.slides.eq(clickIndex);
          pageSwiper.slideTo(clickIndex, 0);
          this.slides.find("span").removeClass("active");
          clickSlide.find("span").addClass("active");
        });

        //内容滚动
        var scrollSwiper = new Swiper(".scroll", {
          //65是头部的高
          //36是top地址和搜索的高

          slidesOffsetBefore: 72,
          direction: "vertical",
          freeMode: true,
          slidesPerView: "auto",
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
          mousewheel: {
            releaseOnEdges: true,
          },
          on: {
            touchMove: function () {
              // console.log(topBar);
              if (this.translate > 72 - 36 && this.translate < 72) {
                window.topBar.transform(
                  "translateY(" + (this.translate - 72) + "px)"
                );
              }
              // console.log(this.$el.parent().attr('page-id'));
              // console.log(this);
            },
            touchStart: function () {
              window.startPosition = this.translate;
            },
            touchEnd: function () {
              window.topBar.transition(tSpeed);
              if (
                this.translate > 36 &&
                this.translate < 72 &&
                this.translate < window.startPosition
              ) {
                // topBar.transform('translateY(-36px)');
                for (sc = 0; sc < scrollSwiper.length; sc++) {
                  if (scrollSwiper[sc].translate > 36) {
                    scrollSwiper[sc].setTransition(tSpeed);
                    scrollSwiper[sc].setTranslate(36);
                  }
                }
              }
              if (
                this.translate > 36 &&
                this.translate < 72 &&
                this.translate > window.startPosition
              ) {
                window.topBar.transform("translateY(0px)");
                for (sc = 0; sc < scrollSwiper.length; sc++) {
                  if (
                    scrollSwiper[sc].translate < 72 &&
                    scrollSwiper[sc].translate > 0
                  ) {
                    scrollSwiper[sc].setTransition(tSpeed);
                    scrollSwiper[sc].setTranslate(72);
                  }
                }
              }
            },

            transitionStart: function () {
              window.topBar.transition(tSpeed);
              if (this.translate < 72 - 36) {
                // topBar.transform('translateY(-36px)');
                if (scrollSwiper) {
                  for (sc = 0; sc < scrollSwiper.length; sc++) {
                    if (scrollSwiper[sc].translate > 36) {
                      scrollSwiper[sc].setTransition(tSpeed);
                      scrollSwiper[sc].setTranslate(36);
                    }
                  }
                }
              } else {
                window.topBar.transform("translateY(0px)");

                if (scrollSwiper) {
                  for (sc = 0; sc < scrollSwiper.length; sc++) {
                    if (
                      scrollSwiper[sc].translate < 72 &&
                      scrollSwiper[sc].translate > 0
                    ) {
                      scrollSwiper[sc].setTransition(tSpeed);
                      // scrollSwiper[sc].setTranslate(72);
                    }
                  }
                }
              }
            },
          },
        });

        //热卖
        var bannerSwiper = new Swiper(".banner", {
          loop: false,
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
          pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
              return (
                '<span class="' +
                currentClass +
                '"></span>' +
                "/" +
                '<span class="' +
                totalClass +
                '"></span>'
              );
            },
          },
        });
      });
    }
  },
};
</script>

<style lang="less" scoped>
html,
body {
  position: relative;
  height: 100%;
  background: #000;
}
html {
  overflow: hidden;
}
* {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  background: #000;
  font-size: 12px;
}
.img img {
  width: 100%;
  display: block;
}
#top {
  position: absolute;
  top: 100px;
  z-index: 5;
  width: 100%;
}
#top #nav .active {
  color: #313136;
  background: #cccccc;
  border-radius: 20px;
}
.title {
  height: 48px;
  width: 100%;
  background: #000000;
  position: fixed;
  top: 0;
  z-index: 10;
}

.title span,
.title i,
.title a {
  color: #fff;
  line-height: 48px;
}
.title span {
  font-size: 20px;
  margin-left: 5.3%;
}
.title i {
  font-size: 18px;
  font-style: normal;
  margin: 0 auto;
  position: absolute;
  right: 50%;
  margin-right: -36px;
}
.title a {
  float: right;
  margin-right: 5.3%;
  font-size: 16px;
  text-decoration: none;
  /* color:rgba(51,51,51,1) */
}
#nav .swiper-wrapper {
  display: flex;
  justify-content: space-around;
}

#nav .swiper-slide span {
  text-align: center;
  display: block;
  line-height: 1.8;
  font-size: 13px;
  color: #9d9da4;
}
#nav .bar {
  width: 50px;
  height: 3px;
  position: absolute;
  bottom: 0px;
}
#nav .bar .color {
  width: 36px;
  margin: 0 auto;
  height: 3px;
  background: #ff4891;
}
.banner img {
  width: 100%;
  display: block;
}
.banner .swiper-pagination {
  left: auto;
  right: 7px;
  bottom: 7px;
  width: auto;
  padding: 2px 7px;
  border-radius: 10px;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
}

#page {
  height: 100vh;
}
#page .slidepage {
  height: 100%;
}

.scroll {
  height: 100%;
  background: #000;
}
.slidescroll {
  height: auto;
}
.ll {
  background: #000;
}

.slidescroll .banner {
  margin-top: 10vh;
  width: 100%;
  height: 80vh;
  // max-height: 480px;
  .swiper-slide {
    display: flex;
    align-items: center;
  }
}

.banner .swiper-slide img {
  width: 100%;
  max-height: 480px;
}

.banner .page1 {
  position: fixed;
  top: 0;
  width: 20px;
  height: 18px;
  font-weight: bold;
  font-size: 18px;
  left: 50%;
  transform: translate(-50%, 0);
}
.banner .page2 {
  position: fixed;
  top: 0;
  width: 20px;
  height: 18px;
  font-weight: bold;
  font-size: 18px;
  left: 50%;
  transform: translate(-50%, 0);
}
.banner .page3 {
  position: fixed;
  top: 0;
  width: 20px;
  height: 18px;
  font-weight: bold;
  font-size: 18px;
  left: 50%;
  transform: translate(-50%, 0);
}
.banner .page4 {
  position: fixed;
  top: 0;
  width: 20px;
  height: 18px;
  font-weight: bold;
  font-size: 18px;
  left: 50%;
  transform: translate(-50%, 0);
}
.banner .page5 {
  position: fixed;
  top: 0;
  width: 20px;
  height: 18px;
  font-weight: bold;
  font-size: 18px;
  left: 50%;
  transform: translate(-50%, 0);
}

.weiter {
  display: none;
  width: 80%;
  position: fixed;
  left: 10%;
  top: 220px;
  border-radius: 12px;
  z-index: 1001;
}

.weiter .t-top {
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-radius: 12px 12px 0 0;
  padding-top: 30px;
}

.weiter .t-top h6 {
  color: #3a3c49;
  font-size: 20px;
  text-align: center;
  margin-bottom: 14px;
  font-weight: bold;
}

.weiter .t-top p {
  color: #787980;
  font-size: 15px;
  margin: 0 18px;
}

.weiter .t-top #w-esc {
  position: absolute;
  right: 5%;
  top: 5%;
  width: 16px;
}

.weiter .t-bottom {
  width: 100%;
  height: 228px;
  background-color: #fff;
  border-radius: 0 0 12px 12px;
}

.weiter .t-bottom .t-b-first {
  height: 100%;
  display: block;
}
.weiter .t-bottom .t-b-first .w-tit {
  color: #a8a8ab;
  font-size: 12px;
  padding-left: 7%;
  padding-top: 8px;
}
.weiter .t-bottom .t-b-first .w-tit img {
  width: 5%;
  margin-right: 2%;
  margin-bottom: 2px;
}

.weiter .t-bottom .t-b-first .w-mg {
  font-size: 11px;
}
.weiter .t-bottom .t-b-first .w-mg a {
  color: #498de1;
}

.weiter .t-bottom .t-b-first input {
  width: 85%;
  height: 44px;
  border: 1px solid #c6c6cc;
  margin-top: 38px;
  margin-bottom: 5.5px;
  margin-left: 7.52%;
  padding-left: 5%;
  font-size: 15px;
  border-radius: 6px;
}

.weiter .t-bottom .t-b-first .w-mg-c {
  width: 10px;
  height: 10px;
  margin: 0;
  margin-left: 7.5%;
  margin-bottom: 29px;
  background-color: #fff;
  border: 1px solid #c9c9c9;
  border-radius: 2px;
  -webkit-appearance: none;
  padding: 0;
  float: left;
  margin-top: 3px;
  margin-right: 4px;
}

.weiter .t-bottom .t-b-first .w-mg-c:checked {
  background: url(~assets/checkbox_icon.png) no-repeat center;
  background-size: 90%;
}

.weiter .t-bottom .t-b-first button {
  width: 85%;
  height: 44px;
  border: 0;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  margin-left: 7.5%;
  box-shadow: 0px 2.5px 6px 0px rgba(78, 169, 255, 0.3);
}

.weiter .t-bottom .t-b-first .bg_01 {
  background: linear-gradient(
    270deg,
    rgba(102, 207, 255, 1),
    rgba(76, 181, 255, 1)
  );
}

.weiter .t-bottom .t-b-first .bg_02 {
  background: linear-gradient(
    270deg,
    rgba(102, 207, 255, 1),
    rgba(76, 181, 255, 1)
  );
}

.weiter .t-bottom .t-b-second {
  height: 100%;
  display: none;
  padding-top: 20px;
}

.weiter .t-bottom .t-b-second p {
  margin-top: 20px;
  color: #808080;
  font-size: 12px;
  width: 85%;
  margin-left: 7.5%;
  margin-bottom: 10px;
}

.weiter .t-bottom .t-b-second input {
  width: 85%;
  height: 40px;
  border-radius: 2px;
  border: 1px solid #c6c6cc;
  margin-left: 7.5%;
  margin-bottom: 20px;
  padding-left: 4%;
  border-radius: 6px;
}

.weiter .t-bottom .t-b-second .port1 {
  width: 85%;
  height: 44px;
  margin-left: 7.5%;
  background: linear-gradient(
    270deg,
    rgba(102, 207, 255, 1),
    rgba(76, 181, 255, 1)
  );
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  border: 0;
  margin-bottom: 20px;
  border-radius: 1px;
  border-radius: 6px;
  margin-top: 20px;
}

.weiter .t-bottom .t-b-second .t-b-scode {
  border: 0;
  color: #40a2f4;
  font-size: 13px;
  position: absolute;
  right: 10%;
  top: 55%;
  background-color: #fff;
}

.m-chang {
  display: none;
}

.m-o-succ {
  display: none;
  position: fixed;
  top: 190px;
  left: 50%;
  margin-left: -37.33333%;
  width: 74.666667%;
  background-color: #fff;
  z-index: 10001;
  padding: 0 5%;
  border-radius: 12px;
  height: 325px;
  text-align: center;
}

.m-o-succ .o-esc {
  position: absolute;
  width: 8.6%;
  top: 3.1%;
  right: 3.5%;
}

.m-o-succ .o-success {
  width: 41%;
  margin-top: 45px;
  margin-bottom: 33px;
}

.m-o-succ p {
  color: #666666;
  font-size: 16px;
  line-height: 23px;
  font-weight: 500;
  margin-bottom: 32px;
}

.m-o-succ button {
  width: 100%;
  height: 40px;
  background: linear-gradient(
    270deg,
    rgba(102, 207, 255, 1),
    rgba(76, 181, 255, 1)
  );
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  border: 0px;
  border-radius: 4px;
}

.m-chang {
  position: fixed;
  top: 0;
  width: 100%;
  height: 1000px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}
.nav {
  position: fixed;
  width: 92%;
  height: 3.75rem;
  padding: 0 4%;
  bottom: 0;
  display: flex;
  z-index: 1000;
  align-items: center;
  .nav-peo {
    position: relative;
    margin-right: 1.5rem;
    margin-left: 0.4rem;
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
      right: 0.375rem;
      background-color: #f34f4f;
    }
    p {
      color: #d4d7d9;
      font-size: 0.75rem;
      bottom: 0;
    }
  }
  button {
    width: 8rem;
    height: 2.5rem;
    border-radius: 0.1875rem;
    text-align: center;
    background: linear-gradient(270deg, #1fc365, #3fd6a6);
    box-shadow: 0px 0.15625rem 0.3125rem 0px rgba(78, 169, 255, 0.2);
    border: 0;
    line-height: 2.5rem;
    color: #ffffff;
    font-size: 0.9375rem;
    img {
      width: 0.90625rem;
      margin-right: 0.25rem;
      margin-bottom: -0.125rem;
    }
  }
  .nav-tel {
    margin-right: 0.625rem;
    color: #fff;
    background: linear-gradient(270deg, #348aff, #6accff);
    box-shadow: 0px 0.15625rem 0.3125rem 0px rgba(78, 169, 255, 0.2);
  }
}
#allimg {
  position: absolute;
  font-size: 1rem;
  top: 0.9375rem;
  right: 4%;
  color: #fff;
  z-index: 9;
}
#back {
  width: 1.125rem;
  position: absolute;
  left: 4%;
  top: 0.9375rem;
  z-index: 9;
}
.swiper-container-free-mode > .swiper-wrapper {
  transform: translate3d(0px, 15px, 0px) !important;
}
#nav {
  height: 3.125rem;
}
#top {
  top: 3.625rem;
}
#Popup {
  width: 20.3125rem;
  height: 23.4375rem;
  background-color: #fff;
  border-radius: 0.75rem;
  position: relative;
  .close {
    width: 1rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  h3 {
    padding-top: 2.375rem;
    margin-bottom: 1.25rem;
    color: #323233;
    font-size: 1.375rem;
    text-align: center;
  }
  .type {
    padding: 0 1.25rem;
    color: #4d4d4d;
    line-height: 1.5rem;
    font-size: 1rem;
  }
  .one {
    margin-top: 1.75rem;
    padding: 0 1.25rem;
    input[type="tel"] {
      height: 3.4375rem;
      border-radius: 0.375rem;
      border: 0.09375rem solid #b3b3b3;
      padding-left: 0.9375rem;
      width: 16.625rem;
    }
    .xiyi {
      color: #626466;
      font-size: 0.6875rem;
      margin-top: 0.625rem;
      margin-bottom: 2.125rem;
      input {
        width: 0.6875rem;
        height: 0.6875rem;
        -webkit-appearance: none;
        border: 0.03125rem solid #e6e6e6;
        margin-right: 0.3125rem;
      }
      input:checked {
        background: url("~assets/checkbox_icon.png") no-repeat 50%;
        background-size: 90%;
      }
      a {
        color: #7496be;
      }
    }
    button {
      width: 100%;
      height: 2.75rem;
      border-radius: 0.375rem;
      text-align: center;
      line-height: 2.75rem;
      color: #fff;
      font-size: 1rem;
      border: 0;
      background: #2ac66e;
      margin-bottom: 0.625rem;
    }
    .bomm {
      color: #adadad;
      font-size: 0.6875rem;
    }
  }
  .two {
    padding: 0 1.25rem;
    margin-top: 1.75rem;
    position: relative;
    p {
      color: #999999;
      font-size: 0.75rem;
      margin-bottom: 0.75rem;
      i {
        font-style: normal;
      }
    }
    input[type="number"] {
      height: 3.4375rem;
      border-radius: 0.375rem;
      border: 0.09375rem solid #b3b3b3;
      padding-left: 0.9375rem;
      width: 16.625rem;
      margin-bottom: 2.75rem;
    }
    span {
      color: #7496be;
      font-size: 1rem;
      position: absolute;
      right: 2.25rem;
      top: 2.875rem;
    }
    button {
      width: 100%;
      height: 2.75rem;
      border-radius: 0.375rem;
      text-align: center;
      line-height: 2.75rem;
      color: #fff;
      font-size: 1rem;
      border: 0;
      background: #2ac66e;
      margin-bottom: 0.625rem;
    }
  }
}
</style>