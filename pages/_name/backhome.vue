<template>
  <div id="backhome">
    <header id="hh">
      <img class="back" src="~/assets/goback.png" alt @click="back" />
      <span class="txt">返乡置业</span>
      <img src="~/assets/mapcai.png" alt class="list" @click="btns" />
      <ul class="cailist" v-if="list">
        <li class="cmn" v-if="types == 0">
          <router-link :to="'/' + jkl">
            <span></span>
            <img src="~/assets/barhome.png" />
            <p>首 页</p>
          </router-link>
        </li>
        <li v-if="types == 0">
          <router-link :to="'/' + jkl + '/search'">
            <img src="~/assets/barsearch.png" />
            <p>楼盘查询</p>
          </router-link>
        </li>
        <li v-if="types == 0">
          <router-link :to="'/' + jkl + '/join'">
            <img src="~/assets/tegother.png" />
            <p>平台合作</p>
          </router-link>
        </li>
        <li v-if="types == 0">
          <router-link :to="'/' + jkl + '/weike/before/56'">
            <img src="~/assets/barke.png" />
            <p>买房百科</p>
          </router-link>
        </li>
        <li v-if="types == 0">
          <router-link :to="'/' + jkl + '/infos/46'">
            <img src="~/assets/barxun.png" />
            <p>房产资讯</p>
          </router-link>
        </li>
        <li class="cmn" @click="goyun(0)" v-if="types == 1">
          <span></span>
          <img src="~/assets/barhome.png" />
          <p>首 页</p>
        </li>
        <li @click="goyun(1)" v-if="types == 1">
          <img src="~/assets/barsearch.png" />
          <p>楼盘查询</p>
        </li>
        <li @click="goyun(2)" v-if="types == 1">
          <img src="~/assets/tegother.png" />
          <p>平台合作</p>
        </li>
        <li @click="goyun(3)" v-if="types == 1">
          <img src="~/assets/barke.png" />
          <p>买房百科</p>
        </li>
        <li @click="goyun(4)" v-if="types == 1">
          <img src="~/assets/barxun.png" />
          <p>房产资讯</p>
        </li>
      </ul>
    </header>
    <div class="topbox">
      <div class="topbox-box">
        <img src="~/assets/backhome-top.png" alt="" class="topimg" />
        <p class="left" @click="gocity">
          {{cityname}}<img src="~/assets/backhome-downs.png" alt="" />
        </p>
        <p class="right" @click="showtxt">活动规则</p>
      </div>
      <div class="white">
        <ul class="lists">
          <van-swipe
            style="height: 24px"
            :height="28"
            vertical
            :show-indicators="false"
            :loop="true"
            :autoplay="3000"
          >
            <van-swipe-item v-for="(item, key) in carousel" :key="key">
              <div class="ll">
                <img src="~/assets/backhome-la.png" alt="" />
                <span>{{ item.tel }}成功领取{{ item.name }}购房补贴</span>
              </div>
            </van-swipe-item>
          </van-swipe>

          <!-- <li >
            <img src="~/assets/backhome-la.png" alt="" />
            <span>{{item.tel}}成功领取{{item.name}}购房补贴</span>
          </li> -->
          <!-- <notice-bar :scrollable="false" background="#fff" color="#646566">
        <swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false"
        >
          <swipe-item v-for="(item, key) in carousel" :key="key">
            <div class="ll">
                <img src="~/assets/backhome-la.png" alt="" />
                <span>{{ item.tel }}成功领取{{ item.name }}购房补贴</span>
              </div>
          </swipe-item>
        </swipe>
      </notice-bar> -->
        </ul>
        <div class="num">
          — 共<span v-for="(item, key) in totalnum" :key="key">{{ item }}</span
          >位用户已领取 —
        </div>
        <p class="txt">
          累计领取购房补贴金<span>{{ total }}</span
          >万元
        </p>
      </div>
    </div>
    <ul class="nav">
      <li
        :class="type == 0 ? 'active' : ''"
        @click="goto(0)"
        v-if="activity.length != 0"
      >
        大额补贴
        <p></p>
      </li>
      <li
        :class="type == 1 ? 'active' : ''"
        @click="goto(1)"
        v-if="discount.length != 0"
      >
        好房特价
        <p></p>
      </li>
      <li :class="type == 2 ? 'active' : ''" @click="goto(2)">
        精选好盘
        <p></p>
      </li>
      <li :class="type == 3 ? 'active' : ''" @click="goto(3)">
        猜你喜欢
        <p></p>
      </li>
    </ul>
    <div class="bu" v-if="activity.length != 0" id="one">
      <img src="~/assets/backhome-butit.png" alt="" class="tit" />
      <div class="bu-box">
        <div class="box-box">
          <div class="box" v-for="item in activity" :key="item.id">
            <div class="ti" @click="go(item.id)">
              <p class="name">{{ item.name }}</p>
            </div>
            <p class="city">{{ item.city }}-{{ item.country }}</p>
            <p class="price">¥{{ item.money }}</p>
            <p
              class="btn"
              @click="
                tan(
                  '领取优惠',
                  115,
                  '返乡置业+领取补贴',
                  item.id,
                  item.name,
                  104,
                  item.money
                )
              "
            >
              立即领
            </p>
            <p class="text">已有{{ item.num }}人领取</p>
          </div>
        </div>
        <p class="button" @click="amore" v-if="anum > 6 && isok">
          更多补贴<img src="~/assets/backhome-down1.png" alt="" />
        </p>
      </div>
    </div>
    <h3 id="two" v-if="discount.length != 0">—— 好房特价 ——</h3>
    <ul class="ll" v-if="discount.length != 0">
      <li v-for="item in discount" :key="item.id">
        <div class="top" @click="go(item.id)">
          <div class="left">
            <img :src="item.img" alt="" />
          </div>
          <div class="right">
            <h4>
              {{ item.name }}
              <p>立省{{ (item.diff / 10000).toFixed(0) }}万</p>
            </h4>
            <div class="pri">
              <p class="old">
                现价<span>{{ (item.original / 10000).toFixed(1) }}</span
                >万元
              </p>
              <p class="new">
                特价<span>{{ (item.now / 10000).toFixed(1) }}</span
                >万元
              </p>
            </div>
            <p class="msg">
              {{ item.type }} | {{ item.city }}-{{ item.country }} |
              {{ item.area }}m²
            </p>
            <p class="icons">
              <span class="zhuang">{{ item.decorate }}</span>
              <span v-for="(dd, key) in item.features" :key="key">{{
                dd
              }}</span>
            </p>
          </div>
        </div>
        <div class="bom">
          <van-notice-bar
            left-icon="volume-o"
            color="#646566"
            background="#F7F7F7"
            :text="item.dynamic"
          />
          <button
            @click="
              sign(
                '抢特价房',
                114,
                '返乡置业+抢特价房',
                item.id,
                item.name,
                true
              )
            "
          >
            马上抢
          </button>
        </div>
      </li>
    </ul>
    <p class="btn1" @click="dismore" v-if="discount.length != 0">
      展开更多<img src="~/assets/backhome-down1.png" alt="" />
    </p>
    <div class="kk">
      <div class="xuan">
        <h4 id="three">
          精选好盘<img
            src="~/assets/backhome-question.png"
            alt=""
            @click="showtxt"
          />
          <p @click="gosearch">
            更多楼盘<img src="~/assets/backhome-more.png" alt="" />
          </p>
        </h4>
        <div class="swiper-strict">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in chosen" :key="item.id">
              <div class="top" @click="go(item.id)">
                <img :src="item.img" alt />
                <p class="city">{{ item.country }}</p>
                <p class="name">{{ item.name }}</p>
                <p class="zhao"></p>
              </div>
              <div class="strict-bom">
                <p
                  class="btn"
                  @click="
                    sign(
                      '领取优惠',
                      37,
                      '返乡置业+领取优惠',
                      item.id,
                      item.name
                    )
                  "
                >
                  领优惠
                </p>
                <p class="num">{{ item.count }}人已领取</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="guess">
        <h4 id="four">
          猜你喜欢
          <span @click="gosearch"
            >更多楼盘<img src="~/assets/backhome-more1.png" alt=""
          /></span>
        </h4>
        <div class="box">
          <div class="li" v-for="item in guess" :key="item.id">
            <div class="top" @click="go(item.id)">
              <img :src="item.img" alt="" />
              <p class="zhao"></p>
              <p class="city">{{ item.city }}-{{ item.country }}</p>
            </div>
            <div class="bom">
              <h5>{{ item.name }}</h5>
              <p class="price">
                <span>{{ item.price }}</span
                >元/m²
              </p>
              <p
                class="btn"
                @click="
                  sign('咨询底价', 105, '返乡置业+咨询底价', item.id, item.name)
                "
              >
                查底价
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="rule">
        <h4>活动说明：</h4>
        <p>
          平台优惠发放时间：待开发商或总代理公司补贴发放到位后尽快发放。
        </p>
        <p>核算方式：由开发商或代理公司判定为{{pingname}}平台客户即可享受这个优惠。</p>
        <p>结算方式：提供已实名的支付宝账户给与您对接的{{pingname}}咨询师，规定时间内会将优惠费用打至该账户。</p>
        <p>详细活动方案请致电{{pingname}}客服电话：4007186686</p>
        <p>注：活动最终解释权归{{pingname}}所有。</p>
      </div>
    </div>
    <van-popup v-model="huo" :style="{ background: 'rgba(0,0,0,0)' }">
      <div class="huo-msg">
        <div class="msg-con">
          <h4>活动规则</h4>
          <img @click="huo = false" src="~/assets/w-del.png" alt />
          <div>
            <p>
              平台优惠发放时间：待开发商或总代理公司补贴发放到位后尽快发放。
            </p>
            <p>
              核算方式：由开发商或代理公司判定为{{pingname}}平台客户即可享受这个优惠。
            </p>
            <p>
              结算方式：提供已实名的支付宝账户给与您对接的{{pingname}}咨询师，规定时间内会将优惠费用打至该账户。
            </p>
            <p>详细活动方案请致{{pingname}}电客服电话：4007186686</p>
            <p>注：活动最终解释权归{{pingname}}所有</p>
          </div>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="show" :style="{ background: 'rgba(0,0,0,0)' }">
      <hong
        @close="close"
        :id="id"
        :txt="remark"
        :name="name"
        :typebtn="typebtn"
        :typenum="typenum"
        :proname="proname"
        :num="num"
        :types="types"
      ></hong>
    </van-popup>
    <van-popup v-model="show1" :style="{ background: 'rgba(0,0,0,0)' }">
      <sign
        @close="close"
        :txt="remark"
        :typenum="typenum"
        :id="id"
        :name="name"
        :typebtn="typebtn"
        :proname="proname"
        :checked="checked"
        :room="room"
        @check="checkroom"
        :types="types"
      ></sign>
    </van-popup>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import hong from "@/components/hong.vue";
