<template>
  <div id="content">
    <header>
      <img class="back" src="~/assets/goback.png" alt />
      <img class="logo" src="~/assets/logo.png" alt />
      <img class="home" src="~/assets/mapcai.png" alt />
      <div class="zixuns">
        <img src="~/assets/zixun.png" alt />
        <p>3</p>
      </div>
    </header>
    <div class="topimg">
      <div class="swiper-topimg">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,key) in imgs" :key="key">
            <img :src="item" alt />
          </div>
        </div>
      </div>
      <!-- <img class="img-top" :src="basic.img" alt /> -->
      <!-- <span class="imgnum">共{{basic.img_num}}张</span> -->
      <div class="zhe"></div>
      <p class="imgnum">共13张</p>
      <div class="taps">
        <p
          v-for="(item,key) in imgmsg"
          :key="key"
          :class="imgmsgnum == key ? 'active':''"
          @click="setimgmsgnum(key)"
        >{{item}}</p>
      </div>
    </div>
    <div class="intro">
      <div class="intro-top">
        <div class="top-left">
          <h2>锦云澜天里</h2>
          <p>
            <span class="active">在售</span>
            <span>住宅</span>
            <span>地铁沿线</span>
          </p>
        </div>
        <div class="top-right">
          <div class="pk box">
            <div class="img">
              <img src="~/assets/proheart.png" alt />
              <span>hot</span>
            </div>
            <p>对比</p>
          </div>
          <div class="fork box">
            <div class="img">
              <img src="~/assets/proheart.png" alt />
            </div>
            <p>收藏</p>
          </div>
        </div>
      </div>
      <div class="intro-con">
        <p>
          均价:
          <span class="price">
            17800
            <i>元/m²</i>
          </span>
        </p>
        <p>
          总价:
          <span class="total">
            160
            <i>万起</i>
          </span>
        </p>
        <p>
          开盘:
          <span>2010年8月</span>
        </p>
        <p>
          地址:
          <span>艮山西路凯旋交叉口</span>
          <img src="~/assets/map.png" alt />
        </p>
      </div>
      <p class="detail">详细楼盘信息</p>
      <div class="btn">
        <button>
          <img src="~/assets/zhexian.png" />变价通知我
        </button>
        <button>
          <img src="~/assets/msg.png" />开盘提醒我
        </button>
      </div>
    </div>
    <div class="tel">
      <img src="~/assets/132.png" alt />
    </div>
    <div class="line"></div>
    <div class="te">
      <h3>
        今日特价房
        <span>4小时前更新</span>
      </h3>
      <span class="teprice">6000</span>
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
          <tr>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
          </tr>
          <tr>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
          </tr>
          <tr>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
          </tr>
          <tr>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
          </tr>
          <tr>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
          </tr>
          <tr>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
          </tr>
          <tr>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
          </tr>
          <tr>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
          </tr>
          <tr>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
          </tr>
          <tr>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
            <td>304</td>
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
          text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
        />
        <button>咨询特价房</button>
      </div>
    </div>
    <div class="line"></div>
    <div class="nav">
      <div class="swiper-nav">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,key) in navs" :key="key" @click="setnavnum(key)">
            <p :class="navnum == key ? 'active':''">
              {{item}}
              <span></span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="hui">
      <h3>
        优惠信息
        <span @click="huomsg = true">
          <img src="~/assets/ques.png" alt /> 活动规则
        </span>
      </h3>
      <div class="hui-con">
        <div class="hui-left">
          <h6>
            最高
            <span>5000</span>元购房优惠
            <i>（7月24日截止）</i>
          </h6>
          <p>售楼处专供家园平台客户</p>
        </div>
        <div class="hui-right">
          <button @click="showbtn(37,'领取优惠')">领取优惠</button>
          <p>
            <span>52人</span>已领取
          </p>
        </div>
      </div>
      <div class="hui-con two">
        <div class="hui-left">
          <h6>
            免费看房专车券
            <i>（剩余156张）</i>
          </h6>
          <p>免费专车1对1服务限时劵</p>
        </div>
        <div class="hui-right">
          <button @click="showbtn(37,'领取优惠')">免费领取</button>
          <p>
            <span>123人</span>已领取
          </p>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="lei">
      <h3>
        雷达图分析
        <span @click="huomsg = true">
          <img src="~/assets/ques.png" alt /> 评分规则
        </span>
      </h3>
      <p>家园通过多个角度对比（10分制）进行楼盘专业评分</p>
      <div class="con">
        <div id="leiecharts"></div>
        <div class="img">
          <img src="~/assets/proheart.png" alt />
          <p>加入PK</p>
          <span>hot</span>
        </div>
        <p class="pingfen">
          综合评分：
          <span>8.5</span>
        </p>
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              价格
              <span>8.2</span>
            </td>
            <td>
              价格
              <span>8.2</span>
            </td>
          </tr>
          <tr>
            <td>
              价格
              <span>8.2</span>
            </td>
            <td>
              价格
              <span>8.2</span>
            </td>
          </tr>
          <tr>
            <td>
              价格
              <span>8.2</span>
            </td>
            <td>
              价格
              <span>8.2</span>
            </td>
          </tr>
          <tr>
            <td>
              价格
              <span>8.2</span>
            </td>
            <td>
              价格
              <span>8.2</span>
            </td>
          </tr>
          <tr>
            <td>
              价格
              <span>8.2</span>
            </td>
            <td>
              价格
              <span>8.2</span>
            </td>
          </tr>
        </tbody>
      </table>
      <button>获取详细分析报告</button>
    </div>
    <div class="line"></div>
    <div class="hus">
      <h5>主力户型</h5>
      <div class="swiper-hu">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="hu-top">
              <img src="~/assets/lun02.jpg" alt @click="look(item.img)" />
            </div>
            <p class="name">
              3室2厅2卫
              <span>在售</span>
            </p>
            <p class="type">
              <span class="t1">建面 112m²</span>
              <span>类型 平层</span>
            </p>
            <p class="huprice">
              约
              <span>282</span>万起
            </p>
            <button>
              <img src="~/assets/zixun.png" alt />咨询户型底价
            </button>
          </div>
          <div class="swiper-slide">
            <div class="hu-top">
              <img src="~/assets/lun02.jpg" alt @click="look(require('~/assets/lun02.jpg'))" />
            </div>
            <p class="name">
              3室2厅2卫
              <span>在售</span>
            </p>
            <p class="type">
              <span class="t1">建面 112m²</span>
              <span>类型 平层</span>
            </p>
            <p class="huprice">
              约
              <span>282</span>万起
            </p>
            <button>
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
        <span>
          全部动态
          <img src="~/assets/j-more.png" alt />
        </span>
      </h3>
      <ul>
        <li>
          <p>住宅产品静待推出，均价18590元/㎡，主要户型为建筑面积80-115㎡三居（以上信息仅供参考，具体一房一价...</p>
          <span>2019-04-08</span>
          <div class="dynamicimgs">
            <img src="~/assets/lun02.jpg" alt />
          </div>
        </li>
        <li>
          <p>住宅产品静待推出，均价18590元/㎡，主要户元/㎡，主要户元/㎡，主要户型为建筑面积80-115㎡三居（以上信息仅供参考，具体一房一价...</p>
          <span>2019-04-08</span>
          <div class="dynamicimgs"></div>
        </li>
      </ul>
      <button>订阅实时动态</button>
    </div>
    <div class="line"></div>
    <div class="zixun">
      <h3>家园咨询师</h3>
      <p class="xun-icon">
        <span>
          <img src="~/assets/save.png" alt />专业服务
        </span>
        <span>
          <img src="~/assets/icon-path.png" alt />区域解读
        </span>
        <span>
          <img src="~/assets/icon-pin.png" alt />户型分析
        </span>
      </p>
      <div class="peo">
        <img class="peoimg" src="~/assets/people.png" alt />
        <div class="peo-msg">
          <h6>
            张三
            <span>满意度5分</span>
          </h6>
          <p>了解房源特色，专业挑好房</p>
        </div>
        <img class="peoicon" src="~/assets/message.png" alt />
        <img class="peoicon" src="~/assets/tel.png" alt />
      </div>
      <div class="peo">
        <img class="peoimg" src="~/assets/people.png" alt />
        <div class="peo-msg">
          <h6>
            张三
            <span>满意度5分</span>
          </h6>
          <p>了解房源特色，专业挑好房</p>
        </div>
        <img class="peoicon" src="~/assets/message.png" alt />
        <img class="peoicon" src="~/assets/tel.png" alt />
      </div>
    </div>
    <div class="line"></div>
    <div class="ziliao">
      <h3>楼盘分析资料</h3>
      <div class="tab">
        <p :class="tabnum ==1?'active':''" @click="tabnum = 1">
          投资分析
          <span></span>
        </p>
        <p @click="tabnum = 2" :class="tabnum == 2?'active':''">
          宜居分析
          <span></span>
        </p>
      </div>
      <div class="liao-msg" v-if="tabnum == 1">
        <p>1、2017年杭州总价“地王”项目，打造体量约74万方TOD大盘，坐拥未来科技城地标</p>
        <p>1、2017年杭州总价“地王”项目，打造体量约74万方TOD大盘，坐拥未来科技城地标</p>
      </div>
      <div class="liao-msg" v-if="tabnum == 2">
        <p>1、2017年杭州总价“地王”项目，打造体量约74万方TOD大盘，坐拥未来科技城地标</p>
        <p>1、2017年杭州总价“地王”项目，打造体量约74万方TOD大盘，坐拥未来科技城地标</p>
      </div>
      <button @click="showbtn(41,'领取分析资料')">
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
      <div id="chart" style="width:100%;height:250px"></div>
      <p>2020年</p>
      <div class="tab">
        <table>
          <tbody>
            <tr>
              <th>日期</th>
              <th>成交套数</th>
              <th>成交金额</th>
            </tr>
            <tr>
              <td>07-20</td>
              <td>3套</td>
              <td>***万</td>
            </tr>
            <tr>
              <td>07-20</td>
              <td>3套</td>
              <td>***万</td>
            </tr>
            <tr>
              <td>07-20</td>
              <td>3套</td>
              <td>***万</td>
            </tr>
            <tr>
              <td>07-20</td>
              <td>3套</td>
              <td>***万</td>
            </tr>
            <tr>
              <td>07-20</td>
              <td>3套</td>
              <td>***万</td>
            </tr>
            <tr>
              <td>07-20</td>
              <td>3套</td>
              <td>***万</td>
            </tr>
            <tr>
              <td>07-20</td>
              <td>3套</td>
              <td>***万</td>
            </tr>
            <tr>
              <td>07-20</td>
              <td>3套</td>
              <td>***万</td>
            </tr>
            <tr>
              <td>07-20</td>
              <td>3套</td>
              <td>***万</td>
            </tr>
          </tbody>
        </table>
        <div class="zhe" @click="showmore" v-if="morebtn">
          <img src="~/assets/huo-down.png" alt />
        </div>
      </div>
      <button>
        <img src="~/assets/geticon.png" />获取最新成交价
      </button>
    </div>
    <div class="line"></div>
    <div class="zhou">
      <h3>
        周边配套
        <!-- <span>
            详细配套
            <img src="~/assets/j-more.png" alt />
        </span>-->
      </h3>
      <div id="map"></div>
      <div id="panel" style="display:none"></div>
      <div class="map-icon">
        <span @click="setmap('交通')">
          <img src="~/assets/affic.png" />交通
        </span>
        <span @click="setmap('教育')">
          <img src="~/assets/learn.png" />教育
        </span>
        <span @click="setmap('医院')">
          <img src="~/assets/yiyuan.png" />医院
        </span>
        <span @click="setmap('购物')">
          <img src="~/assets/shop.png" />购物
        </span>
        <span @click="setmap('美食')">
          <img src="~/assets/food.png" />美食
        </span>
      </div>
      <ul>
        <li>
          
        </li>
      </ul>
    </div>
    <div class="line"></div>
    <div class="other">
      <h3>看了该楼盘的还看了</h3>
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
    <div class="imgbox" @click="srctype = false" v-show="srctype">
      <img :src="src" alt />
    </div>
  </div>
