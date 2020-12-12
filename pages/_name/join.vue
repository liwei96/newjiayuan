<template>
  <div id="join">
    <top-view :jkl="jkl"></top-view>
    <img src="~/assets/jia-top.jpg" alt class="topimg" v-if="host==0"/>
    <img src="~/assets/jia-top1.jpg" alt class="topimg" v-if="host==1"/>
    <div class="con">
      <ul class="topmsg">
        <li>
          <p class="tit">
            一城市
            <span>20</span>人
          </p>
          <p class="msg">人均1500客户</p>
        </li>
        <li>
          <p class="tit"><span>20</span>万客户</p>
          <p class="msg">月均120客户</p>
        </li>
        <li>
          <p class="tit"><span>2</span>千万业绩</p>
          <p class="msg">人均100万业绩</p>
        </li>
      </ul>
      <h2 class="first">
        关于我们
        <span>ABOUT US</span>
        <p>ABOUT US</p>
      </h2>
      <p class="txt">
        <i v-if="type"
          >{{txt}}新房隶属杭州亚汉网络科技有限公司旗下，成立于2016年，拥有三大自营平台。2019年7月开拓了嘉兴加盟城市，全国城市加盟布局正式开始实行。目前加盟城市有：杭州、嘉兴、无锡、湖州、贵阳、</i
        >
        <i v-if="!type"
          >{{txt}}新房隶属杭州易得房科技有限公司旗下，成立于2016年，拥有三大自营平台。2019年7月开拓了嘉兴加盟城市，全国城市加盟布局正式开始实行。目前加盟城市有：杭州、嘉兴、无锡、湖州、贵阳、重庆、成都
          。公司注重技术开发，最大程度的节省获客时间，最大程度简化与优化客户维护流程，用技术手段无限提高客户的利用率，给购房者带来更加便捷
          真实 及时 全面的房产信息平台</i
        >
        <span @click="type = false" v-if="type">[展开]</span>
      </p>
      <ul class="icons">
        <li>
          <img src="~/assets/jia-serve.png" alt />
          <p class="name">服务客户</p>
          <p class="num"><span>60</span>万+</p>
        </li>
        <li>
          <img src="~/assets/jia-jing.png" alt />
          <p class="name">精准展现</p>
          <p class="num"><span>2.3</span>亿次</p>
        </li>
        <li>
          <img src="~/assets/jia-huo.png" alt />
          <p class="name">获客成本</p>
          <p class="num">
            降低
            <span>4</span>倍
          </p>
        </li>
        <li>
          <img src="~/assets/jia-success.png" alt />
          <p class="name">累计成交</p>
          <p class="num"><span>60</span>千单+</p>
        </li>
      </ul>
      <h2 class="two">
        我们的优势
        <span>ADVANTAGE</span>
        <p>Our strengths</p>
      </h2>
    </div>
    <div class="swiper-advantage">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <h4><span>“0”</span>加盟费</h4>
          <div class="line"></div>
          <p>减少客户的前期投入成本，低 成本启动城市运营</p>
          <button @click="show = true">申请加盟</button>
        </div>
        <div class="swiper-slide">
          <h4>全网全渠道投放</h4>
          <div class="line"></div>
          <p>
            提升客户量并且客户
            <br />精准度高
          </p>
          <button @click="show = true">申请加盟</button>
        </div>
        <div class="swiper-slide">
          <h4><span>“0”</span>成本获客途径</h4>
          <div class="line"></div>
          <p>SEO优化 +微信项目分享+新媒 体运营+头条小程序</p>
          <button @click="show = true">申请加盟</button>
        </div>
        <div class="swiper-slide">
          <h4>增值服务</h4>
          <div class="line"></div>
          <p>网站建模 +一对一到服务+数据ppt 分析+培训及视频的教程</p>
          <button @click="show = true">申请加盟</button>
        </div>
      </div>
    </div>
    <h2 class="three">
      平台支持
      <span>PLATFORM</span>
      <p>PLATFORM</p>
    </h2>
    <div class="swiper-platform">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="~/assets/jia-san.jpg" alt />
          <div class="bom">
            <h4>三大平台</h4>
            <ul>
              <li>
                <p></p>
                每月超1000万+用户访问量
              </li>
              <li>
                <p></p>
                1.2亿+年度访客
              </li>
              <li>
                <p></p>
                精准客户资源，流量持续增长
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="~/assets/jia-zhuan.jpg" alt />
          <div class="bom">
            <h4>专业团队</h4>
            <ul>
              <li>
                <p></p>
                十年经验的SEM、SEO团队
              </li>
              <li>
                <p></p>
                行业顶尖软件研发团队
              </li>
              <li>
                <p></p>
                新媒体团队
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="~/assets/jia-saas.jpg" alt />
          <div class="bom">
            <h4>SaaS系统</h4>
            <ul>
              <li>
                <p></p>
                客户管理：高效管理客户
              </li>
              <li>
                <p></p>
                楼盘管理：管理更多楼盘
              </li>
              <li>
                <p></p>
                员工管理，统计分析等一目了然
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="~/assets/jia-pei.jpg" alt />
          <div class="bom">
            <h4>培训支持</h4>
            <ul>
              <li>
                <p></p>
                获客、转盘、成交技能培训
              </li>
              <li>
                <p></p>
                SaaS系统使用培训
              </li>
              <li>
                <p></p>
                小程序及微信项目分享使用培训
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <h2 class="three">
      模式比较
      <span>PATTERN</span>
      <p>PATTERN</p>
    </h2>
    <div class="swiper-pk">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <h4>人员管理</h4>
          <div class="sw-con">
            <div class="cn">
              <div class="cn-ll">
                <h5>传统模式</h5>
                <img src="~/assets/jia-ren1.png" alt />
              </div>
              <img src="~/assets/vs.png" alt class="vs" />
              <div class="cn-ll">
                <h5>{{txt}}模式</h5>
                <img src="~/assets/jia-ren2.png" alt />
              </div>
            </div>
            <p class="info">
              大大减少人员成本，减少招人成本，减少公司办公成本，减少人员管理成本，提高人效，从而提高利润
            </p>
            <button @click="show = true">加入我们</button>
          </div>
        </div>
        <div class="swiper-slide">
          <h4>市场管理</h4>
          <div class="sw-con">
            <div class="cn">
              <div class="cn-ll">
                <h5>传统模式</h5>
                <img src="~/assets/jia-si1.png" alt />
              </div>
              <img src="~/assets/vs.png" alt class="vs" />
              <div class="cn-ll">
                <h5>{{txt}}模式</h5>
                <img src="~/assets/jia-si2.png" alt />
              </div>
            </div>
            <p class="info">提高市场知名度，提高抗风险能力，提高业绩和稳定性</p>
            <button @click="show = true">加入我们</button>
          </div>
        </div>
        <div class="swiper-slide">
          <h4>团队管理</h4>
          <div class="sw-con">
            <div class="cn">
              <div class="cn-ll">
                <h5>传统模式</h5>
                <img src="~/assets/jia-li1.png" alt />
              </div>
              <img src="~/assets/vs.png" alt class="vs" />
              <div class="cn-ll">
                <h5>{{txt}}模式</h5>
                <img src="~/assets/jia-li2.png" alt />
              </div>
            </div>
            <p class="info">
              促进扁平化管理发展，提高个岗位收益和利润，提高人效管理
            </p>
            <button @click="show = true">加入我们</button>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <h2 class="four">
      加盟条件
      <span>CONDITION</span>
      <p>CONDITION</p>
    </h2>
    <div class="jians">
      <div class="li">
        <p class="num">1</p>
        <p class="txt">认同公司品牌价值观</p>
      </div>
      <div class="li">
        <p class="num">2</p>
        <p class="txt txt2">
          <span>
            正规合法资质、无违法
            <br />违规资金充足公司
          </span>
        </p>
      </div>
      <div class="li">
        <p class="num">3</p>
        <p class="txt">会面沟通进行当地资源市场考察</p>
      </div>
      <div class="li">
        <p class="num">4</p>
        <p class="txt">提供公司团队规模及业务规划</p>
      </div>
      <div class="line"></div>
    </div>
    <h2 class="five">
      加入我们
      <span>JOIN US</span>
      <p>JOIN US</p>
    </h2>
    <div class="form">
      <div class="li">
        <p>
          姓名
          <span>*</span>
        </p>
        <input type="text" placeholder="请输入姓名（必填）" v-model="name"/>
      </div>
      <div class="li">
        <p>
          电话
          <span>*</span>
        </p>
        <input type="text" placeholder="请输入手机号码（必填）" v-model="phone"/>
      </div>
      <div class="li">
        <p>公司</p>
        <input type="text" placeholder="请输入公司全称" v-model="company"/>
      </div>
      <div class="li">
        <p>城市</p>
        <input type="text" placeholder="输入意向合作城市" v-model="city"/>
      </div>
      <button @click="push">提交</button>
    </div>
    <div class="code">
      <img src="~/assets/jia-code.jpg" alt />
      <p class="codemsg">扫码加盟官方微信号</p>
      <p class="tel">加盟热线：<span>400-718-6666</span></p>
    </div>
    <div class="nav">
      <a href="tel:400-718-6686">
        <button>电话咨询</button>
      </a>
      <button class="btn" @click="show = true">申请加盟</button>
    </div>
    <van-popup v-model="show" :style="{ background: 'rgba(0,0,0,0)' }">
      <div class="formbox">
        <img src="~/assets/w-del.png" alt @click="show = false" />
        <h4>申请加盟</h4>
        <div class="li">
          <p>
            姓名
            <span>*</span>
          </p>
          <input type="text" placeholder="请输入姓名（必填）" v-model="name" />
        </div>
        <div class="li">
          <p>
            电话
            <span>*</span>
          </p>
          <input
            type="text"
            placeholder="请输入手机号码（必填）"
            v-model="phone"
          />
        </div>
        <div class="li">
          <p>公司</p>
          <input type="text" placeholder="请输入公司全称" v-model="company" />
        </div>
        <div class="li">
          <p>城市</p>
          <input type="text" placeholder="输入意向合作城市" v-model="city" />
        </div>
        <button @click="push">提交</button>
      </div>
    </van-popup>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import { jiameng } from "@/api/api";
