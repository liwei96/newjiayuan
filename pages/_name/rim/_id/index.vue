<template>
  <div id="Zhou">
      <top-view></top-view>
    <div class="map-con">
      <div id="map"></div>
      <div id="panel" style="display:none"></div>
      <div class="map-type tel">
        <a :href="'tel:'+tel">
          <p>电话</p>
          <p>咨询</p>
        </a>
      </div>
      <div class="map-type" @click="showbox(82,'预约看房')">
        <p>预约</p>
        <p>看房</p>
      </div>
    </div>
    <div class="map-mm">
      <div class="swiper-map">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div :class="mapnum === 0 ? 'tegood active' : 'tegood'" @click="setmap(0, '地铁')">
              地铁
              <i></i>
            </div>
          </div>
          <div class="swiper-slide">
            <div :class="mapnum === 1 ? 'tegood active' : 'tegood'" @click="setmap(1 ,'公交')">
              公交
              <i></i>
            </div>
          </div>
          <div class="swiper-slide">
            <div :class="mapnum === 2 ? 'tegood active' : 'tegood'" @click="setmap(2, '教育')">
              教育
              <i></i>
            </div>
          </div>
          <div class="swiper-slide">
            <div :class="mapnum === 3 ? 'tegood active' : 'tegood'" @click="setmap(3, '医院')">
              医院
              <i></i>
            </div>
          </div>
          <div class="swiper-slide">
            <div :class="mapnum === 4 ? 'tegood active' : 'tegood'" @click="setmap(4, '购物')">
              购物
              <i></i>
            </div>
          </div>
          <div class="swiper-slide">
            <div :class="mapnum === 5 ? 'tegood active' : 'tegood'" @click="setmap(5, '美食')">
              美食
              <i></i>
            </div>
          </div>
          <div class="swiper-slide">
            <div :class="mapnum === 6 ? 'tegood active' : 'tegood'" @click="setmap(6, '娱乐')">
              娱乐
              <i></i>
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
              <span>
                <img src="~/assets/dian.png" />800m
              </span>
            </p>
          </li>
          <li>
            <h5>武林广场</h5>
            <p>
              地铁1号线
              <span>
                <img src="~/assets/dian.png" />800m
              </span>
            </p>
          </li>
        </ul>
        <p class="map-tishi" v-if="isnull">附近没有{{mapname}}，您可以看看其他信息</p>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import topView from "@/components/header.vue";
export default {
    components: {
    "top-view": topView,
  },
  data() {
    return {
      mapname: "地铁",
      mapnum: 0,
      isnull: false,
      show: false,
      id: 0,
      name: "",
      typebtn: 1,
      typenum: 0,
      tan: false,
      tel: "",
      proname: "",
    };
  },
  methods: {
    mmap() {
      this.over = false;
      let that = this;
      let baidu = [120.232623, 30.298957];
      let img = require("~/assets/mappro.png");
      let pro = sessionStorage.getItem("buildname");
      let add = sessionStorage.getItem("buildaddress");
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
          style="width:140px;height: 36px;box-shadow:0px 0px 5px 0px rgba(6,0,1,0.1);border-radius:4px;padding-left: 17px;position: relative;background: #fff;">
          <div style="float: left;width:72%">
            <h5 style="color: #121212;font-size: 12px;margin:0;margin-top: .125rem;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">${pro}</h5>
            <p style="color: #919499;font-size: 10px;margin:0;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">${add}</p>
          </div>
          <div style="float: left;"><img style="width: 29px;margin-top:3px" src="${img}" alt=""></div>
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
            '<div style="width: 24px;height: 24px;border-radius: 50%;background:rgba(228,186,75,0.3);position: relative;"><div style="width: 6px;height: 6px;border-radius: 50%;background:rgba(228,186,75,1);position: absolute;top:50%;left:50%;margin-top: -3px;margin-left: -3px;"></div></div>';
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
    showbox(id, name) {
      this.typenum = id;
      this.name = name;
      this.tan = true;
      this.typebtn = 1;
    },
  },
  mounted() {
    this.proname = sessionStorage.getItem("buildname")
      ? sessionStorage.getItem("buildname")
      : "易得房";
    this.tel = sessionStorage.getItem("tel")
      ? sessionStorage.getItem("tel")
      : "400-718-6686";
    this.mmap();
    var swiper08 = new Swiper(".swiper-map", {
      slidesPerView: 5.5,
      spaceBetween: 10,
      slidesOffsetAfter: 12,
      slidesOffsetBefore: 14,
    });
  },
};
</script>
<style lang="less" scoped>
#Zhou {
  height: 100vh;
  display: flex;
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
  padding-top: 2.5rem;
  padding-bottom: 15.3125rem;
  position: relative;
  background-color: pink;
  #map {
    width: 100%;
    height: 100%;
  }
  .map-type {
    position: absolute;
    width: 2.875rem;
    height: 2.875rem;
    border-radius: 50%;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
    text-align: center;
    color: #333333;
    font-size: 0.75rem;
    bottom: 17.25rem;
    right: 4%;
    background-color: #fff;
    p:nth-of-type(1) {
      margin-top: 0.3125rem;
    }
    a {
      color: #333333;
    }
  }
  .tel {
    bottom: 21rem;
  }
}
.map-mm {
  padding-top: 1.125rem;
  height: 15.3125rem;
  background-color: #fff;
  width: 100%;
  z-index: 10000;
  position: fixed;
  bottom: 0;
  .swiper-map {
    overflow: hidden;
    padding-bottom: 1.125rem;
    border-bottom: 0.03125rem solid #f5f5f5;
    margin-bottom: 0.625rem;
    .tegood {
      color: #4d4d4d;
      font-size: 0.875rem;
    }
    .active {
      color: #1FC365;
      position: relative;
      i {
        width: 1.5625rem;
        height: 0.125rem;
        border-radius: 0.0625rem;
        background-color: #1FC365;
        position: absolute;
        display: block;
        bottom: -0.375rem;
        left: 0;
      }
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