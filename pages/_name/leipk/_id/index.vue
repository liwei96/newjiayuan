<template>
  <div id="leipk">
    <top-view :jkl="jkl"></top-view>
    <div class="con">
      <div class="top">
        <div class="center fir">
          <img class="topimg" :src="list[0].img" alt />
          <div class="msg">
            <h6>{{list[0].name}}</h6>
            <p class="type">
              <span class="zhuang">{{list[0].state}}</span>
              <span>{{list[0].type}}</span>
            </p>
            <p class="pri">
              约
              <span>{{list[0].price}}</span>元/m²
            </p>
            <a :href="'tel:'+phone">
            <button><img src="~/assets/navtel.png" />电话咨询</button>
            </a>
          </div>
        </div>
        <img src="~/assets/vs.png" alt class="vs" />
        <div class="center">
          <img class="topimg" :src="list[1].img" alt />
          <div class="msg">
            <h6>{{list[1].name}}</h6>
            <p class="type">
              <span class="zhuang">{{list[1].state}}</span>
              <span>{{list[1].type}}</span>
            </p>
            <p class="pri">
              约
              <span>{{list[1].price}}</span>元/m²
            </p>
            <a :href="'tel:'+phone">
            <button><img src="~/assets/navtel.png" />电话咨询</button>
            </a>
          </div>
        </div>
      </div>
      <div class="lei">
        <div id="leiecharts"></div>
        <div class="line">
          <div class="left">
            <p class="l"></p>
            <p class="name">{{list[0].name}}</p>
          </div>
          <div class="left">
            <p class="l n"></p>
            <p class="name">{{list[1].name}}</p>
          </div>
        </div>
        <table>
          <tr>
            <td>
              <p class="name">休闲</p>
              <p class="val">{{list[0].scores.score.leisure}}</p>
            </td>
            <td>
              <p class="name">休闲</p>
              <p class="val">{{list[1].scores.score.leisure}}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="name">品质</p>
              <p class="val">{{list[0].scores.score.quality}}</p>
            </td>
            <td>
              <p class="name">品质</p>
              <p class="val">{{list[1].scores.score.quality}}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="name">教育</p>
              <p class="val">{{list[0].scores.score.education}}</p>
            </td>
            <td>
              <p class="name">教育</p>
              <p class="val">{{list[1].scores.score.education}}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="name">医疗</p>
              <p class="val">{{list[0].scores.score.medical}}</p>
            </td>
            <td>
              <p class="name">医疗</p>
              <p class="val">{{list[1].scores.score.medical}}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="name">交通</p>
              <p class="val">{{list[0].scores.score.traffic}}</p>
            </td>
            <td>
              <p class="name">交通</p>
              <p class="val">{{list[1].scores.score.traffic}}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="name">商业</p>
              <p class="val">{{list[0].scores.score.commercial}}</p>
            </td>
            <td>
              <p class="name">商业</p>
              <p class="val">{{list[1].scores.score.commercial}}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="name">层高</p>
              <p class="val">{{list[0].scores.score.height}}</p>
            </td>
            <td>
              <p class="name">层高</p>
              <p class="val">{{list[1].scores.score.height}}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="name">户型</p>
              <p class="val">{{list[0].scores.score.house_types}}</p>
            </td>
            <td>
              <p class="name">户型</p>
              <p class="val">{{list[1].scores.score.house_types}}</p>
            </td>
          </tr>
        </table>
        <div class="rate">
          <div class="cel">
            <p class="name">综合评分：</p>
            <p class="pri">{{list[0].scores.avg}}</p>
          </div>
          <div class="cel">
            <p class="name">综合评分：</p>
            <p class="pri">{{list[1].scores.avg}}</p>
          </div>
        </div>
        <button @click="pop('获取详细分析报告', 96, '雷达PK页+获取详细分析报告')">获取详细分析报告</button>
      </div>
      <div class="other">
        <h3>猜你喜欢</h3>
        <template v-for="(item, key) in other">
          <nuxt-link :to="'/' + jkl + '/content/' + item.id" :key="key">
            <div class="pro">
              <img :src="item.img" alt />
              <div class="pro-msg">
                <h5>
                  {{item.name}}
                  <span>{{item.state}}</span>
                </h5>
                <p class="pro-price">
                  <span>{{item.price}}</span>
                  <i>元/m²</i>起
                </p>
                <p class="attr">{{item.type}} | {{item.city}}-{{item.country.substr(0,2)}} | {{item.area}}m²</p>
                <p class="pro-icon">
                  <span class="pro-icon-zhuang">{{item.decorate}}</span>
                  <span class="pro-icon-type" v-for="(val,k) in item.feature" :key="k">{{val}}</span>
                </p>
              </div>
            </div>
          </nuxt-link>
        </template>
      </div>
    </div>
    <nav-view :phone="phone" @fot="chang($event)"></nav-view>
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
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import nav from "@/components/nav.vue";
import tan from "@/components/tan.vue";
export default {
  components: {
    "top-view": topView,
    "nav-view": nav,
    'tan-view':tan
  },
  async asyncData(context) {
    let id = context.params.id;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let other = context.store.state.cookie.other;
    let city = context.store.state.city;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/score/compare", {
          params: {
            ids: id,
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
      jkl: jkl,
      list: res.data,
      other: res.recommends,
      phone: res.common.phone,
    };
  },
  head() {
    return {
      title: "家园新房-雷达图PK-"+this.list[0].name+'PK'+this.list[1].name,
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
      navnum: 0,
      list: [],
      other: [],
      phone: "",
      tan: false,
      typenum: 0,
      typebtn: 1,
      name: "",
      id:'0',
      remark: "",
    };
  },
  methods: {
    drawlei() {
      let that = this;
      var option = {
        textStyle: {
          color: ["#CCCCCC"],
          fontSize: 12,
          margin: [
            0, // 上
            10, // 右
            5, // 下
            0, // 左
          ],
        },
        grid: {
          left: "10%",
          right: "0%",
          top: "0%",
          bottom: "10%",
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
          radius: 70,
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
            symbolSize: 2,
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
                width: 1,
              },
            },
            data: [
              {
                name: "能力值",
                value: [
                  that.list[0].scores.score.leisure,
                  that.list[0].scores.score.quality,
                  that.list[0].scores.score.education,
                  that.list[0].scores.score.medical,
                  that.list[0].scores.score.traffic,
                  that.list[0].scores.score.commercial,
                  that.list[0].scores.score.height,
                  that.list[0].scores.score.house_types,
                ],
                areaStyle: {
                  normal: {
                    color: "rgba(41,204,114,0.1)", // 选择区域颜色
                  },
                },
              },
            ],
          },
          {
            name: "能力2",
            type: "radar",
            symbol: "rect",
            symbolSize: 2,
            itemStyle: {
              //此属性的颜色和下面areaStyle属性的颜色都设置成相同色即可实现
              color: "rgba(83, 176, 255, 1)",
              borderColor: "rgba(83, 176, 255, 1)",
            },
            areaStyle: {
              color: "#29CC72",
            },
            lineStyle: {
              // 单项线条样式。
              normal: {
                opacity: 0.5, // 图形透明度
                width: 1,
              },
            },
            data: [
              {
                name: "能力值",
                value: [
                  that.list[1].scores.score.leisure,
                  that.list[1].scores.score.quality,
                  that.list[1].scores.score.education,
                  that.list[1].scores.score.medical,
                  that.list[1].scores.score.traffic,
                  that.list[1].scores.score.commercial,
                  that.list[1].scores.score.height,
                  that.list[1].scores.score.house_types,
                ],
                areaStyle: {
                  normal: {
                    color: "rgba(83, 176, 255, 0.2)", // 选择区域颜色
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
    cli(e) {
      this.tan = e;
    },
    chang(data) {
      this.typenum = data.position;
      this.name = data.name;
      this.typebtn = 1;
      this.tan = true;
      this.remark = "雷达PK页+预约看房";
    },
    pop(name, position, txt) {
      this.name = name;
      this.typebtn = 1;
      this.typenum = position;
      this.tan = true;
      this.remark = txt;
    },
  },
  mounted() {
    this.drawlei();
  },
};
</script>
<style lang="less" scoped>
.con {
  padding-top: 4rem;
  .top {
    display: flex;
    padding: 0 4%;
    align-items: center;
    padding-bottom: 1.125rem;
    border-bottom: 0.03125rem solid #f2f2f2;
    .center {
      width: 7.5rem;
      height: 10.8rem;
      border-radius: 0.25rem;
      box-shadow: 0px 0px 1.1875rem 0.0625rem rgba(0, 0, 0, 0.04);
      .topimg {
        width: 100%;
        height: 4.125rem;
        border-radius: 0.1875rem 0.1875rem 0 0;
        margin-bottom: 0.2rem;
      }
      .msg {
        padding-left: 0.625rem;
        h6 {
          color: #323233;
          font-size: 0.8125rem;
          width: 5.625rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 0.25rem;
          font-weight: 400;
        }
        .type {
          margin-bottom: 0.375rem;
          span {
            font-size: 0.625rem;
            color: #7d7e80;
            padding: 0.125rem 0.25rem;
            background-color: #f5f5f5;
            border-radius: 0.125rem;
            margin-right: 0.3125rem;
          }
          .zhuang {
            color: #2ac66d;
            background-color: #e9f7ea;
          }
        }
        .pri {
          color: #ff6a48;
          font-size: 0.625rem;
          margin-bottom: 0.25rem;
          span {
            font-size: 0.875rem;
          }
        }
        button {
          width: 6rem;
          height: 1.5rem;
          border-radius: 0.1875rem;
          text-align: center;
          line-height: 1.5rem;
          border: 0;
          background: linear-gradient(-90deg, #ff4c4c, #ff986a);
          box-shadow: 0px 0.15625rem 0.3125rem 0px rgba(255, 76, 76, 0.2);
          color: #fff;
          font-size: 0.75rem;
          img {
            width: 0.75rem;
            margin-right: 0.25rem;
            margin-bottom: -0.125rem;
          }
        }
      }
    }
    .fir {
      margin-left: 1.5625rem;
    }
    .vs {
      height: 3.125rem;
      margin: 0 0.625rem;
    }
  }
  .lei {
    padding: 0 4%;
    margin-bottom: 2.25rem;
    #leiecharts {
      margin-top: 1.25rem;
      width: 100%;
      height: 12.5rem;
    }
    .line {
      display: flex;
      justify-content: space-around;
      margin-bottom: 1.875rem;
      .left {
        display: flex;
        justify-content: center;
        align-items: center;
        .l {
          width: 1.25rem;
          height: 0.1875rem;
          margin-right: 0.5rem;
          background-color: #29cc72;
        }
        .n {
          background-color: #53b0ff;
        }
        .name {
          color: #323233;
          font-size: 0.8125rem;
          max-width: 5.625rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    table {
      border-collapse: collapse;
      border: 0.03125rem solid #ededed;
      border-radius: 0.28125rem;
      width: 100%;
      margin-bottom: 1.375rem;
      tr {
        display: flex;
        td {
          width: 50%;
          display: flex;
          height: 2rem;
          line-height: 2rem;
          justify-content: space-around;
          .name {
            color: #646566;
            font-size: 0.6875rem;
          }
          .val {
            color: #ff5454;
            font-size: 0.8125rem;
          }
        }
        td:nth-of-type(1) {
          border-right: 0.03125rem solid #ededed;
        }
      }
      tr:nth-of-type(2n + 1) {
        background-color: #f7f7f7;
      }
    }
    .rate {
      display: flex;
      margin-bottom: 1.5rem;
      .cel {
        display: flex;
        justify-content: center;
        width: 50%;
        .name {
          color: #646566;
          font-size: 0.75rem;
          margin-right: 1rem;
        }
        .pri {
          color: #ff5454;
          font-size: 1.125rem;
          font-weight: bold;
        }
      }
    }
    button {
      width: 100%;
      height: 2.25rem;
      border-radius: 0.125rem;
      text-align: center;
      line-height: 2.25rem;
      border: 0;
      background-color: #f1f8f4;
      color: #1fc365;
      font-size: 0.875rem;
      font-weight: bold;
    }
  }
  .other {
    padding: 0 4%;
    padding-bottom: 3.75rem;
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
</style>