export default {
  async asyncData(context) {
    let host = context.store.state.host
    let jkl = context.params.name;
    let city = context.store.state.city;
    let token = context.store.state.cookie.token;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/phone/head/foot", {
          params: {
            city: city,
            token: token,
          },
        })
        .then((resp) => {
          let data = resp.data;
          // console.log(data)
          return data;
        }),
    ]);
    return {
      jkl: jkl,
      title:res.common.header.title,
      description:res.common.header.description,
      keywords:res.common.header.keywords,
      host: host
    };
  },
  head() {
    return {
      title: this.title || "家园新房-城市加盟",
      meta: [
        {
          name: "description",
          content: this.description || 
            "家园新房"
        },
        {
          name: "keywords",
          content: this.keywords || "家园新房"
        }
      ]
    };
  },
  components: {
    "top-view": topView,
  },
  data() {
    return {
      show: false,
      type: true,
      name: "",
      city: "",
      phone: "",
      company: "",
      txt: '家园'
    };
  },
  methods: {
    push() {
      let name = this.name;
      let phone = this.phone;
      let company = this.company;
      let city = this.city;
      var pattern_phone = /^1[3-9][0-9]{9}$/;
      if (this.phone == "") {
        console.log(this.phone, this.isok);
        this.phone = "";
        // this.phonemsg = "手机号不能为空";
        this.toast("手机号不能为空");
        this.isok = false;
        return;
      } else if (!pattern_phone.test(phone)) {
        this.isok = false;
        this.phone = "";
        // this.phonemsg = "请输入正确的号码";
        this.toast("请输入正确的号码");
        return;
      } else {
        this.isok = true;
      }
      if (city == "") {
        this.isok = false;
        // this.citymsg = "不能为空";
        this.toast("城市不能为空");
        return;
      } else {
        this.isok = true;
      }
      if (name == "") {
        this.isok = false;
        // this.namemsg = "不能为空";
        this.toast("名字不能为空");
        return;
      } else {
        this.isok = true;
      }
      if (company == "") {
        this.isok = false;
        // this.companymsg = "不能为空";
        this.toast("公司不能为空");
        return;
      } else {
        this.isok = true;
      }
      if (this.isok) {
        jiameng({ city: city, name: name, phone: phone, company: company })
          .then((res) => {
            if (res.data.code == 200) {
              this.show = false;
              this.toast('提交成功')
            }
          })
          .catch((error) => {});
      }
    },
  },
  mounted() {
    if(this.host == 0) {
      this.txt = '家园'
    }else {
      this.txt = '易得房'
    }
    var swiper08 = new Swiper(".swiper-advantage", {
      slidesPerView: 1.48,
      spaceBetween: 15,
      slidesOffsetAfter: 14,
      slidesOffsetBefore: 14,
    });
    var swiper08 = new Swiper(".swiper-platform", {
      slidesPerView: 1.48,
      spaceBetween: 15,
      slidesOffsetAfter: 14,
      slidesOffsetBefore: 14,
    });
    var swiper08 = new Swiper(".swiper-pk", {
      slidesPerView: 1.48,
      spaceBetween: 15,
      slidesOffsetAfter: 14,
      slidesOffsetBefore: 58,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>
<style lang="less" scoped>
#join {
  padding-top: 2.75rem;
}
.topimg {
  width: 100%;
  height: 8.75rem;
}
h2 {
  color: #323232;
  font-size: 1.125rem;
  text-align: center;
  position: relative;
  margin-bottom: 2.25rem;
  span {
    color: #f2f2f2;
    font-size: 1.5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    top: -0.625rem;
  }
  p {
    position: absolute;
    color: #2a2a2a;
    font-size: 0.5625rem;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 400;
  }
}
.con {
  padding: 0 4%;
  .topmsg {
    width: 100%;
    height: 4.6875rem;
    display: flex;
    background: #ffffff;
    box-shadow: 0px 0.15625rem 0.9375rem 0px rgba(0, 0, 0, 0.05);
    border-radius: 0.25rem;
    position: relative;
    top: -2.5625rem;
    justify-content: space-around;
    li {
      .tit {
        color: #e33737;
        font-size: 0.9375rem;
        margin-bottom: 0.3125rem;
        padding-top: 1rem;
        span {
          font-size: 1.125rem;
          font-weight: bold;
        }
      }
      .msg {
        color: #2a2a2a;
        font-size: 0.625rem;
      }
    }
  }
  .first {
    margin-top: 0.4375rem;
    margin-bottom: 1.8125rem;
    span {
      top: -0.5rem
    }
  }
  .txt {
    color: #4b4c4d;
    font-size: 0.875rem;
    text-indent: 1.75rem;
    line-height: 1.625rem;
    i {
      font-style: normal;
    }
    span {
      color: #7495bd;
    }
  }
  .icons {
    display: flex;
    margin-top: 1.125rem;
    margin-bottom: 2.6875rem;
    li {
      width: 25%;
      text-align: center;
      img {
        width: 1.625rem;
        margin-bottom: 0.5rem;
      }
      .name {
        color: #4b4c4d;
        font-size: 0.625rem;
        margin-bottom: 0.125rem;
      }
      .num {
        color: #4b4c4c;
        font-size: 0.625rem;
        span {
          color: #2a2a2a;
          font-size: 0.9375rem;
          font-weight: bold;
        }
      }
    }
  }
  .two {
    margin-bottom: 1.4375rem;
  }
}
.swiper-advantage {
  overflow: hidden;
  padding: 0.625rem 0;
  margin-bottom: 2.1875rem;
  .swiper-slide {
    height: 11.25rem;
    background: #ffffff;
    box-shadow: 0px 0.15625rem 0.9375rem 0px rgba(0, 0, 0, 0.05);
    border-radius: 0.25rem;
    position: relative;
    h4 {
      color: #2a2a2a;
      font-size: 1.0625rem;
      text-align: center;
      font-weight: 400;
      margin-bottom: 0.5rem;
      padding-top: 1.0625rem;
      span {
        font-weight: bold;
        color: #2a2a2a;
        font-size: 1.375rem;
      }
    }
    .line {
      background: linear-gradient(-90deg, #fdbe90, #d18d5d);
      width: 5rem;
      height: 0.1875rem;
      left: 50%;
      margin-left: -2.5rem;
      position: relative;
      margin-bottom: 0.5625rem;
    }
    p {
      color: #4b4c4c;
      font-size: 0.875rem;
      line-height: 1.25rem;
      width: 11.875rem;
      text-align: center;
      margin-left: 1.875rem;
      margin-bottom: 1rem;
    }
    button {
      width: 13.125rem;
      background: linear-gradient(126deg, #fdbe90, #d18d5d);
      height: 2.25rem;
      border-radius: 0.25rem;
      text-align: center;
      line-height: 2.25rem;
      border: 0;
      margin-left: 1.25rem;
      color: #fff;
      font-size: 0.9375rem;
      font-weight: bold;
      position: absolute;
      bottom: 20px;
    }
  }
}
.three {
  margin-bottom: 1.5rem;
}
.swiper-platform {
  overflow: hidden;
  padding: 0.625rem 0;
  margin-bottom: 2.2rem;
  .swiper-slide {
    height: 18.625rem;
    background: #ffffff;
    box-shadow: 0px 0.15625rem 0.9375rem 0px rgba(0, 0, 0, 0.05);
    border-radius: 0.25rem;
    position: relative;
    img {
      width: 100%;
      height: 9.75rem;
    }
    .bom {
      padding: 0 0.875rem;
      h4 {
        color: #de9b6c;
        font-size: 1.25rem;
        margin-bottom: 0.5625rem;
        padding-top: 0.6875rem;
      }
      ul {
        li {
          color: #4b4c4c;
          font-size: 0.875rem;
          margin-bottom: 0.1875rem;
          padding-left: 0.875rem;
          position: relative;
          p {
            width: 0.25rem;
            height: 0.25rem;
            border-radius: 50%;
            background-color: #de9b6c;
            position: absolute;
            left: 0;
            top: 0.5rem;
          }
        }
      }
    }
  }
}
.swiper-pk {
  overflow: hidden;
  padding: 0.625rem 0;
  padding-bottom: 1.75rem;
  margin-bottom: 1.6875rem;
  position: relative;
  .swiper-slide {
    height: 23.75rem;
    background: #ffffff;
    box-shadow: 0px 0.15625rem 0.9375rem 0px rgba(0, 0, 0, 0.05);
    position: relative;
    border-radius: 0.25rem;
    h4 {
      background: linear-gradient(126deg, #fdbe90 0%, #d18d5d 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      padding-top: 1.125rem;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    .sw-con {
      padding: 0 1.25rem;
      .cn {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .cn-ll {
          color: #2a2a2a;
          font-size: 0.875rem;
          margin-bottom: 1.0625rem;
          h5 {
            color: #2a2a2a;
            font-size: 0.875rem;
            margin-bottom: 1.375rem;
          }
          img {
            width: 3.5625rem;
          }
        }
        .vs {
          height: 1.875rem;
        }
      }
      .info {
        color: #4b4c4c;
        font-size: 0.75rem;
        line-height: 1.1875rem;
      }
      button {
        background: linear-gradient(126deg, #fdbe90, #d18d5d);
        border-radius: 0.25rem;
        width: 13.125rem;
        height: 2.25rem;
        text-align: center;
        line-height: 2.25rem;
        border: 0;
        color: #fff;
        font-weight: bold;
        margin-top: 1.25rem;
        font-size: 0.9375rem;
        position: absolute;
        bottom: 1.375rem;
      }
    }
  }
  /deep/.swiper-pagination {
    bottom: 0.375rem;
    .swiper-pagination-bullet {
      width: 0.5rem;
      height: 0.15625rem;
      border-radius: 0.0625rem;
      background-color:#cacacc;
    }
    .swiper-pagination-bullet-active {
      width: 0.9375rem;
      height: 0.15625rem;
      border-radius: 0.0625rem;
      background-color: #e6a475;
    }
  }
}
.four {
  margin-bottom: 2.125rem;
}
.five {
  margin-bottom: 2.125rem;
}
.jians {
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 2.875rem;
  .li {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
    .num {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      text-align: center;
      line-height: 1rem;
      background: linear-gradient(126deg, #fdbe90, #d18d5d);
      font-size: 0.625rem;
      color: #fff;
      margin-right: 2.75rem;
    }
    .txt {
      width: 15rem;
      height: 2.5rem;
      border-radius: 0.25rem;
      text-align: center;
      line-height: 2.5rem;
      border: 0.03125rem solid #fdbe90;
      color: #2a2a2a;
      font-size: 0.875rem;
    }
    .txt2 {
      height: 3.375rem;
      line-height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .line {
    width: 0.0625rem;
    height: 14.6875rem;
    background-color: #ececec;
    position: absolute;
    left: 2rem;
    top: 0;
    z-index: -1;
  }
}
.form {
  .li {
    display: flex;
    padding-left: 1.5rem;
    align-items: center;
    margin-bottom: 1.1875rem;
    p {
      color: #333333;
      font-size: 0.875rem;
      //   margin-right: 0.75rem;
      width: 3.125rem;
      span {
        color: #ff2626;
        font-size: 0.8125rem;
      }
    }
    input {
      width: 16.1875rem;
      height: 3rem;
      border-radius: 0.25rem;
      border: 0.03125rem solid #e6e6e6;
      padding-left: 1rem;
      outline: none;
      font-size: 0.875rem;
    }
    ::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #999;
      font-size: 0.875rem;
    }

    ::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #999;
      font-size: 0.875rem;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10+ */
      color: #999;
      font-size: 0.875rem;
    }
  }
  button {
    width: 17.1875rem;
    height: 3rem;
    border-radius: 0.25rem;
    background: linear-gradient(90deg, #fdbe90, #d18d5d);
    text-align: center;
    line-height: 3rem;
    color: #fff;
    font-size: 0.9375rem;
    font-weight: bold;
    margin-left: 4.6875rem;
    border: 0;
    margin-top: 1.375rem;
  }
}
.code {
  text-align: center;
  img {
    width: 9.375rem;
    margin-top: 2.375rem;
    // margin-bottom: 0.75rem;
  }
  .codemsg {
    color: #333333;
    font-size: 0.75rem;
    margin-bottom: 0.9375rem;
    margin-top: 0.3125rem;
  }
  .tel {
    background: linear-gradient(0deg, #fdbe90 0%, #d18d5d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.3125rem;
    margin-bottom: 1.875rem;
    span {
      font-weight: bold;
    }
  }
}
.nav {
  width: 100%;
  height: 4.25rem;
  position: fixed;
  bottom: 0;
  z-index: 10;
  padding: 0 4%;
  background-color: #fff;
  display: flex;
  align-items: center;
  button {
    width: 10.4375rem;
    height: 3rem;
    border-radius: 0.25rem;
    background: linear-gradient(270deg, #348aff, #6accff);
    font-weight: bold;
    font-size: 0.9375rem;
    border: 0;
    color: #fff;
  }
  .btn {
    background: linear-gradient(90deg, #fdbe90, #d18d5d);
    margin-left: 0.6875rem;
  }
}
.formbox {
  width: 20.3125rem;
  height: 25rem;
  background-color: #fff;
  border-radius: 0.25rem;
  position: relative;
  img {
    position: absolute;
    width: 1rem;
    top: 1rem;
    right: 1rem;
  }
  h4 {
    color: #1f1f1f;
    font-size: 1.375rem;
    text-align: center;
    padding-top: 1.25rem;
    margin-bottom: 1.375rem;
  }
  .li {
    display: flex;
    padding-left: 1.5rem;
    align-items: center;
    margin-bottom: 1.125rem;
    p {
      color: #333333;
      font-size: 0.875rem;
      //   margin-right: 0.75rem;
      width: 3rem;
      span {
        color: #ff2626;
        font-size: 0.8125rem;
      }
    }
    input {
      width: 13.0625rem;
      height: 2.75rem;
      border-radius: 0.25rem;
      border: 0.03125rem solid #e6e6e6;
      padding-left: 1rem;
      outline: none;
      font-size: 0.875rem;
    }
    ::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #999;
      font-size: 0.875rem;
    }

    ::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #999;
      font-size: 0.875rem;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10+ */
      color: #999;
      font-size: 0.875rem;
    }
  }
  button {
    width: 17.1875rem;
    height: 2.75rem;
    border-radius: 0.25rem;
    background: linear-gradient(90deg, #fdbe90, #d18d5d);
    text-align: center;
    line-height: 2.75rem;
    color: #fff;
    font-size: 0.9375rem;
    font-weight: bold;
    margin-left: 1.5625rem;
    border: 0;
  }
}
</style>