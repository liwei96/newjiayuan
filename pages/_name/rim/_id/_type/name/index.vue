<template>
  <div id="Zhou">
    <!-- <div class="top">
      <img class="back" src="~/assets/return.png" alt @click="back"/>
    </div> -->
    <div class="map-con">
      <div id="map"></div>
      <div id="panel" style="display: none"></div>
      <div class="map-type tel">
        <a :href="'tel:'+phone">
          <img src="~/assets/maptel.png" alt="">
          <p>电话</p>
        </a>
      </div>
      <div class="map-type" @click="pop('咨询服务', 100, '详情页+咨询服务')">
        <img src="~/assets/maptalk.png" alt="">
        <p>咨询</p>
      </div>
    </div>
    <div class="map-mm">
      <div class="swiper-map">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div
              :class="mapnum === 1 ? 'tegood active' : 'tegood'"
              @click="setmap(1, '公交')"
            >
              公交
            </div>
          </div>
          <div class="swiper-slide">
            <div
              :class="mapnum === 0 ? 'tegood active' : 'tegood'"
              @click="setmap(0, '地铁')"
            >
              地铁
            </div>
          </div>
          <div class="swiper-slide">
            <div
              :class="mapnum === 2 ? 'tegood active' : 'tegood'"
              @click="setmap(2, '教育')"
            >
              教育
            </div>
          </div>
          <div class="swiper-slide">
            <div
              :class="mapnum === 3 ? 'tegood active' : 'tegood'"
              @click="setmap(3, '医院')"
            >
              医院
            </div>
          </div>
          <div class="swiper-slide">
            <div
              :class="mapnum === 4 ? 'tegood active' : 'tegood'"
              @click="setmap(4, '购物')"
            >
              购物
            </div>
          </div>
          <div class="swiper-slide">
            <div
              :class="mapnum === 5 ? 'tegood active' : 'tegood'"
              @click="setmap(5, '美食')"
            >
              美食
            </div>
          </div>
          <div class="swiper-slide">
            <div
              :class="mapnum === 6 ? 'tegood active' : 'tegood'"
              @click="setmap(6, '娱乐')"
            >
              娱乐
            </div>
          </div>
        </div>
      </div>
      <div class="map-msg">
        <ul class="map-msg-con">
          <li>
            <h5>武林广场</h5>
            <p>
              地铁1号线
              <span> <img src="~/assets/dian.png" />800m </span>
            </p>
          </li>
          <li>
            <h5>武林广场</h5>
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
        :proname="building.name"
      ></tan-view>
    </van-popup>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import topView from "@/components/header.vue";
