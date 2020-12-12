<template>
  <div class="Lucky">
    <header>
      <img class="back" src="~/assets/goback.png" alt="" @click="back" />
      <span>幸运抽购房大奖</span>
      <img src="~/assets/mapcai.png" alt class="list" @click="btns" />
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
    <div class="con">
      <div class="jkl">
        <img src="~/assets/lucky-top.png" alt="" class="imgtop" />
        <van-notice-bar
          left-icon="volume-o"
          :scrollable="false"
          color="#FFFAE0"
          background="#FD543E"
        >
          <van-swipe
            vertical
            class="notice-swipe"
            :autoplay="3000"
            :show-indicators="false"
          >
            <van-swipe-item v-for="(item, key) in msg.data" :key="key"
              >{{ item.tel }}用户获得{{ item.prize }}元优惠券</van-swipe-item
            >
          </van-swipe>
        </van-notice-bar>
      </div>

      <p class="rule" @click="huo = true">活动规则</p>
      <div class="zhuan">
        <p class="msg">金秋佳节，每位用户都有一次抽奖机会</p>
        <img class="yuan" src="~/assets/luck-yuan.png" alt="" id="turntable" />
        <img src="~/assets/lucky-zhuan.png" alt="" class="dian" @click="luck" />
        <p class="ti">您还有{{ num }}次抽奖机会</p>
        <p class="tt">注：每位客户只有一次抽奖机会，抽到优惠绑定手机号使用</p>
        <div class="box">
          <div class="box-top">
            <img src="~/assets/luck-tit.png" alt="" />
            <span>奖品池</span>
            <img src="~/assets/luck-titr.png" alt="" />
          </div>
          <div class="box-one">
            <div class="swiper-food">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="~/assets/luck-20.png" alt="" />
                  <p>{{txt}}专享2万元</p>
                </div>
                <div class="swiper-slide">
                  <img src="~/assets/luck-5000.png" alt="" />
                  <p>{{txt}}专享5000元</p>
                </div>
                <div class="swiper-slide">
                  <img src="~/assets/luck-2000.png" alt="" />
                  <p>{{txt}}专享2000元</p>
                </div>
                <div class="swiper-slide">
                  <img src="~/assets/luck-1000.png" alt="" />
                  <p>{{txt}}专享1000元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="box-top">
            <img src="~/assets/luck-tit.png" alt="" />
            <span>中奖名单</span>
            <img src="~/assets/luck-titr.png" alt="" />
          </div>
          <div class="box-two">
            <!-- <div class="swiper-list">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(item, key) in msg.data"
                  :key="key"
                >
                  <p class="kk">{{ item.tel }}用户获得</p>
                  <p class="tl">{{txt}}专享{{ item.prize }}元优惠券</p>
                </div>
              </div>
            </div> -->
            <van-swipe
              style="height: 150px"
              :height="24"
              vertical
              :show-indicators="false"
              :loop="true"
              :autoplay="3000"
            >
              <van-swipe-item v-for="(item, key) in msg.data" :key="key">
                <div class="ll">
                  <p class="kk">{{ item.tel }}用户获得</p>
                  <p class="tl">{{txt}}专享{{ item.prize }}元优惠券</p>
                </div>
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
        <h4>活动说明：</h4>
        <p class="txt">
          活动时间：{{ msg.date.begin }} 00:00-{{ msg.date.end }} 23：59
        </p>
        <p class="txt">
          适用对象：由开发商或代理公司判定为{{txt}}平台客户即可 享受 这个优惠。
        </p>
        <p class="txt">
          结算方式：提供已实名的支付宝账户 给与您对接的{{txt}} 咨询
          师，规定时间内会将优惠费用打至该账户
        </p>
        <p class="txt">最终解释权归{{txt}}所有</p>
      </div>
    </div>
    <van-popup v-model="show" :style="{ background: 'rgba(0,0,0,0)' }">
      <div class="formbox">
        <img src="~/assets/luck-x.png" alt @click="show = false" class="del" />
        <img
          src="~/assets/luck-tan.png"
          alt=""
          class="topimg"
          v-if="imgnum == 1"
        />
        <img
          src="~/assets/luck-tan1.png"
          alt=""
          class="topimg"
          v-if="imgnum == 2"
        />
        <img
          src="~/assets/luck-tan2.png"
          alt=""
          class="topimg"
          v-if="imgnum == 3"
        />
        <p>
          恭喜您获得 <br />“<span v-if="imgnum == 1">5000</span
          ><span v-if="imgnum == 3">2000</span
          ><span v-if="imgnum == 2">1000</span>元限时购房优惠金”
        </p>
        <button @click="ling">立即领取</button>
      </div>
    </van-popup>
    <van-popup
      v-model="tan"
      :style="{ background: 'rgba(0,0,0,0)' }"
      @click-overlay="typebtn = 0"
    >
      <tan-view
        :txt="remark"
        :typenum="typenum"
        :id="id"
        :name="name"
        @close="cli($event)"
        :typebtn="typebtn"
        :proname="''"
        :lucktype="1"
      ></tan-view>
    </van-popup>
    <van-popup v-model="huo" :style="{ background: 'rgba(0,0,0,0)' }">
      <div class="huo-msg">
        <div class="msg-con">
          <h4>活动规则</h4>
          <img @click="huo = false" src="~/assets/w-del.png" alt />
          <div>
            <p>
              活动时间：{{ msg.date.begin }} 00:00-{{ msg.date.end }} 23：59
            </p>
            <p>
              适用对象：由开发商或代理公司判定为{{txt}}平台客户即可 享受 这个优惠。
            </p>
            <p>
              结算方式：提供已实名的支付宝账户 给与您对接的{{txt}} 咨询
              师，规定时间内会将优惠费用打至该账户
            </p>
            <p>最终解释权归{{txt}}所有</p>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import Swiper from "swiper";
