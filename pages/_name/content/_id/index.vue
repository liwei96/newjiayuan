<template>
  <div id="content">
    <top-view :jkl="jkl"></top-view>
    <div class="topimg">
      <div class="swiper-topimg">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, key) in imgs" :key="key">
            <img :src="item.small" alt />
          </div>
        </div>
      </div>
      <!-- <img class="img-top" :src="basic.img" alt /> -->
      <!-- <span class="imgnum">共{{basic.img_num}}张</span> -->
      <div class="zhe" @click="goimg"></div>
      <p class="imgnum">共{{ imgnum }}张</p>
      <div class="taps">
        <p
          v-for="(item, key) in imgmsg"
          :key="key"
          :class="imgmsgnum == key ? 'active' : ''"
          @click="setimgmsgnum(key)"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <div class="intro">
      <div class="intro-top">
        <div class="top-left">
          <h2>{{ abstract.name }}</h2>
          <p>
            <span class="active">{{ abstract.state }}</span>
            <span>{{ abstract.type }}</span>
            <span v-for="(item, key) in abstract.features" :key="key">{{
              item
            }}</span>
          </p>
        </div>
        <div class="top-right">
          <div class="pk box" @click="pk">
            <div class="img">
              <img src="~/assets/content-pk.png" alt />
              <span>hot</span>
            </div>
            <p>对比</p>
          </div>
          <div class="fork box" @click="shou">
            <div class="img">
              <img :src="heart" alt />
            </div>
            <p>收藏</p>
          </div>
        </div>
      </div>
      <div class="intro-con">
        <p>
          均价:
          <span class="price">
            {{ abstract.single_price }}
            <i>元/m²</i>
          </span>
        </p>
        <p>
          总价:
          <span class="total">
            {{ abstract.total_price }}
            <i>万起</i>
          </span>
        </p>
        <p>
          开盘:
          <span>{{ abstract.opentime }}</span>
        </p>
        <p class="address">
          地址:
          <span>{{ abstract.address }}</span>
          <img src="~/assets/map.png" alt />
        </p>
      </div>
      <nuxt-link :to="'/' + jkl + '/detail/' + id">
        <p class="detail">详细楼盘信息</p>
      </nuxt-link>
      <div class="btn">
        <button @click="pop('变价通知我', 91, '详情页+变价通知我')">
          <img src="~/assets/zhexian.png" />变价通知我
        </button>
        <button @click="pop('开盘提醒我', 92, '详情页+开盘提醒我')">
          <img src="~/assets/msg.png" />开盘提醒我
        </button>
      </div>
    </div>
    <div class="tel">
      <a :href="'tel:' + phone">
        <img src="~/assets/tel.jpg" alt />
        <p>{{ phone }}</p>
      </a>
    </div>
    <div class="line"></div>
    <div class="te" v-if="specials.data">
      <h3>
        今日特价房
        <span>{{ hour }}小时前更新</span>
      </h3>
      <span class="teprice">{{ specials.max_diff }}</span>
      <img src="~/assets/tit.png" alt class="te-tit" />
      <div class="tabs">
        <table border>
          <thead>
            <tr>
              <th>房号</th>
              <th>面积</th>
              <th>原单价</th>
              <th>现单价</th>
              <th>现总价</th>
              <th>立减</th>
            </tr>
          </thead>
          <tr v-for="(item, key) in specials.data" :key="key">
            <td>
              {{ item.number.split("-")[item.number.split("-").length - 1] }}
            </td>
            <td>{{ parseInt(item.area) }}</td>
            <td>{{ parseInt(item.original_single) }}</td>
            <td>{{ parseInt(item.single) }}</td>
            <td>{{ parseInt(item.total) }}</td>
            <td>{{ parseInt(item.diff) }}</td>
          </tr>
        </table>
      </div>
      <div class="zhe" @click="showmores" v-if="morebtns">
        <img src="~/assets/huo-down.png" alt />
      </div>
      <div class="bom">
        <notice-bar
          color="#807D7D"
          background="rgba(0,0,0,0)"
          left-icon="volume-o"
          :text="specials.dynamic"
        />
        <button @click="pop('咨询特价房', 93, '详情页+咨询特价房')">
          咨询特价房
        </button>
      </div>
    </div>
    <div class="line" v-if="specials.data"></div>
    <div class="nav-icon">
      <div class="swiper-nav">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, key) in navs"
            :key="key"
            @click="setnavnum(key)"
          >
            <p :class="navnum == key ? 'active' : ''">
              {{ item }}
              <span></span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="hui">
      <h3>
        优惠信息
        <span @click="huo = true">
          <img src="~/assets/ques.png" alt /> 活动规则
        </span>
      </h3>
      <div class="hui-con">
        <div class="hui-left">
          <h6>
            最高
            <span>5000</span>元购房优惠
            <i>{{ time }}（截止）</i>
          </h6>
          <p>售楼处专供家园平台客户</p>
        </div>
        <div class="hui-right">
          <button @click="pop('领取优惠', 94, '详情页+领取优惠')">
            领取优惠
          </button>
          <p>
            <span>{{ count.sign_count + 100 }}人</span>已领取
          </p>
        </div>
      </div>
      <div class="hui-con two">
        <div class="hui-left">
          <h6>
            免费看房专车券
            <i>（剩余{{ count.input_count + 102 }}张）</i>
          </h6>
          <p>免费专车1对1服务限时劵</p>
        </div>
        <div class="hui-right">
          <button @click="pop('免费领取', 95, '详情页+免费领取')">
            免费领取
          </button>
          <p>
            <span>{{ count.travel_count + 112 }}人</span>已领取
          </p>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="lei">
      <h3>
        雷达图分析
        <nuxt-link :to="'/' + jkl + '/rule'">
          <span @click="huomsg = true">
            <img src="~/assets/ques.png" alt /> 评分规则
          </span>
        </nuxt-link>
      </h3>
      <p>家园通过多个角度对比（10分制）进行楼盘专业评分</p>
      <div class="con">
        <div id="leiecharts"></div>
        <div class="img" @click="leipk">
          <img src="~/assets/content-lei.png" alt />
          <p>加入PK</p>
          <span>hot</span>
        </div>
        <p class="pingfen">
          综合评分：
          <span>{{ scores.avg }}</span>
        </p>
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              休闲
              <span>{{ scores.score.leisure }}</span>
            </td>
            <td>
              户型
              <span>{{ scores.score.house_types }}</span>
            </td>
          </tr>
          <tr>
            <td>
              层高
              <span>{{ scores.score.height }}</span>
            </td>
            <td>
              商业
              <span>{{ scores.score.commercial }}</span>
            </td>
          </tr>
          <tr>
            <td>
              交通
              <span>{{ scores.score.traffic }}</span>
            </td>
            <td>
              医疗
              <span>{{ scores.score.medical }}</span>
            </td>
          </tr>
          <tr>
            <td>
              教育
              <span>{{ scores.score.education }}</span>
            </td>
            <td>
              品质
              <span>{{ scores.score.quality }}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="pop('获取详细分析报告', 96, '详情页+获取详细分析报告')">
        获取详细分析报告
      </button>
    </div>
    <div class="line"></div>
    <div class="hus">
      <h5>
        主力户型
        <nuxt-link :to="'/' + jkl + '/hus/' + id">
          <span>
            全部户型
            <img src="~/assets/home-more.png" alt />
          </span>
        </nuxt-link>
      </h5>
      <div class="swiper-hu">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, key) in house_types"
            :key="key"
          >
            <nuxt-link :to="'/' + jkl + '/hu/' + item.id">
              <div class="hu-top">
                <img :src="item.small" alt />
                <p>
                  <img src="~/assets/home-heart.png" alt />{{
                    item.like_num
                  }}关注
                </p>
              </div>
              <p class="name">
                {{ item.title }}
                <span>{{ item.state }}</span>
              </p>
              <p class="type">
                <span class="t1">建面 {{ item.area }}m²</span>
                <span>类型 {{ item.type }}</span>
              </p>
              <p class="huprice">
                约
                <span>{{ item.price }}</span
                >万起
              </p>
            </nuxt-link>
            <button @click="pop('咨询户型底价', 97, '详情页+咨询户型底价')">
              <img src="~/assets/zixun.png" alt />咨询户型底价
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="dynamic">
      <h3>
        实时动态
        <nuxt-link :to="'/' + jkl + '/promsg/' + id">
          <span>
            全部动态
            <img src="~/assets/j-more.png" alt />
          </span>
        </nuxt-link>
      </h3>
      <ul>
        <li v-for="(item, key) in dynamics" :key="key">
          <p>{{ item.introduce }}</p>
          <span>{{ item.time }}</span>
          <div class="dynamicimgs" v-if="item.img">
            <img :src="item.img" alt />
          </div>
        </li>
      </ul>
      <button @click="pop('订阅实时动态', 98, '详情页+订阅实时动态')">
        订阅实时动态
      </button>
    </div>
    <div class="line"></div>
    <div class="zixun">
      <h3>家园咨询师</h3>
      <p class="xun-icon">
        <span> <img src="~/assets/save.png" alt />专业服务 </span>
        <span> <img src="~/assets/icon-path.png" alt />区域解读 </span>
        <span> <img src="~/assets/icon-pin.png" alt />户型分析 </span>
      </p>
      <div class="peo" v-for="(item, key) in staffs" :key="key">
        <img class="peoimg" :src="item.head_img" alt />
        <div class="peo-msg">
          <h6>
            {{ item.name }}
            <span>满意度5分</span>
          </h6>
          <p>了解房源特色，专业挑好房</p>
        </div>
        <img
          class="peoicon"
          src="~/assets/message.png"
          alt
          @click="pop('咨询服务', 100, '详情页+咨询服务')"
        />
        <a :href="'tel:' + phone">
          <img class="peoicon" src="~/assets/tel.png" alt />
        </a>
      </div>
    </div>
    <div class="line"></div>
    <div class="ziliao">
      <h3>楼盘分析资料</h3>
      <div class="tab">
        <p :class="tabnum == 1 ? 'active' : ''" @click="tabnum = 1">
          投资分析
          <span></span>
        </p>
        <p @click="tabnum = 2" :class="tabnum == 2 ? 'active' : ''">
          宜居分析
          <span></span>
        </p>
      </div>
      <div class="liao-msg">
        <template v-for="(item, key) in analysis">
          <p :key="key" v-if="item.type == tabnum">{{ item.content }}</p>
        </template>
      </div>
      <button @click="pop('领取分析资料', 99, '详情页+领取分析资料')">
        <img src="~/assets/ziliao.png" />领取分析资料
      </button>
    </div>
    <div class="line"></div>
    <div class="newprice">
      <h3>
        最新成交价
        <p>
          已有
          <span>125</span>人查询
        </p>
      </h3>
      <div id="chart" style="width: 100%; height: 250px"></div>
      <p>2020年</p>
      <div class="tab">
        <table>
          <tbody>
            <tr>
              <th>日期</th>
              <th>成交套数</th>
              <th>成交金额</th>
            </tr>
            <tr v-for="(item, key) in deal_prices" :key="key">
              <td>{{ item.time }}</td>
              <td>{{ item.num }}套</td>
              <td>***万</td>
            </tr>
          </tbody>
        </table>
        <div class="zhe" @click="showmore" v-if="morebtn">
          <img src="~/assets/huo-down.png" alt />
        </div>
      </div>
      <button @click="pop('获取最新成交价', 101, '详情页+获取最新成交价')">
        <img src="~/assets/geticon.png" />获取最新成交价
      </button>
    </div>
    <div class="line"></div>
    <div class="zhou">
      <h4>
        周边配套
        <nuxt-link :to="'/' + jkl + '/rim/' + id">
          <span>
            详细配套
            <img src="~/assets/go.png" alt />
          </span>
        </nuxt-link>
      </h4>
      <div id="map"></div>
      <div id="panel" style="display: none"></div>
      <div class="swiper-map">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div
              :class="mapnum === 0 ? 'tegood active' : 'tegood'"
              @click="setmap(0, '地铁')"
            >
              地铁
              <i></i>
            </div>
          </div>
          <div class="swiper-slide">
            <div
              :class="mapnum === 1 ? 'tegood active' : 'tegood'"
              @click="setmap(1, '公交')"
            >
              公交
              <i></i>
            </div>
          </div>
          <div class="swiper-slide">
            <div
              :class="mapnum === 2 ? 'tegood active' : 'tegood'"
              @click="setmap(2, '教育')"
            >
              教育
              <i></i>
            </div>
          </div>
          <div class="swiper-slide">
            <div
              :class="mapnum === 3 ? 'tegood active' : 'tegood'"
              @click="setmap(3, '医院')"
            >
              医院
              <i></i>
            </div>
          </div>
          <div class="swiper-slide">
            <div
              :class="mapnum === 4 ? 'tegood active' : 'tegood'"
              @click="setmap(4, '购物')"
            >
              购物
              <i></i>
            </div>
          </div>
          <div class="swiper-slide">
            <div
              :class="mapnum === 5 ? 'tegood active' : 'tegood'"
              @click="setmap(5, '美食')"
            >
              美食
              <i></i>
            </div>
          </div>
          <div class="swiper-slide">
            <div
              :class="mapnum === 6 ? 'tegood active' : 'tegood'"
              @click="setmap(6, '娱乐')"
            >
              娱乐
              <i></i>
            </div>
          </div>
        </div>
      </div>
      <div class="map-msg">
        <ul class="map-msg-con">
          <li>
            <h6>武林广场</h6>
            <p>
              地铁1号线
              <span> <img src="~/assets/dian.png" />800m </span>
            </p>
          </li>
          <li>
            <h6>武林广场</h6>
            <p>
              地铁1号线
              <span> <img src="~/assets/dian.png" />800m </span>
            </p>
          </li>
        </ul>
        <p class="map-tishi" v-if="isnull">
          附近没有{{ mapname }}，您可以看看其他信息
        </p>
      </div>
      <button
        class="btnicon"
        @click="pop('获取详细周边配套', 102, '详情页+获取详细周边配套')"
      >
        获取详细周边配套
      </button>
    </div>
    <div class="line"></div>
    <div class="dian">
      <h3>
        楼盘点评
        <nuxt-link :to="'/' + jkl + '/comments/' + id">
          <span>
            更多点评
            <img src="~/assets/go.png" alt />
          </span>
        </nuxt-link>
      </h3>
      <ul>
        <li v-for="(item, key) in comments" :key="key">
          <div class="dian-top">
            <img src="~/assets/jiapeo.png" alt class="peo" />
            <div class="top-con">
              <h6>
                {{ item.mobile }}
                <span v-if="item.mine" @click="del(item.id, key)">删除</span>
              </h6>
              <p>{{ item.time }}</p>
            </div>
            <div
              :class="item.my_like == 1 ? 'top-right active' : 'top-right'"
              @click="like(item.id)"
            >
              <img :src="item.my_like == 1 ? img1 : img" alt />
              赞({{ item.like_num }})
            </div>
          </div>
          <div class="dian-bom">{{ item.content }}</div>
        </li>
      </ul>
      <nuxt-link :to="'/' + jkl + '/comment/' + id">
        <button>我要点评</button>
      </nuxt-link>
    </div>
    <div class="line"></div>
    <div class="wen">
      <h3>
        楼盘问答
        <nuxt-link :to="'/' + jkl + '/questions/' + id">
          <span>
            全部问答
            <img src="~/assets/go.png" alt />
          </span>
        </nuxt-link>
      </h3>
      <ul>
        <template v-for="(item, key) in questions">
          <nuxt-link :to="'/' + jkl + '/answer/' + item.id" :key="key">
            <li>
              <p class="con">
                <span>问</span>
                {{ item.question }}
              </p>
              <p class="num">共1个专业回答</p>
            </li>
          </nuxt-link>
        </template>
      </ul>
      <nuxt-link :to="'/' + jkl + '/quiz/' + id">
        <button>我要提问</button>
      </nuxt-link>
    </div>
    <div class="line"></div>
    <div class="other">
      <h3>为你推荐</h3>
      <div class="pro" v-for="(item, key) in recommends" :key="key">
        <img :src="item.img" alt />
        <div class="pro-msg">
          <h5>
            {{ item.name }}
            <span>{{ item.status }}</span>
          </h5>
          <p class="pro-price">
            <span>{{ item.single_price }}</span>
            <i>元/m²</i>起
          </p>
          <p class="attr">
            {{ item.type }} | {{ item.city }}-{{ item.country }} |
            {{ item.area }}m²
          </p>
          <p class="pro-icon">
            <span class="pro-icon-zhuang">{{ item.decorate }}</span>
            <span
              class="pro-icon-type"
              v-for="(val, k) in item.features"
              :key="k"
              >{{ val }}</span
            >
          </p>
        </div>
      </div>
    </div>
    <nav-view :phone="phone" @fot="chang($event)"></nav-view>
    <div class="imgbox" @click="srctype = false" v-show="srctype">
      <img :src="src" alt />
    </div>
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
      ></tan-view>
    </van-popup>
    <van-popup v-model="huo" :style="{ background: 'rgba(0,0,0,0)' }">
      <div class="huo-msg">
        <div class="msg-con">
          <h4>活动规则</h4>
          <img @click="huo = false" src="~/assets/w-del.png" alt />
          <div>
            <p>
              1、本次团购活动以分档累计补发的方案执行，通过家园网站成交该项目具体团购费用如下所示：
            </p>
            <p>0-5套---------每套1000元</p>
            <p>6-10套--------每套2000元</p>
            <p>11-15套-------每套3000元</p>
            <p>16-20套-------每套4000元</p>
            <p>21套以上------每套5000元</p>
            <p>
              2、结算时间：网签成功后次月20号发放。补发费用待该范围内的最后一套网签成功后次月20号发放
            </p>
            <p>
              3、核算方式：由开发商或代理公司判定为家园平台客户即可享受这个优惠
            </p>
            <p>
              4、结算方式：提供已实名的支付宝账户给与您对接的家园咨询师，规定时间内会将优惠费用打至该账户
            </p>
            <p>
              详细活动方案请致电家园客服电话：
              <span>400-966-9995</span> 注：活动最终解释权归家园所有
            </p>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import tan from "@/components/tan.vue";