</template>
<script>
import { NoticeBar } from "vant";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  components: {
    NoticeBar,
  },
  data() {
    return {
      tabnum: 1,
      morebtn: true,
      imgs: [
        require("~/assets/lun02.jpg"),
        require("~/assets/lun02.jpg"),
        require("~/assets/lun02.jpg"),
      ],
      imgmsg: ["效果图", "样板房", "交通图"],
      imgmsgnum: 0,
      morebtns: true,
      navs: ["优惠", "分析", "户型", "动态", "配套", "点评", "问答"],
      navnum: 0,
      src: require("~/assets/lun02.jpg"),
      srctype: false,
    };
  },
  methods: {
    setimgmsgnum(e) {
      this.imgmsgnum = e;
    },
    showmores() {
      this.morebtns = false;
      $(".tabs").css({ height: "auto" });
      $(".te").css("height", "auto");
    },
    setnavnum(e) {
      this.navnum = e;
    },
    showmore() {
      this.morebtn = false;
      $(".tab").css("height", "auto");
    },
    mmap() {
      this.over = false;
      let that = this;
      let baidu = [116.474408,39.948795];
      console.log(123)
      let img = require("~/assets/mappro.png");
      let pro = 'that.basic.name';
      let add = 'that.basic.address';
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
            placeSearch.searchNearBy(name, cpoint, 1200, function (
              // eslint-disable-line no-unused-vars
              status,
              result
            ) {});
          });
        }
      });
    },
    setmap(name) {
      this.mapname = name;
      this.mmap();
    },
    drawlei() {
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
            { name: "价格", max: 10 },
            { name: "容积率", max: 10 },
            { name: "交房", max: 10 },
            { name: "交付", max: 10 },
            { name: "医疗", max: 10 },
            { name: "交通", max: 10 },
            { name: "商业", max: 10 },
            { name: "物业", max: 10 },
            { name: "开放商", max: 10 },
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
                value: [8.2, 8.4, 9.4, 8.5, 8.8, 8.2, 8.4, 9.4, 8.5, 8.8],
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
            data: [20, 20, 20],
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
  },
  mounted() {
    this.drawline();
    this.drawlei();
    this.mmap()
    var mySwiper2 = new Swiper(".swiper-topimg", {
      slidesPerView: 1,
      spaceBetween: 0,
      observer: true,
      resistanceRatio: 0.1,
      autoplay: true,
      loop: true,
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
  },
};
</script>
<style lang="less" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2.75rem;
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
    position: absolute;
    right: 3.375rem;
    top: 0.6875rem;
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
}
.topimg {
  width: 100%;
  height: 13.125rem;
  position: relative;
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
  img {
    width: 100%;
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
    right: 2.0625rem;
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
.nav {
  border-bottom: 0.03125rem solid #f5f5f5;
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
        width: 1.125rem;
      }
      p {
        color: #646566;
        font-size: 0.625rem;
        margin: 0;
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
  padding: 1.25rem 4%;
  position: relative;
  h3 {
    color: #1f1f1f;
    font-size: 1.0625rem;
    margin-bottom: 1.125rem;
    span {
      color: #919499;
      font-size: 0.875rem;
      float: right;
      img {
        width: 0.875rem;
        margin-bottom: -0.0625rem;
        margin-left: 0.25rem;
      }
    }
  }
  #map {
    width: 100%;
    height: 11.25rem;
  }
  .map-icon {
    position: absolute;
    width: 20.3125rem;
    height: 2.8125rem;
    background-color: #fff;
    box-shadow: 0px 2.5px 5px 0px rgba(0, 0, 0, 0.04);
    border-radius: 0.125rem;
    left: 50%;
    margin-left: -10.15625rem;
    bottom: 2.1875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    span {
      color: #3d3d3d;
      font-size: 0.8125rem;
      img {
        width: 0.875rem;
        margin-right: 0.1875rem;
        margin-bottom: -0.125rem;
      }
    }
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
    a {
      width: 100%;
      display: flex;
      text-decoration: none;
      img {
        width: 6.875rem;
        height: 5rem;
        margin-right: 0.75rem;
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
</style>