import tan from "@/components/tan.vue";
import "swiper/css/swiper.min.css";
import { luck } from "@/api/api";
export default {
  async asyncData(context) {
    let host = context.store.state.host
    let jkl = context.params.name;
    let token = context.store.state.cookie.token;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/prize/data", {
          params: {
            token: token,
          },
        })
        .then((resp) => {
          let data = resp.data;
          return data;
        }),
    ]);
    return {
      jkl: jkl,
      msg: res,
      host:host
    };
  },
  components: {
    "tan-view": tan,
  },
  data() {
    return {
      list: false,
      show: false,
      tan: false,
      typenum: 94,
      typebtn: 1,
      name: "领取优惠",
      remark: "抽奖页+领取优惠",
      id: "",
      bRotate: true,
      num: 1,
      huo: false,
      imgnum: 1,
      txt: ''
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    btns() {
      if (this.list) {
        this.list = false;
      } else {
        this.list = true;
      }
    },
    luck() {
      if (this.num > 0) {
        this.num = 0;
        if (!this.bRotate) return false;
        var item = Math.floor(Math.floor(Math.random() * (3 + 1) + 0)); //生成0~10的随机数
        console.log(item);
        //
        switch (item) {
          case 0:
            this.rotateFn(95, 2);
            break;
          case 1:
            this.rotateFn(105, 2);
            break;
          case 2:
            this.rotateFn(115, 2);
            break;
          case 3:
            this.rotateFn(125, 2);
            break;
          case 4:
            this.rotateFn(130, 2);
            break;
          case 5:
            this.rotateFn(100, 2);
            break;
          case 6:
            this.rotateFn(99, 2);
            break;
          case 7:
            this.rotateFn(10, 3);
            break;
          case 8:
            this.rotateFn(30, 3);
            break;
          case 9:
            this.rotateFn(40, 3);
            break;
          case 10:
            this.rotateFn(210, 1);
            break;
        }
      } else {
        this.tan = true;
      }
    },
    rotateFn(ang, txt) {
      this.imgnum = txt;
      this.bRotate = false;
      let that = this;
      $("#turntable").stopRotate();
      $("#turntable").rotate({
        angle: 0, //旋转的角度
        animateTo: ang + 1800, //从当前角度旋转多少度
        duration: 8000, //持续时间
        callback: function () {
          //回调函数
          that.show = true;
          that.bRotate = true;
        },
      });
    },
    ling() {
      this.show = false;
      this.tan = true;
    },
    cli(e) {
      this.tan = e;
      let uuid = this.$route.query.uuid;
      let token = $cookies.get("token");
      let num = this.imgnum;
      if (token) {
        luck({ token: token, uuid: uuid, type: num }).then((res) => {
          this.toast(res.data.msg || "获取成功");
          this.num = 0;
        });
      }
    },
  },
  mounted() {
    if(this.host == 0) {
      this.txt = '家园'
    }else {
      this.txt = '易得房'
    }
    // this.rotateFn(220, "免单10元");
    this.num = this.msg.remained;
    $("#foott").css("display", "none");
    var swiper08 = new Swiper(".swiper-food", {
      slidesPerView: 3.2,
      spaceBetween: 10,
      slidesOffsetAfter: 36,
      slidesOffsetBefore: 14,
    });
  },
};
</script>
<style lang="less" scoped>
.Lucky {
  header {
    width: 100%;
    height: 2.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: #111112;
      font-size: 1.125rem;
    }
    .back {
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 1rem;
    }
    .list {
      width: 1.5rem;
      height: 1.5rem;
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
  .con {
    position: relative;
    .imgtop {
      width: 100%;
    }
    .jkl {
      position: relative;
      .notice-swipe {
        height: 1.75rem;
        line-height: 1.75rem;
      }
      /deep/.van-notice-bar__content.van-ellipsis {
        height: 1.75rem;
      }
      .van-notice-bar {
        width: 16.25rem;
        border-radius: 0.875rem;
        height: 1.75rem;
        left: 50%;
        margin-left: -8.125rem;
        top: 8.125rem;
        position: absolute;
      }
    }
  }
}
.rule {
  position: absolute;
  width: 4.125rem;
  height: 1.625rem;
  text-align: center;
  border-radius: 0.8125rem 0 0 0.8125rem;
  background-color: #ff5432;
  line-height: 1.625rem;
  right: 0;
  top: 1.25rem;
  color: #fffae0;
  font-size: 0.75rem;
}
.con {
  background-color: #ff6131;
  padding-bottom: 0.875rem;
  .zhuan {
    position: relative;
    padding: 0 1.25rem;
    overflow: hidden;
    .msg {
      text-align: center;
      color: #fffae0;
      font-size: 0.8125rem;
      margin-top: 0.875rem;
      margin-bottom: 2.5rem;
    }
    .yuan {
      width: 100%;
    }
    .dian {
      width: 11.25rem;
      position: absolute;
      top: 9.25rem;
      left: 50%;
      margin-left: -5.625rem;
    }
    .ti {
      width: 12.5rem;
      height: 2.5rem;
      border-radius: 1.25rem;
      text-align: center;
      line-height: 2.5rem;
      background-color: #f44220;
      position: relative;
      left: 50%;
      margin-left: -6.25rem;
      font-size: 1rem;
      color: #fff;
      position: relative;
      margin-top: 1.0625rem;
      margin-bottom: 0.625rem;
    }
    .ti::after {
      content: "";
      display: block;
      border: 0.375rem solid transparent;
      border-bottom-color: #f44220;
      position: absolute;
      top: -0.75rem;
      width: 0;
      left: 50%;
      margin-left: -0.375rem;
    }
    .tt {
      color: #fffae0;
      font-size: 0.75rem;
      margin-bottom: 1.875rem;
    }
    .box {
      width: 100%;
      border-radius: 0.375rem;
      margin-bottom: 1.25rem;
      .box-top {
        width: 100%;
        height: 2.5rem;
        background-color: #ffd376;
        text-align: center;
        border-radius: 0.375rem 0.375rem 0 0;
        line-height: 2.5rem;
        span {
          color: #b57017;
          font-size: 1.0625rem;
          padding: 0 0.25rem;
        }
        img {
          height: 0.8125rem;
          position: relative;
          top: 0.05rem;
        }
      }
      .box-one {
        height: 7.1875rem;
        border-radius: 0 0 0.375rem 0.375rem;
        padding-top: 0.9375rem;
        background-color: #ffefd1;
        .swiper-food {
          overflow: hidden;
          .swiper-slide {
            padding: 0 0.3125rem;
            padding-top: 1rem;
            height: 5.5625rem;
            background-color: #fff4e0;
            img {
              width: 100%;
              margin-bottom: 0.25rem;
            }
            p {
              color: #b57017;
              font-size: 0.75rem;
            }
          }
        }
      }
      .box-two {
        height: 10.9375rem;
        border-radius: 0 0 0.375rem 0.375rem;
        padding-top: 0.9375rem;
        background-color: #ffefd1;
        margin-bottom: 1.75rem;
        /deep/.van-swipe-item {
          margin-bottom: 0.625rem;
        }
        .ll {
          display: flex;
          justify-content: space-between;
          p {
            font-size: 0.75rem;
          }
          .tl {
            color: #fd613e;
            margin-right: 0.875rem;
          }
          .kk {
            margin-left: 0.875rem;
          }
        }
      }
    }
    h4 {
      color: #fffdf2;
      font-size: 1.125rem;
      font-weight: bold;
      margin-bottom: 0.875rem;
    }
    .txt {
      color: #ffb7a1;
      font-size: 0.75rem;
      margin-bottom: 0.75rem;
    }
  }
}
.formbox {
  width: 18.4375rem;
  height: 24rem;
  border-radius: 0.625rem;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  h4 {
    color: #fff;
    font-size: 1.5rem;
  }
  .topimg {
    width: 100%;
  }
  .del {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1rem;
  }
  p {
    color: #000000;
    font-size: 1.125rem;
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  button {
    color: #ff3333;
    font-size: 1rem;
    text-align: center;
    width: 11.25rem;
    height: 2.25rem;
    border-radius: 1.125rem;
    background: linear-gradient(0deg, #ffc701, #fffa46);
    box-shadow: 0.03125rem 0.25rem 0px 0px rgba(255, 148, 8, 0.8);
    line-height: 2.25rem;
    margin-left: 3.5625rem;
    border: 0;
    outline: none;
  }
}
.huo-msg .msg-con {
  width: 74vw;
  border-radius: 0.75rem;
  padding: 1.5625rem;
  background-color: #fff;
  z-index: 300;
}
.huo-msg .msg-con div {
  max-height: 280px;
  overflow-x: auto;
}
.huo-msg h4 {
  color: #2f3133;
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 1.25rem;
  font-weight: bold;
}
.huo-msg p {
  color: #626466;
  font-size: 0.8125rem;
  line-height: 1.1875rem;
  margin-bottom: 0.625rem;
}
.huo-msg p span {
  font-weight: bold;
}
.huo-msg img {
  width: 1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>