import sign from "@/components/sign.vue";
import { activity, discount, list } from "@/api/api";
export default {
  components: {
    hong,
    sign,
  },
  async asyncData(context) {
    let host = context.store.state.hostname;
    let city = context.store.state.city;
    let jkl = context.params.name;
    let hostnum = context.store.state.host
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/mobile/home_purchase", {
          params: {
            city: city,
            host: host,
          },
        })
        .then((resp) => {
          let data = resp.data.data;
          return data;
        }),
    ]);
    return {
      jkl: jkl,
      guess: res.guesses,
      activity: res.activity,
      chosen: res.chosen,
      discount: res.discount,
      total: res.first_banner.money,
      carousel: res.first_banner.carousel,
      totalnum: String(res.first_banner.num),
      anum: res.activity_total_num,
      cityname: res.cityname || '杭州',
      host: host,
      hostnum: hostnum
    };
  },
  data() {
    return {
      cityname: '杭州',
      pingname: '家园',
      guess: [],
      showPicker: false,
      list: false,
      type: 0,
      show: false,
      show1: false,
      typenum: 0,
      typebtn: 1,
      proname: "",
      name: "",
      id: 0,
      remark: "",
      columns: [],
      checked: false,
      num: 0,
      dpage: 2,
      room: "",
      apage: 2,
      huo: false,
      isok: true,
      types: 0,
    };
  },
  head() {
    return {
      title: "返乡置业活动",
      meta: [
        {
          name: "description",
          content: "返乡置业活动",
        },
        {
          name: "Keywords",
          content: "返乡置业活动",
        },
      ],
    };
  },
  methods: {
    goyun(n) {
      switch (n) {
        case 0:
          window.location.href = `http://m.jy8006.com/${this.jkl}`;
          break;
        case 1:
          window.location.href = `http://m.jy8006.com/${this.jkl}/search`;
          break;
        case 2:
          window.location.href = `http://m.jy8006.com/${this.jkl}/participate`;
          break;
        case 3:
          window.location.href = `http://m.jy8006.com/${this.jkl}/encyclopedia/before/56`;
          break;
        case 4:
          window.location.href = `http://m.jy8006.com/${this.jkl}/realinformations/46`;
          break;
      }
    },
    gocity() {
      if (this.types == 0) {
        this.$router.push("/" + this.jkl + "/address");
      } else {
        window.location.href = `http://m.jy8006.com/${this.jkl}/address`;
      }
    },
    goto(n) {
      this.type = n;
      switch (n) {
        case 0:
          window.scrollTo(0, $("#one").offset().top - 100);
          break;
        case 1:
          window.scrollTo(0, $("#two").offset().top - 100);
          break;
        case 2:
          window.scrollTo(0, $("#three").offset().top - 100);
          break;
        case 3:
          window.scrollTo(0, $("#four").offset().top - 100);
          break;
      }
    },
    showtxt() {
      this.huo = true;
    },
    go(id) {
      if (this.types == 0) {
        this.$router.push("/" + this.jkl + "/content/" + id);
      } else {
        window.location.href = `http://m.jy8006.com/${this.jkl}/content/${id}`;
      }
    },
    amore() {
      let that = this;
      let city = this.$store.state.city;
      let dd = { city: city, type: 1, page: this.apage };
      activity(dd).then((res) => {
        console.log(res);
        that.activity = that.activity.concat(res.data.data);
        if (res.data.data.length < 6) {
          that.isok = false;
        }
        that.apage = that.apage + 1;
      });
    },
    checkroom() {
      console.log(88);
      let id = this.id;
      list({ id: id }).then((res) => {
        console.log(res);
        this.columns = res.data.numbers;
        this.showPicker = true;
      });
    },
    onConfirm(e) {
      console.log(e);
      this.room = e;
      this.showPicker = false;
    },
    sign(name, position, txt, id, proname, type) {
      this.name = name;
      this.typebtn = 1;
      this.typenum = position;
      this.show1 = true;
      this.remark = txt;
      this.id = String(id);
      this.proname = proname;
      this.checked = type;
    },
    tan(name, position, txt, id, proname, type, num) {
      this.name = name;
      this.typebtn = 1;
      this.typenum = position;
      this.show = true;
      this.remark = txt;
      this.id = String(id);
      this.proname = proname;
      this.checked = type;
      this.num = num;
      console.log(num);
    },
    back() {
      this.$router.go(-1);
    },
    btns() {
      this.list = !this.list;
    },
    dismore() {
      let city = this.$store.state.city;
      let dd = { city: city, type: 1, page: this.dpage };
      let that = this;
      discount(dd).then((res) => {
        console.log(res);
        that.discount = that.discount.concat(res.data.data);
        that.dpage = that.dpage + 1;
      });
    },
    setnav() {
      let that = this;
      var scrollTop = window.scrollY;
      if (scrollTop >= 288) {
        $(".nav").css({
          position: "fixed",
          top: "2.75rem",
          width: "100%",
          marginTop: "0",
          zIndex: 10,
        });
        $(".bu").css({ marginTop: "5.9375rem" });
      }
      // if(this.activity.length != 0) {
      //   if (scrollTop >= 288 && scrollTop <= ($('#one').offset().top-100)) {
      //     this.type = 0;
      //   }
      // }
      // if (this.discount.length != 0 && this.activity.length != 0) {
      //   if (scrollTop >= ($('#one').offset().top-100) && scrollTop <= ($('#two').offset().top-100)) {
      //     this.type = 1;
      //   }
      // }
      // if(this.discount.length != 0) {
      //   if (scrollTop >= ($('#two').offset().top-100) && scrollTop <= ($('#three').offset().top-100)) {
      //     this.type = 2;
      //   }
      // }
      // if (scrollTop > ($('#three').offset().top-100)) {
      //   this.type = 3;
      // }
      if (scrollTop < 288) {
        $(".nav").css({
          position: "relative",
          top: "0",
          width: "100%",
          marginTop: "2.125rem",
          zIndex: 10,
        });
        $(".bu").css({ marginTop: "0.75rem" });
      }
    },
    close() {
      this.show = false;
      this.show1 = false;
    },
    gosearch() {
      let jkl = this.jkl;
      if(this.types == 0) {
        this.$router.push("/" + jkl + "/search");
      } else {
        window.location.href=`http://m.jy8006.com/${jkl}/search`
      }
    },
  },
  mounted() {
    if (this.$route.query.type) {
      this.types = this.$route.query.type;
      this.pingname = '允家'
    }else {
      if(this.host == 0) {
        this.pingname = '家园'
      }else {
        this.pingname = '易得房'
      }
    }
    $('#foott').css('display', 'none')
    var swiper08 = new Swiper(".swiper-strict", {
      slidesPerView: 2.5,
      spaceBetween: 8,
      slidesOffsetAfter: 14,
      slidesOffsetBefore: 14,
    });
    window.addEventListener("scroll", this.setnav);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.setnav);
  },
  watch: {
    show1(val) {
      if (!val) {
        this.room = "";
      }
    }
  },
};
</script>
<style lang="less" scoped>
#backhome {
  padding-bottom: 0.9375rem;
  background-color: #e6222f;
}
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2.75rem;
  z-index: 10;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 1000;
  border-bottom: 0.03125rem solid #f7f7f7;
  .back {
    width: 1.5rem;
    margin-left: 1rem;
  }
  .logo {
    width: 2.625rem;
  }
  .txt {
    color: #111112;
    font-size: 1.125rem;
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
    width: 1.5rem;
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
      display: flex;
      align-items: center;
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
.topbox {
  position: relative;
}
.topbox-box {
  position: relative;
  .right {
    width: 3.75rem;
    height: 1.375rem;
    border-radius: 0.6875rem;
    text-align: center;
    line-height: 1.375rem;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: 0.75rem;
    position: absolute;
    right: 0.9375rem;
    top: 3.625rem;
  }
  .left {
    width: 3.75rem;
    height: 1.375rem;
    border-radius: 0.6875rem;
    text-align: center;
    line-height: 1.375rem;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: 0.75rem;
    position: absolute;
    left: 0.9375rem;
    top: 3.625rem;
    img {
      width: 0.5rem;
      height: 0.5rem;
    }
  }
}
.topimg {
  margin-top: 2.75rem;
  width: 100%;
}
.white {
  width: 92%;
  height: 5rem;
  background-color: #fffbe0;
  border-radius: 0.625rem;
  margin-left: 4%;
  position: absolute;
  bottom: -1.375rem;
  .num {
    text-align: center;
    color: #502e25;
    font-size: 1rem;
    padding-top: 1.4rem;
    span {
      background-color: #ff4b28;
      padding: 0.1875rem 0.1875rem;
      border-radius: 0.09375rem;
      font-size: 0.8125rem;
      font-weight: bold;
      color: #fff;
      margin-right: 0.15625rem;
    }
    span:nth-of-type(1) {
      margin-left: 0.3125rem;
    }
    span:nth-of-type(4) {
      margin-right: 0.3125rem;
    }
  }
  .txt {
    margin-top: 0.5rem;
    color: #7a5a51;
    font-size: 0.75rem;
    text-align: center;
    span {
      font-weight: bold;
    }
  }
  .lists {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -64px;
    height: 1.5rem;
    overflow: hidden;
    /deep/.van-swipe-item {
      // margin-bottom: 0.375rem;
      display: flex;
    }
    /deep/.van-notice-bar__wrap {
      width: 100%;
    }
    .van-swipe {
      width: 100%;
    }
    .van-notice-bar {
      width: 100%;
    }

    .ll {
      background-color: #ffc75c;
      height: 1.5rem;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      padding: 0 0.875rem;
      // margin-bottom: 0.375rem;
      img {
        width: 1rem;
        height: 1rem;
        margin-right: 0.125rem;
      }
      span {
        font-size: 0.75rem;
        white-space: nowrap;
        color: #fff;
      }
    }
  }
}
.nav {
  height: 3.125rem;
  display: flex;
  justify-content: space-around;
  background-color: #ff952e;
  margin-top: 2.125rem;
  line-height: 3.125rem;
  li {
    color: #fff;
    font-size: 0.9375rem;
  }
  .active {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    position: relative;
    p {
      width: 1.5625rem;
      height: 0.12rem;
      border-radius: 0.09375rem;
      background-color: #fff;
      position: absolute;
      bottom: 0.375rem;
      left: 50%;
      margin-left: -0.78125rem;
    }
  }
}
.bu {
  width: 92%;
  margin-left: 4%;
  margin-top: 0.75rem;
  background-color: #fff;
  padding-bottom: 0.625rem;
  overflow: hidden;
  border-radius: 0.625rem;
  .tit {
    width: 100%;
  }
  .bu-box {
    .box-box {
      overflow: hidden;
      padding: 0 0.625rem;
      padding-top: 0.625rem;
      .box {
        position: relative;
        width: 6.4rem;
        height: 7rem;
        background: url("~assets/backhome-bao.png");
        background-size: contain;
        float: left;
        margin-right: 0.5rem;
        margin-bottom: 0.625rem;
        .ti {
          display: flex;
          justify-content: center;
        }
        .name {
          color: #b11a1a;
          font-size: 0.6875rem;
          font-weight: bold;
          text-align: center;
          max-width: 4.6875rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-top: 0.25rem;
        }
        .city {
          color: #b11a1a;
          font-size: 0.625rem;
          text-align: center;
          margin-bottom: 0.6rem;
        }
        .price {
          color: #fff;
          font-size: 1.0625rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 0.2rem;
        }
        .btn {
          background: linear-gradient(130deg, #fce4c5, #f0b27f);
          border-radius: 0.6875rem;
          width: 4.625rem;
          height: 1.375rem;
          text-align: center;
          line-height: 1.375rem;
          color: #5d0808;
          font-size: 0.75rem;
          position: relative;
          left: 50%;
          margin-left: -2.3125rem;
          margin-bottom: 0.25rem;
        }
        .text {
          color: #ffb1b5;
          font-size: 0.625rem;
          text-align: center;
        }
      }
      .box:nth-of-type(3n) {
        margin-right: 0;
      }
    }
    .button {
      width: 8.125rem;
      height: 2.125rem;
      border-radius: 1.0625rem;
      background: linear-gradient(130deg, #fce4c5, #f0b27f);
      text-align: center;
      line-height: 2.125rem;
      color: #5d0808;
      font-size: 0.875rem;
      position: relative;
      left: 50%;
      margin-left: -4.0625rem;
      img {
        width: 1rem;
        margin-bottom: -0.125rem;
        margin-left: 0.25rem;
      }
    }
  }
}
h3 {
  color: #fff;
  font-size: 1.125rem;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 0.875rem;
}
.ll {
  padding: 0 0.9375rem;
  li {
    background-color: #fff;
    padding: 0.9375rem 0.625rem;
    border-radius: 0.625rem;
    margin-bottom: 0.9375rem;
    .top {
      display: flex;
      margin-bottom: 0.75rem;
      .left {
        margin-right: 0.875rem;
        img {
          width: 6.875rem;
          height: 5rem;
          border-radius: 0.375rem;
        }
      }
      .right {
        flex: 1;
        h4 {
          color: #323233;
          font-size: 0.9375rem;
          position: relative;
          top: -0.2rem;
          p {
            background: url(~assets/te-bg.png);
            background-size: 100%;
            width: 3.375rem;
            height: 1.07rem;
            color: #f83d44;
            font-size: 0.625rem;
            font-weight: 400;
            float: right;
            text-align: center;
          }
        }
        .pri {
          display: flex;
          margin-top: 0.125rem;
          p {
            font-size: 0.625rem;
            span {
              font-size: 0.875rem;
              font-weight: bold;
            }
          }
          .old {
            color: #7d7e80;
            text-decoration: line-through;
            margin-right: 0.25rem;
          }
          .new {
            color: #ff4040;
          }
        }
        .msg {
          color: #7d7e80;
          font-size: 0.75rem;
          margin-bottom: 0.3125rem;
          margin-top: 0.3125rem;
        }
        .icons {
          .zhuang {
            background-color: #ebf8ff;
            color: #3eacf0;
          }
          span {
            color: #7d7e80;
            font-size: 0.75rem;
            padding: 0.1875rem 0.3125rem;
            border-radius: 0.1875rem;
            background-color: #f5f5f5;
            margin-right: 0.375rem;
          }
        }
      }
    }
    .bom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .van-notice-bar {
        padding: 0 0.625rem 0 0.25rem;
        width: 14.625rem;
        height: 1.125rem;
        font-size: 0.625rem;
      }
      button {
        color: #fff;
        font-size: 0.75rem;
        width: 3.75rem;
        height: 1.5rem;
        border-radius: 0.75rem;
        text-align: center;
        line-height: 1.5rem;
        border: 0;
        background-color: #ff5751;
      }
    }
  }
}
.btn1 {
  width: 92%;
  margin-left: 4%;
  height: 2.25rem;
  border-radius: 0.625rem;
  background: linear-gradient(130deg, #fce4c5, #f0b27f);
  text-align: center;
  line-height: 2.25rem;
  color: #5d0808;
  font-size: 0.875rem;
  img {
    width: 1rem;
    margin-bottom: -0.125rem;
    margin-left: 0.25rem;
  }
}
.kk {
  padding: 0 4%;
}
.xuan {
  margin-top: 1.5rem;
  border-radius: 0.625rem;
  background-color: #fff;
  padding-top: 1.25rem;
  margin-bottom: 1.5rem;
  h4 {
    color: #313233;
    font-size: 1.0625rem;
    padding-left: 0.625rem;
    padding-right: 0.375rem;
    img {
      width: 1rem;
      margin-bottom: -0.125rem;
      margin-left: 0.25rem;
    }
    p {
      float: right;
      color: #969799;
      font-size: 0.8125rem;
      font-weight: 400;
      img {
        width: 0.75rem;
        margin-left: 0.125rem;
      }
    }
  }
  .swiper-strict {
    padding: 1.25rem 0;
    overflow: hidden;
    .swiper-slide {
      box-shadow: 0px 0px 0.84375rem 0.09375rem rgba(0, 0, 0, 0.08);
      border-radius: 0.375rem;
      overflow: hidden;
      height: 8.75rem;
      .top {
        position: relative;
        img {
          width: 100%;
          height: 4.6875rem;
        }
        .city {
          width: 2.5rem;
          height: 1rem;
          text-align: center;
          line-height: 1rem;
          background-color: #f83d44;
          color: #fff;
          border-radius: 0.375rem 0px 0.375rem 0px;
          position: absolute;
          left: 0;
          top: 0;
          font-size: 0.625rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .name {
          color: #ffffff;
          font-size: 0.875rem;
          position: absolute;
          left: 0.625rem;
          bottom: 0.5rem;
          z-index: 1;
        }
        .zhao {
          width: 100%;
          height: 2.5rem;
          position: absolute;
          bottom: 0;
          left: 0;
          background: linear-gradient(0deg, #000000, rgba(0, 0, 0, 0));
        }
      }
      .strict-bom {
        .btn {
          width: 4.625rem;
          height: 1.5rem;
          border-radius: 0.75rem;
          text-align: center;
          line-height: 1.5rem;
          color: #fff;
          position: relative;
          left: 50%;
          margin-left: -2.46875rem;
          margin-bottom: 0.3rem;
          margin-top: 0.7rem;
          background-color: #f83d44;
          font-size: 0.75rem;
        }
        .num {
          color: #f83d44;
          font-size: 0.75rem;
          text-align: center;
        }
      }
    }
  }
}
.guess {
  margin-bottom: 0.625rem;
  h4 {
    color: #ffffff;
    font-size: 1.0625rem;
    margin-bottom: 1.125rem;
    span {
      float: right;
      font-size: 0.8125rem;
      font-weight: 400;
      img {
        width: 0.75rem;
        margin-left: 0.125rem;
      }
    }
  }
  .box {
    overflow: hidden;
    .li {
      width: 6.8125rem;
      height: 8.75rem;
      border-radius: 0.625rem;
      background-color: #fff;
      overflow: hidden;
      margin-right: 0.5625rem;
      float: left;
      margin-bottom: 0.9375rem;
      .top {
        position: relative;
        img {
          width: 100%;
          height: 3.75rem;
        }
        .zhao {
          width: 100%;
          height: 1.5625rem;
          position: absolute;
          bottom: 0;
          left: 0;
          background: linear-gradient(0deg, #000000, rgba(0, 0, 0, 0));
        }
        .city {
          color: #fff;
          font-size: 0.625rem;
          position: absolute;
          left: 0.625rem;
          bottom: 0.25rem;
        }
      }
      .bom {
        padding-left: 0.625rem;
        h5 {
          color: #323233;
          font-size: 0.8125rem;
          margin-top: 0.375rem;
          margin-bottom: 0.2rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .price {
          color: #f83d44;
          font-size: 0.625rem;
          span {
            font-size: 0.9375rem;
            font-weight: bold;
          }
        }
        .btn {
          width: 5.5625rem;
          height: 1.375rem;
          border-radius: 0.6875rem;
          text-align: center;
          line-height: 1.375rem;
          background-color: #f83d44;
          color: #fff;
          font-size: 0.75rem;
          margin-top: 0.3rem;
        }
      }
    }
    .li:nth-of-type(3n) {
      margin-right: 0;
    }
  }
}
.rule {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  padding: 0.9375rem 1.25rem;
  padding-bottom: 0.375rem;
  h4 {
    color: #ffa6ac;
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
  }
  p {
    color: #ffa6ac;
    font-size: 0.75rem;
    line-height: 1.25rem;
    margin-bottom: 0.75rem;
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