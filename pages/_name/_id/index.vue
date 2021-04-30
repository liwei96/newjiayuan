<template>
  <div class="build">
    <header>
      <img class="back" src="~/assets/goback.png" alt @click="home" />
      <img
        class="logo"
        src="~/assets/logo3.png"
        alt
        @click="home"
        v-if="host == '易得房'"
      />
      <img
        class="logo"
        src="~/assets/logo2.png"
        alt
        @click="home"
        v-if="host == '家园'"
      />
      <img class="home" src="~/assets/home.png" alt @click="home" />
    </header>
    <div class="topimg">
      <div class="swiper-topimg">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, key) in topimgs" :key="key">
            <img :src="item" alt />
          </div>
        </div>
      </div>
      <!-- <img class="img-top" :src="basic.img" alt /> -->
      <!-- <span class="imgnum">共{{basic.img_num}}张</span> -->
      <div class="zhe"></div>
      <div class="top-msg">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, key) in all.customers"
            :key="key"
          >
            <img src="~/assets/talk.png" alt />
            <span>{{ item.mobile }}</span>
            <span>{{ item.operate }}</span>
            <span>{{ item.min }}分钟前</span>
          </div>
        </div>
      </div>
      <!-- <p class="imgnum">共{{img_num}}张</p> -->
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
    <div class="all">
      <div class="incro">
        <div class="top">
          <h3>{{ basic.name }}</h3>
          <p>
            <span class="isshou">{{ basic.status }}</span>
            <span class="zhuangxiu">{{ basic.decorate }}</span>
            <span class="rail">{{ basic.feature }}</span>
            <span class="hui">限时优惠</span>
          </p>
        </div>
        <p class="address">地址：{{ basic.saler_address }}</p>
        <div class="top-msg">
          <p class="msg-con">专享看房团，专享参团优惠</p>
          <p class="msg-btn" @click="showbtn(84, '一键咨询')">
            一键咨询
            <img src="~/assets/righticon.png" alt />
          </p>
        </div>
        <h5>
          今日房源
          <span>{{ hour }}小时前更新</span>
        </h5>
        <!-- <div class="prices">
          <div class="price">
            <h5>
              {{basic.single_price}}
              <span>元/m²</span>
            </h5>
            <p>参考单价</p>
          </div>
          <div class="price">
            <h5>
              {{basic.total_price}}
              <span>万起</span>
            </h5>
            <p>参考总价</p>
          </div>
          <div class="price">
            <h5>
              {{basic.area}}
              <span>m²</span>
            </h5>
            <p>户型面积</p>
          </div>
        </div>-->
        <ul class="huprice">
          <li class="one" v-for="(item, key) in humsgs" :key="key">
            <p>{{ item.title }}</p>
            <p>{{ item.area }}m²</p>
            <p>
              约{{ Number(item.total).toFixed(0) }}万(
              <span>{{ item.single }}元/m²</span>)
            </p>
            <button @click="lookhu(item.id)">户型图</button>
          </li>
        </ul>
        <p class="zhu">注：以上价格为开发商报价，可联系咨询师咨询最低价</p>
        <div class="btns">
          <input
            id="searchprice"
            v-model="baoming"
            type="text"
            placeholder="输入手机号码查询底价"
          />
          <button @click="showother(34)">查底价</button>
        </div>
      </div>
      <div class="line"></div>
      <!-- <div class="hus">
        <h5>主力户型</h5>
        <div class="swiper-hu">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,key) in hus" :key="key">
              <div class="hu-top">
                <img :src="item.img" alt @click="look(item.img)" />
              </div>
              <p class="name">
                {{item.title}}
                <span>{{item.status}}</span>
              </p>
              <p class="type">
                <span class="t1">建面 {{item.area}}m²</span>
                <span>类型 平层</span>
              </p>
              <p class="huprice">
                约
                <span>{{item.price}}</span>万起
              </p>
              <button @click="showbtn(35,'咨询户型底价')">
                <img src="~/assets/zixun.png" alt />咨询户型底价
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="tel">
        <a :href="'tel:'+phone">
          <img src="~/assets/132.png" alt />
        </a>
        <div class="tel-yue">
          <p class="mianfei">
            免费
            <span></span>
          </p>
          <div class="tel-con">
            <h5>您预约，我接送</h5>
            <p>提前预约看房，免费小车上门接送</p>
          </div>
          <div class="tel-btn">
            <button @click="showbtn(36,'预约看房')">预约看房</button>
            <p>
              <span>976人</span>已预约
            </p>
          </div>
        </div>
      </div>-->
      <div class="te" v-if="info.length != 0">
        <h3>
          今日特价房
          <span>{{ hour }}小时前更新</span>
        </h3>
        <span class="teprice">{{ max > 0 ? max : "****" }}</span>
        <img src="~/assets/tit.png" alt class="te-tit" />
        <div class="tabs">
          <table border>
            <thead>
              <tr>
                <th>房号</th>
                <th>
                  面积
                  <span>(m²)</span>
                </th>
                <th>
                  原单价
                  <span>(元)</span>
                </th>
                <th>
                  原总价
                  <span>(元)</span>
                </th>
                <th>现单价(元)</th>
                <th>现总价(元)</th>
                <th>立减(元)</th>
              </tr>
            </thead>
            <tr v-for="(item, key) in info" :key="key">
              <td>{{ item.number }}</td>
              <td>{{ Number(item.area) }}</td>
              <td>
                {{
                  item.original_single > item.single
                    ? item.original_single
                    : "****"
                }}
              </td>
              <td v-if="key <= 3">
                {{
                  item.original_total > item.total
                    ? item.original_total
                    : "****"
                }}
              </td>
              <td v-if="key > 3">***</td>
              <td v-if="key <= 2">
                {{ item.original_single > item.single ? item.single : "****" }}
              </td>
              <td v-if="key > 2">***</td>
              <td v-if="key <= 1">
                {{ item.original_total > item.total ? item.total : "****" }}
              </td>
              <td v-if="key > 1">***</td>
              <td v-if="key == 0">{{ item.diff > 0 ? item.diff : "****" }}</td>
              <td v-if="key != 0">***</td>
            </tr>
          </table>

          <button @click="showbox(85)">咨询特价房</button>
        </div>
        <div class="zhe" @click="showmores" v-if="morebtns">
          <img src="~/assets/huo-down.png" alt />
        </div>
        <div class="bom" v-if="morebtns">
          <van-notice-bar
            color="#FFEA00"
            background="rgba(0,0,0,0)"
            left-icon="volume-o"
            :text="temsg"
            scrollable
          />
          <button @click="showbox(85)">咨询特价房</button>
        </div>
      </div>
      <div class="line" v-if="info.length != 0"></div>
      <div class="hui">
        <h3>
          优惠信息
          <span @click="huomsg = true">
            <img src="~/assets/ques.png" alt /> 活动规则
          </span>
        </h3>
        <div class="hui-con" @click="showbtn(37, '领取优惠')">
          <div class="hui-left">
            <h6>
              最高
              <span>5000</span>元购房优惠
              <i>（{{ endline }}截止）</i>
            </h6>
            <p>售楼处专供{{ host }}平台客户</p>
          </div>
          <div class="hui-right">
            <button @click="showbtn(37, '领取优惠')">领取优惠</button>
            <p>
              <span>{{ huinum }}人</span>已领取
            </p>
          </div>
        </div>
        <div class="hui-con two" @click="showbtn(86, '免费领取')">
          <div class="hui-left">
            <h6>
              免费看房专车券
              <i>（剩余{{ num }}张）</i>
            </h6>
            <p>免费专车1对1服务限时劵</p>
          </div>
          <div class="hui-right">
            <button @click="showbtn(86, '免费领取')">免费领取</button>
            <p>
              <span>{{ huinum1 }}人</span>已领取
            </p>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="new" v-if="dynamics">
        <h3>
          最新消息
          <i>最新</i>
        </h3>
        <p class="new-msg">{{ dynamics.content }}</p>
        <p class="new-time">{{ dynamics.time }}</p>
        <div class="new-btn">
          <p @click="showbtn(38, '变价通知')">
            <img src="~/assets/zhexian.png" />变价通知我
          </p>
          <p @click="showbtn(39, '开盘提醒')">
            <img src="~/assets/msg.png" />开盘提醒我
          </p>
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
        <div class="liao-msg" v-if="tabnum == 1">
          <p v-for="(item, val) in tou" :key="val">{{ item.content }}</p>
        </div>
        <div class="liao-msg" v-if="tabnum == 2">
          <p v-for="(item, val) in ju" :key="val">{{ item.content }}</p>
        </div>
        <button @click="showbtn(41, '领取分析资料')">
          <img src="~/assets/ziliao.png" />领取分析资料
        </button>
      </div>
      <div class="line"></div>
      <div class="newprice">
        <h3>
          最新成交价
          <p>
            已有
            <span>{{ searchnum }}</span
            >人查询
          </p>
        </h3>
        <div id="chart" style="width: 100%; height: 200px"></div>
        <p>2020年</p>
        <div class="tab">
          <table>
            <tbody>
              <tr>
                <th>日期</th>
                <th>成交套数</th>
                <th>成交金额</th>
              </tr>
              <tr v-for="(dd, key) in chengjiao" :key="key">
                <td>{{ dd.date }}</td>
                <td>{{ dd.num }}套</td>
                <td>***万</td>
              </tr>
            </tbody>
          </table>
          <div class="zhe" @click="showmore" v-if="morebtn">
            <img src="~/assets/huo-down.png" alt />
          </div>
        </div>
        <button @click="showbtn(40, '获取最新成交价')">
          <img src="~/assets/geticon.png" />获取最新成交价
        </button>
      </div>
      <div class="line"></div>

      <div class="zixun">
        <h3><span>VIP</span>服务</h3>
        <p class="xun-icon">
          <span> <img src="~/assets/save.png" alt />专业服务 </span>
          <span> <img src="~/assets/icon-path.png" alt />区域解读 </span>
          <span> <img src="~/assets/icon-pin.png" alt />户型分析 </span>
        </p>
        <div class="peo" v-for="(item, key) in staffs" :key="key">
          <img :src="item.head_img" alt />
          <div class="peo-msg">
            <h6>
              {{ item.name }}
              <span>满意度5分</span>
            </h6>
            <div class="peo-type-one" v-if="key == 0">
              <span class="type">服务</span>
              <p>
                <span> <i>1.</i>楼盘户型介绍 </span>
                <span> <i>2.</i>近期活动介绍 </span>
              </p>
            </div>
            <div class="peo-type-one two" v-if="key == 1">
              <span class="type">服务</span>
              <p>
                <span> <i>1.</i>提供优惠折扣 </span>
                <span> <i>2.</i>剩余房源介绍 </span>
              </p>
            </div>
            <div class="peo-type-one three" v-if="key == 2">
              <span class="type">服务</span>
              <p>
                <span> <i>1.</i>特价房申请 </span>
                <span> <i>2.</i>总监级购房优惠 </span>
              </p>
            </div>
          </div>
          <button @click="showbtn(87, '免费咨询')">免费咨询</button>
        </div>
      </div>
      <div class="line"></div>
      <div class="lei">
        <h3>
          雷达图分析
          <span @click="gorule">
            <img src="~/assets/ques.png" alt /> 评分规则
          </span>
        </h3>
        <p>{{ host }}通过多个角度对比（10分制）进行楼盘专业评分</p>
        <div class="lei-con">
          <div class="left">
            <div id="leiecharts"></div>
            <p>
              综合评分：
              <span>{{ mm }}</span>
            </p>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  休闲
                  <span>{{ scores.leisure }}</span>
                </td>
                <td>
                  户型
                  <span>{{ scores.house_types }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  层高
                  <span>{{ scores.height }}</span>
                </td>
                <td>
                  商业
                  <span>{{ scores.business }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  交通
                  <span>{{ scores.traffic }}</span>
                </td>
                <td>
                  医疗
                  <span>{{ scores.medical }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  教育
                  <span>{{ scores.education }}</span>
                </td>
                <td>
                  品质
                  <span>{{ scores.quality }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button @click="showbtn(88, '获取详细分析报告')">
          获取详细分析报告
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
        <div id="panel" style="display: none"></div>
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
      </div>
      <div class="line"></div>
      <div class="msg">
        <h3>
          楼盘信息
          <!-- <span>
            全部信息
            <img src="~/assets/j-more.png" alt />
          </span>-->
        </h3>
        <ul>
          <li>
            <p>
              户型：
              <span>{{ basic.appartment }}</span>
            </p>
            <p>
              类型：
              <span>{{ basic.type }}</span>
            </p>
          </li>
          <li>
            <p>
              开盘：
              <span>{{ basic.opentime }}</span>
            </p>
            <p>
              交房：
              <span>{{ basic.givetime }}</span>
            </p>
          </li>
          <li>
            <p>
              层高：
              <span>{{ basic.height }}米</span>
            </p>
            <p>
              产权：
              <span>{{ basic.year }}年</span>
            </p>
          </li>
          <li>
            <p>
              装修：
              <span>{{ basic.decorate }}</span>
            </p>
            <p>
              车位：
              <span>{{ basic.parking }}</span>
            </p>
          </li>
        </ul>
        <p class="msg-address">
          地址：
          <span>{{ basic.address }}</span>
        </p>
        <button @click="showbtn(89, '获取详细楼盘资料')">
          获取详细楼盘资料
        </button>
      </div>
      <div class="line"></div>
      <div class="other">
        <h3>看了该楼盘的还看了</h3>
        <div class="pro" v-for="(item, key) in recommands" :key="key">
          <router-link :to="'/index/' + item.id + '?other=' + other">
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
                住宅 | {{ item.city }}-{{ item.country.substr(0, 2) }} |
                {{ item.area }}m²
              </p>
              <p class="pro-icon">
                <span class="pro-icon-zhuang">{{ item.decorate }}</span>
                <span
                  class="pro-icon-type"
                  v-for="(item, key) in item.features"
                  :key="key"
                  >{{ item }}</span
                >
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="bomnav">
      <div class="nav-left" @click="gotalk">
        <img src="~/assets/ke_h.png" alt v-if="totalnum <= 0 || !totalnum" />
        <img src="~/assets/talking.gif" alt v-if="totalnum > 0" />
        <span v-if="totalnum <= 0 || !totalnum">1</span>
        <span v-if="totalnum > 0">{{ totalnum }}</span>
        <p v-if="totalnum <= 0 || !totalnum">在线咨询</p>
        <p v-if="totalnum > 0" class="org">有新消息</p>
      </div>
      <a :href="'tel:' + phone">
        <button class="b1"><img src="~/assets/navtel.png" />免费咨询</button>
      </a>
      <button class="b2" @click="showbtn(42, '预约看房')">
        <img src="~/assets/icon.png" />预约看房
      </button>
    </div>
    <a :href="'tel:' + phone">
      <div class="righttel">
        <img src="~/assets/righttel.png" alt />
        免费拨打
      </div>
    </a>
    <div class="topnav" v-if="navtype">
      <img src="~/assets/goback.png" @click="home" />
      <ul>
        <li :class="topnum == 0 ? 'active' : ''" @click="goto(0)">户型</li>
        <li :class="topnum == 1 ? 'active' : ''" @click="goto(1)">动态</li>
        <li :class="topnum == 2 ? 'active' : ''" @click="goto(2)">分析</li>
        <li :class="topnum == 3 ? 'active' : ''" @click="goto(3)">详情</li>
      </ul>
    </div>
    <div class="imgbox" @click="srctype = false" v-show="srctype">
      <img :src="src" alt />
    </div>
    <div class="talkbox" v-if="talktype">
      <img
        src="~/assets/w-del.png"
        alt=""
        class="del"
        @click="talktype = false"
      />
      <div class="peo">
        <div class="left">
          <img :src="staffimg" alt="" />
        </div>
        <div class="right">
          <h3>{{ staffname }} <span>新房咨询</span></h3>
          <p>从业咨询服务6年</p>
        </div>
      </div>
      <div class="msg">
        <div class="li">
          <p class="num">
            <span>{{ usernum }}</span
            >人
          </p>
          <p class="txt">服务客户</p>
        </div>
        <div class="li">
          <p class="num">
            <span>{{ looknum }}</span
            >次
          </p>
          <p class="txt">带看客户</p>
        </div>
        <div class="li">
          <p class="num">
            <span>{{ rate }}</span
            >%
          </p>
          <p class="txt">好评率</p>
        </div>
      </div>
      <div class="btn">
        <button @click="talk">在线咨询</button>
        <button @click="talktype = false">稍后咨询</button>
      </div>
    </div>
    <transition name="change">
      <div class="weiter ts" v-show="wss">
        <div class="t-top">
          <h6>预约看房</h6>
          <p>一键预约看房免费小车上门接送，可带家人一起参观多个热门楼盘</p>
          <img id="w-esc" src="~/assets/w-del.png" alt @click="closeall" />
        </div>
        <div class="t-bottom">
          <div class="t-b-first">
            <input
              class="l-p"
              type="tel"
              placeholder="输入预约手机号码"
              v-model="baoming"
            />
            <p class="w-mg">
              <input
                class="w-mg-c"
                type="checkbox"
                checked
                v-model="check"
              />我已阅读并同意
              <a href="javasript:;">《{{ host }}新房用户协议》</a>
            </p>
            <p class="tishi">请勾选用户协议</p>
            <button class="t-b-btn t-b-btn2 bg_01" id="dingxue" @click="getmsg">
              立即订阅
            </button>
            <p class="w-tit">有专属咨询师为您提供专业的购房意见和1v1服务</p>
          </div>
          <div class="t-b-second">
            <p>
              验证码已发送到
              <span id="ytel">187****4376</span>，请注意查看
            </p>
            <input
              type="text"
              placeholder="请输入验证码"
              id="ma-ll"
              v-model="yanz"
            />
            <button class="port1" @click="yan">确定</button>
            <input type="hidden" id="building_name" value />
            <input type="hidden" value />
            <button class="t-b-scode">获取验证码</button>
          </div>
        </div>
      </div>
    </transition>
    <transition name="change">
      <div class="m-o-succ" v-show="succ">
        <img class="o-esc" src="~/assets/m-esc.png" alt @click="closeall" />
        <img src="~/assets/m-success.png" alt class="o-success" />
        <p id="o_p">已成功订阅最新动态，我们会第一时间通过短信通知您！</p>
        <button id="o_btn" @click="closeall">确定</button>
      </div>
    </transition>
    <transition name="change">
      <div class="huo-msg" v-show="huomsg">
        <div class="msg-con">
          <h4>活动规则</h4>
          <img @click="huomsg = false" src="~/assets/w-del.png" alt />
          <div>
            <p>
              1、本次团购活动以分档累计补发的方案执行，通过{{
                host
              }}网站成交该项目具体团购费用如下所示：
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
              3、核算方式：由开发商或代理公司判定为{{
                host
              }}平台客户即可享受这个优惠
            </p>
            <p>
              4、结算方式：提供已实名的支付宝账户给与您对接的{{
                host
              }}咨询师，规定时间内会将优惠费用打至该账户
            </p>
            <p>
              详细活动方案请致电{{ host }}客服电话：
              <span>400-966-9995</span> 注：活动最终解释权归{{ host }}所有
            </p>
          </div>
        </div>
      </div>
    </transition>
    <div class="m-chang" v-show="ch" @click="closeall"></div>
    <div class="pingbox" v-show="shouping" @click="shouping = false"></div>
    <transition name="change">
      <div class="shouping" v-show="shouping">
        <img
          class="esc"
          @click="shouping = false"
          src="~/assets/pingesc.png"
          alt
        />
        <img class="img" src="~/assets/shouping.png" alt />
        <input type="text" placeholder="请输入您手机号" v-model="baoming" />
        <button @click="shou">领取优惠</button>
        <p class="peonum">187人已领取</p>
        <p class="show-msg">
          活动说明：领取成功后优惠编码将与您手机号绑定，会有工
          作人员与您联系，此优惠不与参团优惠叠加使用
        </p>
        <p class="zhu">注：活动最终解释权归允家所有</p>
        <span v-show="warningbtn">{{ warning }}</span>
      </div>
    </transition>
    <transition name="change">
      <div class="huimg" v-if="huimgtype" @click="huimgtype = false">
        <img :src="huimg" alt />
      </div>
    </transition>
    <div class="zhezhao" v-if="huimgtype"></div>
    <div class="zhezhao" v-show="huomsg"></div>
    <div class="zhezhao" v-if="tetype" @click="closeall"></div>
    <transition name="change">
      <div class="tebox" v-if="tetype">
        <div class="t-top">
          <h6>咨询特价房</h6>
          <p>一键预约看房免费小车上门接送，可带家人一起参观多个热门楼盘</p>
          <img id="w-esc" src="~/assets/w-del.png" alt @click="closeall" />
          <div class="btn" @click="showPicker = true">
            <span>{{ homemsg }}</span>
            <img src="~/assets/j-more.png" alt />
          </div>
        </div>
        <div class="t-bottom">
          <div class="t-b-first">
            <input
              class="l-p"
              type="tel"
              placeholder="输入手机号码"
              v-model="baoming"
            />
            <p class="w-mg">
              <input
                class="w-mg-c"
                type="checkbox"
                checked
                v-model="check"
              />我已阅读并同意
              <a href="javasript:;">《{{ host }}新房用户协议》</a>
            </p>
            <p class="tishi">请勾选用户协议</p>
            <button
              class="t-b-btn t-b-btn2 bg_01"
              id="dingxue"
              @click="getmsgs"
            >
              立即订阅
            </button>
            <p class="w-tit">有专属咨询师为您提供专业的购房意见和1v1服务</p>
          </div>
          <div class="t-b-second">
            <p>
              验证码已发送到
              <span id="ytel">187****4376</span>，请注意查看
            </p>
            <input
              type="text"
              placeholder="请输入验证码"
              id="ma-ll"
              v-model="yanz"
            />
            <button class="port1" @click="yan">确定</button>
            <input type="hidden" id="building_name" value />
            <input type="hidden" value />
            <button class="t-b-scode">获取验证码</button>
          </div>
        </div>
      </div>
    </transition>
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
import { get, msg, verification, top_sure } from "@/api/api";
export default {
  head() {
    return {
      title: this.basic.name + "-" + this.basic.city + "-" + this.basic.country,
      meta: [
        {
          name: "description",
          content:
            this.basic.name + "-" + this.basic.city + "-" + this.basic.country,
        },
        {
          name: "Keywords",
          content:
            this.basic.name + "-" + this.basic.city + "-" + this.basic.country,
        },
      ],
    };
  },
  data() {
    return {
      interval: "",
      totalnum: 0,
      other: "",
      navtype: false,
      topnum: 0,
      tetype: false,
      homemsg: "选择房号",
      columns: [],
      value: "",
      showPicker: false,
      searchnum: 325,
      mm: 8.5,
      morebtns: true,
      imgmsg: ["效果图", "样板房", "交通图"],
      imgmsgnum: 0,
      warningbtn: false,
      prices: [],
      shouping: false,
      mapname: "交通",
      check: true,
      baoming: "",
      yanz: "",
      succ: false,
      wss: false,
      ch: false,
      all: {},
      basic: {},
      hus: [],
      phone: "",
      discounts: {},
      recommands: [],
      dynamics: {},
      staffs: [],
      tabnum: 1,
      chengjiao: [],
      analysis: [],
      ju: [],
      tou: [],
      morebtn: true,
      position: "",
      huomsg: false,
      text: "向右滑",
      swipernum: 0,
      zhe: false,
      id: "",
      url: "",
      wsnum: "",
      src: "",
      srctype: false,
      wsshow: false,
      ws: "",
      sids: "",
      faces: [
        "[微笑]",
        "[嘻嘻]",
        "[哈哈]",
        "[可爱]",
        "[可怜]",
        "[挖鼻]",
        "[吃惊]",
        "[害羞]",
        "[挤眼]",
        "[闭嘴]",
        "[鄙视]",
        "[爱你]",
        "[泪]",
        "[偷笑]",
        "[亲亲]",
        "[生病]",
        "[太开心]",
        "[白眼]",
        "[右哼哼]",
        "[左哼哼]",
        "[嘘]",
        "[衰]",
        "[委屈]",
        "[吐]",
        "[哈欠]",
        "[抱抱]",
        "[怒]",
        "[疑问]",
        "[馋嘴]",
        "[拜拜]",
        "[思考]",
        "[汗]",
        "[困]",
        "[睡]",
        "[钱]",
        "[失望]",
        "[酷]",
        "[色]",
        "[哼]",
        "[鼓掌]",
        "[晕]",
        "[悲伤]",
        "[抓狂]",
        "[黑线]",
        "[阴险]",
        "[怒骂]",
        "[互粉]",
        "[心]",
        "[伤心]",
        "[猪头]",
        "[熊猫]",
        "[兔子]",
        "[ok]",
        "[耶]",
        "[good]",
        "[NO]",
        "[赞]",
        "[来]",
        "[弱]",
        "[草泥马]",
        "[神马]",
        "[囧]",
        "[浮云]",
        "[给力]",
        "[围观]",
        "[威武]",
        "[奥特曼]",
        "[礼物]",
        "[钟]",
        "[话筒]",
        "[蜡烛]",
        "[蛋糕]",
      ],
      min: 0,
      min: 0,
      warning: "",
      endline: "",
      humsgs: [],
      topimgs: [],
      scores: {},
      info: [],
      temsg: "",
      max: 0,
      hour: 2,
      num: 156,
      img_num: 13,
      huimg: "",
      huimgtype: false,
      huinum: 10,
      huinum1: 11,
      city: 1,
      host: "",
      usernum: "",
      looknum: "",
      rate: "",
      stafftel: "",
      staffname: "",
      staffimg: "",
      talktype: false,
    };
  },
  methods: {
    talk() {
      let urlid = this.$route.params.id;
      let id = sessionStorage.getItem(urlid) || 0;
      if (id) {
        sessionStorage.setItem("staffid", id);
        let n = parseInt(sessionStorage.getItem(id));
        let total = parseInt(sessionStorage.getItem("total"));
        total = total - n;
        if (total != 0) {
          sessionStorage.setItem("total", total);
        } else {
          sessionStorage.removeItem("total");
        }
        sessionStorage.removeItem(id);
      } else {
        sessionStorage.removeItem("staffid");
      }
      this.$router.push("/index/talk/" + urlid);
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
          left: "6%",
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
            min: that.min,
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
          splitLine: {
            //配置雷达图的每一圈的网格线颜色
            lineStyle: {
              color: "#E6E6E6",
            },
          },
          nameGap: 3,
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
          radius: 50,
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
                width: 0.6,
              },
            },
            data: [
              {
                name: "能力值",
                value: [
                  that.scores.leisure,
                  that.scores.quality,
                  that.scores.education,
                  that.scores.medical,
                  that.scores.traffic,
                  that.scores.business,
                  that.scores.height,
                  that.scores.house_types,
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
    mmap() {
      this.over = false;
      let that = this;
      let baidu = [that.basic.longitude, that.basic.latitude];
      let img = require("~/assets/mappro.png");
      let pro = that.basic.name;
      let add = that.basic.address;
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
    getmsg() {
      let check = this.check;
      let that = this;
      if (!check) {
        $(".tishi").show();
        return;
      } else {
        $(".tishi").hide();
      }
      var phone = this.baoming;
      var pattern_phone = /^1[3-9][0-9]{9}$/;
      if (phone == "") {
        // $(".l-p").attr("placeholder", "手机号不能为空");
        this.toast("手机号不能为空");
        return;
      } else if (!pattern_phone.test(phone)) {
        // $(".l-p").val("");
        this.toast("手机号码不合法");
        // $(".l-p").attr("placeholder", "手机号码不合法");
        return;
      }
      let data = { phone: phone, channel: 2 };
      let id = this.id;
      let ip = this.ip;
      let city = localStorage.getItem("city");
      let token = localStorage.getItem("token");
      let kid = sessionStorage.getItem("kid");
      let other = sessionStorage.getItem("other");
      let p = this.position;
      let dd = {
        tel: phone,
        project: id,
        ip: ip,
        city: city,
        page: 4,
        position: p,
        token: token,
        kid: kid,
        other: other,
        source: "线上推广1",
      };
      top_sure(dd)
        .then((resp) => {
          if (resp.data.code == 200) {
            msg(data).then((res) => {});
            $(".t-b-first").hide();
            $(".t-b-second").show();
            var time = 60;
            var tel = phone.substr(0, 3) + "****" + phone.substr(7, 11);
            var fn = function () {
              time--;
              if (time > 0) {
                $(".t-b-scode").html("重新发送" + time + "s");
                $(".t-b-scode").attr("disabled", true);
              } else {
                clearInterval(that.interval);
                $(".t-b-scode").html("获取验证码");
                $(".t-b-scode").attr("disabled", false);
              }
            };
            fn();
            that.interval = setInterval(fn, 1000);
            $("#ytel").html(tel);
            // window._agl && window._agl.push(["track", ["success", { t: 3 }]]);
          } else {
            this.toast(resp.data.message);
            this.wss = false;
            this.ch = false;
            this.zhe = false;
            this.succ = false;
            this.tetype = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getmsgs() {
      let check = this.check;
      let that = this;
      if (!check) {
        $(".tishi").show();
        return;
      } else {
        $(".tishi").hide();
      }
      var phone = this.baoming;
      var pattern_phone = /^1[3-9][0-9]{9}$/;
      if (phone == "") {
        // $(".l-p").attr("placeholder", "手机号不能为空");
        this.toast("手机号不能为空");
        return;
      } else if (!pattern_phone.test(phone)) {
        // $(".l-p").val("");
        this.toast("手机号码不合法");
        // $(".l-p").attr("placeholder", "手机号码不合法");
        return;
      }

      let data = { phone: phone, channel: 2 };
      let id = this.id;
      let ip = this.ip;
      let city = localStorage.getItem("city");
      let token = localStorage.getItem("token");
      let kid = sessionStorage.getItem("kid");
      let other = sessionStorage.getItem("other");
      let p = this.position;
      let v = this.value;
      if (v) {
        v = "咨询房号：" + v;
      }
      let dd = {
        tel: phone,
        project: id,
        ip: ip,
        city: city,
        page: 4,
        position: p,
        token: token,
        kid: kid,
        other: other,
        source: "线上推广1",
        remark: v,
      };
      top_sure(dd)
        .then((resp) => {
          if (resp.data.code == 200) {
            msg(data).then((res) => {});
            $(".t-b-first").hide();
            $(".t-b-second").show();
            var time = 60;
            var tel = phone.substr(0, 3) + "****" + phone.substr(7, 11);
            var fn = function () {
              time--;
              if (time > 0) {
                $(".t-b-scode").html("重新发送" + time + "s");
                $(".t-b-scode").attr("disabled", true);
              } else {
                clearInterval(that.interval);
                $(".t-b-scode").html("获取验证码");
                $(".t-b-scode").attr("disabled", false);
              }
            };
            fn();
            that.interval = setInterval(fn, 1000);
            $("#ytel").html(tel);
            // window._agl && window._agl.push(["track", ["success", { t: 3 }]]);
          } else {
            this.toast(resp.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    yan() {
      var ma = this.yanz;
      if (!ma) {
        this.toast("验证码不能为空");
        // $("#ma-ll").attr("placeholder", "验证码不能为空");
        return;
      }
      let tel = this.baoming;
      let that = this;
      verification({ phone: tel, code: ma, channel: 2 })
        .then((resp) => {
          if (resp.data.code == 200) {
            that.change = false;
            that.succ = true;
            that.wss = false;
            $(".t-b-first").show();
            $(".t-b-second").hide();
            window._agl && window._agl.push(["track", ["success", { t: 3 }]]);
          } else {
            $("#ma-ll").val("");
            $("#ma-ll").attr("placeholder", "验证码不正确");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showbtn(position, type) {
      let that = this;
      that.position = position;
      this.wss = true;
      this.ch = true;
      if (type == "变价通知") {
        $(".weiter .t-top h6").html(type);
        $(".weiter .t-top p").html(
          "价格变动这么快？订阅楼盘变价通知，楼盘变价我们将第一时间通知您"
        );
      } else if (type == "开盘提醒") {
        $(".weiter .t-top h6").html(type);
        $(".weiter .t-top p").html(
          "一键订阅最新开盘通知，我们会第一时间通知,不再错过开盘时间"
        );
      } else if (type == "预约看房") {
        $(".weiter .t-top h6").html(type);
        $(".weiter .t-top p").html(
          "提前预约看房，我们将提供免费专车接送和专业楼盘讲解"
        );
      } else if (type == "我要优惠") {
        $(".weiter .t-top h6").html("报名获取考察旅游名额");
        $(".weiter .t-top p").html("一键获取亚热带三天两夜游的名额！");
      } else if (type == "咨询服务") {
        $(".weiter .t-top h6").html(type);
        $(".weiter .t-top p").html("立即报名，专业人员为你解惑!");
      } else if (type == "订阅最新动态") {
        $(".weiter .t-top h6").html(type);
        $(".weiter .t-top p").html(
          "订阅最新动态，楼盘最新情报抢先知道，帮您找准买房好时机"
        );
      } else if (type == "获取详细周边配套") {
        $(".weiter .t-top h6").html("获取详细周边配套");
        $(".weiter .t-top p").html(
          "附近有学区或商业街吗？想了解更多周边配套信息？立即获取全面周边配套详解"
        );
      } else if (type == "领取优惠") {
        $(".weiter .t-top h6").html("领取优惠");
        $(".weiter .t-top p").html(
          "专享限时优惠折扣，家园专场推出，早抢早优惠"
        );
      } else if (type == "获取最新成交价") {
        $(".weiter .t-top h6").html("获取最新成交价");
        $(".weiter .t-top p").html(
          "获取最新成交价格，看看房友都是什么价格买的房"
        );
      } else if (type == "咨询户型底价") {
        $(".weiter .t-top h6").html("咨询户型底价");
        $(".weiter .t-top p").html(
          "好楼盘户型是关键，咨询户型底价，安安心心买房"
        );
      } else if (type == "领取免费资料") {
        $(".weiter .t-top h6").html("获取详细楼盘资料");
        $(".weiter .t-top p").html(
          "一键订阅最新详细楼盘资料，获取更多楼盘分析资料"
        );
      } else if (type == "领取免费地图") {
        $(".weiter .t-top h6").html("领取免费地图");
        $(".weiter .t-top p").html(
          "领取电子楼盘地图，优质地段、快捷交通、一眼明了"
        );
      } else if (type == "最新房价趋势解读") {
        $(".weiter .t-top h6").html("最新房价趋势解读");
        $(".weiter .t-top p").html("获取最近房价行情，抓住买房投资好时机");
      } else if (type == "获取高清配套图") {
        $(".weiter .t-top h6").html(type);
        $(".weiter .t-top p").html("一键领取高清图，楼盘图片清晰看！");
      } else if (type == "领取分析资料") {
        $(".weiter .t-top h6").html("领取分析资料");
        $(".weiter .t-top p").html(
          "最新楼盘分析资料，看看房产专家对楼盘的投资分析和宜居分析解读"
        );
      } else if (type == "免费领取") {
        $(".weiter .t-top h6").html("抢免费专车票");
        $(".weiter .t-top p").html("精准匹配房源，免费接送一次看完好房");
      } else if (type == "获取详细分析报告") {
        $(".weiter .t-top h6").html("获取详细分析报告");
        $(".weiter .t-top p").html(
          "向允家咨询师免费领取分析报告,内附有购房流程全盘解读"
        );
      } else if (type == "获取详细楼盘资料") {
        $(".weiter .t-top h6").html("获取详细楼盘资料");
        $(".weiter .t-top p").html(
          "获取最新详细楼盘资料，获取更多楼盘分析资料"
        );
      } else if (type == "免费咨询") {
        $(".weiter .t-top h6").html("免费咨询");
        $(".weiter .t-top p").html(
          "20分内回应，一对一专属于服务，了解更多有关房源信息"
        );
      } else if (type == "一键咨询") {
        $(".weiter .t-top h6").html("一键咨询");
        $(".weiter .t-top p").html(
          "20分内回应，一对一专属于服务，了解更多有关房源信息"
        );
      }
    },
    closeall() {
      this.wss = false;
      this.ch = false;
      this.zhe = false;
      this.succ = false;
      this.tetype = false;
      $(".t-b-first").show();
      $(".t-b-second").hide();
      clearInterval(this.interval);
    },
    close1() {
      this.wss = false;
      this.ch = false;
      $(".t-b-first").show();
      $(".t-b-second").hide();
    },
    async start() {
      this.id = this.$route.params.id.replace(/[^0-9]/gi, "");
      let id = this.id;
      sessionStorage.setItem('proid',id)
      if (id == 785) {
        this.$router.push("/index/1405");
      }
      let url = window.location.href;
      url = url.split("?")[1];
      if (url && url.indexOf("kid") !== -1) {
        url = url.split("&");
        let kid = this.$route.query.kid;
        let other = this.$route.query.other;
        sessionStorage.setItem("kid", kid);
        sessionStorage.setItem("other", other);
      }
      let other = sessionStorage.getItem("other");
      this.other = other;
      if (id != 785) {
        await get(id, other).then((res) => {
          this.all = res.data;
          for (let val of this.all.customers) {
            let n = val.mobile.substr(0, 3) + "****" + val.mobile.substr(7);
            val.mobile = n;
            if (val.time == null) {
              val.min = 12;
              return;
            }
            let time = new Date(val.time.replace(/-/g, "/"));
            let k = new Date().getTime() - new Date(time).getTime();
            let m = (k / 1000 / 60) % 60;
            val.min = parseInt(m);
          }
          this.basic = res.data.data.basic;
          sessionStorage.setItem('semcity',this.basic.pid)
          this.img_num = res.data.data.basic.img_num;
          this.basic.total_price = String(this.basic.total_price).split("-")[0];
          this.hus = res.data.data.departments;
          this.phone = res.data.common.phone;
          this.discounts = res.data.discounts;
          // this.endline = res.data.discounts.endline.substr(6,4)
          let endDate = new Date(res.data.discounts.endline.replace(/-/g, "/"));
          let date = new Date(endDate);
          var mon = date.getMonth() + 1;
          var day = date.getDate();
          this.endline = `${mon}月${day}日`;
          this.recommands = res.data.recommands;
          this.dynamics = res.data.data.dynamics.datas[0];
          this.staffs = res.data.staffs;
          this.chengjiao = res.data.data.deals;
          setTimeout(() => {
            if (!localStorage.getItem("wstoken")) {
              this.wsshow = true;
            }
          }, 5000);
          // let max = 0;
          // let min = 500000;
          for (let val in this.chengjiao) {
            this.prices[val] = [
              this.chengjiao[val].date.substr(5),
              this.chengjiao[val].money,
            ];
            /* if (this.chengjiao[val].money > max) {
            max = this.chengjiao[val].money;
          }
          if (this.chengjiao[val].money < min) {
            min = this.chengjiao[val].money;
          } */
          }
          // console.log(this.prices)
          // this.min = min - 10;
          // this.max = Math.ceil(parseInt(max) + 10);
          this.analysis = res.data.data.analysis;

          for (let val of res.data.data.analysis) {
            if (val.type == 1) {
              this.tou.push(val);
            } else if (val.type == 2) {
              this.ju.push(val);
            }
          }
          this.ip = ip_arr["ip"];
          let newurl = url.split("?")[0];
          let uuid = this.$route.query.uuid;
          let name = this.basic.name;
          let city = this.city;
          newurl += `?proid=${id}&uuid=${uuid}&city=${city}`;
          newurl = encodeURIComponent(newurl);
          this.url = newurl;
          this.humsgs = res.data.data.basic.house_types;
          this.city = res.data.data.basic.pid;
          this.topimgs = res.data.data.basic.imgs;
          this.scores = res.data.scores;
          let m = 0;
          let arr = Object.values(res.data.scores);
          for (let i = 0; i < arr.length; i++) {
            m += Number(arr[i]);
          }
          m = m / arr.length;
          this.mm = m.toFixed(1);
          this.temsg = res.data.discount_info.dynamic;
          this.info = res.data.discount_info.info;
          for (let val of this.info) {
            this.columns.push(val.number);
          }
          this.max = res.data.discount_info.max;
        });
      }
    },
    showmore() {
      this.morebtn = false;
      $(".tab").css("height", "auto");
    },
    showmores() {
      this.morebtns = false;
      $(".tabs").css({ height: "auto", "padding-bottom": "1.25rem" });
      $(".te").css("height", "auto");
    },
    onSuccess() {
      let that = this;
      let id = this.id;
      let ip = this.ip;
      let city = localStorage.getItem("city");
      let token = localStorage.getItem("token");
      let kid = sessionStorage.getItem("kid");
      let other = sessionStorage.getItem("other");
      let p = this.position;
      let phone = this.baoming;
      let dd = {
        tel: phone,
        project: id,
        ip: ip,
        city: city,
        page: 4,
        position: p,
        token: token,
        kid: kid,
        other: other,
        source: "线上推广1",
      };
      top_sure(dd)
        .then((resp) => {
          if (resp.data.code == 200) {
            that.ch = false;
            that.zhe = false;
            window._agl && window._agl.push(["track", ["success", { t: 3 }]]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showother(type) {
      let that = this;
      this.position = type;
      var phone = this.baoming;
      var pattern_phone = /^1[3-9][0-9]{9}$/;
      if (phone == "") {
        $("#searchprice").attr("placeholder", "手机号不能为空");
        return;
      } else if (!pattern_phone.test(phone)) {
        $("#searchprice").val("");
        $("#searchprice").attr("placeholder", "手机号码不合法");
        return;
      }
      $(".weiter .t-top h6").html("查询低价");
      $(".weiter .t-top p").html("向售楼处咨询底价，特价房源不错过");
      let data = { phone: phone, channel: 2 };
      let id = this.id;
      let ip = this.ip;
      let city = localStorage.getItem("city");
      let token = localStorage.getItem("token");
      let kid = sessionStorage.getItem("kid");
      let other = sessionStorage.getItem("other");
      let p = this.position;
      let dd = {
        tel: phone,
        project: id,
        ip: ip,
        city: city,
        page: 4,
        position: p,
        token: token,
        kid: kid,
        other: other,
        source: "线上推广1",
      };
      top_sure(dd)
        .then((resp) => {
          if (resp.data.code == 200) {
            that.wss = true;
            that.ch = true;
            msg(data).then((res) => {});
            $(".t-b-first").hide();
            $(".t-b-second").show();
            var time = 60;
            var tel = phone.substr(0, 3) + "****" + phone.substr(7, 11);
            var fn = function () {
              time--;
              if (time > 0) {
                $(".t-b-scode").html("重新发送" + time + "s");
                $(".t-b-scode").attr("disabled", true);
              } else {
                clearInterval(that.interval);
                $(".t-b-scode").html("获取验证码");
                $(".t-b-scode").attr("disabled", false);
              }
            };
            fn();
            that.interval = setInterval(fn, 1000);
            $("#ytel").html(tel);
            // window._agl && window._agl.push(["track", ["success", { t: 3 }]]);
          } else {
            this.baoming = "";
            this.toast(resp.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    gotalk() {
      //   let url = window.location.href+'&id='+this.$route.params.id;
      // window.location.href =
      //   "http://testim.jy1980.com/hangzhou/talk?reconnect=" + this.url+'&uuid='+this.$route.query.uuid;
      //   if(this.host == '易得房') {
      //     window.location.href =
      //     "http://mobile.edefang.net/hangzhou/talk?reconnect=" + this.url+'&uuid='+this.$route.query.uuid+'&proid='+this.$route.params.id;
      //   }else {
      //     window.location.href =
      //     "http://m.jy1980.com/hangzhou/talk?reconnect=" + this.url+'&uuid='+this.$route.query.uuid+'&proid='+this.$route.params.id;
      //   }
      let urlid = this.$route.params.id;
      let id = sessionStorage.getItem(urlid);
      if (id) {
        sessionStorage.setItem("staffid", id);
        let n = parseInt(sessionStorage.getItem(id));
        let total = parseInt(sessionStorage.getItem("total"));
        total = total - n;
        if (total != 0) {
          sessionStorage.setItem("total", total);
        } else {
          sessionStorage.removeItem("total");
        }
        sessionStorage.removeItem(id);
      }
      this.$router.push("/index/talk/" + urlid);
      // console.log("http://localhost:3000/hangzhou/talk?reconnect=" + this.url)
      // return
      // window.location.href =
      //   "http://m.jy8006.com/hangzhou/talk?reconnect=" + this.url;
    },
    close2() {
      this.wss = false;
      this.ch = false;
      this.zhe = false;
      this.succ = false;
      $(".t-b-first").show();
      $(".t-b-second").hide();
    },
    createwebsocket() {
      try {
        if ("WebSocket" in window) {
          this.ws = new WebSocket("ws://39.98.227.114:9501");
        } else if ("MozWebSocket" in window) {
          this.ws = new MozWebSocket("ws://39.98.227.114:9501");
        }
        this.init();
      } catch (e) {
        console.log(e);
      }
    },
    wsstart() {
      let that = this;
      for (let val in that.faces) {
        that.faces[val] = {
          img: require(`~/assets/${val}.gif`),
          con: that.faces[val],
        };
      }
      this.sids = [];

      var indexedDB =
        window.indexedDB ||
        window.webkitIndexedDB ||
        window.mozIndexedDB ||
        window.msIndexedDB;
      var db;
      if (!indexedDB) {
        alert("不支持");
      }
      let request = indexedDB.open("staffmsg", 2);
      request.onupgradeneeded = function (e) {
        db = e.target.result;
        if (!db.objectStoreNames.contains("staffmsg")) {
          var objectStore = db.createObjectStore("staffmsg", {
            keyPath: "id",
            autoIncrement: true,
          });
          objectStore.createIndex("sid", "sid", {
            unique: true,
          });
          objectStore.createIndex("con", "con", {
            unique: false,
          });
          objectStore.createIndex("img", "img", {
            unique: false,
          });
          objectStore.createIndex("name", "name", {
            unique: false,
          });
          objectStore.createIndex("time", "time", {
            unique: false,
          });
          objectStore.createIndex("buildname", "buildname", {
            unique: false,
          });
        }
      };
      request.onsuccess = function (e) {
        db = request.result;
        that.db = request.result;
        var transaction = db.transaction("staffmsg", "readwrite");
        var store = transaction.objectStore("staffmsg");
        // 取出所有数据
        var all = store.getAll();
        all.onsuccess = function () {
          that.cons = all.result;
          for (let val of that.cons) {
            that.sids.push(val.sid);
          }
        };
      };
      request.onerror = function (e) {
        console.log("false");
      };
    },
    init() {
      let that = this;
      this.ws.onopen = function (event) {
        let options = {
          //要发送的数据
          class: "Info",
          action: "project",
          content: {
            token: localStorage.getItem("wstoken"),
            Id: that.basic.id,
          },
        };
        that.ws.send(JSON.stringify(options));
      };
      this.ws.onmessage = function (event) {
        if (event.data != "connect success") {
          let data = JSON.parse(event.data);
          if (data.code != 500) {
            if (data.action == "talk") {
              that.wsshow = true;
              that.wsnum = Number(that.wsnum) + 1;
              sessionStorage.setItem(that.basic.id, data.content.id);
              let name = "小" + data.content.username.substr(0, 1);
              sessionStorage.setItem("staffname", name);
              if (that.sids.indexOf(data.content.id) != -1) {
                var transaction = that.db.transaction("staffmsg", "readwrite");
                var store = transaction.objectStore("staffmsg");
                var index = store.index("sid");
                var search = index.get(data.content.id);
                var myDate = new Date();
                let time = myDate.toLocaleTimeString();
                let timenum = Date.parse(new Date());
                search.onsuccess = function (e) {
                  let result = e.target.result;
                  if (result) {
                    result.txt = data.content.content;
                    result.time = time;
                    result.num = timenum;
                    result.type = 1;
                    store.put(result);
                  }
                };

                var indexedDB =
                  window.indexedDB ||
                  window.webkitIndexedDB ||
                  window.mozIndexedDB ||
                  window.msIndexedDB;
                var db;
                if (!indexedDB) {
                  alert("不支持");
                }
                let img = data.content.avatar;
                img = decodeURIComponent(img);
                let request = indexedDB.open("staff" + data.content.id, 2);
                request.onsuccess = function (e) {
                  db = request.result;
                  let transaction = db.transaction(
                    "staff" + data.content.id,
                    "readwrite"
                  );
                  let msg = data.content.content;
                  if (msg.split("face").length !== 0) {
                    let index = msg.indexOf("face");
                    while (index != -1) {
                      var reg = /face\[[\u4e00-\u9fa5_a-zA-Z]+\]/s;
                      var match = msg.match(reg);
                      if (match) {
                        var title = match[0].replace("face", "");
                      }
                      for (let val in that.faces) {
                        if (that.faces[val].con == title) {
                          let img = require(`~/assets/${val}.gif`);
                          let h = `<img src="${img}">`;
                          msg = msg.replace(`face${title}`, h);
                        }
                      }
                      index = msg.indexOf("face", index + 4);
                    }
                  }
                  let store = transaction.objectStore(
                    "staff" + data.content.id
                  );
                  sessionStorage.setItem("lastone", msg);
                  let addPersonRequest = store.add({
                    className: "worker",
                    con: msg,
                    img: img,
                    name1: "worker-left",
                    name2: "worker-right",
                  });
                };
              } else {
                var transaction = that.db.transaction("staffmsg", "readwrite");
                var store = transaction.objectStore("staffmsg");
                let img = data.content.avatar;
                img = decodeURIComponent(img);
                var myDate = new Date();
                let time = myDate.toLocaleTimeString();
                let timenum = Date.parse(new Date());
                let staff = {};
                staff.name = "小" + data.content.username.substr(0, 1);
                staff.sid = data.content.id;
                staff.img = img;
                staff.time = time;
                staff.buildname = sessionStorage.getItem("buildname");
                staff.projectid = sessionStorage.getItem("projectid");
                staff.txt = data.content.content;
                staff.type = 1;
                staff.num = timenum;
                let otheradd = store.add(staff);
                otheradd.onsuccess = function () {
                  var index =
                    window.indexedDB ||
                    window.webkitIndexedDB ||
                    window.mozIndexedDB ||
                    window.msIndexedDB;
                  let req = index.open("staff" + data.content.id, 2);
                  req.onupgradeneeded = function (e) {
                    let db = e.target.result;
                    if (
                      !db.objectStoreNames.contains("staff" + data.content.id)
                    ) {
                      let objectStore = db.createObjectStore(
                        "staff" + data.content.id,
                        {
                          keyPath: "id",
                          autoIncrement: true,
                        }
                      );
                      objectStore.createIndex("classname", "classname", {
                        unique: true,
                      });
                      objectStore.createIndex("con", "con", {
                        unique: false,
                      });
                      objectStore.createIndex("img", "img", {
                        unique: false,
                      });
                      objectStore.createIndex("name1", "name1", {
                        unique: false,
                      });
                      objectStore.createIndex("name2", "name2", {
                        unique: false,
                      });
                    }
                  };
                  req.onsuccess = function (e) {
                    let db = req.result;
                    let tran = db.transaction(
                      "staff" + data.content.id,
                      "readwrite"
                    );
                    let store = tran.objectStore("staff" + data.content.id);

                    let addPersonRequest = store.add({
                      className: "worker",
                      con: data.content.content,
                      img: img,
                      name1: "worker-left",
                      name2: "worker-right",
                    });
                    addPersonRequest.onsuccess = function () {
                      that.wsstart();
                    };
                  };
                };
              }
            }
          }
        }
      };
    },
    send(msg) {
      let token = localStorage.getItem("wstoken");
      let sid = sessionStorage.getItem(sessionStorage.getItem("projectid"))
        ? sessionStorage.getItem("sid")
        : 0;
      let id = sessionStorage.getItem("projectid");
      let actions = {
        //要发送的数据
        class: "Chat",
        action: "send",
        content: { staff_id: sid, msg: msg, token: token, project: id },
      };
      sessionStorage.setItem("lastone", msg);
      let dd = JSON.stringify(actions);
      this.ws.send(dd);
    },
    getpro(id) {
      let options = {
        //要发送的数据
        class: "Info",
        action: "project",
        content: {
          token: localStorage.getItem("wstoken"),
          Id: id,
        },
      };
      this.ws.send(JSON.stringify(options));
    },
    home() {
      let city = this.basic.pin;
      if (this.host == "易得房") {
        if (localStorage.getItem("uuid")) {
          let uuid = localStorage.getItem("uuid");
          if (sessionStorage.getItem("kid")) {
            let other = sessionStorage.getItem("other");
            let kid = sessionStorage.getItem("kid");
            if (window.location.host.indexOf("edefang") != -1) {
              window.location.href = `http://mobile.edefang.net/${city}?kid=${kid}&other=${other}&uuid=${uuid}`;
            } else {
              window.location.href = `http://mobile.edefang.net/${city}?kid=${kid}&other=${other}&uuid=${uuid}`;
            }
          } else {
            if (window.location.host.indexOf("edefang") != -1) {
              window.location.href = `http://mobile.edefang.net/${city}?uuid=${uuid}`;
            } else {
              window.location.href = `http://mobile.edefang.net/${city}?uuid=${uuid}`;
            }
          }
        } else {
          if (sessionStorage.getItem("kid")) {
            let other = sessionStorage.getItem("other");
            let kid = sessionStorage.getItem("kid");
            if (window.location.host.indexOf("edefang") != -1) {
              window.location.href = `http://mobile.edefang.net/${city}?kid=${kid}&other=${other}`;
            } else {
              window.location.href = `http://mobile.edefang.net/${city}?kid=${kid}&other=${other}`;
            }
          } else {
            if (window.location.host.indexOf("edefang") != -1) {
              window.location.href = `http://mobile.edefang.net/${city}`;
            } else {
              window.location.href = `http://mobile.edefang.net/${city}`;
            }
          }
        }
      } else {
        if (localStorage.getItem("uuid")) {
          let uuid = localStorage.getItem("uuid");
          if (sessionStorage.getItem("kid")) {
            let other = sessionStorage.getItem("other");
            let kid = sessionStorage.getItem("kid");
            if (window.location.host.indexOf("edefang") != -1) {
              window.location.href = `http://m.jy1980.com/${city}?kid=${kid}&other=${other}&uuid=${uuid}`;
            } else {
              window.location.href = `http://m.jy1980.com/${city}?kid=${kid}&other=${other}&uuid=${uuid}`;
            }
          } else {
            if (window.location.host.indexOf("edefang") != -1) {
              window.location.href = `http://m.jy1980.com/${city}?uuid=${uuid}`;
            } else {
              window.location.href = `http://m.jy1980.com/${city}?uuid=${uuid}`;
            }
          }
        } else {
          if (sessionStorage.getItem("kid")) {
            let other = sessionStorage.getItem("other");
            let kid = sessionStorage.getItem("kid");
            if (window.location.host.indexOf("edefang") != -1) {
              window.location.href = `http://m.jy1980.com/${city}?kid=${kid}&other=${other}`;
            } else {
              window.location.href = `http://m.jy1980.com/${city}?kid=${kid}&other=${other}`;
            }
          } else {
            if (window.location.host.indexOf("edefang") != -1) {
              window.location.href = `http://m.jy1980.com/${city}`;
            } else {
              window.location.href = `http://m.jy1980.com/${city}`;
            }
          }
        }
      }
    },
    look(src) {
      this.src = src;
      this.srctype = true;
    },
    shou() {
      let tel = this.baoming;
      let that = this;
      var pattern_tel = /^1[3-9][0-9]{9}$/;
      if (tel == "") {
        this.warning = "请输入手机号";
        this.warningbtn = true;
        setTimeout(() => {
          that.warningbtn = false;
        }, 1500);
        return;
      } else if (!pattern_tel.test(tel)) {
        this.warning = "请输入正确的手机号";
        this.warningbtn = true;
        setTimeout(() => {
          that.warningbtn = false;
        }, 1500);
        return;
      }
      let ip = this.ip;
      let c = localStorage.getItem("city");
      let p = that.page;
      let id = that.id;
      let kid = sessionStorage.getItem("kid");
      let other = sessionStorage.getItem("other");
      let normal = {
        ip: ip,
        tel: tel,
        city: c,
        position: 52,
        page: 4,
        project: id,
        kid: kid,
        other: other,
        source: "线上推广1",
      };
      top_sure(normal).then((res) => {
        if (res.data.code == 200) {
          that.warning = "领取成功";
          that.warningbtn = true;
          setTimeout(() => {
            that.warningbtn = false;
            that.shouping = false;
          }, 1500);
          window._agl && window._agl.push(["track", ["success", { t: 3 }]]);
        }
      });
    },
    setimgmsgnum(e) {
      this.imgmsgnum = e;
      if (e == 0) {
        this.topimgs = this.basic.imgs;
      } else if (e == 1) {
        this.topimgs = this.basic.imgs_sample;
      } else {
        this.topimgs = this.basic.imgs_traffic;
      }
    },
    gorule() {
      let id = this.$route.params.id;
      this.$router.push(`/index/rule`);
    },
    lookhu(id) {
      let that = this;
      for (let i = 0; i < that.humsgs.length; i++) {
        if (that.humsgs[i].id == id) {
          that.huimg = that.humsgs[i].img;
          that.huimgtype = true;
        }
      }
    },
    onConfirm(value) {
      this.value = value;
      this.homemsg = value;
      this.showPicker = false;
    },
    showbox(id) {
      this.tetype = true;
      this.position = id;
    },
    goto(n) {
      if (n == 0) {
        $("html").animate({ scrollTop: 300 }, 500);
      } else if (n == 1) {
        $("html").animate({ scrollTop: 1100 }, 500);
      } else if (n == 2) {
        $("html").animate({ scrollTop: 1300 }, 500);
      } else if (n == 3) {
        $("html").animate({ scrollTop: 3000 }, 500);
      }
    },
    putcard() {
      let urlid = this.$route.params.id;
      let id = sessionStorage.getItem(urlid);
      let host = this.$store.state.hostname;
      let pp = {
        controller: "Staff",
        action: "info",
        params: { uuid: id, host: host },
      };
      if (id) {
        this.ws.send(JSON.stringify(pp));
      }
    },
  },
  mounted() {
    let that = this;
    $("#foott").css("display", "none");
    this.start();
    let url = window.location.href;
    let ip = ip_arr["ip"];
    let pro = this.$route.params.id;
    
    let pp = {
      controller: "Info",
      action: "register",
      params: {
        city: this.basic.pid,
        project: pro,
        ip: ip,
        url: url,
        uuid: localStorage.getItem("uuid"),
        host: this.$store.state.hostname,
      },
    };
    this.$store.state.ws.send(JSON.stringify(pp));
    if (
      sessionStorage.getItem("total") &&
      sessionStorage.getItem("total") !== "NaN"
    ) {
      this.totalnum = parseInt(sessionStorage.getItem("total"));
    }
    this.ws = this.$store.state.ws;
    this.$store.state.ws.onmessage = function (event) {
      let data = JSON.parse(event.data);
      if (data.action == 301) {
        let urlid = that.$route.params.id;
        if (!sessionStorage.getItem(urlid)) {
          console.log(sessionStorage.getItem(urlid), urlid);
          sessionStorage.setItem(urlid, data.fromUserName);
          that.putcard();
        } else {
          if (sessionStorage.getItem(data.fromUserName)) {
            sessionStorage.setItem(
              data.fromUserName,
              parseInt(sessionStorage.getItem(data.fromUserName)) + 1
            );
          } else {
            sessionStorage.setItem(data.fromUserName, 1);
          }
          if (
            sessionStorage.getItem("total") &&
            sessionStorage.getItem("total") != "NaN"
          ) {
            sessionStorage.setItem(
              "total",
              parseInt(sessionStorage.getItem("total")) + 1
            );
            that.totalnum = parseInt(sessionStorage.getItem("total"));
          } else {
            sessionStorage.setItem("total", 1);
            that.totalnum = 1;
          }
        }
      } else if (data.action == 206) {
        that.usernum = data.num.user_num;
        that.looknum = data.num.look_num;
        that.rate = data.num.rate;
        that.stafftel = data.staff.tel;
        that.staffname = data.staff.name;
        that.staffimg = data.staff.img;
        that.talktype = true;
      } else if (data.action == 302) {
        sessionStorage.setItem("currentid", data.sid);
      }
    };
    if (window.location.href.indexOf("jy1980.com") != -1) {
      this.host = "家园";
    } else {
      this.host = "易得房";
    }
    if (!localStorage.getItem("uuid")) {
      var timestamp = Date.parse(new Date());
      var $chars =
        "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      var maxPos = $chars.length;
      var pwd = "";
      let i = 0;
      for (i = 0; i < 12; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      timestamp = pwd + timestamp;
      localStorage.setItem("uuid", timestamp);
      this.$store.dispatch("setuuid", timestamp);
    }
    // if (!sessionStorage.getItem(that.basic.id)) {
    //   setTimeout(() => {
    //     this.shouping = true;
    //     sessionStorage.setItem(that.basic.id, 1);
    //   }, 5000);
    // }
    // this.wsstart()
    // this.createwebsocket()
    // this.swipernum = 0;
  },
  updated() {
    if (this.swipernum == 0 && this.basic.appointment_num) {
      if (localStorage.getItem(this.$route.params.id)) {
        this.hour = localStorage.getItem(this.$route.params.id);
      } else {
        this.hour = Math.floor(Math.random() * 10) + 1;
        localStorage.setItem(this.$route.params.id, this.hour);
      }
      if (localStorage.getItem(this.$route.params.id + "time")) {
        this.num = localStorage.getItem(this.$route.params.id + "time");
      } else {
        this.num = Math.floor(Math.random() * 300) + 100;
        localStorage.setItem(this.$route.params.id + "time", this.num);
      }
      if (localStorage.getItem(this.$route.params.id + "num")) {
        this.searchnum = localStorage.getItem(this.$route.params.id + "num");
      } else {
        this.searchnum = Math.floor(Math.random() * 400) + 200;
        localStorage.setItem(this.$route.params.id + "num", this.searchnum);
      }
      let that = this;
      var date = new Date();
      this.huinum =
        date.getDate() +
        (date.getMonth() + 1) * 10 +
        this.basic.appointment_num;
      this.huinum1 = this.huinum + Number(that.hour);
      var mySwiper1 = new Swiper(".swiper-hu", {
        slidesPerView: 2.08,
        spaceBetween: 10,
        observer: true,
        slidesOffsetAfter: 2,
        resistanceRatio: 0.1,
        slidesOffsetBefore: 14,
      });
      var mySwiper = new Swiper(".top-msg", {
        direction: "vertical", // 垂直切换选项
        autoplay: true,
      });
      var mySwiper2 = new Swiper(".swiper-topimg", {
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        resistanceRatio: 0.1,
        autoplay: true,
      });
      that.mmap();
      this.$nextTick(() => {
        this.drawlei();
        this.drawline();
      });
      $(window).scroll(function () {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= 300) {
          that.navtype = true;
          if (scrollTop >= 300 && scrollTop < 1100) {
            that.topnum = 0;
          }
          if (scrollTop >= 1100 && scrollTop < 1300) {
            that.topnum = 1;
          }
          if (scrollTop >= 1300 && scrollTop < 3000) {
            that.topnum = 2;
          }
          if (scrollTop >= 3000) {
            that.topnum = 3;
          }
        } else {
          that.navtype = false;
        }
      });
      this.swipernum = 1;
    }
  },
  destroyed() {
    // this.ws.close();
  },
};
</script>
<style lang="less" scoped>
.build {
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
      opacity: 0.2;
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
      bottom: 0.75rem;
      z-index: 5;
    }
    .taps {
      width: 8.625rem;
      height: 1.25rem;
      border-radius: 0.625rem;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      bottom: 0.75rem;
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
  .all {
    .incro {
      .top {
        position: relative;
        padding: 0 4%;
        h3 {
          color: #1f1f1f;
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.75rem;
          margin-top: 1.375rem;
        }
        p {
          span {
            margin-right: 0.375rem;
            padding: 0.1875rem 0.375rem;
            font-size: 0.75rem;
          }
          .isshou {
            color: #2ac66d;
            background-color: #f0faf1;
          }
          .zhuangxiu {
            background-color: #f0f6fa;
            color: #3eacf0;
          }
          .rail {
            background-color: #f5f5f5;
            color: #7d7d80;
          }
          .hui {
            background-color: #faf2f0;
            color: #ff5543;
          }
        }
        .shou {
          position: absolute;
          padding-left: 0.9375rem;
          border-left: 0.03125rem solid #d9d9d9;
          top: 0;
          right: 0;
          img {
            width: 1.3125rem;
            margin-bottom: 0.375rem;
          }
          p {
            color: #919499;
            font-size: 0.625rem;
            text-align: center;
          }
        }
      }
      .address {
        padding: 0 4%;
        color: #949494;
        font-size: 0.875rem;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .top-msg {
        width: 21.5625rem;
        height: 3.125rem;
        background-color: rgba(255, 136, 56, 1);
        display: flex;
        align-items: center;
        margin-bottom: 1.4rem;
        border-radius: 0.375rem;
        margin-left: 4%;
        box-shadow: 0.03125rem 0.09375rem 0.5625rem 0px rgba(255, 118, 26, 0.48);
        .msg-con {
          color: #fff;
          font-size: 0.875rem;
          margin-left: 1rem;
          margin-right: 3.625rem;
        }
        .msg-btn {
          color: #fff;
          margin-right: 0.2rem;
          font-size: 0.875rem;
          height: 2.3125rem;
          line-height: 2.3125rem;
          padding-left: 1rem;
          border-left: 0.03125rem dashed #fff;
          img {
            width: 0.875rem;
            margin-left: 0.125rem;
            margin-bottom: -0.125rem;
          }
        }
      }
      // 价格样式
      // .prices {
      //   padding: 1.5rem 4%;
      //   display: flex;
      //   .price {
      //     width: 33%;
      //     border-right: 0.5px solid #f0f0f2;
      //     margin-right: 0.875rem;
      //     h5 {
      //       color: #ff5543;
      //       font-size: 1.125rem;
      //       margin-bottom: 0.375rem;
      //       span {
      //         font-size: 0.625rem;
      //       }
      //     }
      //     p {
      //       color: #999999;
      //       font-size: 0.75rem;
      //       padding-left: 0.375rem;
      //     }
      //   }
      //   .price:nth-of-type(3) {
      //     margin: 0;
      //     border: 0;
      //   }
      // }
      h5 {
        color: #323234;
        font-size: 0.9375rem;
        padding: 0 4%;
        margin-bottom: 1.5rem;
        span {
          font-size: 0.75rem;
          color: #989898;
          font-weight: 400;
          margin-left: 0.375rem;
        }
      }
      .huprice {
        margin-bottom: 2.375rem;
        padding: 0 2%;
        li {
          display: flex;
          color: #313233;
          font-size: 0.875rem;
          align-items: center;
          justify-content: space-around;
          p {
            span {
              color: #ff5353;
            }
          }
          button {
            border: 0.03125rem solid #29c56d;
            border-radius: 0.1875rem;
            width: 3.53125rem;
            height: 1.53125rem;
            text-align: center;
            line-height: 1.53125rem;
            font-size: 0.75rem;
            color: #29c56d;
            background-color: #fff;
          }
        }
        .one {
          margin-bottom: 1.2rem;
        }
      }

      .zhu {
        color: #3d3d3d;
        font-size: 0.8125rem;
        margin-bottom: 1.125rem;
        padding: 0 4%;
      }
      .btns {
        padding: 0 4%;
        display: flex;
        margin-bottom: 1.25rem;
        input {
          width: 14rem;
          height: 2.625rem;
          border-right: 0.25rem;
          border: 0.09375rem solid #b3b3b3;
          padding-left: 1rem;
          font-size: 0.9375rem;
          border-radius: 0.25rem;
        }
        button {
          width: 5.625rem;
          height: 2.75rem;
          border-radius: 0.25rem;
          text-align: center;
          line-height: 2.75rem;
          border: 0.09375rem solid #1fc365;
          color: #fff;
          font-size: 0.9375rem;
          background-color: #1fc365;
          margin-left: 0.8rem;
          font-weight: bold;
        }
      }
    }
    .line {
      width: 100%;
      height: 0.625rem;
      background-color: #f7f7f7;
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
    .tel {
      padding: 1.25rem 4%;
      img {
        width: 100%;
        margin-bottom: 1.5rem;
      }
      .tel-yue {
        display: flex;
        .mianfei {
          width: 2.25rem;
          height: 1.0625rem;
          position: relative;
          text-align: center;
          line-height: 1.0625rem;
          background-color: #ff7f7f;
          font-size: 0.75rem;
          color: #fff;
          margin-right: 0.625rem;
          span {
            display: block;
            border: 0.25rem solid transparent;
            border-right-color: #fff;
            position: absolute;
            right: 0;
            top: 0.25rem;
          }
        }
        .tel-con {
          margin-right: 3rem;
          h5 {
            color: #3d3d3d;
            font-size: 1rem;
            margin-bottom: 0.4375rem;
            font-weight: 400;
          }
          p {
            color: #969799;
            font-size: 0.75rem;
          }
        }
        .tel-btn {
          button {
            width: 4.125rem;
            height: 1.5rem;
            border-radius: 0.75rem;
            color: #1fc365;
            font-size: 0.75rem;
            border: 1px solid #2cd264;
            text-align: center;
            line-height: 1.5rem;
            background-color: #fff;
          }
          p {
            color: #969799;
            font-size: 0.75rem;
            margin-top: 0.3125rem;
            span {
              color: #ff5543;
            }
          }
        }
      }
    }
    .te {
      background: url(~assets/te.png) no-repeat;
      background-size: 100% 100%;
      position: relative;
      padding: 0 4%;
      height: 20.375rem;
      .te-tit {
        position: absolute;
        width: 12.375rem;
        right: 0.6875rem;
        top: 1.0625rem;
      }
      h3 {
        color: #fff;
        font-size: 0.9375rem;
        margin-bottom: 0.875rem;
        padding-top: 1rem;
        span {
          font-size: 0.5625rem;
          font-weight: 400;
        }
      }
      .teprice {
        position: absolute;
        color: #ffea00;
        font-size: 1rem;
        right: 2.0625rem;
        top: 1.1875rem;
      }
      .tabs {
        height: 10.875rem;
        overflow: hidden;
        position: relative;
        z-index: 1;
        // padding-bottom: 1.25rem;
        table {
          border-collapse: collapse;
          border-spacing: 0;
          width: 100%;
          border: 0.03125rem solid #cccccc;
          thead {
            tr {
              height: 1.75rem;
              background-color: #ffea00;
              th {
                font-size: 0.625rem;
                font-weight: 400;
                color: #292707;
                width: 3rem;
                span {
                  font-size: 0.5rem;
                }
              }

              th:nth-of-type(5) {
                color: #ff2d19;
                font-weight: bold;
                span {
                  font-size: 0.5rem;
                }
              }
              th:nth-of-type(6) {
                color: #ff2d19;
                font-weight: bold;
                span {
                  font-size: 0.5rem;
                }
              }
              th:nth-of-type(7) {
                color: #ff2d19;
                font-weight: bold;
                span {
                  font-size: 0.5rem;
                }
              }
            }
          }
          tr {
            background-color: #fff;
            height: 1.75rem;
            td {
              font-size: 0.625rem;
              color: #4b4c4d;
              text-align: center;
            }
            td:nth-of-type(3) {
              text-decoration: line-through;
            }
            td:nth-of-type(4) {
              text-decoration: line-through;
            }
            td:nth-of-type(5) {
              color: #ff2d19;
            }
            td:nth-of-type(6) {
              color: #ff2d19;
            }
            td:nth-of-type(7) {
              color: #ff2d19;
            }
          }
        }
        button {
          background: rgba(255, 255, 255, 0.3);
          width: 100%;
          height: 2.25rem;
          border-right: 0.25rem;
          border: 0;
          text-align: center;
          line-height: 2.25rem;
          font-size: 0.875rem;
          color: #ffea00;
          font-weight: bold;
          border-right: 0.25rem;
          margin-top: 1.25rem;
          border-radius: 0.25rem;
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
        position: absolute;
        bottom: 0;
        width: 92%;
        /deep/.van-notice-bar {
          padding: 0;
          z-index: 0;
        }
        button {
          width: 100%;
          height: 2.25rem;
          border-right: 0.25rem;
          background: rgba(255, 255, 255, 0.3);
          border: 0;
          text-align: center;
          line-height: 2.25rem;
          font-size: 0.875rem;
          color: #ffea00;
          font-weight: bold;
          border-right: 0.25rem;
          margin-top: 0.375rem;
          margin-bottom: 1.25rem;
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
        margin-top: 1.25rem;
        background: url("~assets/b1.png") no-repeat;
        background-size: 100%;
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
              color: #211c19;
              font-size: 0.625rem;
              font-weight: 400;
            }
          }
          p {
            color: #af917d;
            font-size: 0.75rem;
          }
        }
        .hui-right {
          padding-top: 0.7rem;
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
            margin-top: 0.2rem;
          }
        }
      }
      .two {
        background: url("~assets/b2.png") no-repeat;
        background-size: 100%;
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
    .new {
      padding: 1.25rem 4% 0.625rem 4%;
      h3 {
        color: rgba(31, 31, 31, 1);
        font-size: 1.0625rem;
        margin-bottom: 0.6rem;
        i {
          font-style: normal;
          margin-left: 0.25rem;
          padding: 0.125rem 0.3125rem;
          background: linear-gradient(90deg, #f59024, #f46444);
          border-radius: 0.375rem 0px 0.375rem 0px;
          color: #fff;
          font-size: 0.6875rem;
          font-weight: 400;
        }
      }
      .new-msg {
        font-size: 0.875rem;
        color: #5c5c5c;
        line-height: 1.25rem;
        margin-bottom: 0.5rem;
      }
      .new-time {
        color: #919499;
        font-size: 0.75rem;
      }
      .new-btn {
        display: flex;
        margin-top: 1.25rem;
        p {
          width: 50%;
          color: #2ac66d;
          font-size: 0.875rem;
          font-weight: bold;
          text-align: center;
          height: 1.875rem;
          line-height: 1.875rem;
          img {
            width: 1.125rem;
            margin-bottom: -0.1875rem;
            margin-right: 0.25rem;
          }
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
            position: absolute;
            top: 0.75rem;
            width: 1.5rem;
            left: 50%;
            margin-left: -0.75rem;
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
    .zixun {
      padding: 1.25rem 4%;
      h3 {
        color: #1f1f1f;
        margin-bottom: 0.75rem;
        font-size: 1rem;
        span {
          color: #ff5454;
          font-size: 1.125rem;
        }
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
        margin-bottom: 1.5625rem;
        img {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
        }
        .peo-msg {
          position: relative;
          margin-left: 0.75rem;
          top: -0.25rem;
          margin-right: 1.75rem;
          h6 {
            color: #323233;
            font-size: 0.875rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            span {
              color: #1f1f1f;
              font-size: 0.8125rem;
              margin-left: 0.25rem;
              font-weight: 400;
            }
          }
          .peo-type-one {
            width: 12.875rem;
            height: 1.25rem;
            border-radius: 0.1875rem;
            overflow: hidden;
            display: flex;
            .type {
              display: block;
              width: 1.625rem;
              height: 1.25rem;
              background-color: #ff7519;
              text-align: center;
              line-height: 1.25rem;
              color: #fff;
              font-size: 0.6875rem;
            }
            p {
              width: 11.25rem;
              border: 0.03125rem solid #ff7519;
              border-radius: 0 0.1875rem 0.1875rem 0;
              color: #646466;
              font-size: 0.6875rem;
              line-height: 1.25rem;
              display: flex;
              span {
                display: block;
                width: 50%;
                text-align: center;
                i {
                  color: #ff7519;
                  font-style: normal;
                }
              }
            }
          }
          .two {
            .type {
              background-color: #5dbdff;
            }
            p {
              border: 0.03125rem solid #5dbdff;
              span {
                i {
                  color: #5dbdff;
                }
              }
            }
          }
          .three {
            .type {
              background-color: #2fc66e;
            }
            p {
              border: 0.03125rem solid #2fc66e;
              span {
                i {
                  color: #2fc66e;
                }
              }
            }
          }
        }
        .psm {
          margin-right: 1.5625rem;
        }
        a {
          justify-content: flex-end;
        }
        button {
          background: linear-gradient(
            270deg,
            rgba(31, 195, 101, 1),
            rgba(63, 214, 166, 1)
          );
          box-shadow: 0px 0.15625rem 0.3125rem 0px rgba(44, 203, 128, 0.2);
          width: 4rem;
          height: 1.625rem;
          border-radius: 0.1875rem;
          text-align: center;
          line-height: 1.625rem;
          font-size: 0.75rem;
          color: #fff;
          margin-top: 0.3125rem;
          border: 0;
        }
      }
      // .peo:nth-of-type(2) {
      //   margin: 0;
      // }
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
      .lei-con {
        width: 100%;
        display: flex;
        margin-top: 1.5rem;
        .left {
          width: 50%;
          height: 10rem;
          #leiecharts {
            width: 100%;
            height: 10rem;
          }
          p {
            color: #646666;
            font-size: 0.75rem;
            margin-top: 0;
            text-align: center;
            span {
              color: #ff5454;
              font-size: 1rem;
              font-weight: bold;
            }
          }
        }

        table {
          width: 50%;
          border-collapse: collapse;
          border-spacing: 0;
          tr {
            height: 2.75rem;
            line-height: 2.75rem;
            border-right: 0.03125rem solid #ededed;
            td {
              color: #646566;
              font-size: 0.625rem;
              padding-left: 0.625rem;
              border-left: 0.03125rem solid #ededed;
              border-bottom: 0.03125rem solid #ededed;
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
      }
      button {
        width: 100%;
        height: 2.25rem;
        margin-top: 1.5625rem;
        border: 0;
        border-radius: 0.125rem;
        text-align: center;
        line-height: 2.25rem;
        background-color: #f1f8f4;
        color: #20c466;
        font-size: 0.875rem;
        font-weight: bold;
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
    .msg {
      padding: 1.25rem 4%;
      h3 {
        color: #1f1f1f;
        font-size: 1.0625rem;
        margin-bottom: 1.25rem;
        span {
          color: #999999;
          font-size: 0.875rem;
          float: right;
          img {
            width: 0.875rem;
            margin-bottom: -0.0625rem;
            margin-left: 0.25rem;
          }
        }
      }
      ul {
        margin-bottom: 0.75rem;
        li {
          display: flex;
          margin-bottom: 0.625rem;
          p {
            color: #808080;
            font-size: 0.875rem;
            width: 50%;
            span {
              color: #3d3d3d;
            }
          }
        }
      }
      .msg-address {
        color: #808080;
        font-size: 0.875rem;
        span {
          color: #3d3d3d;
        }
      }
      button {
        width: 100%;
        height: 2.25rem;
        border-right: 0.125rem;
        background-color: #f1f8f4;
        text-align: center;
        line-height: 2.25rem;
        border: 0;
        color: #1fc365;
        font-size: 0.875rem;
        font-weight: bold;
        margin-top: 1.5rem;
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
  }
  .bomnav {
    position: fixed;
    z-index: 1000;
    width: 100%;
    bottom: 0;
    height: 3.125rem;
    display: flex;
    background-color: #fff;
    .nav-left {
      width: 25.3%;
      text-align: center;
      img {
        width: 1.25rem;
        margin-top: 0.3125rem;
      }
      p {
        color: #626466;
        font-size: 0.75rem;
        margin-bottom: 0.3125rem;
      }
      .org {
        color: #ff9a26;
      }
      span {
        position: absolute;
        display: block;
        width: 0.8125rem;
        height: 0.8125rem;
        border-radius: 50%;
        text-align: center;
        line-height: 0.8125rem;
        font-size: 0.625rem;
        color: #fff;
        background-color: #f34f4f;
        left: 3.2rem;
        top: 0.25rem;
      }
    }
    a {
      width: 37.3%;
      button {
        width: 100%;
        text-align: center;
        line-height: 3.125rem;
        font-size: 0.9375rem;
        color: #fff;
        font-weight: bold;
        border: 0;
        height: 100%;
        img {
          width: 1rem;
          margin-right: 0.125rem;
          margin-bottom: -0.125rem;
        }
      }
    }
    button {
      width: 37.3%;
      text-align: center;
      line-height: 3.125rem;
      font-size: 0.9375rem;
      color: #fff;
      font-weight: bold;
      border: 0;
      img {
        width: 1rem;
        margin-right: 0.125rem;
        margin-bottom: -0.125rem;
      }
    }
    .b1 {
      background-color: #dca667;
    }
    .b2 {
      background-color: #1fc365;
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
  .weiter {
    /* display: none; */
    width: 20.3125rem;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -11.5625rem;
    margin-left: -10.15625rem;
    border-radius: 0.375rem;
    z-index: 1001;
    background-color: #fff;
  }

  .weiter .t-top {
    width: 100%;
    // height: 100px;
    background-color: #fff;
    border-radius: 0.375rem 0.375rem 0 0;
    padding-top: 2.25rem;
  }

  .weiter .t-top h6 {
    color: #3a3c49;
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 1.25rem;
    font-weight: bold;
  }

  .weiter .t-top p {
    color: #3d3d3d;
    font-size: 15px;
    margin: 0 18px;
    margin-bottom: 1.875rem;
  }

  .weiter .t-top #w-esc {
    position: absolute;
    right: 5%;
    top: 5%;
    width: 16px;
  }

  .weiter .t-bottom {
    width: 100%;
    // height: 11.25rem;
    background-color: #fff;
    border-radius: 0 0 12px 12px;
    position: relative;
  }

  .weiter .t-bottom .t-b-first {
    height: 100%;
    display: block;
  }
  .weiter .t-bottom .t-b-first .w-tit {
    color: #a8a8ab;
    font-size: 0.75rem;
    padding-left: 7%;
    padding-top: 0.5rem;
    padding-bottom: 2.375rem;
  }
  .weiter .t-bottom .t-b-first .w-tit img {
    width: 5%;
    margin-right: 2%;
    margin-bottom: -2px;
  }

  .weiter .t-bottom .t-b-first .w-mg {
    font-size: 11px;
  }
  .weiter .t-bottom .t-b-first .w-mg a {
    color: #498de1;
  }

  .weiter .t-bottom .t-b-first input {
    width: 80%;
    height: 3.4375rem;
    border: 0.09375rem solid #c6c6cc;
    margin-bottom: 0.625rem;
    margin-left: 7.52%;
    padding-left: 5%;
    font-size: 15px;
    border-radius: 6px;
  }

  .weiter .t-bottom .t-b-first .w-mg-c {
    width: 0.625rem;
    height: 0.625rem;
    margin: 0;
    margin-left: 7.5%;
    margin-bottom: 2.125rem;
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
    height: 2.75rem;
    border: 0;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1rem;
    text-align: center;
    line-height: 2.75rem;
    margin-left: 7.5%;
    box-shadow: 0px 2.5px 6px 0px rgba(42, 198, 109, 0.3);
  }

  .weiter .t-bottom .t-b-first .bg_01 {
    background: #2ac66d;
  }

  .weiter .t-bottom .t-b-first .bg_02 {
    background: #2ac66d;
  }

  .weiter .t-bottom .t-b-second {
    height: 100%;
    display: none;
  }

  .weiter .t-bottom .t-b-second p {
    color: #808080;
    font-size: 12px;
    width: 85%;
    margin-left: 7.5%;
    margin-bottom: 10px;
  }

  .weiter .t-bottom .t-b-second input {
    width: 82%;
    height: 3.4375rem;
    border-radius: 2px;
    border: 0.0625rem solid #c6c6cc;
    margin-left: 7.5%;
    margin-bottom: 20px;
    padding-left: 4%;
    border-radius: 0.25rem;
  }

  .weiter .t-bottom .t-b-second .port1 {
    width: 85%;
    height: 44px;
    margin-left: 7.5%;
    background: #2ac66d;
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
    color: #2ac66d;
    font-size: 13px;
    position: absolute;
    right: 10%;
    top: 25%;
    background-color: #fff;
  }

  .m-o-succ {
    /* display: none; */
    position: fixed;
    top: 190px;
    left: 50%;
    margin-left: -40%;
    width: 70%;
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
  .tishi {
    display: none;
    color: red;
    font-size: 10px;
  }
  .huo-msg {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 6000;
  }
  .huo-msg .msg-con {
    width: 74%;
    position: fixed;
    top: 25vh;
    left: 7%;
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
  .maxliang {
    position: fixed;
    background-color: #fff;
    top: 21.25rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20000;
    /deep/.slide-verify-slider {
      margin-top: 0;
    }
  }
  /* 首屏弹框 */
  .pingbox {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    z-index: 100000;
  }
  .shouping {
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 21474836470;
    text-align: center;
    top: 20%;
  }
  .shouping .esc {
    position: absolute;
    width: 2.333333rem;
    top: -10%;
    right: 5%;
  }
  .shouping .img {
    width: 80%;
  }
  .shouping input {
    width: 67%;
    height: 2.75rem;
    border-radius: 0.625rem;
    position: absolute;
    top: 65%;
    left: 15%;
    border: 0;
    padding-left: 0.8rem;
    color: #999999;
    font-size: 1rem;
  }
  .shouping button {
    width: 24%;
    height: 2.75rem;
    border-radius: 0.625rem;
    text-align: center;
    line-height: 2rem;
    position: absolute;
    top: 65%;
    right: 15%;
    background: linear-gradient(
      0deg,
      rgba(255, 198, 22, 1),
      rgba(255, 235, 83, 1)
    );
    box-shadow: 0px 0.5px 0.5px 0px rgba(6, 0, 1, 0.1);
    border: 0;
    font-size: 0.9375rem;
    color: #ff3922;
  }
  .shouping .peonum {
    position: absolute;
    top: 78%;
    right: 4.25rem;
    color: #ffdeda;
    font-size: 0.6875rem;
    line-height: 0.933333rem;
  }
  .shouping .show-msg {
    color: #ffb2a6;
    font-size: 0.625rem;
    position: absolute;
    width: 70%;
    left: 15%;
    top: 84%;
    line-height: 0.8125rem;
  }
  .shouping .zhu {
    position: absolute;
    color: #ffb2a6;
    font-size: 0.625rem;
    width: 100%;
    text-align: center;
    top: 94%;
  }
  .shouping span {
    display: block;
    width: 11.333333rem;
    height: 4rem;
    border-radius: 0.4rem;
    position: absolute;
    left: 50%;
    margin-left: -5.666667rem;
    top: 50%;
    margin-top: -2rem;
    z-index: 231313213;
    background: rgba(0, 0, 0, 0.8);
    text-align: center;
    line-height: 4rem;
    color: #cdcdcd;
  }
  .huimg {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    z-index: 5556;
    img {
      width: 100%;
    }
  }
  .zhezhao {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    z-index: 1001;
  }
  .tebox {
    width: 20.3125rem;
    position: fixed;
    left: 50%;
    margin-left: -10.15625rem;
    top: 220px;
    border-radius: 0.375rem;
    z-index: 1001;
    background-color: #fff;
    .t-top {
      width: 100%;
      // height: 100px;
      background-color: #fff;
      border-radius: 12px 12px 0 0;
      padding-top: 30px;
      h6 {
        color: #3a3c49;
        font-size: 20px;
        text-align: center;
        margin-bottom: 14px;
        font-weight: bold;
      }
      p {
        color: #3d3d3d;
        font-size: 0.9375rem;
        margin: 0 1.125rem;
        margin-bottom: 1.125rem;
      }
      #w-esc {
        position: absolute;
        right: 5%;
        top: 5%;
        width: 16px;
      }
      .btn {
        width: 17.8125rem;
        height: 2.75rem;
        border-radius: 0.25rem;
        line-height: 2.75rem;
        background-color: #f2f2f2;
        margin-left: 1.125rem;
        color: #7d7e80;
        font-size: 1rem;
        span {
          margin-left: 0.875rem;
        }
        img {
          width: 0.875rem;
          margin-bottom: -0.125rem;
          float: right;
          margin-right: 1.125rem;
          margin-top: 0.9375rem;
        }
      }
    }
    .t-bottom {
      width: 100%;
      height: 12.125rem;
      background-color: #fff;
      border-radius: 0 0 12px 12px;
      .t-b-first {
        height: 100%;
        display: block;
        .w-tit {
          color: #a8a8ab;
          font-size: 12px;
          padding-left: 7%;
          padding-top: 8px;
          img {
            width: 5%;
            margin-right: 2%;
            margin-bottom: -2px;
          }
        }
        .w-mg {
          font-size: 11px;
          a {
            color: #498de1;
          }
        }
        input {
          width: 80%;
          height: 2.75rem;
          border: 1px solid #c6c6cc;
          margin-top: 0.9375rem;
          margin-bottom: 5.5px;
          margin-left: 7.52%;
          padding-left: 5%;
          font-size: 15px;
          border-radius: 6px;
          margin-bottom: 0.5rem;
        }
        .w-mg-c {
          width: 10px;
          height: 10px;
          margin: 0;
          margin-left: 7.5%;
          margin-bottom: 1.5rem;
          background-color: #fff;
          border: 1px solid #c9c9c9;
          border-radius: 2px;
          -webkit-appearance: none;
          padding: 0;
          float: left;
          margin-top: 3px;
          margin-right: 4px;
        }
        .w-mg-c:checked {
          background: url(~assets/checkbox_icon.png) no-repeat center;
          background-size: 90%;
        }
        button {
          width: 85%;
          height: 44px;
          border: 0;
          border-radius: 6px;
          color: #fff;
          font-size: 16px;
          text-align: center;
          line-height: 40px;
          margin-left: 7.5%;
          box-shadow: 0px 2.5px 6px 0px rgba(42, 198, 109, 0.3);
        }
        .bg_01 {
          background: #2ac66d;
        }
        .bg_02 {
          background: #2ac66d;
        }
      }
      .t-b-second {
        height: 100%;
        display: none;
        p {
          margin-top: 20px;
          color: #808080;
          font-size: 12px;
          width: 85%;
          margin-left: 7.5%;
          margin-bottom: 1.875rem;
        }
        input {
          width: 82%;
          height: 40px;
          border-radius: 2px;
          border: 1px solid #c6c6cc;
          margin-left: 7.5%;
          margin-bottom: 20px;
          padding-left: 4%;
          border-radius: 6px;
        }
        .port1 {
          width: 85%;
          height: 44px;
          margin-left: 7.5%;
          background: #2ac66d;
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
        .t-b-scode {
          border: 0;
          color: #2ac66d;
          font-size: 13px;
          position: absolute;
          right: 10%;
          top: 65%;
          background-color: #fff;
        }
      }
    }
  }
  .righttel {
    position: fixed;
    width: 7.5rem;
    height: 2.5rem;
    background-color: #fff;
    box-shadow: 0px 0px 0.5625rem 0px rgba(0, 0, 0, 0.15);
    border-radius: 1.25rem;
    text-align: center;
    line-height: 2.5rem;
    color: rgba(32, 196, 102, 1);
    font-size: 0.875rem;
    font-weight: bold;
    right: 4%;
    bottom: 9.375rem;
    z-index: 550;
    img {
      width: 1rem;
      margin-bottom: -0.25rem;
    }
  }
  .topnav {
    position: fixed;
    top: 0;
    z-index: 550;
    width: 100%;
    height: 2.75rem;
    background-color: #fff;
    line-height: 2.75rem;
    img {
      position: absolute;
      width: 1.125rem;
      top: 0.75rem;
      left: 1.25rem;
    }
    ul {
      display: flex;
      height: 100%;
      padding-left: 5rem;
      li {
        color: rgba(50, 50, 51, 1);
        font-size: 0.9375rem;
        height: 2.2rem;
        margin-right: 2.625rem;
      }
      li:nth-of-type(4) {
        margin: 0;
      }
      .active {
        color: rgba(42, 198, 109, 1);
        font-weight: bold;
        border-bottom: 0.125rem solid rgba(42, 198, 109, 1);
      }
    }
  }
}
.talkbox {
  position: fixed;
  bottom: 0;
  z-index: 3000;
  height: 13.75rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 0.5625rem 0px rgba(52, 71, 87, 0.24);
  .del {
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0.9375rem;
    right: 0.9375rem;
  }
  .peo {
    padding-top: 1.5625rem;
    padding-left: 1.9375rem;
    display: flex;
    margin-bottom: 1.125rem;
    .left {
      margin-right: 0.625rem;
      overflow: hidden;
      height: 3rem;
      border-radius: 50%;
      img {
        width: 3rem;
      }
    }
    .right {
      h3 {
        color: #1f1f1f;
        font-size: 1.0625rem;
        margin-bottom: 0.375rem;
        span {
          font-weight: 400;
          color: #7495bd;
          font-size: 0.6875rem;
          padding: 0.125rem 0.3125rem 0.15625rem 0.3125rem;
          background-color: #f2f8ff;
          border-radius: 0.09375rem;
        }
      }
      p {
        color: #646466;
        font-size: 0.8125rem;
      }
    }
  }
  .msg {
    display: flex;
    margin-bottom: 1.75rem;
    .li {
      width: 33%;
      text-align: center;
      border-right: 0.03125rem solid #f0f0f2;
      .num {
        color: #121212;
        font-size: 0.625rem;
        margin-bottom: 0.25rem;
        span {
          color: #121212;
          font-size: 1.125rem;
          font-weight: bold;
        }
      }
      .txt {
        color: #646466;
        font-size: 0.6875rem;
      }
    }
  }
  .btn {
    button {
      width: 9.375rem;
      height: 2.5rem;
      border-radius: 0.25rem;
      text-align: center;
      line-height: 2.5rem;
      font-size: 0.9375rem;
      border: 0;
      outline: none;
    }
    button:nth-of-type(1) {
      background: linear-gradient(270deg, #1fc365, #3fd6a6);
      margin-left: 1.9375rem;
      color: #fff;
    }
    button:nth-of-type(2) {
      border: 0.03125rem solid #3da56a;
      background-color: #f0f7f3;
      color: #3da56a;
      margin-left: 0.625rem;
    }
  }
}
</style>