import tan from "@/components/tan.vue";
export default {
  components: {
    "top-view": topView,
    "tan-view": tan,
  },
  async asyncData(context) {
    let other = context.query.other;
    let jkl = context.params.name;
    let id = context.params.id;
    let token = context.store.state.cookie.token;
    let baidu = context.query.isbaidu;
    let [res1] = await Promise.all([
        context.$axios.request({
          method: 'post',
          url:'/applets/jy/building/location',
          params: {other: other,
            id: id,
            token: token,}
        })
        // .post("/applets/jy/building/location", {
        //     other: other,
        //     id: id,
        //     token: token,
        // })
        .then((resp) => {
          let data = resp.data.data;
            console.log(data);
          return data;
        }),
    ]);
    return {
      jkl: jkl,
      phone: res1.phone,
      building: res1.data,
      id: id,
      isbaidu: baidu,
    };
  },
  head() {
    return {
      title: "家园新房-" + this.building.name + "-周边详情",
      meta: [
        {
          name: "description",
          content: "家园新房",
        },
        {
          name: "Keywords",
          content: "家园新房",
        },
      ],
    };
  },
  data() {
    return {
      mapname: "公交",
      mapnum: 1,
      isnull: false,
      show: false,
      id: 0,
      name: "",
      typebtn: 1,
      typenum: 0,
      tan: false,
      tel: "",
      proname: "",
      building: {},
      phone: "",
      remark: "",
      isbaidu: "0",
    };
  },
  methods: {
    back() {
      $(document).ready(function () {
        var u = navigator.userAgent;
        var isbaidu = u.indexOf("baiduboxapp") > -1; //百度小程序
        if (!isbaidu) {
          wx.miniProgram.navigateTo({
            url: "/pages/content/content?id=" + this.$route.params.id,
          });
        } else {
          swan.webView.redirectTo({
            url: "/pages/content/content?id=" + this.$route.params.id,
            success() {
              console.log("to-web-view");
            },
            fail() {
              console.log("fail");
            },
          });
        }
      });
    },
    mmap() {
      this.over = false;
      let that = this;
      let baidu = [that.building.longitude, that.building.latitude];
      let img = require("~/assets/mappro.png");
      let pro = that.building.name;
      let add = that.building.address;
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
          let content =  `<div style="width:150px;height: 40px;box-shadow:0px 0px 5px 0px rgba(6,0,1,0.1);border-radius:20px;padding-left: 17px;position: relative;background: #fff;"
                id="buildbox">
                <div style="float: left;width:72%" id="buildbox">
                    <h5 style="color: #121212;font-size: 12px;margin:0;margin-top: .125rem;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"
                        id="buildbox">${pro}</h5>
                    <p style="color: #919499;font-size: 10px;margin:0;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"
                        id="buildbox">${add}</p>
                </div>
                <div
                    style="float: left;width: 32px;height: 32px;border-radius: 50%;text-align: center;color: #fff;font-size:
                    10px;background-color: #2AC46C;margin-top: 4px;" id="buildbox">
                    咨询<br /> 路线</div>
                <div style="position: absolute;border:8px solid transparent;border-top-color: #fff;bottom:-16px;left:50%;margin-left: -8px;"
                    id="buildbox">
                </div>
            </div>`;
        
          let marker = new AMap.Marker({
            content: content,
            position: that.pois,
            offset: new AMap.Pixel(-84, -48),
          });
          let con =
            '<div style="width: 24px;height: 24px;border-radius: 50%;background:rgba(42, 198, 109, 0.2);position: relative;"><div style="width: 6px;height: 6px;border-radius: 50%;background:rgba(42, 198, 109, 1);position: absolute;top:50%;left:50%;margin-top: -3px;margin-left: -3px;"></div></div>';
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
                  var p2 = [e.location.lng, e.location.lat];
                  var s = AMap.GeometryUtil.distance(cpoint, p2) / 1000;
                  s = s.toFixed(1);
                  ht += `
                    <li>
                      <h5>${e.name}</h5>
                      <p>${e.address} <span><img src="${img}">${s}km</span></p>
                    </li>
                    `;
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
    cli(e) {
      this.tan = e;
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
    if(this.$route.query.phone) {
      $cookies.set("phone",this.$route.query.phone)
    }
    // this.isbaidu = this.$route.query.isbaidu
    document.getElementById("foott").style.display = "none";
    this.mmap();
    var swiper08 = new Swiper(".swiper-map", {
      slidesPerView: 4.5,
      spaceBetween: 10,
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 14,
    });
    let box = document.getElementById("Zhou");
    let id = this.$route.params.id;
    let that = this
    box.onclick = function (e) {
      console.log(e.target.id);
      if (e.target.id == "buildbox") {
        console.log('is pro')
        that.pop('咨询服务', 100, '详情页+咨询服务')
        // $(document).ready(function () {
        //   var u = navigator.userAgent;
        //   var isbaidu = u.indexOf("baiduboxapp") > -1; //百度小程序
        //   if (!isbaidu) {
        //     console.log(55)
        //     wx.miniProgram.navigateTo({
        //       url: "/pages/content/content?id=" + id,
        //     });
        //   } else {
        //     swan.webView.redirectTo({
        //       url: "/pages/content/content?id=" + id,
        //       success() {
        //         console.log("to-web-view success");
        //       },
        //       fail() {
        //         console.log("fail");
        //       },
        //     });
        //   }
        // });
      }
    };
  },
  beforeDestroy() {
    document.getElementById("foott").style.display = "block";
  },
};
</script>
<style lang="less" scoped>
#Zhou {
  height: 100vh;
  display: flex;
}
.top {
  width: 100%;
  height: 2.75rem;
  background-color: #fff;
  z-index: 20;
  position: absolute;
}
.top .back {
  width: 20px;
  margin-left: 14px;
  margin-right: 16px;
  position: absolute;
  top: 0.6875rem;
}
header {
  text-align: center;
  height: 2.75rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  background-color: #fff;
  line-height: 2.75rem;
  font-weight: bold;
  .logo {
    position: absolute;
    left: 4%;
    width: 4.0625rem;
    top: 0.625rem;
  }
  .list {
    width: 1.5rem;
    position: absolute;
    right: 4%;
    top: 0.625rem;
  }
}
.map-con {
  width: 100%;
  flex: 1;
  // padding-top: 2.5rem;
  padding-bottom: 15.3125rem;
  position: relative;
  background-color: #f5f5f5;
  #map {
    width: 100%;
    height: 100%;
  }
  .map-type {
    position: absolute;
    width: 2.875rem;
    height: 2.875rem;
    border-radius: .375rem;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
    text-align: center;
    color: #2AC46C;
    font-size: 0.75rem;
    bottom: 17.25rem;
    right: 4%;
    background-color: #fff;
    img {
      width: 1.125rem;
      margin-top: .375rem;
      margin-bottom: -0.125rem;
    }
    a {
      color: #FFFFFF;
    }
  }
  .tel {
    bottom: 21rem;
    background-color: #2AC46C;
  }
}
.map-mm {
  padding-top: 1.125rem;
  height: 15.3125rem;
  background-color: #fff;
  width: 100%;
  z-index: 1000;
  position: fixed;
  bottom: 0;
  .swiper-map {
    overflow: hidden;
    padding-bottom: 1.125rem;
    border-bottom: 0.03125rem solid #f5f5f5;
    margin-bottom: 0.625rem;
    .tegood {
      color: #4A4C4D;
      font-size: 0.875rem;
      width: 4.375rem;
      height: 1.75rem;
      border-radius: .875rem;
      text-align: center;
      line-height: 1.75rem;
      background: #F2F2F2;
    }
    .active {
      color: #2AC66D;
      background: #E6FAEF;
    }
  }
  .map-msg {
    height: 12.1875rem;
    overflow-y: auto;
    padding-top: 1.125rem;
    padding: 0 4%;
    /deep/ .map-msg-con {
      /deep/ li {
        list-style: none;
        margin-bottom: 1.125rem;
        /deep/ h5 {
          color: #1a1a1a;
          font-size: 0.9375rem;
          margin-bottom: 0.5rem;
          font-weight: 400;
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
}
</style>