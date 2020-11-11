<template>
  <div id="search">
    <header>
      <img class="back" src="~/assets/goback.png" alt @click="back" />
      <nuxt-link :to="'/' + jkl + '/address'">
        <p class="city">
          {{ cityname }}
          <img src="~/assets/downsan.png" alt />
        </p>
      </nuxt-link>
      <img class="logo" src="~/assets/logo.png" alt />
      <!-- <div class="zixuns" @click="gotalk" v-show="false">
        <img src="~/assets/zixun.png" alt />
        <p></p>
      </div> -->
      <nuxt-link :to="'/' + jkl + '/map'" class="map">
        <span> <img src="~/assets/dian.png" />地图 </span>
      </nuxt-link>
    </header>
    <div class="input">
      <nuxt-link :to="'/' + jkl + '/searchname'">
        <input type="text" placeholder="请输入楼盘名称" />
      </nuxt-link>

      <img src="~/assets/search.png" alt class="sea" />
    </div>
    <div class="nav">
      <ul class="nn">
        <li @click="showarea">
          区域
          <img src="~/assets/down1.png" alt />
        </li>
        <li @click="showpri">
          价格
          <img src="~/assets/down1.png" alt />
        </li>
        <li @click="showhu">
          户型
          <img src="~/assets/down1.png" alt />
        </li>
        <li @click="showmore">
          更多
          <img src="~/assets/down1.png" alt />
        </li>
        <li @click="showorder">
          排序
          <img src="~/assets/down1.png" alt />
        </li>
      </ul>
      <div class="area">
        <div class="area-con">
          <div class="area-top">
            <div class="area-left">
              <ul>
                <li :class="areanum == 0 ? 'active' : ''" @click="setarea(0)">
                  <span>区域</span>
                </li>
                <li :class="areanum == 1 ? 'active' : ''" @click="setarea(1)">
                  <span>地铁</span>
                </li>
              </ul>
            </div>
            <div class="area-right">
              <ul v-if="areanum == 0">
                <li
                  :class="area.length == 0 ? 'active' : ''"
                  @click="unlimited(0, citys)"
                >
                  不限
                </li>
                <li
                  v-for="(item, key) in citys"
                  :key="key"
                  :class="item.btn == 1 ? 'active' : ''"
                  @click="set(citys, item.id, key, 0)"
                >
                  {{ item.name }}
                </li>
              </ul>
              <ul v-if="areanum == 1">
                <li
                  :class="railway.length == 0 ? 'active' : ''"
                  @click="unlimited(1, ties)"
                >
                  不限
                </li>
                <li
                  v-for="(item, key) in ties"
                  :key="key"
                  :class="item.btn == 1 ? 'active' : ''"
                  @click="set(ties, item.id, key, 1)"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="area-bom">
            <button @click="setnull">重置</button>
            <button class="yes" @click="yes">确定</button>
          </div>
        </div>
      </div>
      <div class="pri">
        <div class="pri-con">
          <div class="area-top">
            <div class="area-left">
              <ul>
                <li :class="areanum == 0 ? 'active' : ''" @click="setarea(0)">
                  <span>单价</span>
                </li>
                <li :class="areanum == 1 ? 'active' : ''" @click="setarea(1)">
                  <span>总价</span>
                </li>
              </ul>
            </div>
            <div class="area-right">
              <ul v-if="areanum == 0">
                <li :class="price == 0 ? 'active' : ''" @click="price = 0">
                  不限
                </li>
                <li
                  v-for="(item, key) in single_prices"
                  :key="key"
                  :class="price == item.id ? 'active' : ''"
                  @click="price = item.id"
                >
                  {{ item.name }}
                </li>
              </ul>
              <ul v-if="areanum == 1">
                <li :class="total == 0 ? 'active' : ''" @click="total = 0">
                  不限
                </li>
                <li
                  v-for="(item, key) in total_prices"
                  :key="key"
                  :class="total == item.id ? 'active' : ''"
                  @click="total = item.id"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="area-bom">
            <button @click="setnull1">重置</button>
            <button class="yes" @click="yes">确定</button>
          </div>
        </div>
      </div>
      <div class="hu">
        <ul>
          <li v-for="(item, key) in hus" :key="key">
            <p>{{ item.name }}</p>
            <input type="checkbox" name="hu" v-model="husid" :value="key" />
          </li>
        </ul>
        <div class="hubtn">
          <button @click="husid = []">重置</button>
          <button class="yes" @click="yes">确定</button>
        </div>
      </div>
      <div class="type">
        <div class="type-top">
          <div class="type-li">
            <h6>面积</h6>
            <p>
              <span
                v-for="(item, key) in areas"
                :key="key"
                :class="region == item.id ? 'active' : ''"
                @click="mian(item.id)"
                >{{ item.name }}</span
              >
            </p>
          </div>
          <div class="type-li">
            <h6>类型</h6>
            <p>
              <span
                v-for="(item, key) in types"
                :key="key"
                :class="type1 == item.type ? 'active' : ''"
                @click="leixing(item.type)"
                >{{ item.type }}</span
              >
            </p>
          </div>
          <div class="type-li">
            <h6>特色</h6>
            <p>
              <span
                v-for="(item, key) in features"
                :key="key"
                :class="item.btn == 1 ? 'active' : ''"
                @click="set(features, item.id, key, 2)"
                >{{ item.name }}</span
              >
            </p>
          </div>
          <!-- <div class="type-li">
            <h6>装修</h6>
            <p>
              <span>50m²以下</span>
              <span>50m²以下</span>
              <span>50m²以下</span>
              <span>50m²以下</span>
            </p>
          </div>-->
        </div>
        <div class="typebtn">
          <button @click="setnull2()">重置</button>
          <button class="yes" @click="yes">确定</button>
        </div>
      </div>
      <div class="order">
        <ul>
          <li @click="order(0)" :class="ordernum == 0 ? 'active' : ''">
            默认排序
          </li>
          <li @click="order(1)" :class="ordernum == 1 ? 'active' : ''">
            单价从低到高
          </li>
          <li @click="order(3)" :class="ordernum == 3 ? 'active' : ''">
            单价从高到低
          </li>
          <li @click="order(4)" :class="ordernum == 4 ? 'active' : ''">
            开盘时间从近到远
          </li>
          <li @click="order(2)" :class="ordernum == 2 ? 'active' : ''">
            开盘时间从远到近
          </li>
        </ul>
      </div>
      <div class="zhe" v-if="showtype" @click="cloase"></div>
    </div>
    <div class="icon">
      <p @click="zhu($event)" :class="type1 ? 'active' : ''">住宅</p>
      <p @click="te($event)" :class="special_discount ? 'active' : ''">
        特价房
      </p>
      <p
        @click="gang($event)"
        :class="feature.indexOf('3') != -1 ? 'active' : ''"
      >
        刚需
      </p>
      <p @click="jin($event)" :class="near_railway ? 'active' : ''">近地铁</p>
    </div>
    <div class="con">
      <template v-for="(item, key) in list">
        <nuxt-link :to="'/' + jkl + '/content/' + item.id" :key="key">
          <div class="pro">
            <img :src="item.img" alt />
            <div class="pro-msg">
              <h5>
                {{ item.name }}
                <span :class="item.state != '在售' ? 'active' : ''">{{
                  item.state
                }}</span>
              </h5>
              <p class="pro-price">
                <span>{{ item.price }}</span>
                <i>元/m²</i>
              </p>
              <p class="attr">
                {{ item.type }} | {{ item.city }}-{{
                  item.country.substr(0, 2)
                }}
                | {{ item.area }}m²
              </p>
              <p class="pro-icon">
                <span class="pro-icon-zhuang">{{ item.decorate }}</span>
                <span
                  class="pro-icon-type"
                  v-for="(val, k) in item.feature"
                  :key="k"
                  >{{ val }}</span
                >
              </p>
            </div>
          </div>
        </nuxt-link>
      </template>
    </div>
    <div class="isnull" v-if="isnull">
      <div class="nulltopimg">
        <img src="~/assets/search-null.png" alt />
      </div>
      <p class="nullmsg">
        没有找到相关内容，
        <span @click="clearall">清空条件</span>再次搜索
        或者让我们来为您推荐寻找合适的楼盘
      </p>
      <button @click="help">帮我找房</button>
      <div class="other">
        <h3>猜你喜欢</h3>
        <template v-for="(item, key) in other">
          <nuxt-link :to="'/' + jkl + '/content/' + item.id" :key="key">
            <div class="pro">
              <img :src="item.img" alt />
              <div class="pro-msg">
                <h5>
                  {{ item.name }}
                  <span>{{ item.state }}</span>
                </h5>
                <p class="pro-price">
                  <span>{{ item.price }}</span>
                  <i>元/m²</i>
                </p>
                <p class="attr">
                  {{ item.type }} | {{ item.city }}-{{
                    item.country.substr(0, 2)
                  }}
                  | {{ item.area }}m²
                </p>
                <p class="pro-icon">
                  <span class="pro-icon-zhuang">{{ item.decorate }}</span>
                  <span
                    class="pro-icon-type"
                    v-for="(val, k) in item.feature"
                    :key="k"
                    >{{ val }}</span
                  >
                </p>
              </div>
            </div>
          </nuxt-link>
        </template>
      </div>
    </div>
    <div class="load" v-if="load">
      <loading type="spinner" size="16px">加载中...</loading>
    </div>
  </div>