import nav from "@/components/nav.vue";
import { NoticeBar } from "vant";
import { delcomm, likecomm, collect } from "@/api/api";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  components: {
    NoticeBar,
    "top-view": topView,
    "nav-view": nav,
    "tan-view": tan,
  },
  async asyncData(context) {
    let id = context.params.id;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let other = context.query.other;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/building/detail", {
          params: {
            id: id,
            token: token,
            other: other,
          },
        })
        .then((resp) => {
          let data = resp.data;
          data.prices = [];
          for (let val in data.deal_prices) {
            data.prices[val] = [
              data.deal_prices[val].time.substr(5),
              data.deal_prices[val].price,
            ];
          }
          // console.log(data)
          return data;
        }),
    ]);
    return {
      effects: res.imgs.img.effects,
      examples: res.imgs.img.examples,
      traffics: res.imgs.img.traffics,
      imgnum: res.imgs.num,
      abstract: res.abstract,
      phone: res.common.phone,
      scores: res.scores,
      house_types: res.house_types,
      dynamics: res.dynamics,
      staffs: res.common.staffs,
      analysis: res.analysis,
      deal_prices: res.deal_prices,
      prices: res.prices,
      comments: res.comments,
      questions: res.questions,
      recommends: res.recommends,
      jkl: jkl,
      id: id,
      specials: res.specials,
      count: res.count,
    };
  },
  data() {
    return {
      time: "7月24日",
      count: {},
      tan: false,
      typenum: 0,
      typebtn: 1,
      name: "",
      remark: "",
      recommends: [],
      questions: [],
      comments: [],
      deal_prices: [],
      analysis: [],
      staffs: [],
      dynamics: [],
      house_types: [],
      scores: {},
      phone: "",
      abstract: {},
      btn: false,
      mapnum: 0,
      tabnum: 1,
      isnull: false,
      morebtn: true,
      imgs: [],
      imgmsg: ["效果图", "样板房", "交通图"],
      imgmsgnum: 0,
      morebtns: true,
      navs: ["优惠", "分析", "户型", "动态", "配套", "点评", "问答"],
      navnum: 0,
      src: require("~/assets/lun02.jpg"),
      srctype: false,
      mapname: "地铁",
      effects: [],
      examples: [],
      traffics: [],
      imgnum: 0,
      id: 0,
      specials: {},
      hour: 0,
      huo: false,
      img: require("~/assets/noclick.png"),
      img1: require("~/assets/checked.png"),
      heart: require("~/assets/proheart.png"),
      hearted: require("~/assets/collected.png"),
    };
  },
  methods: {
    del(id, key) {
      let token = $cookies.get("token");
      delcomm({ token: token, id: id }).then((res) => {
        if (res.data.code == 200) {
          this.toast("删除成功");
          this.$router.go(0);
        }
      });
    },
    like(id) {
      let token = $cookies.get("token");
      likecomm({ token: token, id: id }).then((res) => {
        if (res.data.code == 200) {
          this.toast("点赞成功");
          this.$router.go(0);
        }
      });
    },
    setimgmsgnum(e) {
      this.imgmsgnum = e;
      if (e == 0) {
        this.imgs = this.effects;
      } else if (e == 1) {
        this.imgs = this.examples;
      } else {
        this.imgs = this.traffics;
      }
    },
    showmores() {
      this.morebtns = false;
      $(".tabs").css({ height: "auto" });
      $(".te").css("height", "auto");
    },
    setnavnum(e) {
      this.navnum = e;
      switch(e){
        case 0:
          scroll(0,970)
          break;
        case 1:
          scroll(0,1178)
          break;
        case 2:
          scroll(0,1600)
          break;
        case 3:
          scroll(0,2300)
          break;
        case 4:
          scroll(0,3400)
          break;
        case 5:
          scroll(0,3800)
          break;
        case 6:
          scroll(0,4000)
          break;
      }
    },
    showmore() {
      this.morebtn = false;
      $(".tab").css("height", "auto");
    },
    mmap() {
      this.over = false;
      let that = this;
      let baidu = [that.abstract.longitude, that.abstract.latitude];
      let img = require("~/assets/mappro.png");
      let pro = that.abstract.name;
      let add = that.abstract.address;
      AMap.convertFrom(baidu, "baidu", function (status, result) {
        if (result.info === "ok") {
          var lnglats = result.locations; // Array.<LngLat>
          that.pois = [lnglats[0].lng, lnglats[0].lat];
          var map = new AMap.Map("map", {
            zoom: 14, //初始化地图层级
            center: that.pois, //初始化地图中心点
            zoomEnable: true,
            dragEnable: true,
          });
          let content = `<div
          style="width:140px;height: 36px;box-shadow:0px 0px 5px 0px rgba(6,0,1,0.1);border-radius:18px;padding-left: 17px;position: relative;background: #fff;z-index:10">
          <div style="float: left;width:100%">
            <h5 style="color: #121212;font-size: 12px;margin:0;margin-top: 3px;text-align:center">${pro}</h5>
            <p style="color: #919499;font-size: 10px;margin:0;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">${add}</p>
          </div>
          <div
            style="position: absolute;border:8px solid transparent;border-top-color: #fff;bottom:-16px;left:50%;margin-left: -8px;">
          </div>
        </div>`;
          let marker = new AMap.Marker({
            content: content,
            position: that.pois,
            offset: new AMap.Pixel(-78, -44),
          });
          let con =
            '<div style="width: 24px;height: 24px;border-radius: 50%;background:rgba(71,161,255,0.3);position: relative;"><div style="width: 6px;height: 6px;border-radius: 50%;background:rgba(71,161,255,1);position: absolute;top:50%;left:50%;margin-top: -3px;margin-left: -3px;"></div></div>';
          let mark = new AMap.Marker({
            content: con,
            position: that.pois,
            offset: new AMap.Pixel(-12, -12),
          });
          mark.setMap(map);
          marker.setMap(map);
          AMap.service(["AMap.PlaceSearch"], function () {
            // eslint-disable-line no-unused-vars
            //构造地点查询类
            var placeSearch = new AMap.PlaceSearch({
              pageSize: 10, // 单页显示结果条数
              pageIndex: 1, // 页码
              city: "", // 兴趣点城市
              citylimit: false, //是否强制限制在设置的城市内搜索
              map: map, // 展现结果的地图实例
              panel: "panel", // 结果列表将在此容器中进行展示。
              autoFitView: false, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
            });
            var cpoint = that.pois;
            let name = that.mapname;
            console.log(name);
            placeSearch.searchNearBy(name, cpoint, 1200, function (
              // eslint-disable-line no-unused-vars
              status,
              result
            ) {
              var ht = "";
              // console.log(ht)
              let img = require("~/assets/dian.png");
              if (JSON.stringify(result) == "{}") {
                that.isnull = true;
                // that.setzhou(name, 0);
              } else {
                that.isnull = false;
                // that.setzhou(name, result.poiList.pois.length);
                $.each(result.poiList.pois, function (i, e) {
                  if (i <= 2) {
                    var p2 = [e.location.lng, e.location.lat];
                    var s = AMap.GeometryUtil.distance(cpoint, p2) / 1000;
                    s = s.toFixed(1);
                    ht += `
                    <li>
                      <h5>${e.name}</h5>
                      <p>${e.address} <span><img src="${img}">${s}km</span></p>
                    </li>
                    `;
                  }
                });
              }
              $(".map-msg-con").html(ht);
            });
          });
        }
      });
    },
    setmap(id, name) {
      this.mapnum = id;
      this.mapname = name;
      this.mmap();
    },
    drawlei() {
      let that = this;
      var option = {
        textStyle: {
          color: ["#CCCCCC"],
          fontSize: 10,
          margin: [
            0, // 上
            10, // 右
            5, // 下
            0, // 左
          ],
        },
        grid: {
          left: "0%",
          right: "0%",
          top: "33%",
          bottom: "20%",
        },
        radar: {
          name: {
            textStyle: {
              color: "#646566",
              borderRadius: 3,
              padding: [3, 5],
            },
          },
          nameGap: 3,
          splitLine: {
            //配置雷达图的每一圈的网格线颜色
            lineStyle: {
              color: "#E6E6E6",
            },
          },
          indicator: [
            { name: "休闲", max: 10 },
            { name: "品质", max: 10 },
            { name: "教育", max: 10 },
            { name: "医疗", max: 10 },
            { name: "交通", max: 10 },
            { name: "商业", max: 10 },
            { name: "层高", max: 10 },
            { name: "户型", max: 10 },
          ],
          radius: 60,
          splitArea: {
            areaStyle: {
              color: "#fff", //圆环颜色
            },
          },
        },
        series: [
          {
            name: "能力",
            type: "radar",
            symbol: "rect",
            symbolSize: 3,
            itemStyle: {
              //此属性的颜色和下面areaStyle属性的颜色都设置成相同色即可实现
              color: "#29CC72",
              borderColor: "#29CC72",
            },
            areaStyle: {
              color: "#29CC72",
            },
            lineStyle: {
              // 单项线条样式。
              normal: {
                opacity: 0.5, // 图形透明度
              },
            },
            data: [
              {
                name: "能力值",
                value: [
                  that.scores.score.leisure,
                  that.scores.score.quality,
                  that.scores.score.education,
                  that.scores.score.medical,
                  that.scores.score.traffic,
                  that.scores.score.commercial,
                  that.scores.score.height,
                  that.scores.score.house_types,
                ],
                areaStyle: {
                  normal: {
                    color: "rgba(41,204,114,0.1)", // 选择区域颜色
                  },
                },
              },
            ],
          },
        ],
      };
      var myChart = this.$echarts.init(document.getElementById("leiecharts"));
      myChart.setOption(option);
    },
    look(src) {
      this.src = src;
      this.srctype = true;
    },
    drawline() {
      // 初始化图表标签
      //下面这是vue中使用
      var myChart = this.$echarts.init(document.getElementById("chart"));
      let that = this;
      var options = {
        //定义一个标题
        legend: {
          data: ["AI"],
        },
        color: ["rgba(77,181,255,1)"],
        grid: {
          top: "10%",
          left: "11%",
          right: 0,
          bottom: "10%",
        },
        //X轴设置
        xAxis: [
          {
            type: "category",
            data: that.times,
            axisLine: {
              lineStyle: {
                color: "#919499",
              },
            },
          },
        ],
        yAxis: [
          {
            min: 0,
            // max: that.max,
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#E4E4EB",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#919499",
              },
              show: false,
            },
          },
        ],
        series: [
          {
            data: that.prices,
            // smooth: 0.6,
            // symbol: "circle",
            lineStyle: {
              color: "#E4BA4B",
              width: 1,
            },
            // areaStyle: {},
            type: "bar",
            itemStyle: {
              // 转折点 控制
              color: "#2AC66D",
            },
            barWidth: 20, // 柱形的宽度
            barCategoryGap: "10%", // 柱形的间距
          },
        ],
      };
      myChart.setOption(options);
    },
    goimg() {
      this.$router.push("/" + this.jkl + "/photos/" + this.$route.params.id);
    },
    pk() {
      let arr = $cookies.get("ids");
      sessionStorage.setItem("pktype", 1);
      if (!arr) {
        this.$router.push("/" + this.jkl + "/pk");
      } else {
        this.$router.push("/" + this.jkl + "/pk/" + arr);
      }
    },
    leipk() {
      let arr = $cookies.get("ids");
      sessionStorage.setItem("pktype", 2);
      if (!arr) {
        this.$router.push("/" + this.jkl + "/pk");
      } else {
        this.$router.push("/" + this.jkl + "/pk/" + arr);
      }
    },
    pop(name, position, txt) {
      this.name = name;
      this.typebtn = 1;
      this.typenum = position;
      this.tan = true;
      this.remark = txt;
    },
    cli(e) {
      this.tan = e;
    },
    chang(data) {
      this.typenum = data.position;
      this.name = data.name;

      this.typebtn = 1;
      this.tan = true;
      this.remark = "详情页+预约看房";
    },
    shou() {
      if ($cookies.get("token")) {
        let that = this;
        collect({ id: that.id, type: 1, token: $cookies.get("token") }).then(
          (res) => {
            if (res.data.code == 200) {
              that.toast("收藏成功");
              that.heart = that.hearted;
            }
          }
        );
      } else {
        this.$router.push("/" + this.jkl + "/login");
      }
    },
    setnav() {
      var top = window.scrollY;
      if (top >= 970) {
        $(".nav-icon").css({ position: "fixed", top: "2.75rem" });
        if (top >= 1178&&top<1600) {
          this.navnum = 1;
        }else if(top>=1600&&top<2000){
          this.navnum = 2
        }else if(top>=2000&&top<2300){
          this.navnum = 3
        }else if(top>=2300&&top<3400){
          this.navnum = 4
        }else if(top>=3800&&top<4000){
          this.navnum = 5
        }else if(top>=4000){
          this.navnum = 6
        }
      } else if (top < 970) {
        $(".nav-icon").css({ position: "relative", top: "0" });
        this.navnum = 0
      }
    },
  },
  mounted() {
    if (localStorage.getItem(this.$route.params.id)) {
      this.hour = localStorage.getItem(this.$route.params.id);
    } else {
      this.hour = Math.floor(Math.random() * 10) + 1;
      localStorage.setItem(this.$route.params.id, this.hour);
    }
    if (localStorage.getItem(this.$route.params.id + "time")) {
      this.time = localStorage.getItem(this.$route.params.id + "time");
    } else {
      var date1 = new Date();
      var date2 = new Date(date1);
      date2.setDate(date1.getDate() + 7);
      var time2 = date2.getMonth() + 1 + "月" + date2.getDate() + "日";
      localStorage.setItem(this.$route.params.id + "time", time2);
      this.time = time2;
    }
    this.id = this.$route.params.id;
    let foot = $cookies.get("foot");
    let that = this;
    if (foot) {
      foot = foot + "," + that.id;
      foot = foot.split(",");
      let arr = new Set(foot);
      arr = [...arr];
      arr = arr.join(",");
      foot = arr;
    } else {
      foot = that.id;
    }
    $cookies.set("foot", foot);
    this.imgs = this.effects;
    this.drawline();
    this.drawlei();
    this.mmap();
    var mySwiper2 = new Swiper(".swiper-topimg", {
      slidesPerView: 1,
      spaceBetween: 0,
      observer: true,
      resistanceRatio: 0.1,
      autoplay: true,
    });
    var mySwiper3 = new Swiper(".swiper-nav", {
      slidesPerView: 5,
      spaceBetween: 50,
      resistanceRatio: 0.01,
      slidesOffsetBefore: 14,
      slidesOffsetAfter: 14,
    });
    var mySwiper1 = new Swiper(".swiper-hu", {
      slidesPerView: 2.08,
      spaceBetween: 10,
      observer: true,
      slidesOffsetAfter: 2,
      resistanceRatio: 0.1,
      slidesOffsetBefore: 14,
    });
    var swiper08 = new Swiper(".swiper-map", {
      slidesPerView: 5.5,
      spaceBetween: 10,
      slidesOffsetAfter: 12,
      slidesOffsetBefore: 14,
      slidesOffsetAfter: 12,
    });
    window.addEventListener("scroll", this.setnav);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.setnav);
  },
};
</script>
<style lang="less" scoped>
.topimg {
  width: 100%;
  height: 13.125rem;
  position: relative;
  padding-top: 2.75rem;
  .swiper-topimg {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .swiper-slide {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .img-top {
    width: 100%;
    height: 100%;
  }
  .imgnum {
    display: block;
    position: absolute;
    width: 3.125rem;
    height: 1.25rem;
    border-radius: 0.625rem;
    background: rgba(0, 0, 0, 0.6);
    font-size: 0.625rem;
    text-align: center;
    line-height: 1.25rem;
    color: #fff;
    right: 0.875rem;
    bottom: 1.125rem;
    z-index: 4;
  }
  .zhe {
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .top-msg {
    position: absolute;
    width: 100%;
    top: 0.9375rem;
    overflow: hidden;
    border-radius: 1rem;
    width: 18.75rem;
    height: 2rem;
    left: 2.5rem;
    z-index: 3;
    .swiper-slide {
      background: rgba(0, 0, 0, 0.6);
      color: #e1e1e1;
      line-height: 2rem;
      font-size: 0.8125rem;
      img {
        width: 1.125rem;
        margin-right: 0.6875rem;
        margin-bottom: -0.25rem;
        margin-left: 0.9375rem;
      }
      span {
        margin-right: 1.4rem;
      }
      span:nth-of-type(3) {
        margin: 0;
      }
    }
  }
  .imgnum {
    position: absolute;
    width: 3.125rem;
    height: 1.25rem;
    border-radius: 0.625rem;
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
    line-height: 1.25rem;
    color: #fff;
    font-size: 0.625rem;
    right: 4%;
    bottom: 1.5625rem;
    z-index: 5;
  }
  .taps {
    width: 8.625rem;
    height: 1.25rem;
    border-radius: 0.625rem;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 1.5625rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    z-index: 5;
    line-height: 1.3rem;
    p {
      width: 33.33%;
      color: #fff;
      font-size: 0.625rem;
      text-align: center;
    }
    .active {
      background-color: #29c56d;
      border-radius: 0.625rem;
    }
  }
}
.intro {
  width: 84%;
  position: relative;
  left: 4%;
  top: -0.9375rem;
  box-shadow: 0px 0px 8px 2px rgba(6, 0, 1, 0.05);
  border-radius: 0.25rem;
  background-color: #fff;
  -webkit-z-index: 5;
  -moz-z-index: 5;
  -ms-z-index: 5;
  -o-z-index: 5;
  z-index: 5;
  padding: 1.375rem 0.9375rem 1.25rem 0.9375rem;
  margin-bottom: 0.3125rem;
  .intro-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.375rem;
    .top-left {
      h2 {
        color: #131313;
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }
      p {
        span {
          padding: 0.1875rem 0.3125rem 0.15625rem 0.3125rem;
          border-radius: 0.125rem;
          background-color: #f5f5f5;
          color: #7d7d80;
          font-size: 0.6875rem;
          margin-right: 0.375rem;
        }
        .active {
          background-color: #2ac66e;
          color: #fff;
        }
      }
    }
    .top-right {
      display: flex;
      .box {
        margin-left: 1.5625rem;
        .img {
          display: flex;
          justify-content: center;
          margin-bottom: 0.25rem;
          position: relative;
          img {
            width: 1.125rem;
          }
          span {
            position: absolute;
            display: block;
            width: 1.375rem;
            height: 0.6875rem;
            border-radius: 0.3125rem 0.3125rem 0.3125rem 0;
            text-align: center;
            line-height: 0.6875rem;
            background-color: #ff4040;
            color: #fff;
            font-size: 0.5625rem;
            top: -0.25rem;
            right: -0.875rem;
          }
        }
        p {
          color: #4c4c4e;
          font-size: 0.6875rem;
        }
      }
    }
  }
  .intro-con {
    p {
      color: #7d7f80;
      font-size: 0.875rem;
      margin-bottom: 0.8125rem;
      overflow: hidden;
      span {
        color: #333334;
        font-size: 0.875rem;
      }
      .price {
        color: #ff5454;
        font-size: 1.25rem;
        font-weight: bold;
        i {
          font-weight: 400;
          font-size: 0.625rem;
          font-style: normal;
        }
      }
      .total {
        color: #333334;
        font-size: 1rem;
        i {
          font-style: normal;
          font-size: 0.625rem;
        }
      }
      img {
        width: 3.125rem;
        float: right;
      }
    }
    p:nth-of-type(4) {
      line-height: 2.125rem;
    }
    p:nth-of-type(3) {
      margin-bottom: 0.375rem;
    }
    .address {
      display: flex;
      span {
        display: block;
        width: 14.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 1.625rem;
      }
    }
  }
  .detail {
    color: #2ac66e;
    font-size: 0.9375rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .btn {
    display: flex;
    justify-content: space-between;
    button {
      width: 9.5625rem;
      height: 2.25rem;
      border-radius: 0.125rem;
      text-align: center;
      line-height: 2.25rem;
      border: 0;
      background-color: #f2f8f5;
      color: #2ac66e;
      font-size: 0.875rem;
      font-weight: bold;
      img {
        width: 1.125rem;
        margin-bottom: -0.25rem;
        margin-right: 0.25rem;
      }
    }
  }
}
.tel {
  padding: 0 4%;
  margin-bottom: 1.25rem;
  position: relative;
  img {
    width: 100%;
  }
  p {
    color: #302e2a;
    font-size: 1.5rem;
    position: absolute;
    top: 0.625rem;
    left: 2.125rem;
  }
}
.line {
  width: 100%;
  height: 0.625rem;
  background-color: #f7f7f7;
}
.te {
  position: relative;
  padding: 0 4%;
  .te-tit {
    position: absolute;
    width: 12.375rem;
    right: 0.6875rem;
    top: 1.0625rem;
  }
  h3 {
    color: #131313;
    font-size: 1rem;
    margin-bottom: 0.875rem;
    padding-top: 1rem;
    font-weight: bold;
    span {
      color: #969899;
      font-size: 0.5625rem;
      font-weight: 400;
      font-weight: 400;
    }
  }
  .teprice {
    position: absolute;
    color: #ff761a;
    font-size: 1rem;
    right: 1.6rem;
    top: 1.1875rem;
    font-weight: bold;
  }
  .tabs {
    height: 9.375rem;
    overflow: hidden;
    position: relative;
    z-index: 1;
    padding-bottom: 0.5rem;
    table {
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      border: 0.03125rem solid #cccccc;
      thead {
        tr {
          height: 1.875rem;
          background-color: #f7f7f7;
          th {
            font-size: 0.625rem;
            font-weight: 400;
            color: #86888a;
            width: 3rem;
            span {
              font-size: 0.5rem;
            }
          }

          th:nth-of-type(6) {
            color: #ff761a;
            font-weight: bold;
            span {
              font-size: 0.5rem;
            }
          }
        }
      }
      tr {
        background-color: #fff;
        height: 1.875rem;
        td {
          font-size: 0.625rem;
          color: #4b4c4d;
          text-align: center;
        }
        td:nth-of-type(3) {
          text-decoration: line-through;
        }
        td:nth-of-type(6) {
          color: #ff761a;
        }
      }
      tr:nth-of-type(2n) {
        background-color: #f7f7f7;
      }
    }
  }

  .zhe {
    position: absolute;
    width: 92%;
    height: 3.125rem;
    z-index: 1;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
    bottom: 6.25rem;
    left: 4%;
    text-align: center;
    line-height: 3.125rem;
    img {
      width: 1.5rem;
    }
  }
  .bom {
    width: 100%;
    /deep/.van-notice-bar {
      padding: 0;
      z-index: 0;
    }
    button {
      width: 100%;
      height: 2.25rem;
      border-right: 0.25rem;
      background: #f1f8f4;
      border: 0;
      text-align: center;
      line-height: 2.25rem;
      font-size: 0.875rem;
      color: #2ac66e;
      font-weight: bold;
      border-right: 0.25rem;
      margin-top: 0.375rem;
      margin-bottom: 1.25rem;
    }
  }
}
.nav-icon {
  border-bottom: 0.03125rem solid #f5f5f5;
  background-color: #fff;
  z-index: 10;
  .swiper-nav {
    overflow: hidden;
    .swiper-slide {
      color: #323233;
      font-size: 0.9375rem;
      height: 3.25rem;
      line-height: 3.25rem;
      .active {
        position: relative;
        height: 100%;
        color: #2ac66d;
        span {
          position: absolute;
          display: block;
          width: 1.5625rem;
          height: 0.125rem;
          border-radius: 0.0625rem;
          background-color: #2ac66d;
          top: 2.375rem;
          left: 0.125rem;
        }
      }
    }
  }
}
.hui {
  padding: 1.25rem 4%;
  h3 {
    color: #1f1f1f;
    font-size: 1.0625rem;
    line-height: 1.375rem;
    span {
      color: #969799;
      font-size: 0.875rem;
      float: right;
      font-weight: 400;
      img {
        width: 0.9375rem;
        margin-bottom: -0.125rem;
      }
    }
  }
  .hui-con {
    width: 100%;
    height: 4.375rem;
    border-radius: 0.0625rem;
    background-color: #ffeded;
    margin-top: 1.25rem;
    // display: flex;
    .hui-left {
      padding-left: 1rem;
      padding-top: 0.625rem;
      float: left;
      h6 {
        color: #ff7519;
        font-size: 0.625rem;
        margin-bottom: 0.4375rem;
        span {
          font-size: 1.25rem;
          font-weight: bold;
        }
        i {
          font-style: normal;
          color: #201b18;
          font-size: 0.625rem;
        }
      }
      p {
        color: #af917d;
        font-size: 0.75rem;
      }
    }
    .hui-right {
      padding-top: 0.9375rem;
      float: right;
      margin-right: 0.9375rem;
      button {
        width: 4.6875rem;
        height: 1.625rem;
        text-align: center;
        line-height: 1.625rem;
        color: #fff;
        font-size: 0.75rem;
        border: 0;
        background-color: #ff7519;
        border-radius: 0.1875rem;
      }
      p {
        color: #ff7519;
        font-size: 0.75rem;
        margin-top: 0.3125rem;
      }
    }
  }
  .two {
    .hui-left {
      h6 {
        font-size: 1rem;
        color: #29c56d;
      }
      p {
        color: #6c9a7f;
      }
    }
    .hui-right {
      button {
        background-color: #29c56d;
      }
      p {
        color: #29c56d;
        font-size: 0.75rem;
      }
    }
  }
}
.lei {
  padding: 1.25rem 4%;
  h3 {
    color: #1f1f1f;
    font-size: 1.0625rem;
    line-height: 1.375rem;
    span {
      color: #969799;
      font-size: 0.875rem;
      float: right;
      font-weight: 400;
      img {
        width: 0.9375rem;
        margin-bottom: -0.125rem;
      }
    }
  }
  p {
    color: #646566;
    font-size: 0.625rem;
    margin-top: 0.75rem;
  }
  .con {
    position: relative;
    #leiecharts {
      width: 100%;
      height: 10rem;
      margin-top: 1rem;
      margin-bottom: 1.25rem;
    }
    .img {
      position: absolute;
      top: 0;
      right: 0;
      text-align: center;
      padding-right: 0.625rem;
      padding-top: 0.25rem;
      img {
        width: 1.25rem;
      }
      p {
        color: #646566;
        font-size: 0.625rem;
        margin: 0;
        position: relative;
        top: -0.25rem;
      }
      span {
        display: block;
        background-color: #ff4040;
        position: absolute;
        width: 1.375rem;
        height: 0.6875rem;
        text-align: center;
        line-height: 0.6875rem;
        border-radius: 0.3125rem 0.3125rem 0.3125rem 0;
        color: #fff2f2;
        font-size: 0.5625rem;
        top: 0;
        right: 0;
      }
    }
    .pingfen {
      color: #646566;
      font-size: 0.75rem;
      position: absolute;
      right: 0;
      bottom: 0;
      span {
        color: #ff5454;
        font-size: 1.125rem;
        font-weight: bold;
      }
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    tr {
      height: 2rem;
      line-height: 2rem;
      border-right: 0.03125rem solid #ededed;
      td {
        color: #646566;
        font-size: 0.625rem;
        padding-left: 0.625rem;
        border-left: 0.03125rem solid #ededed;
        margin: 0;
        span {
          font-size: 0.75rem;
          color: #ff5454;
          float: right;
          margin-right: 0.875rem;
        }
      }
    }
    tr:nth-of-type(2n + 1) {
      background-color: #f7f7f7;
    }
  }
  button {
    width: 100%;
    height: 2.25rem;
    border-radius: 0.125rem;
    background-color: #f1f8f4;
    text-align: center;
    line-height: 2.25rem;
    border: 0;
    color: #1fc365;
    font-size: 0.875rem;
    font-weight: bold;
    margin-top: 1.5625rem;
  }
}
.hus {
  padding-bottom: 1.25rem;
  h5 {
    color: #1f1f1f;
    font-size: 1.0625rem;
    margin-top: 1.25rem;
    padding: 0 4%;
    margin-bottom: 1.375rem;
    span {
      float: right;
      color: #646466;
      font-size: 0.875rem;
      font-weight: 400;
      img {
        width: 0.875rem;
        margin-left: 0.25rem;
        margin-bottom: -0.0625rem;
      }
    }
  }
  .hu-msg {
    overflow: hidden;
  }
  .swiper-hu {
    overflow: hidden;
  }
  .swiper-slide {
    .hu-top {
      background-color: #f7f7f7;
      height: 7.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
      position: relative;
      p {
        width: 4.6875rem;
        height: 1.0625rem;
        position: absolute;
        bottom: 0;
        right: 0;
        color: #63696e;
        font-size: 0.5625rem;
        text-align: right;
        line-height: 1.0625rem;
        background: linear-gradient(
          -90deg,
          rgba(0, 0, 0, 0.12),
          rgba(205, 205, 205, 0)
        );
        img {
          height: 0.75rem;
          width: 0.75rem;
          margin-bottom: -0.0625rem;
        }
      }
      img {
        height: 7.5rem;
        width: 5.1875rem;
      }
    }
    .name {
      color: #1f1f1f;
      font-size: 1rem;
      margin-bottom: 0.625rem;
      span {
        display: inline-block;
        color: #ffffff;
        font-size: 0.6875rem;
        width: 2rem;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
      }
    }
    .type {
      color: #5c5c5c;
      font-size: 0.8125rem;
      margin-bottom: 0.375rem;
      .t1 {
        margin-right: 0.75rem;
      }
    }
    .huprice {
      color: #ff5543;
      font-size: 0.875rem;
      margin-bottom: 1.25rem;
      span {
        font-size: 1.125rem;
      }
    }
    button {
      width: 100%;
      height: 2.25rem;
      border-radius: 0.125rem;
      background-color: #f1f8f4;
      color: #1fc365;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
      font-weight: bold;
      border: 0;
      img {
        width: 1rem;
        margin-right: 0.1875rem;
        margin-bottom: -0.125rem;
      }
    }
  }
}
.imgbox {
  position: fixed;
  width: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  height: 100vh;
  z-index: 10000;
  img {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
.dynamic {
  padding: 0 4%;
  h3 {
    color: #121212;
    font-size: 1rem;
    padding: 1.25rem 0;
    span {
      color: #646466;
      font-size: 0.875rem;
      float: right;
      font-weight: 400;
      img {
        width: 0.875rem;
      }
    }
  }
  ul {
    li {
      margin-bottom: 1.375rem;
      p {
        color: #646566;
        font-size: 0.8125rem;
        line-height: 1.1875rem;
        margin-bottom: 0.2rem;
        height: 2.375rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      span {
        color: #969799;
        font-size: 0.75rem;
      }
      .dynamicimgs {
        margin-top: 0.75rem;
        img {
          width: 6.6875rem;
          height: 4.375rem;
          border-radius: 0.125rem;
        }
      }
    }
  }
  button {
    width: 100%;
    height: 2.5rem;
    background-color: #f1f8f4;
    text-align: center;
    line-height: 2.5rem;
    font-weight: bold;
    color: #1fc365;
    font-size: 0.9375rem;
    border: 0;
    border-radius: 0.25rem;
    margin-bottom: 1.25rem;
  }
}
.zixun {
  padding: 1.25rem 4%;
  h3 {
    color: #1f1f1f;
    margin-bottom: 0.75rem;
    font-size: 1rem;
  }
  .xun-icon {
    margin-bottom: 1.25rem;
    span {
      color: #8f8f8f;
      font-size: 0.8125rem;
      margin-right: 0.625rem;
      img {
        width: 0.875rem;
        margin-right: 0.1875rem;
        margin-bottom: -0.125rem;
      }
    }
  }
  .peo {
    display: flex;
    margin-bottom: 1.5rem;
    .peoimg {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }
    .peo-msg {
      position: relative;
      margin-left: 0.75rem;
      top: -0.25rem;
      margin-right: 2.75rem;
      h6 {
        color: #1f1f1f;
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
        span {
          display: inline-block;
          padding: 0.0625rem 0.125rem 0.125rem 0.125rem;
          color: #fff;
          background-color: #ff7519;
          font-size: 0.625rem;
          margin-left: 0.25rem;
          font-weight: 400;
          border-radius: 0.125rem;
        }
      }
      p {
        color: #969799;
        font-size: 0.75rem;
      }
    }
    .psm {
      margin-right: 1.5625rem;
    }
    a {
      justify-content: flex-end;
    }
    .peoicon {
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 1.5625rem;
    }
    .peoicon:nth-of-type(2) {
      margin-left: 0;
    }
  }
  .peo:nth-of-type(2) {
    margin-bottom: 0;
  }
}
.ziliao {
  padding: 1.25rem 4%;
  h3 {
    color: #1f1f1f;
    font-size: 1.0625rem;
    margin-bottom: 1.125rem;
  }
  .tab {
    margin-bottom: 1.375rem;
    display: flex;
    p {
      position: relative;
      width: 4.375rem;
      height: 1.625rem;
      text-align: center;
      line-height: 1.625rem;
      border: 0.5px solid rgba(242, 244, 247, 1);
      box-shadow: 0px 1.5px 5px 0px rgba(0, 0, 0, 0.05);
      margin-right: 1rem;
      border-radius: 0.1875rem;
      font-size: 0.875rem;
      span {
        display: none;
      }
    }
    .active {
      background: linear-gradient(
        48deg,
        rgba(44, 210, 100, 1) 0%,
        rgba(40, 229, 151, 1) 100%
      );
      color: #fff;
      span {
        display: block;
        position: absolute;
        border: 0.3125rem solid transparent;
        border-top-color: #2bd770;
        bottom: -0.625rem;
        left: 50%;
        margin-left: -0.3125rem;
      }
    }
  }
  .liao-msg {
    height: 7.5rem;
    border-radius: 0.375rem;
    background-color: #f7f7f7;
    padding: 0 0.875rem;
    margin-bottom: 1.25rem;
    p {
      color: #5c5c5c;
      font-size: 0.875rem;
      line-height: 1.25rem;
      padding-top: 0.9375rem;
      height: 2.4375rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
  button {
    width: 100%;
    height: 2.25rem;
    border-radius: 0.125rem;
    background-color: #f1f8f4;
    text-align: center;
    line-height: 2.25rem;
    color: #1fc365;
    font-size: 0.875rem;
    font-weight: bold;
    border: 0;
    img {
      width: 1.125rem;
      margin-bottom: -0.125rem;
      margin-right: 0.1875rem;
    }
  }
}
.newprice {
  padding: 1.25rem 4%;
  position: relative;
  h3 {
    color: #121212;
    font-size: 1.0625rem;
    p {
      color: #919499;
      font-size: 0.875rem;
      float: right;
      font-weight: 400;
      span {
        color: #fe582f;
        font-size: 1.0625rem;
        font-weight: bold;
      }
    }
  }
  p {
    text-align: center;
    color: #5c5c5c;
    font-size: 0.625rem;
    margin-bottom: 0.875rem;
  }
  .tab {
    position: relative;
    height: 9.75rem;
    overflow: hidden;
    table {
      color: #5c5c5c;
      font-size: 0.75rem;
      width: 100%;
      border-top: 0.5px solid #e6e6ec;
      border-left: 0.5px solid #e6e6ec;
      tr {
        height: 1.9375rem;
        line-height: 1.9375rem;
        th {
          width: 33%;
          text-align: center;
          border-right: 0.5px solid #e6e6ec;
          border-bottom: 0.5px solid #e6e6ec;
        }
        td {
          width: 33%;
          text-align: center;
          border-right: 0.5px solid #e6e6ec;
          border-bottom: 0.5px solid #e6e6ec;
        }
      }
    }
    .zhe {
      position: absolute;
      width: 100%;
      height: 3.125rem;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
      bottom: 0;
      text-align: center;
      line-height: 3.125rem;
      img {
        width: 1.5rem;
      }
    }
  }
  button {
    width: 100%;
    height: 2.25rem;
    background-color: #f1f8f4;
    text-align: center;
    line-height: 2.25rem;
    color: #1fc365;
    font-size: 0.875rem;
    font-weight: bold;
    border: 0;
    margin-top: 1.25rem;
    img {
      width: 1.125rem;
      margin-bottom: -0.1875rem;
      margin-right: 0.125rem;
    }
  }
}
.zhou {
  // padding: 0 4%;
  h4 {
    padding: 0 4%;
    font-size: 1.0625rem;
    color: #101214;
    line-height: 1.375rem;
    margin-bottom: 1.375rem;
    margin-top: 1.125rem;
    span {
      color: #96989a;
      float: right;
      font-weight: 400;
      font-size: 0.875rem;
      img {
        width: 0.9375rem;
        margin-bottom: -0.125rem;
        margin-left: 0.125rem;
      }
    }
  }
  #map {
    width: 92%;
    margin-left: 4%;
    height: 9.375rem;
    border-radius: 0.375rem;
    margin-bottom: 1rem;
  }
  .swiper-map {
    overflow: hidden;
    padding-bottom: 1.125rem;
    .tegood {
      color: #4d4d4d;
      font-size: 0.875rem;
    }
    .active {
      color: #20c466;
      position: relative;
      i {
        width: 1.5625rem;
        height: 0.125rem;
        border-radius: 0.0625rem;
        background-color: #20c466;
        position: absolute;
        display: block;
        bottom: -0.375rem;
        left: 0;
      }
    }
  }
  .map-msg {
    padding-top: 1.125rem;
    border-top: 0.5px solid #f5f5f5;
    padding: 0 4%;
    /deep/ .map-msg-con {
      padding-top: 0.625rem;
      /deep/ li {
        list-style: none;
        margin-bottom: 1.125rem;
        /deep/ h5 {
          color: #1a1a1a;
          font-size: 0.9375rem;
          margin-bottom: 0.5rem;
        }
        /deep/ p {
          color: #999999;
          font-size: 0.8125rem;
          span {
            float: right;
            img {
              width: 0.75rem;
              margin-right: 0.125rem;
            }
          }
        }
      }
    }
    .map-tishi {
      height: 10.6875rem;
      text-align: center;
      line-height: 10.6875rem;
      font-size: 1rem;
    }
  }
  button {
    width: 92%;
    margin-left: 4%;
    height: 2.5rem;
    border-radius: 0.1875rem;
    background: #f1f8f4;
    color: #20c466;
    font-size: 0.9375rem;
    text-align: center;
    line-height: 2.5rem;
    font-weight: bold;
    border: 0;
    margin-bottom: 1.25rem;
  }
}
.other {
  padding: 1.25rem 4% 2rem 4%;
  h3 {
    color: #1f1f1f;
    font-size: 1.0625rem;
    margin-bottom: 1.375rem;
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
.dian {
  padding: 0 4%;
  h3 {
    color: #131313;
    padding: 1.25rem 0 1.375rem 0;
    font-size: 1rem;
    span {
      float: right;
      color: #5e6266;
      font-size: 0.875rem;
      font-weight: 400;
      img {
        width: 0.875rem;
        margin-bottom: -0.125rem;
      }
    }
  }
  ul {
    li {
      margin-bottom: 1.5rem;
      .dian-top {
        overflow: hidden;
        .peo {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          margin-right: 0.625rem;
          float: left;
        }
        .top-con {
          float: left;
          h6 {
            color: #323333;
            font-size: 0.875rem;
            span {
              color: #92949a;
              font-size: 0.8125rem;
              margin-left: 0.1875rem;
              font-weight: 400;
            }
          }
          p {
            color: #92949a;
            font-size: 0.8125rem;
            margin-top: 0.3rem;
          }
        }
        .top-right {
          float: right;
          color: #96989e;
          font-size: 0.75rem;
          img {
            width: 1rem;
            margin-left: 0.1875rem;
            margin-bottom: -0.125rem;
          }
        }
        .active {
          color: #ff761a;
        }
      }
      .dian-bom {
        color: #333333;
        font-size: 0.875rem;
        line-height: 1.25rem;
        margin-top: 0.5rem;
      }
    }
  }
  button {
    width: 100%;
    height: 2.5rem;
    border-radius: 0.25rem;
    background-color: #f1f8f4;
    text-align: center;
    line-height: 2.5rem;
    color: #20c466;
    font-size: 0.9375rem;
    font-weight: bold;
    border: 0;
    margin-bottom: 1.25rem;
  }
}
.wen {
  padding: 0 4%;
  h3 {
    color: #131313;
    font-size: 1rem;
    padding: 1.125rem 0 1.5rem 0;
    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: #646466;
      float: right;
      img {
        width: 0.875rem;
        margin-left: 0.25rem;
        margin-bottom: -0.125rem;
      }
    }
  }
  ul {
    li {
      margin-bottom: 1.25rem;
      .con {
        color: #323333;
        font-size: 0.875rem;
        line-height: 1.375rem;
        span {
          padding: 0.125rem 0.1875rem 0.1875rem 0.1875rem;
          border-radius: 0.125rem;
          background-color: #ff5454;
          color: #fff;
          font-size: 0.625rem;
          margin-right: 0.4rem;
        }
      }
      .num {
        color: #9a9a9a;
        font-size: 0.8125rem;
      }
    }
  }
  button {
    width: 100%;
    height: 2.5rem;
    border-radius: 0.25rem;
    text-align: center;
    line-height: 2.5rem;
    font-weight: bold;
    background-color: #f1f8f4;
    color: #1fc365;
    font-size: 0.9375rem;
    border: 0;
    margin-bottom: 1.25rem;
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