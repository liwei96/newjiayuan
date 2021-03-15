<template>
  <div id="pkdetail">
    <top-view :jkl="jkl"></top-view>
    <div class="top">
      <div class="left">
        <p>楼盘对比</p>
        <span>楼盘信息</span>
      </div>
      <div class="center">
        <img class="topimg" :src="one.img" alt @click="godetail(one.id)"/>
        <div class="msg">
          <h6>{{one.name}}</h6>
          <p class="type">
            <span class="zhuang">{{one.decorate}}</span>
            <template v-for="(item,key) in one.features">
            <span :key="key" v-if="key==0">{{item}}</span>
            </template>
          </p>
          <p class="pri">
            约
            <span>{{one.price}}</span>元/m²
          </p>
          <a :href="'tel:'+phone">
          <button>
            <img src="~/assets/navtel.png" />电话咨询
          </button>
          </a>
        </div>
      </div>
      <div class="center">
        <img class="topimg" :src="two.img" alt @click="godetail(two.id)"/>
        <div class="msg">
          <h6>{{two.name}}</h6>
          <p class="type">
            <span class="zhuang">{{two.decorate}}</span>
            <template v-for="(item,key) in two.features">
            <span :key="key" v-if="key==0">{{item}}</span>
            </template>
          </p>
          <p class="pri">
            约
            <span>{{two.price}}</span>元/m²
          </p>
          <a :href="'tel:'+phone">
          <button>
            <img src="~/assets/navtel.png" />电话咨询
          </button>
          </a>
        </div>
      </div>
    </div>
    <div class="message">
      <table>
        <tr class="address">
          <td>楼盘地址</td>
          <td>
            <img src="~/assets/icon-path.png" alt />
            <span>{{one.address}}</span>
          </td>
          <td>
            <img src="~/assets/icon-path.png" alt />
            <span>{{two.address}}</span>
          </td>
        </tr>
        <tr>
          <td>项目特色</td>
          <td>
            <span class="type" v-for="(item,key) in one.features" :key="key">{{item}}</span>
          </td>
          <td>
            <span class="type" v-for="(item,key) in two.features" :key="key">{{item}}</span>
          </td>
        </tr>
        <tr>
          <td>销售状态</td>
          <td>{{one.state}}</td>
          <td>{{two.state}}</td>
        </tr>
        <tr>
          <td>建筑类型</td>
          <td>{{one.type}}</td>
          <td>{{two.type}}</td>
        </tr>
        <tr class="shou">
          <td>预售许可</td>
          <td>
            <p>{{one.license||'待更新'}}</p>
          </td>
          <td>
            <p>{{two.license||'待更新'}}</p>
          </td>
        </tr>
        <tr>
          <td>装修状况</td>
          <td>{{one.decorate}}</td>
          <td>{{two.decorate}}</td>
        </tr>
        <tr>
          <td>层高</td>
          <td>{{one.height}}</td>
          <td>{{two.height}}</td>
        </tr>
        <tr>
          <td>产权年限</td>
          <td>{{one.year}}</td>
          <td>{{one.year}}</td>
        </tr>
        <tr>
          <td>距地铁</td>
          <td>在售</td>
          <td>在售</td>
        </tr>
      </table>
      <h3>销售信息</h3>
      <table>
        <tr class="pri">
          <td>参考单价</td>
          <td>
            <p>约{{one.price}}元/m²</p>
            <button @click="pop('咨询楼盘底价',105,'详情页+咨询楼盘底价',one.id)">咨询底价</button>
          </td>
          <td>
            <p>约{{two.price}}元/m²</p>
            <button @click="pop('咨询楼盘底价',105,'详情页+咨询楼盘底价',two.id)">咨询底价</button>
          </td>
        </tr>
        <tr>
          <td>参考总价</td>
          <td>{{one.total_price}}</td>
          <td>{{two.total_price}}</td>
        </tr>
        <tr>
          <td>开盘时间</td>
          <td>{{one.open_time}}</td>
          <td>{{two.open_time}}</td>
        </tr>
        <tr>
          <td>交房时间</td>
          <td>{{one.give_time}}</td>
          <td>{{two.give_time}}</td>
        </tr>
        <tr class="shou">
          <td>开发商</td>
          <td>
            <p>{{one.builder}}</p>
          </td>
          <td>
            <p>{{two.builder}}</p>
          </td>
        </tr>

        <tr class="hui">
          <td>优惠信息</td>
          <td>在售</td>
          <td>在售</td>
        </tr>
      </table>
      <h3>建筑信息</h3>
      <table>
        <tr>
          <td>户型面积</td>
          <td>在售</td>
          <td>在售</td>
        </tr>
        <tr class="hu">
          <td>楼盘户型</td>
          <td>
            <span>1室、2室</span>
            <p class="more">
              更多户型
              <img src="~/assets/j-more.png" alt />
            </p>
          </td>
          <td>
            <span>1室、2室</span>
            <p class="more">
              更多户型
              <img src="~/assets/j-more.png" alt />
            </p>
          </td>
        </tr>
        <tr>
          <td>建筑面积</td>
          <td>{{one.built_area}}</td>
          <td>{{two.built_area}}</td>
        </tr>
        <tr>
          <td>物业费用</td>
          <td>{{one.property_fee}}</td>
          <td>{{two.property_fee}}</td>
        </tr>
        <tr>
          <td>容积率</td>
          <td>{{one.capacity_rate}}</td>
          <td>{{two.capacity_rate}}</td>
        </tr>
        <tr class="com">
          <td>物业公司</td>
          <td>{{one.property_company}}</td>
          <td>{{two.property_company}}</td>
        </tr>
        <tr>
          <td>绿化率</td>
          <td>{{one.green}}</td>
          <td>{{two.green}}</td>
        </tr>
        <tr>
          <td>车位情况</td>
          <td>{{one.parking}}</td>
          <td>{{two.parking}}</td>
        </tr>
      </table>
      <button class="btn" @click="pop('咨询详细楼盘信息',90,'详情页+咨询详细楼盘信息',one.id)">咨询详细楼盘信息</button>
    </div>
    <div class="other">
      <h3>猜你喜欢</h3>
      <template v-for="(item,key) in list">
        <nuxt-link :key="key" :to="'/'+jkl+'/content/'+item.id">
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
    "tan-view": tan,
  },
  async asyncData(context) {
    let id = context.params.id;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let other = context.query.other;
    let city = context.store.state.city;
    let [res,res1] = await Promise.all([
      context.$axios
        .get("/jy/base/compare", {
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
      context.$axios
        .get("/jy/phone/head/foot", {
          params: {
            city: city,
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
      list: res.recommends,
      one: res.data[0],
      two: res.data[1],
      phone:res.common.phone,
      title:res1.common.header.title,
      description:res1.common.header.description,
      keywords:res1.common.header.keywords
    };
  },
  head() {
    return {
      title: this.title || "家园新房-PK详情-"+this.one.name+'PK'+this.two.name,
      meta: [
        {
          name: "description",
          content: this.description || 
            "家园新房"
        },
        {
          name: "Keywords",
          content: this.keywords || "家园新房"
        }
      ]
    };
  },
  data() {
    return {
      navnum: 0,
      tan: false,
      typenum: 0,
      typebtn: 1,
      name: "",
      remark: "",
      id:'0'
    };
  },
  methods:{
    cli(e) {
      this.tan = e;
    },
    chang(data) {
      this.typenum = data.position;
      this.name = data.name;

      this.typebtn = 1;
      this.tan = true;
      this.remark = "楼盘PK页+预约看房";
    },
    godetail(id){
      this.$router.push('/'+this.jkl+'/content/'+id)
    },
    pop(name,position,txt,id){
      this.name = name
      this.typebtn = 1
      this.typenum = position
      this.tan = true
      this.remark=txt
      this.id = id
    },
  }
};
</script>
<style lang="less" scoped>
.top {
  display: flex;
  padding-bottom: 1.25rem;
  border-bottom: 0.03125rem solid #F3F3F3;
  position: fixed;
  top: 2.75rem;
  background-color: #fff;
  .left {
    width: 5.625rem;
    text-align: center;
    margin-right: 0.3125rem;
    p {
      color: #646566;
      font-size: 0.8125rem;
      margin-top: 3.375rem;
    }
    span {
      display: block;
      color: #121212;
      font-size: 0.9375rem;
      margin-top: 6.375rem;
    }
  }
  .center {
    width: 7.5rem;
    height: 10.8rem;
    border-radius: 0.25rem;
    box-shadow: 0px 0px 1.1875rem 0.0625rem rgba(0, 0, 0, 0.04);
    margin-right: 1.25rem;
    margin-top: 20px;
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
}
.message {
  margin-bottom: 2.1875rem;
  margin-top: 16.25rem;
  table {
    border-collapse: collapse;
    width: 100%;
    tr {
      height: 3.125rem;
      border-bottom: 0.03125rem solid #ededed;
      td {
        font-size: 0.8125rem;
        text-align: center;
        color: #323233;
        img {
          width: 0.75rem;
        }
        .type {
          color: #7d7e80;
          font-size: 0.6875rem;
          padding: 0.1875rem 0.375rem;
          background-color: #f5f5f5;
          border-radius: 0.125rem;
        }
        .type:nth-of-type(1) {
          margin-left: 0.5625rem;
          margin-right: 0.3125rem;
        }
      }
      td:nth-of-type(1) {
        width: 4.75rem;
        background-color: #f7f7f7;
        color: #7d7e80;
        font-size: 0.8125rem;
        text-align: left;
        padding-left: 0.875rem;
      }
      td:nth-of-type(2) {
        border-right: 0.03125rem solid #e6e6e6;
        width: 8rem;
        padding: 0 .25rem;
      }
    }
    .address {
      td:nth-of-type(2) {
        color: #323233;
        text-align: left;
        padding: 0 0.5625rem;
        width: 7rem;
        span {
          display: inline-block;
          width: 6.5rem;
          margin-left: 0.1rem;
        }
        img {
          margin-bottom: -0.0625rem;
          float: left;
        }
      }
      td:nth-of-type(3) {
        text-align: left;
        padding: 0 0.5625rem;
        span {
          display: inline-block;
          width: 6.5rem;
          margin-left: 0.1rem;
        }
        img {
          margin-bottom: -0.0625rem;
          float: left;
        }
      }
    }
    .shou {
      height: 3.75rem;
      td:nth-of-type(2) {
        text-align: center;
        p {
          width: 6.875rem;
          margin-left: 1.125rem;
        }
      }
      td:nth-of-type(3) {
        text-align: center;
        p {
          width: 6.875rem;
          margin-left: 1.125rem;
        }
      }
    }
    .pri {
      height: 4.375rem;
      td:nth-of-type(2) {
        p {
          color: #ff5454;
          margin-bottom: 0.5rem;
        }
        button {
          width: 4.375rem;
          height: 1.5rem;
          border-radius: 0.1875rem;
          text-align: center;
          line-height: 1.5rem;
          color: #fff;
          font-size: 0.75rem;
          border: 0;
          background: linear-gradient(270deg, #1fc365, #3fd6a6);
          box-shadow: 0px 0.15625rem 0.3125rem 0px rgba(44, 203, 128, 0.2);
        }
      }
      td:nth-of-type(3) {
        p {
          margin-bottom: 0.5rem;
          color: #ff5454;
        }
        button {
          width: 4.375rem;
          height: 1.5rem;
          border-radius: 0.1875rem;
          text-align: center;
          line-height: 1.5rem;
          color: #fff;
          font-size: 0.75rem;
          border: 0;
          background: linear-gradient(270deg, #1fc365, #3fd6a6);
          box-shadow: 0px 0.15625rem 0.3125rem 0px rgba(44, 203, 128, 0.2);
        }
      }
    }
    .hui {
      td:nth-of-type(2) {
        color:#FF5454;
      }
      td:nth-of-type(3) {
        color:#FF5454;
      }
    }
    .hu {
      td:nth-of-type(2) {
        p {
          color: #5f7891;
          font-size: 0.75rem;

          margin-left: 1.125rem;
        }
      }
      td:nth-of-type(3) {
        p {
          color: #5f7891;
          font-size: 0.75rem;

          margin-left: 1.125rem;
        }
      }
    }
    .com {
      td:nth-of-type(2) {
        padding: 0 0.25rem;
      }
      
    }
  }
  h3 {
    color: #121212;
    font-size: 0.9375rem;
    line-height: 3.75rem;
    font-weight: 400;
    padding-left: 0.875rem;
  }
  .btn {
    width: 18.75rem;
    height: 2.25rem;
    border-radius: 0.25rem;
    text-align: center;
    line-height: 2.25rem;
    margin-left: 2.34375rem;
    margin-top: 1.25rem;
    border: 0;
    background-color: #f1f8f4;
    color: #1fc365;
    font-weight: 0.9375rem;
    font-weight: bold;
  }
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
      }
      .pro-price {
        color: #7a7a7a;
        font-size: 0.75rem;
        margin-bottom: 0.1875rem;
        span {
          color:#FF5454;
          font-size: 0.9375rem;
        }
        i {
          font-style: normal;
          color:#FF5454;
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
</style>