</template>
<script>
import { Popup, Loading } from "vant";
import { pros } from "@/api/api";
import "@/static/css/foot.css";
export default {
  async asyncData(context) {
    let city = context.store.state.city;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let area1 = 0;
    let price1 = 0;
    let type1 = 0;
    let typenum = 0;
    let shai1 = 0;
    let area = [];
    let railway = [];
    let total = 0;
    let price = 0;
    let feature = [];
    let husid = [];
    let options = {
      city: city,
      phone: 1,
      page: 1,
      limit: 10,
    };
    let ordernum = 0;
    let region = 0;
    let isnull = false;
    let special_discount = "";
    let near_railway = "";
    if (context.route.path.split("/").length == 4) {
      let arr = context.route.path.split("/")[3].split("+");
      for (let val of arr) {
        let ll = val.split("-");
        switch (ll[0]) {
          case "country":
            area1 = 1;
            area = ll[1].split(",");
            break;
          case "railway":
            area1 = 1;
            railway = ll[1].split(",");
            break;
          case "total_price":
            price1 = 1;
            total = ll[1];
            break;
          case "single_price":
            price1 = 1;
            price = ll[1];
            break;
          case "house_type":
            typenum = 1;
            husid = ll[1].split(",");
            break;
          case "type":
            shai1 = 1;
            if (ll[1] == "公寓") {
              type1 = "公寓";
            } else if (ll[1] == "写字楼") {
              type1 = "写字楼";
            } else if (ll[1] == "住宅") {
              type1 = "住宅";
            } else if (ll[1] == "商铺") {
              type1 = "商铺";
            }
            break;
          case "feature":
            shai1 = 1;
            feature = ll[1].split(",");
            break;
          case "order":
            shai1 = 1;
            ordernum = ll[1];
            break;
          case "area":
            shai1 = 1;
            region = ll[1];
            break;
          case "special_discount":
            special_discount = 1;
            break;
          case "near_railway":
            near_railway = 1;
            break;
        }
        options[ll[0]] = ll[1];
      }
    }
    let [res, res1, res2] = await Promise.all([
      context.$axios
        .get("/jy/phone/search/conditions", {
          params: {
            city: city,
            token: token,
          },
        })
        .then((resp) => {
          let data = resp.data;
          for (let val of data.conditions.countries) {
            val.btn = 0;
            for (let v of area) {
              if (val.id == v) {
                val.btn = 1;
              }
            }
          }
          for (let val of data.conditions.railways) {
            val.btn = 0;
            for (let v of railway) {
              if (val.id == v) {
                val.btn = 1;
              }
            }
          }
          for (let val of data.conditions.features) {
            val.btn = 0;
            for (let v of feature) {
              if (val.id == v) {
                val.btn = 1;
              }
            }
          }
          //   console.log(data)
          return data;
        }),
      context.$axios
        .get("/jy/search/info", {
          params: options,
        })
        .then((resp) => {
          let data = resp.data.info;
          if (data.length == 0) {
            isnull = true;
          }
          //   console.log(data)
          return resp.data;
        }),
      context.$axios
        .get("/jy/recommend", {
          params: { city: city, count: 4 },
        })
        .then((res) => {
          return res.data.recommends;
        }),
    ]);
    return {
      jkl: jkl,
      citys: res.conditions.countries,
      ties: res.conditions.railways,
      hus: res.conditions.house_types,
      single_prices: res.conditions.single_prices,
      total_prices: res.conditions.total_prices,
      areas: res.conditions.areas,
      types: res.conditions.types,
      features: res.conditions.features,
      list: res1.info,
      type1: type1, //类型
      area: area, //区域
      husid: husid, //户型
      railway: railway, //地铁
      feature: feature, //特色
      ordernum: ordernum, //排序
      price: price, //单价
      total: total, //总价
      region: region, //面积
      other: res2,
      isnull: isnull,
      cityname: res.common.city_info.current.short,
      special_discount: special_discount,
      near_railway: near_railway,
      title:res1.common.header.title,
      description:res1.common.header.description,
      keywords:res1.common.header.keywords
    };
  },
  head() {
    return {
      title: this.title || "家园新房-" + this.cityname + "-楼盘查询",
      meta: [
        {
          name: "description",
          content: this.description || "家园新房",
        },
        {
          name: "keywords",
          content: this.keywords || "家园新房",
        },
      ],
    };
  },
  data() {
    return {
      other: [],
      load: false,
      areanum: 0,
      citynum: 0,
      citys: [],
      ties: [],
      tienum: 0,
      showtype: false,
      type: 0,
      hus: [],
      husid: [],
      isnull: false,
      page: 2,
      country: "",
      type1: "", //类型
      total_price: "",
      single_price: "",
      area: [], //区域
      house_type: "", //户型
      railway: [], //地铁
      feature: [], //特色
      ordernum: 0, //排序
      list: [],
      isok: true,
      price: 0, //单价
      total: 0, //总价
      region: 0, //面积
      special_discount: "",
      near_railway: "",
    };
  },
  components: {
    Popup,
    Loading,
  },
  methods: {
    setnull() {
      this.unlimited(0, this.citys);
      this.unlimited(1, this.ties);
    },
    setnull1() {
      this.price = 0;
      this.total = 0;
    },
    setnull2() {
      this.region = "";
      this.type1 = "";
      this.unlimited(2, this.features);
    },
    back() {
      this.$router.push("/" + this.jkl);
    },
    setarea(n) {
      this.areanum = n;
    },
    showarea() {
      if (this.showtype) {
        if (this.type == 1) {
          this.showtype = false;
        }
      } else {
        this.showtype = true;
      }
      this.type = 1;
      $(".pri-con").hide();
      $(".order").hide();
      $(".type").hide();
      $(".hu").hide();
      $(".area-con").slideToggle();
    },
    showpri() {
      if (this.showtype) {
        if (this.type == 2) {
          this.showtype = false;
        }
      } else {
        this.showtype = true;
      }
      this.type = 2;
      $(".area-con").hide();
      $(".order").hide();
      $(".hu").hide();
      $(".type").hide();
      $(".pri-con").slideToggle();
    },
    showhu() {
      if (this.showtype) {
        if (this.type == 3) {
          this.showtype = false;
        }
      } else {
        this.showtype = true;
      }
      this.type = 3;
      $(".area-con").hide();
      $(".order").hide();
      $(".type").hide();
      $(".pri-con").hide();
      $(".hu").slideToggle();
    },
    showmore() {
      if (this.showtype) {
        if (this.type == 4) {
          this.showtype = false;
        }
      } else {
        this.showtype = true;
      }
      this.type = 4;
      $(".area-con").hide();
      $(".pri-con").hide();
      $(".order").hide();
      $(".hu").hide();
      $(".type").slideToggle();
    },
    showorder() {
      if (this.showtype) {
        if (this.type == 5) {
          this.showtype = false;
        }
      } else {
        this.showtype = true;
      }
      this.type = 5;
      $(".area-con").hide();
      $(".pri-con").hide();
      $(".hu").hide();
      $(".type").hide();
      $(".order").slideToggle();
    },
    cloase() {
      this.showtype = false;
      $(".area-con").slideUp();
      $(".pri-con").slideUp();
      $(".hu").slideUp();
      $(".type").slideUp();
      $(".order").slideUp();
    },
    getmore() {
      let that = this;
      var scrollTop = window.scrollY;
      if (scrollTop >= 44) {
        $(".nav").css({ position: "fixed", top: "2.75rem" });
        $(".icon").css({ marginTop: "47.86px" });
      } else {
        $(".nav").css({ position: "relative", top: "0" });
        $(".icon").css({ marginTop: "0" });
      }
      var scrollHeight = window.screen.availHeight;
      var windowHeight = document.body.scrollHeight;
      let city = $cookies.get("city");
      if (scrollTop + scrollHeight >= windowHeight) {
        if (that.isok) {
          that.isok = false;
          let d = {
            phone: 1,
            order: that.ordernum,
            city: city,
            page: that.page,
            limit: 10,
          };
          if (that.area.length != 0) {
            d.country = that.area.join(",");
          }
          if (that.type1) {
            d.type = that.type1;
          }
          if (that.total) {
            d.total_price = that.total;
          }
          if (that.price) {
            d.single_price = that.price;
          }
          if (that.region) {
            d.area = that.region;
          }
          if (that.husid.length != 0) {
            d.house_type = that.husid.join(",");
          }
          if (that.railway.length != 0) {
            d.railway = that.railway.join(",");
          }
          if (that.feature.length != 0) {
            d.feature = that.feature.join(",");
          }
          if (that.special_discount) {
            d.special_discount = that.special_discount;
          }
          if (that.near_railway) {
            d.near_railway = that.near_railway;
          }
          pros(d).then((res) => {
            that.list = that.list.concat(res.data.info);
            that.isok = true;
            that.page = that.page + 1;
          });
        }
      }
    },
    order(id) {
      console.log(id);
      let type = $cookies.get("type");
      type.order = id;
      let url = this.$route.path;
      let str = "";
      for (let key in type) {
        str += key + "-" + type[key] + "+";
      }
      str = str.substring(0, str.length - 1);
      let arr = url.split("/");
      arr[3] = str;
      url = arr.join("/");
      this.$router.push(url);
    },
    tostring(type, name, val) {
      // let url = this.$route.path;
      // let type = $cookies.get("type");
      if (val == 0 || val.length == 0) {
        if (type.hasOwnProperty(name)) {
          delete type[name];
        }
      } else {
        type[name] = val;
      }
      return type;
      // $cookies.set("type", type, 0);
      // let str = "";
      // for (let key in type) {
      //   str += key + "-" + type[key] + "+";
      // }
      // str = str.substring(0, str.length - 1);
      // let arr = url.split("/");
      // arr[3] = str;
      // url = arr.join("/");
      // this.$router.push(url);
    },
    start() {
      let type = $cookies.get("type");
      if (!type) {
        type = {};
      }
      let url = this.$route.path;
      if (url.split("/").length == 4) {
        let arr = url.split("/")[3].split("+");
        for (let val of arr) {
          let ll = val.split("-");
          type[ll[0]] = ll[1];
        }
        $cookies.set("type", type);
      } else {
        $cookies.set("type", {});
      }
      if (this.type1) {
      }
    },
    set(arr, id, key, type) {
      let that = this;
      for (let k in arr) {
        if (k == key) {
          if (!arr[k].btn) {
            arr[k].btn = 1;
          } else {
            arr[k].btn = 0;
          }
        }
      }
      switch (type) {
        case 0:
          that.area = that.pu(that.area, id);
          that.citynum = 1;
          that.citys = arr;
          break;
        case 1:
          that.railway = that.pu(that.railway, id);
          that.tienum = 1;
          that.ties = arr;
          break;
        case 2:
          that.feature = that.pu(that.feature, id);
          that.features = arr;
          break;
      }
    },
    pu(arr, id) {
      if (typeof id == String) {
        if (arr.indexOf(String(id)) == -1) {
          arr.push(id);
        } else {
          arr.splice(arr.indexOf(String(id)), 1);
        }
      } else {
        if (arr.indexOf(parseInt(id)) == -1) {
          arr.push(id);
        } else {
          arr.splice(arr.indexOf(String(id)), 1);
        }
      }
      // if (arr.indexOf(String(id)) == -1) {
      //   arr.push(id);
      // } else {
      //   arr.splice(arr.indexOf(String(id)), 1);
      // }
      console.log(arr);
      return arr;
    },
    unlimited(id, arr) {
      let that = this;
      for (let val of arr) {
        val.btn = 0;
      }
      switch (id) {
        case 0:
          that.area = [];
          that.citynum = 0;
          that.citys = arr;
          break;
        case 1:
          that.railway = [];
          that.tienum = 0;
          that.ties = arr;
          break;
        case 2:
          that.feature = [];
          that.features = arr;
          break;
      }
    },
    yes() {
      let that = this;
      let d = $cookies.get("type");
      if (that.area.length != 0) {
        d.country = that.area.join(",");
      } else {
        d = that.tostring(d, "country", that.area);
      }
      if (that.type1) {
        d.type = that.type1;
      } else {
        d = that.tostring(d, "type", that.type1);
      }
      if (that.total) {
        d.total_price = that.total;
      } else {
        d = that.tostring(d, "total_price", that.total);
      }
      if (that.price) {
        d.single_price = that.price;
      } else {
        d = that.tostring(d, "single_price", that.price);
      }
      if (that.region) {
        d.area = that.region;
      } else {
        d = that.tostring(d, "area", that.region);
      }
      if (that.husid.length != 0) {
        d.house_type = that.husid.join(",");
      } else {
        d = that.tostring(d, "house_type", that.husid);
      }
      if (that.railway.length != 0) {
        d.railway = that.railway.join(",");
      } else {
        d = that.tostring(d, "railway", that.railway);
      }

      if (that.feature.length != 0) {
        d.feature = that.feature.join(",");
      } else {
        d = that.tostring(d, "feature", that.feature);
      }
      console.log(d);
      $cookies.set("type", d);
      let url = this.$route.path;
      let str = "";
      for (let key in d) {
        str += key + "-" + d[key] + "+";
      }
      str = str.substring(0, str.length - 1);
      let arr = url.split("/");
      arr[3] = str;
      url = arr.join("/");
      this.cloase();
      this.$router.push(url);
    },
    clearall() {
      $cookies.remove("type");
      let that = this;
      this.$router.push("/" + that.jkl + "/search");
    },
    zhu(e) {
      let tar = e.currentTarget;
      let type = $cookies.get("type");
      if (!type) {
        type = {};
      }
      if (tar.className) {
        delete type.type;
      } else {
        tar.className = "active";
        type.type = "住宅";
      }
      $cookies.set("type", type);
      let url = this.$route.path;
      let str = "";
      for (let key in type) {
        str += key + "-" + type[key] + "+";
      }
      str = str.substring(0, str.length - 1);
      let arr = url.split("/");
      arr[3] = str;
      url = arr.join("/");
      this.$router.push(url);
    },
    te(e) {
      let tar = e.currentTarget;
      let type = $cookies.get("type");
      if (!type) {
        type = {};
      }
      if (tar.className) {
        delete type.special_discount;
      } else {
        tar.className = "active";
        type.special_discount = 1;
      }
      $cookies.set("type", type);
      let url = this.$route.path;
      let str = "";
      for (let key in type) {
        str += key + "-" + type[key] + "+";
      }
      str = str.substring(0, str.length - 1);
      let arr = url.split("/");
      arr[3] = str;
      url = arr.join("/");
      this.$router.push(url);
    },
    gang(e) {
      let type = $cookies.get("type");
      if (!type) {
        type = {};
      }
      let tar = e.currentTarget;
      if (tar.className) {
        this.feature.splice(this.feature.indexOf(3), 1);
        if (this.feature.length) {
          type.feature = this.feature.join(",");
        } else {
          delete type.feature;
        }
      } else {
        tar.className = "active";
        this.feature.push(3);
        type.feature = this.feature.join(",");
      }
      $cookies.set("type", type);
      let url = this.$route.path;
      let str = "";
      for (let key in type) {
        str += key + "-" + type[key] + "+";
      }
      str = str.substring(0, str.length - 1);
      let arr = url.split("/");
      arr[3] = str;
      url = arr.join("/");
      this.$router.push(url);
    },
    jin(e) {
      let type = $cookies.get("type");
      if (!type) {
        type = {};
      }
      let tar = e.currentTarget;
      if (tar.className) {
        delete type.near_railway;
      } else {
        tar.className = "active";
        type.near_railway = 1;
      }
      $cookies.set("type", type);
      let url = this.$route.path;
      let str = "";
      for (let key in type) {
        str += key + "-" + type[key] + "+";
      }
      str = str.substring(0, str.length - 1);
      let arr = url.split("/");
      arr[3] = str;
      url = arr.join("/");
      this.$router.push(url);
    },
    help() {
      this.$router.push("/" + this.jkl + "/help");
    },
    gotalk() {
      window.location.href =
        "http://www.jy1980.com:9191/hangzhou/talk?reconnect=" + this.url;
    },
    leixing(type) {
      if (this.type1 == type) {
        this.type1 = "";
      } else {
        this.type1 = type;
      }
    },
    mian(id) {
      if (this.region == id) {
        this.region = "";
      } else {
        this.region = id;
      }
    },
  },
  mounted() {
    this.start();
    console.log(this.types);
    let url = window.location.href;
    let newurl = url.split("?")[0];
    let id = this.$route.params.id;
    let name = sessionStorage.getItem("buildname");
    newurl += `?proid=${id}&name=${name}`;
    newurl = encodeURIComponent(newurl);
    this.url = newurl;
    setTimeout(() => {
      this.btn = true;
    }, 2000);
    url = url.split("?")[1];
    if (url && url.indexOf("token") != -1) {
      localStorage.setItem("wstoken", url.split("=")[1]);
    }
    // if(!this.list){
    //   this.isnull = true
    // }
    // console.log(this.$route.path);
    // 滑动监控
    localStorage.setItem("cityname", this.cityname);
    // $(window).scroll(function () {
    //   var scrollTop =
    //     document.documentElement.scrollTop || document.body.scrollTop;
    //   if (scrollTop >= 44) {
    //     $(".nav").css({ position: "fixed", top: "2.75rem" });
    //   } else {
    //     $(".nav").css({ position: "relative", top: "0" });
    //   }
    //   // console.log(scrollTop);
    // });
    window.addEventListener("scroll", this.getmore);
  },
  watch: {
    showtype(val) {},
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.getmore);
  },
};
</script>
<style lang="less" scoped>
li {
  list-style: none;
}
header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  width: 100%;
  height: 2.75rem;
  z-index: 1;
  background-color: #fff;
  // position: relative;
  .back {
    width: 1.5rem;
    margin-left: 1rem;
  }
  .logo {
    width: 3.125rem;
    margin-left: 8.75rem;
  }
  .home {
    width: 1.25rem;
    margin-right: 1rem;
  }
  a {
    position: absolute;
    height: 1.25rem;
  }
  .zixuns {
    margin-right: 1.25rem;
    position: relative;
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
  .city {
    position: absolute;
    color: #323233;
    font-size: 0.875rem;
    // top: 0.7rem;
    left: 3.3125rem;
    width: 5.625rem;
    img {
      width: 1rem;
      position: relative;
      top: 0.125rem;
    }
  }
  .map {
    right: 3.875rem;
  }
  span {
    color: #333334;
    font-size: 0.875rem;
    position: absolute;
    width: 5rem;
    img {
      width: 0.875rem;
      margin-right: 0.25rem;
      margin-bottom: -0.125rem;
    }
  }
}
.input {
  height: 2.5rem;
  padding: 0 4%;
  position: relative;
  margin-top: 2.75rem;
  input {
    width: 100%;
    // width: 17.8125rem;
    height: 2rem;
    border-radius: 0.25rem;
    background-color: #f5f5f5;
    text-align: center;
    border: 0;
    outline: none;
    margin-top: 0.25rem;
    margin-right: 0.5rem;
  }
  input::-webkit-input-placeholder {
    color: #969899;
    font-size: 0.875rem;
  }
  input::-moz-input-placeholder {
    color: #969899;
    font-size: 0.875rem;
  }
  input::-ms-input-placeholder {
    color: #969899;
    font-size: 0.875rem;
  }
  span {
    color: #333334;
    font-size: 0.875rem;
    img {
      width: 0.875rem;
      margin-right: 0.25rem;
      margin-bottom: -0.125rem;
    }
  }
  .sea {
    position: absolute;
    width: 1rem;
    top: 0.7rem;
    left: 7.5rem;
    // left: 5.3rem;
  }
}
.nav {
  height: 3rem;
  line-height: 3rem;
  padding: 0 4%;
  width: 92%;
  background-color: #fff;
  z-index: 1000;
  border-bottom: 0.03125rem solid #f7f7f7;
  .nn {
    display: flex;
    li {
      color: #323333;
      font-size: 0.875rem;
      width: 20%;
      text-align: center;
      img {
        width: 1rem;
        margin-top: 5px;
        position: relative;
        top: 0.1875rem;
      }
    }
  }
  .area {
    position: absolute;
    left: 0;
    width: 100%;
    -webkit-z-index: 2;
    -moz-z-index: 2;
    -ms-z-index: 2;
    -o-z-index: 2;
    z-index: 2;
    .area-con {
      display: none;
      .area-top {
        height: 16.5625rem;
        background-color: #fff;
        display: flex;
        .area-left {
          width: 33.33%;
          background-color: #f8f8f8;
          height: 100%;
          ul {
            padding-top: 1.25rem;
            li {
              height: 3.125rem;
              color: #7d7f80;
              font-size: 1rem;
              line-height: 3.125rem;
              text-align: center;
            }
            .active {
              background-color: #fff;
              color: #2ac66e;
              span {
                border-left: 0.125rem solid #2ac66e;
                padding-left: 0.4375rem;
              }
            }
          }
        }
        .area-right {
          flex: 1;
          overflow: auto;
          ul {
            padding-top: 1.5rem;
            li {
              text-align: center;
              color: #7d7f80;
              font-size: 1rem;
              line-height: 1.125rem;
              margin-bottom: 2.125rem;
            }
            .active {
              color: #2ac66e;
            }
          }
        }
      }
      .area-bom {
        border-top: 0.03125rem solid rgba(238, 238, 238, 0.35);
        background-color: #fff;
        height: 3.4375rem;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          width: 10.46875rem;
          height: 2.25rem;
          border-radius: 0.25rem;
          text-align: center;
          line-height: 2.25rem;
          border: 0;
          background-color: #f3f3f3;
          color: #969899;
          font-size: 0.875rem;
        }
        .yes {
          background-color: #2ac66e;
          margin-left: 0.625rem;
          color: #fff;
        }
      }
    }
  }
  .pri {
    position: absolute;
    left: 0;
    width: 100%;
    -webkit-z-index: 2;
    -moz-z-index: 2;
    -ms-z-index: 2;
    -o-z-index: 2;
    z-index: 2;
    .pri-con {
      display: none;
      .area-top {
        height: 16.5625rem;
        background-color: #fff;
        display: flex;
        .area-left {
          width: 33.33%;
          background-color: #f8f8f8;
          height: 100%;
          ul {
            padding-top: 1.25rem;
            li {
              height: 3.125rem;
              color: #7d7f80;
              font-size: 1rem;
              line-height: 3.125rem;
              text-align: center;
            }
            .active {
              background-color: #fff;
              color: #2ac66e;
              span {
                border-left: 0.125rem solid #2ac66e;
                padding-left: 0.4375rem;
              }
            }
          }
        }
        .area-right {
          flex: 1;
          overflow: auto;
          ul {
            padding-top: 1.5rem;
            li {
              text-align: center;
              color: #7d7f80;
              font-size: 1rem;
              line-height: 1.125rem;
              margin-bottom: 2.125rem;
            }
            .active {
              color: #2ac66e;
            }
          }
        }
      }
      .area-bom {
        border-top: 0.03125rem solid rgba(238, 238, 238, 0.35);
        background-color: #fff;
        height: 3.4375rem;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          width: 10.46875rem;
          height: 2.25rem;
          border-radius: 0.25rem;
          text-align: center;
          line-height: 2.25rem;
          border: 0;
          background-color: #f3f3f3;
          color: #969899;
          font-size: 0.875rem;
        }
        .yes {
          background-color: #2ac66e;
          margin-left: 0.625rem;
          color: #fff;
        }
      }
    }
  }
  .zhe {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    position: absolute;
    left: 0;
  }
  .hu {
    position: absolute;
    width: 100%;
    left: 0;
    display: none;
    background-color: #fff;
    z-index: 2;
    ul {
      height: 16.5625rem;
      overflow: auto;
      padding-top: 1.25rem;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 1.125rem;
        margin-bottom: 2.125rem;
        p {
          margin-left: 2.375rem;
          color: rgba(125, 127, 128, 1);
          font-size: 1rem;
        }
        input {
          margin-right: 1.625rem;
          width: 0.9375rem;
          height: 0.9375rem;
          -webkit-appearance: none;
          border: 0.5px solid #999;
          outline: none;
        }
        input:checked {
          background: url(~assets/checkbox_icon.png) no-repeat 50%;
          background-size: 90%;
        }
      }
    }
    .hubtn {
      width: 100%;
      height: 3.4375rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      button {
        width: 10.46875rem;
        height: 2.25rem;
        border-radius: 0.25rem;
        text-align: center;
        line-height: 2.25rem;
        border: 0;
        background-color: #f3f3f3;
        color: #969899;
        font-size: 0.875rem;
      }
      .yes {
        background-color: #2ac66e;
        margin-left: 0.625rem;
        color: #fff;
      }
    }
  }
  .type {
    position: absolute;
    width: 100%;
    display: none;
    left: 0;
    padding-top: 1.5rem;
    background-color: #fff;
    z-index: 2;
    .type-top {
      height: 19.5625rem;
      overflow: auto;
    }
    .type-li {
      padding: 0 4%;
      margin-bottom: 1.875rem;
      h6 {
        color: rgba(51, 51, 51, 1);
        font-size: 0.9375rem;
        font-weight: 400;
        margin-bottom: 0.9375rem;
        line-height: 1rem;
      }
      p {
        overflow: hidden;
        span {
          float: left;
          display: block;
          width: 4.9375rem;
          height: 1.625rem;
          border-radius: 0.1875rem;
          text-align: center;
          line-height: 1.625rem;
          background-color: rgba(245, 245, 245, 1);
          color: rgba(75, 76, 77, 1);
          font-size: 0.75rem;
          margin-right: 0.6rem;
          margin-bottom: 0.625rem;
        }
        span:nth-of-type(4n) {
          margin: 0;
        }
        .active {
          background-color: #e1faec;
          color: #3ecb7b;
        }
      }
    }
    .typebtn {
      width: 100%;
      height: 3.4375rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      button {
        width: 10.46875rem;
        height: 2.25rem;
        border-radius: 0.25rem;
        text-align: center;
        line-height: 2.25rem;
        border: 0;
        background-color: #f3f3f3;
        color: #969899;
        font-size: 0.875rem;
      }
      .yes {
        background-color: #2ac66e;
        margin-left: 0.625rem;
        color: #fff;
      }
    }
  }
  .order {
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 2;
    background-color: #fff;
    height: 14.875rem;
    display: none;
    overflow: auto;
    ul {
      padding: 0 4%;
      li {
        line-height: 2.875rem;
        color: rgba(100, 101, 102, 1);
        font-size: 0.875rem;
        border-bottom: 0.03125rem solid rgba(247, 247, 247, 1);
      }
      .active {
        color: #2ac66d;
      }
    }
  }
}
.icon {
  padding: 0.6875rem 4%;
  display: flex;
  p {
    background-color: #f5f5f5;
    height: 1.75rem;
    width: 5rem;
    border-radius: 0.875rem;
    text-align: center;
    line-height: 1.75rem;
    color: #969799;
    font-size: 0.75rem;
    margin-right: 0.5rem;
  }
  .active {
    background-color: #fff7f2;
    color: #ff761a;
  }
  p:nth-of-type(4) {
    margin: 0;
  }
}
.con {
  padding: 0 4%;
  margin-top: 0.9375rem;
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
        .active {
          background-color: #fff7f2;
          color: #ff761a;
        }
      }
      .pro-price {
        color: #7a7a7a;
        font-size: 0.75rem;
        margin-bottom: 0.1875rem;
        span {
          color: #ff5454;
          font-size: 0.9375rem;
          font-weight: bold;
        }
        i {
          font-style: normal;
          color: #ff5454;
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
.isnull {
  .nulltopimg {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    img {
      width: 12.5rem;
      height: 12.5rem;
    }
  }
  .nullmsg {
    color: rgba(125, 127, 128, 1);
    font-size: 0.8125rem;
    line-height: 1.375rem;
    width: 15rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1.25rem;
    span {
      color: rgba(42, 198, 110, 1);
    }
  }
  button {
    background: linear-gradient(-270deg, #20c466, #3fd6a7);
    box-shadow: 0.03125rem 0.15625rem 0.3125rem 0px rgba(44, 204, 128, 0.2);
    border-radius: 0.25rem;
    width: 10rem;
    height: 2.25rem;
    border: 0;
    text-align: center;
    line-height: 2.25rem;
    color: #fff;
    font-size: 0.875rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1.875rem;
  }
  .other {
    padding: 0 4%;
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
          .active {
            background-color: #fff7f2;
            color: #ff761a;
          }
        }
        .pro-price {
          color: #7a7a7a;
          font-size: 0.75rem;
          margin-bottom: 0.1875rem;
          span {
            color: #ff5454;
            font-size: 0.9375rem;
          }
          i {
            font-style: normal;
            color: #ff5454;
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
.load {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.25rem;
}
</style>